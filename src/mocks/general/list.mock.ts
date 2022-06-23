import { faker } from "@faker-js/faker";

export const list = [
  {
    id: faker.datatype.uuid(),
    text: faker.lorem.words(2),
  },
  {
    id: faker.datatype.uuid(),
    text: faker.lorem.words(2),
  },
];
