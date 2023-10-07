import { cpus } from "node:os"
import { Worker } from "node:worker_threads"
import { resolve } from "node:path"

const performCalculations = async () => {
  const workerPath = resolve("./src/wt/worker.js")

  try {
    const result = await Promise.allSettled(
      cpus().map((_cpu, idx) => {
        return new Promise((resolve, reject) => {
          const worker = new Worker(workerPath, {
            workerData: 10 + idx,
          })

          worker.on("message", resolve)
          worker.on("error", reject)
          worker.on("exit", reject)
        })
      })
    )

    console.log(result)
  } catch (err) {
    console.log(err)
  }
};

await performCalculations();
