const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
const isEnvDevelopment = env === 'development';
const isEnvTest = env === 'test';

function getOption(value, defaultValue) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }

    return value;
}

module.exports = function (context, options = {}) {
    const envOptions = getOption(options.env, {});
    const runtimeOptions = getOption(options.runtime, {});
    const isTypeScriptEnabled = getOption(options.typescript, false);
    const reactOptions = getOption(options.react, {});

    const presets = [
        [require.resolve('@babel/preset-env'), envOptions],
        [require.resolve('@babel/preset-react'), Object.assign({}, reactOptions, {
            development: isEnvDevelopment || isEnvTest,
            useBuiltIns: true,
        })],
        isTypeScriptEnabled && [require.resolve('@babel/preset-typescript')],
    ].filter(Boolean)

    const plugins = [
        [require.resolve('@babel/plugin-transform-runtime'), runtimeOptions],
        [require.resolve('@babel/plugin-proposal-class-properties')],
        [require.resolve('@babel/plugin-syntax-top-level-await')],
    ]

    return {
        presets,
        plugins,
    };
};