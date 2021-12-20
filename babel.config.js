module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.x",
        targets: { node: "current" },
      },
    ],
  ],
  plugins: ["transform-class-properties"],
};
