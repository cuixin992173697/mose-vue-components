import { buildPackage } from './build/rollup.pkg.js'

export default [
  buildPackage('packages/components'),
  buildPackage('packages/utils'),
  buildPackage('packages/styles', 'index.scss', true),
]