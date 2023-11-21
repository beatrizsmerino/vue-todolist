/* eslint-disable no-console */
import {execa} from 'execa';
import * as emoji from 'node-emoji';
import chalk from 'chalk';
import * as fs from 'fs';

const iconArrows = emoji.get('fast_forward');
const iconRocket = emoji.get('rocket');
(async () => {
	try {
		await execa('git', [
			'checkout',
			'--orphan',
			'gh-pages'
		]);
		console.log(`${iconArrows} ${chalk.yellow('Building started...')}`);
		await execa('npm', [
			'run',
			'build'
		]);

		// Understand if it's dist or build folder
		const folderName = fs.existsSync('dist') ? 'dist' : 'build';
		await execa('git', [
			'--work-tree',
			folderName,
			'add',
			'--all'
		]);
		await execa('git', [
			'--work-tree',
			folderName,
			'commit',
			'-m',
			'gh-pages'
		]);
		console.log(`${iconArrows} ${chalk.yellow('Pushing to gh-pages...')}`);
		await execa('git', [
			'push',
			'origin',
			'HEAD:gh-pages',
			'--force'
		]);
		await execa('rm', [
			'-r',
			folderName
		]);
		await execa('git', [
			'checkout',
			'-f',
			'master'
		]);
		await execa('git', [
			'branch',
			'-D',
			'gh-pages'
		]);
		console.log(`${iconRocket} ${chalk.green('Successfully deployed')} ${iconRocket}`);
	} catch (e) {
		console.log(e.message);
		process.exit(1);
	}
})();
