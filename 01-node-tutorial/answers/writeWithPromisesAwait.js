const { writeFile, readFile } = require("fs").promises; 

const writer = async () => {
  try {
    result = await writeFile(
      './temporary/temp.txt',
      "line 1\nline 2\nline 3"
    )
  } catch(err) {
    console.log("An error happened: ", err)
  }
}

const reader = async () => {
  try {
    result = await readFile(
      './temporary/temp.txt',
      "utf8"
    )
    console.log(result)
  } catch(err) {
    console.log("An error happened: ", err)
  }
}

const readWrite = async () => {
  try {
    await writer()
    await reader()
  } catch(err) {
    console.log("An error happened: ", err)
  }
}

readWrite()