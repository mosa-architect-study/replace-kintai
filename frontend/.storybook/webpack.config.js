const merge = require("webpack-merge")
const base = require("../webpack.config.base")

module.exports = ({ config }) => {
    const merged =  merge.smartStrategy({
        'module.rules': "replace"
    })(config,base);
    return merged;
}