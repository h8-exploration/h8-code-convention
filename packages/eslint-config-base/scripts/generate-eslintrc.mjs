#! /usr/bin/env node

import * as fs from 'node:fs/promises'
import * as path from 'node:path';
import * as process from 'node:process';
import packageJson from '../package.json'  assert { type: "json" };


const FILE_NAME = ".eslintrc.json"
const FILE_TEMPLATE = `{
  "extends": "${packageJson.name}"
}`
const ESLINT_RC_FILES = [
  '.eslintrc.js',
  '.eslintrc.cjs',
  '.eslintrc.yaml',
  '.eslintrc.yml',
  '.eslintrc.json',
  '.eslintrc',
].map(getFileLocation)

try {
  log("Check if any eslint config exists")

  const result = await Promise.allSettled(ESLINT_RC_FILES.map(fs.access));
  const fileExists = result.find(r => r.status === "fulfilled")
  const eslintInPackageJson = 'eslintConfig' in packageJson

  if (fileExists || eslintInPackageJson) {
    log("ESLint config found, all set!")
    process.exit()
  }

  log("ESLint config not found")
  log("Generate new .eslintrc.json")
  log(process.env.PWD)

  const data = new Uint8Array(Buffer.from(FILE_TEMPLATE));
  const fileLocation = getFileLocation(FILE_NAME)
  await fs.writeFile(fileLocation, data)

  log(".eslintrc.json generated at", fileLocation)
} catch (error) {
  console.log(error)
}



function log(str) {
  console.log(packageJson.name, ">>", str)
}
function getFileLocation(fileName) {
  return path.join(process.cwd(), '../../..', fileName)
}