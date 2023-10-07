import { createReadStream } from "node:fs"
import { createHash } from "node:crypto"
import { pipeline } from "node:stream/promises"
import { resolve } from "node:path"

const calculateHash = async () => {
  try {
    const resolvedPath = resolve("./src/hash/files/fileToCalculateHashFor.txt")
    const input = createReadStream(resolvedPath)
    const hash = createHash("sha256")

    await pipeline(
      input,
      hash,
      process.stdout,
    )
  } catch (err) {
    console.log(err)
  }
};

await calculateHash();
