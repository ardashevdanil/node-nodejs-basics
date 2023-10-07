import { appendFile } from "node:fs/promises"
import { resolve } from "path"

const create = async () => {
  const resolvedPath = resolve("./src/fs/files/fresh.txt")

  try {
    await appendFile(resolvedPath, "I am fresh and young", { flag: "ax" })
  } catch {
    console.log("FS operation failed")
  }
};

await create();
