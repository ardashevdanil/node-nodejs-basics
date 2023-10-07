import { createReadStream } from "node:fs"
import { pipeline } from "node:stream/promises"
import { resolve } from "path"
import { stdout } from "node:process"

const read = async () => {
  const input = createReadStream(resolve("./src/streams/files/fileToRead.txt"))

  await pipeline(
    input,
    stdout,
  )
};

await read();
