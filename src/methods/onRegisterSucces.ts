import { User } from "../classes/user";

export const onRegisterSucces = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  id: number = 4
) => {
  const newUser = new User(id, firstName, lastName, email, password);

  console.log(newUser);
};
