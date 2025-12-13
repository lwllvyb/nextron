import { Command } from 'commander'
import { devCommand } from './nextron-dev'
import { buildCommand } from './nextron-build'

const program = new Command()

program.name('nextron').description('⚡ Next.js + Electron ⚡').version('9.5.0')

program.addCommand(devCommand, { isDefault: true })
program.addCommand(buildCommand)

program.parse(process.argv)

// import path from 'path'
// import { execa } from 'execa'

// let cmd = process.argv[2]
// let args: string[] = []

// const nodeArgs: string[] = []
// const inspectArg = process.argv.find((arg) => arg.includes('--inspect'))

// if (inspectArg) {
//   nodeArgs.push(inspectArg)
// }

// if (commands.has(cmd)) {
//   args = process.argv.slice(3)
// } else {
//   cmd = defaultCommand
//   args = process.argv.slice(2)
// }

// const defaultEnv = cmd === 'dev' ? 'development' : 'production'
// process.env.NODE_ENV = process.env.NODE_ENV || defaultEnv

// const cli = path.join(import.meta.dirname, `nextron-${cmd}`)

// const startProcess = () => {
//   const proc = execa('node', [...nodeArgs, cli, ...args], { stdio: 'inherit' })
//   proc.on('close', (code: number, signal: string) => {
//     if (code !== null) {
//       process.exit(code)
//     }
//     if (signal) {
//       if (signal === 'SIGKILL') {
//         process.exit(137)
//       }
//       process.exit(1)
//     }
//     process.exit(0)
//   })
//   proc.on('error', (err) => {
//     console.error(err)
//     process.exit(1)
//   })
//   return proc
// }

// const proc = startProcess()

// const wrapper = () => {
//   if (proc) {
//     proc.kill()
//   }
// }
// process.on('SIGINT', wrapper)
// process.on('SIGTERM', wrapper)
// process.on('exit', wrapper)
