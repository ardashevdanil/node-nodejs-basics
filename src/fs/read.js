import { open } from "node:fs/promises"
import { pipeline } from "node:stream/promises"
import { resolve } from "path"

const read = async () => {
  const resolvedPath = resolve("./src/fs/files/fileToRead.txt")

  try {
    const fd = await open(resolvedPath)

    await pipeline(
      fd.createReadStream(),
      process.stdout
    )
  } catch {
    console.log("FS operation failed")
  }
};

await read();
