import _ from "lodash";

// Advent of Code - Day 7 - Part One

export function part1(input) {
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

  let result = 0;

  function recursiveFunction(collection) {
    let count = 0;
    _.each(collection, function (element) {
      if (typeof element === "number") {
        // console.log("number", element);
        count += element
      } else if (typeof element === "object") {
        // console.log("folder", element);
        count += recursiveFunction(element);
      } else {
        return
      }
    });
    if (count <= 100000) {
      result += count
    }
    return count
  };

  recursiveFunction(fileTree)

  return result;
}
