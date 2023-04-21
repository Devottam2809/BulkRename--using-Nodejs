function rename() {
  const fs = require("fs");
  const replaceThis = "code_2";
  const replaceWith = "newCode_3";
  const preview = false;
  try {
    fs.readdir("data", (err, data) => {
      //console.log(data);
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
        if (!preview) {
          fs.rename("data/" + item, newFile, () => {
            console.log("Rename Success");
          });
        } else {
          if (" data/ " + item !== newFile)
            console.log(" data/ " + item + " will be renamed to " + newFile);
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
}
rename()
