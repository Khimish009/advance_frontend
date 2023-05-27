export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  buld: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}
