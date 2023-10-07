import { spawn } from "node:child_process"
import { resolve } from "node:path"
import { pipeline } from "node:stream/promises"
import { stdin, stdout } from "node:process"

const spawnChildProcess = async (args) => {
  const scriptPath = resolve("./src/cp/files/script.js")
  const cp = spawn("node", [scriptPath, ...args])

  await pipeline(
    stdin,
    cp.stdin,
    cp.stdout,
    stdout,
  )
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["foo", "bar"]);
