import { rename as fsRename } from "node:fs/promises"
import { resolve } from "path"

const rename = async () => {
  const resolvedFilePath = resolve("./src/fs/files/wrongFilename.txt")
  const resolvedDestPath = resolve("./src/fs/files/properFilename.md")

  try {
    await fsRename(resolvedFilePath, resolvedDestPath)
  } catch {
    console.log("FS operation failed")
  }
};

await rename();
