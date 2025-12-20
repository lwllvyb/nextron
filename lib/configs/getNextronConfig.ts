import fs from 'fs'
import path from 'path'
import { loadScriptFile } from './typescriptLoader'
import type { Configuration } from '../../types'

const cwd = process.cwd()

const supportedConfigs = [
  'nextron.config.ts',
  'nextron.config.js',
  'nextron.config.mts',
  'nextron.config.mjs',
]

export const getNextronConfig = async (): Promise<Configuration> => {
  for (const config of supportedConfigs) {
    if (fs.existsSync(path.join(cwd, config))) {
      return await loadScriptFile(path.join(cwd, config))
    }
  }

  return {}
}
