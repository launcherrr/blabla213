import chalk from 'chalk'

/**
 * Logger utility for logging messages with timestamps and log levels.
 */
export class Logger {
  static info(message: string): void {
    console.log(`${chalk.blue('INFO')} [${new Date().toISOString()}]: ${message}`)
  }

  static warn(message: string): void {
    console.warn(`${chalk.yellow('WARN')} [${new Date().toISOString()}]: ${message}`)
  }

  static error(message: string): void {
    console.error(`${chalk.red('ERROR')} [${new Date().toISOString()}]: ${message}`)
  }

  static debug(message: string): void {
    console.debug(`${chalk.green('DEBUG')} [${new Date().toISOString()}]: ${message}`)
  }
}
