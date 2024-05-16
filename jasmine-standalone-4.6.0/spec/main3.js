class User {
	firstName;
	lastName;
	middleName;

	constructor(data = {}){
		this.firstName = data.firstName;
		this.lastName = data.lastName || '';
		this.middleName = data.middleName;
	}
}

describe(`${User.name} Class`, () => {
	it('first name defaults to empty', () => {
		const data = { firstName: null};
		const model = new User(data);
		expect(model.firstName).toBe('');
	});
});