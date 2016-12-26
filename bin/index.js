#!/usr/bin/env node

const shell = require('shelljs');

const INPUT_DIR = process.argv[2] || 'src';
const OUTPUT_DIR = process.argv[3] || 'lib';

shell.rm('-rf', OUTPUT_DIR);

const babelExec = 'node_modules/babel-cli/bin/babel.js';
const presets = 'react,latest';

shell.exec(`${babelExec} ${INPUT_DIR} --out-dir ${OUTPUT_DIR} --presets ${presets} --copy-files`);
