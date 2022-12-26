import _ from "lodash";

// Advent of Code - Day 7 - Part Two

export function part2(input) {
  let text = input.split(/\r?\n|\r|\n/g);

  const fileTree = {
    "/": {}
  };

  const currentPath = [];

  for (const row of text) {
    const line = row.split(" ");
    if (line.includes("$")) {             //  if "$":   (command)
      if (line.includes("cd")) {          //     if "cd":   (change directory)
        if (line[2] === "..") {           //         if "..":
          currentPath.pop();              //             remove folder from current path
        } else {                          //         else:
          currentPath.push(line[2]);      //             add folder from current path
        }
      } else if (line.includes("ls")) {   //  else if "ls":   (list files)
        continue                          //     do nothing
      }
    } else if (line.includes("dir")) {                                            //  if contains folder:
      _.set(fileTree, `${currentPath.join(".")}.${line[1]}`, {})                  //     add folder to current path
    } else {                                                                      //  else if contains file:
      _.set(fileTree, `${currentPath.join(".")}["${line[1]}"]`, Number(line[0]))  //     add file to current path
    }
  }

  const maxSpace = 70000000;
  const spaceRequiredForUpdate = 30000000;
  const currentFileSystemSpace = 50216456;

  const currentFreeSpace = maxSpace - currentFileSystemSpace;
  const spaceToFreeUp = spaceRequiredForUpdate - currentFreeSpace;

  let resultArray = []

  function recursiveFunction(collection) {
    let count = 0;
    _.each(collection, function (element) {
      if (typeof element === "number") {
        count += element
      } else if (typeof element === "object") {
        count += recursiveFunction(element);
      } else {
        return
      }
    });
    if (count > spaceToFreeUp) {
      resultArray.push(count)
    }
    return count
  };

  recursiveFunction(fileTree)

  let result = Math.min(...resultArray)

  return result;
}
