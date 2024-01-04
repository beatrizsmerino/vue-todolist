module.exports.readVersion = contents => contents.match(/"(?<version>.*)"/u).groups.version;

module.exports.writeVersion = (_, version) => `ThisBuild / version := "${version}"\n`;
