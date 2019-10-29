const merge = require("webpack-merge")
const base = require("../webpack.config.base")

module.exports = ({ config }) => merge(config,base);