import { fakerEN as faker } from '@faker-js/faker';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { GenderType } from '../enums';

const generateUserList = () => {
  let user = {} as CreateUserDto;
  const users: CreateUserDto[] = [];

  const quantity = 100;

  for (let i = 0; i < quantity; i++) {
    user = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 90 }),
      gender: faker.helpers.arrayElement(Object.values(GenderType)),
      hasIssues: faker.datatype.boolean(),
    };
    users.push(user);
  }
  return users;
};

export default generateUserList;
