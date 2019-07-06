import chalk from 'chalk';

const styles = {
  error: chalk.bold.red,
  info: chalk.bold.blue,
  log: chalk.bold,
  success: chalk.bold.green,
  warn: chalk.bold.yellow
};

export default {
  log(message, ...args) {
    console.log(styles.log(` 💡  ${message}`, ...args));
  },

  info(message, ...args) {
    console.log(styles.info(` ℹ️  ${message}`, ...args));
  },

  error(err, stack = false, ...args) {
    console.log(styles.error(` ❗  ${err}`, ...args));
    if (stack && err.stack) console.log(styles.error(` ❗ ${err.stack}`, ...args));
  },

  warn(message, ...args) {
    console.log(styles.warn(` ⚠️  ${message}`, ...args));
  },

  success(message, ...args) {
    console.log(styles.success(` ✅  ${message}`, ...args));
  }
};
