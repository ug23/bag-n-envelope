import { Main } from "../src";

describe("Main", () => {
  describe("openBag", () => {
    it("バッグの中身が返ってくる", () => {
      const main = new Main();
      expect(main.openBag()).toEqual([
        "document in bag",
        "John Doe",
        "too important content...",
      ]);
    });
  });
  describe("openEnvelope", () => {
    it("封筒の中身が返ってくる", () => {
      const main = new Main();
      expect(main.openEnvelope()).toEqual([
        "document in envelope",
        "too important contract...",
        "John Doe",
        "Jane Doe",
      ]);
    });
  });
});
