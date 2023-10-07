import { argv } from "node:process"

const parseArgs = () => {
  const result = argv.reduce((acc, arg, idx) => {
    if (arg.startsWith("--")) {
      return acc + `${arg.slice(2)} is ${argv[idx + 1]}, `
    } else {
      return acc
    }
  }, "")

  console.log(result)
};

parseArgs();
