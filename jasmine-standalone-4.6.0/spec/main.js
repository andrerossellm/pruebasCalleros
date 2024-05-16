describe(`${User.name} Class`, () => {
  it("exists", () => {
    // assert
    expect(User).toBeDefined();
  });

  let model;

  beforeEach(() => {
    model = new User();
  });

  describe("additional matchers examples", () => {
    // toBeDefined(), toEqual()
  });
});
