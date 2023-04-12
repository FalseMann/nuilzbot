import { describe, expect, it } from "vitest";
import { main } from ".";

// The two tests marked with concurrent will be run in parallel
describe("index", () => {
  it("executes", async () => {
    expect(main()).toBe("Hello World");
  });
});
