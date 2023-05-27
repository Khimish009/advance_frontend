import path from "path";
import webpack from "webpack";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

const mode = "development";
const isDev = mode === "development";

const paths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  buld: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
