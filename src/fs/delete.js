import { rm } from "node:fs/promises"
import { resolve } from "path"

const remove = async () => {
  const resolvedPath = resolve("./src/fs/files/fileToRemove.txt")

  try {
    await rm(resolvedPath)
  } catch {
    console.log("FS operation failed")
  }
};

await remove();
