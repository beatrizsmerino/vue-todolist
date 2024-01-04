#!/bin/bash

# Check if there are uncommitted changes in the working directory
if ! git diff-index --quiet HEAD --; then
    echo "Error: You have uncommitted changes. Please commit or stash them."
    exit 1
fi

# Create temporal branch name to store the changes
timestamp=$(date +%Y%m%d%H%M%S)
branchTypeTemp="release"
branchNameTemp="$branchTypeTemp/$timestamp"

# Create and move to new branch
git checkout -b "$branchNameTemp"

# Run standard-version to update the changelog and the version
npm run changelog:update

# Get the new version created by standard-version
versionNew=$(node -p "require('./package.json').version")

# Function to extract major, minor, and patch numbers from a version
extract_version_parts() {
    IFS='.' read -ra PARTS <<< "$1"
    echo "${PARTS[@]}"
}

# Extract parts of the old and new versions
read -ra currentParts <<< $(extract_version_parts $versionCurrent)
read -ra newParts <<< $(extract_version_parts $versionNew)

# Determine the branch type based on version changes
if [ "${currentParts[0]}" != "${newParts[0]}" ] || [ "${currentParts[1]}" != "${newParts[1]}" ]; then
    branchType="release"
else
    branchType="hotfix"
fi

# Define the branch name based on the branch type and new version
branchName="$branchType/$versionNew"

# Check if the branch already exists
if git show-ref --verify --quiet "refs/heads/$branchName"; then
    # Print error message
    echo "Error: Branch '$branchName' already exists."
    # Checkout develop branch
    git checkout develop
    # Delete the tag created by standard-version
    git tag -d "$versionNew"
    # Delete the branch if it exists
    git branch -D "$branchNameTemp"
    # Exit with error
    exit 1
fi

# Rename the current branch with the branch type and the new version
git branch -m "$branchName"

# Function to perform git merge and handle errors
merge_branch() {
    git checkout $1
    git merge --no-ff "$branchName" -m "Merge branch '$branchName' into $1"
    if [ $? -ne 0 ]; then
        echo "Merge failed, please resolve conflicts manually."
        exit 1
    fi
}

# Merge into master
merge_branch master

# Push master and tags to remote
git push origin master --tags

# Merge into develop
merge_branch develop

# Push develop to remote
git push origin develop

# Delete the release/hotfix branch
git branch -D "$branchName"

# Checkout to develop or master based on the branch type
if [ "$branchType" = "release" ]; then
    git checkout develop
elif [ "$branchType" = "hotfix" ]; then
    git checkout master
fi
