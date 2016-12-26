#!/usr/bin/env node

const rimrafSync = require('rimraf').sync;
const exec = require('child_process').exec;

const INPUT_DIR = process.argv[2] || 'src';
const OUTPUT_DIR = process.argv[3] || 'lib';

rimrafSync(OUTPUT_DIR);

const babelExec = 'node_modules/babel-cli/bin/babel.js';
const presets = 'react,latest';

const cmd = `${babelExec} ${INPUT_DIR} --out-dir ${OUTPUT_DIR} --presets ${presets} --copy-files`;

exec(cmd, function(error, stdout, stderr) {
  console.log(stdout);
});
