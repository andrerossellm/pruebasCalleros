function insertDashes(str) {
  // write code here
}

/**
 Test Suite
*/
describe("insertDashes()", () => {
  it("insert dashes in between chars", () => {
    // arrange
    const str = "aba caba";

    // act
    const result = insertDashes(str);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe("a-b-a c-a-b-a");
  });
});
