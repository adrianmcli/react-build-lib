#!/usr/bin/env node

const program = require('commander');
const rimrafSync = require('rimraf').sync;
const exec = require('child_process').exec;

// get inputs
program
  .version('0.0.1')
  .option('-x, --stage-0', 'Turn on stage-0 for experimental features.')
  .parse(process.argv);

const inputDir = program.args[0] || 'src';
const outputDir = program.args[1] || 'lib';

// wipe directory
rimrafSync(outputDir);

// build command string
const babelExec = 'node_modules/babel-cli/bin/babel.js';
const presets = program.stage0 ? 'react,latest,stage-0' : 'react,latest,stage-3';

const cmd = `${babelExec} ${inputDir} --out-dir ${outputDir} --presets ${presets} --copy-files`;

// begin compilation by executing command string
exec(cmd, function(error, stdout, stderr) {
  if (error) {
    console.log(error);
  }
  console.log(stdout);
});
