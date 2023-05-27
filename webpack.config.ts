import path from "path";
import webpack from "webpack";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

const mode = "development";
const isDev = mode === "development";
const PORT = 3000;

const paths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  buld: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port: PORT,
});

export default config;
