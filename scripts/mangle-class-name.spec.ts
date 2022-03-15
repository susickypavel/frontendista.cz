// import { mangleClassName } from "./mangle-class-name.js";

// describe("mangleClassName", () => {
//   it("should generate unique values", () => {
//     const set = new Set();
//     const mangle = mangleClassName(false);

//     for (let i = 0; i < 5_000; i++) {
//       set.add(
//         mangle(
//           {
//             resourcePath: "",
//           },
//           "",
//           "",
//         ),
//       );
//     }

//     expect(set.size).toBe(5_000);
//   });

//   it("should memoize same input", () => {
//     const set = new Set();
//     const mangle = mangleClassName();

//     for (let i = 0; i < 5_000; i++) {
//       set.add(
//         mangle(
//           {
//             resourcePath: "",
//           },
//           "",
//           "",
//         ),
//       );
//     }

//     expect(set.size).toBe(1);
//   });
// });
