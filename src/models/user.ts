import BaseRecord from "./basemodel";

class User extends BaseRecord {
  name: string;
  email: string;
  constructor(
    name: string,
    email: string,
    ...p: ConstructorParameters<typeof BaseRecord>
  ) {
    super(...p);
    this.name = name;
    this.email = email;
  }
}

export default User;
