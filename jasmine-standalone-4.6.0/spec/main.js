describe(`${User.name} Class`, () => {
  let model;

  beforeEach(() => {
    model = new User();
  });

  describe("additional matchers testing area", () => {
    it("has my first name", () => {
      //arrange
      const firstName = "Dylan";
      const lastName = "Israel";

      // act
      model = new User({ firstName, lastName });

      //assert
      expect(model.fullName).toMatch(/Dylan/);
    });
  });
});
