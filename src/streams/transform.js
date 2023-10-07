import { pipeline } from "node:stream/promises"
import { Transform } from "node:stream"
import { stdin, stdout } from "node:process"

const transform = async () => {
  const reverseTransformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.reverse() + "\n")
      callback()
    }
  })

  pipeline(
    stdin,
    reverseTransformStream,
    stdout,
  )
};

await transform();
