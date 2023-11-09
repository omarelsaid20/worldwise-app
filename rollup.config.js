// rollup.config.js
import babel from "@rollup/plugin-babel";

export default {
  // ... other configuration options
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    // ... other plugins
  ],
};
