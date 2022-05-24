import { User } from 'src/users/models/user.model';

const buildOneUser = (item: any) => {
  const user = new User();
  user.id = item.SK;
  user.email = item.email;
  user.name = item.name;
  user.lastName = item.lastName;
  user.age = item.age;
  return user;
};

export default buildOneUser;
