import * as actions from './actions.js';
import type { CliPlugin } from 'piral-cli';

const plugin: CliPlugin = (cli) => {
  cli.withBundler('vite8', actions);
};

module.exports = plugin;
