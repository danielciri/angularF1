import { Config } from '@stencil/core';

export const config: Config = {
  bundles: [
    { components: ['btn-races-component'] },
    { components: ['driver-card-ranking-races'] },
    { components: ['driver-card-all-races'] },
    
  ],
  namespace: 'f1-championship-web-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      buildDir: 'stencil-components/build',
      serviceWorker: null, // disable service workers
    },
  ],
};
