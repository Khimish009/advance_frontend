import webpack from "webpack";
import buildPlugings from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import { BuildOptions } from "./types/config";

export default function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.buld,
      clean: true,
    },
    plugins: buildPlugings(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
