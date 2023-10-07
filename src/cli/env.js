import { env } from "node:process"

const parseEnv = () => {
  for (const key in env) {
    if (key.includes("RSS_")) {
      console.log(env[key])
    }
  }
};

parseEnv();
