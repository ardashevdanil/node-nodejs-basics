import { createWriteStream } from "node:fs"
import { pipeline } from "node:stream/promises"
import { resolve } from "path"
import { stdin } from "node:process"

const write = async () => {
  const dest = createWriteStream(resolve("./src/streams/files/fileToWrite.txt"))

  await pipeline(
    stdin,
    dest,
  )
};

await write();
