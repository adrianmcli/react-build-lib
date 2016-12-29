#!/usr/bin/env node

const program = require('commander');
const rimrafSync = require('rimraf').sync;
const exec = require('child_process').exec;

// get inputs
program
  .version('0.0.1')
  .option('-b, --stage-0', 'Turn on stage-0 compilation.')
  .parse(process.argv);

const inputDir = program.args[0] || 'src';
const outputDir = program.args[1] || 'lib';

rimrafSync(outputDir);

const babelExec = 'node_modules/babel-cli/bin/babel.js';
const presets = program.stage0 ? 'react,latest,stage-0' : 'react,latest,stage-3';

const cmd = `${babelExec} ${inputDir} --out-dir ${outputDir} --presets ${presets} --copy-files`;

exec(cmd, function(error, stdout, stderr) {
  if (error) {
    console.log(error);
  }
  console.log(stdout);
});
