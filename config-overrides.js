const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc-helpers': 'src/hoc-helpers',
        '@hooks': 'src/hooks',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
        '@services': 'src/services',
    })(config);

    return config;
}
