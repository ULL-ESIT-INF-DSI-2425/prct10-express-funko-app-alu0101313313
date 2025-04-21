import fs from "fs";
import { Note, ResponseType } from "./types.js";

// const loadNotes = (
//   cb: (err: string | undefined, data: string | undefined) => void,
// ) => {
//   fs.readFile("public/notes/notes.json", (err, data) => {
//     if (err) {
//       cb(`Error reading notes file: ${err.message}`, undefined);
//     } else {
//       cb(undefined, data.toString());
//     }
//   });
// };

/**
 * A function that loads the notes of a file
 * @param path - The path to the file
 * @returns a promise about if the file was correctly read
 */
export const loadNotes = (path: string) => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(`Error reading notes file: ${err.message}`);
      } else {
        resolve(data.toString());
      }
    })
  });
}

// export const readNote = (
//   title: string,
//   cb: (err: string | undefined, res: ResponseType | undefined) => void,
// ) => {
//   loadNotes((err, data) => {
//     if (err) {
//       cb(err, undefined);
//     } else if (data) {
//       const notes: Note[] = JSON.parse(data);
//       const foundNote = notes.find((note) => note.title === title);
//       const response: ResponseType = {
//         type: "read",
//         success: foundNote ? true : false,
//         notes: foundNote ? [foundNote] : undefined,
//       };
//       cb(undefined, response);
//     }
//   });
// };


export const readNote = new Promise<ResponseType>((resolve, reject) => {
  return loadNotes("public/notes/notes.json")
  .catch((err) => {
    reject(err);
  })
  .then((data) => {
    const notes: Note[] = JSON.parse(data as string);
    const foundNote = notes.find((note) => note.title === "title");
    const response: ResponseType = {
      type: "read",
      success: foundNote ? true : false,
      notes: foundNote ? [foundNote] : undefined,
    };
    resolve(response);
  });
});

