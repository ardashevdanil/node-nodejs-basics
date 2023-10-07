import { createGunzip } from "node:zlib"
import { createReadStream, createWriteStream } from "node:fs"
import { pipeline } from "node:stream/promises"
import { resolve } from "node:path"

const decompress = async () => {
  const source = createReadStream(resolve("./src/zip/files/archive.gz"))
  const gunzip = createGunzip()
  const dest = createWriteStream(resolve("./src/zip/files/fileToCompress1.txt"))

  await pipeline(
    source,
    gunzip,
    dest,
  )
};

await decompress();
