import { readdir } from "node:fs/promises"
import { resolve } from "path"

const list = async () => {
  const resolvedDirPath = resolve("./src/fs/files")

  try {
    console.log(
      await readdir(resolvedDirPath)
    )
  } catch {
    console.log("FS operation failed")
  }
};

await list();
