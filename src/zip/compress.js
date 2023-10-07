import { createGzip } from "node:zlib"
import { createReadStream, createWriteStream } from "node:fs"
import { pipeline } from "node:stream/promises"
import { resolve } from "node:path"

const compress = async () => {
  const gzip = createGzip()
  const source = createReadStream(resolve("./src/zip/files/fileToCompress.txt"))
  const dest = createWriteStream(resolve("./src/zip/files/archive.gz"))

  await pipeline(
    source,
    gzip,
    dest,
  )
};

await compress();
