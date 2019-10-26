const mainConfig = require("../webpack.config");

module.exports = ({ config }) => {
    config.module.rules.push(...mainConfig.module.rules)
    config.resolve.extensions = mainConfig.resolve.extensions;
    config.resolve.alias = mainConfig.resolve.alias;
    return config
}