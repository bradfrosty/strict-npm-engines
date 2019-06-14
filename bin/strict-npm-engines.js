#!/usr/bin/env node

const chalk = require('chalk')
const { strictNpmEngines } = require('../')

strictNpmEngines()
  .then(function handleSuccess () {
    process.exit(0)
  })
  .catch(function handleError (error) {
    process.stderr.write(chalk.white.bgRed.bold(error.message) + '\n')
    process.exit(1)
  })
