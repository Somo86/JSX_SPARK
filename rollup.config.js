import pkg from './package.json';

export default [{
    input: 'src/index.js',
    output: {
        name: 'spark_JSX',
        file: pkg.browser,
        format: 'iife'
    }
},
{
    input: 'src/index.js',
    output: {
      file: pkg.module,
      format: 'esm'
    }
}];