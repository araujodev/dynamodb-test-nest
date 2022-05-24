import { User } from 'src/users/models/user.model';

const buildUsers = (items: any[]) => {
  const userCollection = items.map((item) => {
    const user = new User();
    user.id = item.SK.S;
    user.name = item.name.S;
    user.lastName = item.lastName.S;
    user.email = item.email.S;
    user.age = Number(item.age.N);
    return user;
  });

  return userCollection;
};

export default buildUsers;
