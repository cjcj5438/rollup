import babel from 'rollup-plugin-babel';
export default {
    input: 'src/main.js',
    output: {
        file: 'build/bundle.js',
        format: 'amd'
    },
    sourceMap:true,
    plugins: [ babel() ]
};