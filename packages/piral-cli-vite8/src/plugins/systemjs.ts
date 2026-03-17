import { transformAsync } from '@babel/core';
import babelSystemjs from '@babel/plugin-transform-modules-systemjs';
import babelDynamicImport from '@babel/plugin-transform-dynamic-import';
import type { Plugin } from 'vite';

const plugin: Plugin = {
  name: 'transform-chunk-systemjs',
  async renderChunk(code, _chunk) {
    const result = await transformAsync(code, {
      babelrc: false,
      configFile: false,
      sourceMaps: true,
      plugins: [babelDynamicImport, babelSystemjs],
    });
    return { code: result.code, map: result.map };
  },
};

export default plugin;
