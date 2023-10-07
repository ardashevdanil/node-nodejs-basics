import { copyFile, readdir, mkdir } from "node:fs/promises"
import { resolve } from "path"

const copy = async () => {
  const resolvedDirPath = resolve("./src/fs/files")
  const resolvedDirDest = resolve("./src/fs/files_copy")

  try {
    await mkdir(resolvedDirDest)

    const dir = await readdir(resolvedDirPath)

    for (const filePath of dir) {
      const resolvedFilePath = resolve(resolvedDirPath, filePath)
      const resolvedFileDest = resolve(resolvedDirDest, filePath)

      await copyFile(resolvedFilePath, resolvedFileDest)
    }
  } catch () {
    console.log("FS operation failed")
  }
};

await copy();
