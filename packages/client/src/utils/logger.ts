export default class logger {
  static log(...args: unknown[]) {
    console.log(...args) // eslint-disable-line no-console
  }

  static error(...args: unknown[]) {
    console.error(...args) // eslint-disable-line no-console
  }
}
