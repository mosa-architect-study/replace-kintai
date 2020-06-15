// モジュールの解決などはこちらに記載（storybookにも適用させるため）

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const file = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        loader: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules"],
    alias: {
      "@": file("src"),
    },
  },
};
