const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const path = require("path");

const mode = process.argv[2];

if (!mode) {
  console.log("-- 请传入 mode ");
} else {
  loadEnv(mode);
  loadEnv();
}

function loadEnv(mode) {
  const envPath = path.resolve(process.cwd(), `.env${mode ? `.${mode}` : ``}`);
  const load = envPath => {
    try {
      const env = dotenv.config({ path: envPath });
      // dotenvExpand(env);
    } catch (err) {
      // only ignore error if file is not found
      if (err.toString().indexOf("ENOENT") < 0) {
        console.error(err);
      }
    }
  };
  load(envPath);
}
