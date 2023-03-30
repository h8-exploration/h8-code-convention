#! /usr/bin/env node

import * as fs from 'node:fs/promises'
import * as path from 'node:path';
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
];

console.log(packageJson.name, ">> Check if any eslint config exists")
const result = await Promise.allSettled(ESLINT_RC_FILES.map(fs.access));
const fileExists = result.find(r => r.status === "fulfilled")
const eslintInPackageJson = 'eslintConfig' in packageJson

if (!fileExists && !eslintInPackageJson) {
  console.log(packageJson.name, ">> ESLint config not found!")
  console.log(packageJson.name, ">> Generate new .eslintrc.json")
  const data = new Uint8Array(Buffer.from(FILE_TEMPLATE));
  const fileLocation = path.join(process.cwd(), FILE_NAME)
  await fs.writeFile(fileLocation, data)
  console.log(packageJson.name, ">> .eslintrc.json generated at", fileLocation)
}
