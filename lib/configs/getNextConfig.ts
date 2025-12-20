import fs from 'fs'
import path from 'path'
import { getNextronConfig } from './getNextronConfig'
import { loadScriptFile } from './typescriptLoader'

const cwd = process.cwd()

const supportedConfigs = [
  'next.config.ts',
  'next.config.js',
  'next.config.mts',
  'next.config.mjs',
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNextConfig = async (): Promise<any> => {
  const rendererSrcDir = (await getNextronConfig()).rendererSrcDir || 'renderer'

  let nextConfig = {}

  for (const config of supportedConfigs) {
    const configPath = path.join(cwd, rendererSrcDir, config)
    if (fs.existsSync(configPath)) {
      nextConfig = await loadScriptFile(configPath)
      break
    }
  }

  return nextConfig
}
