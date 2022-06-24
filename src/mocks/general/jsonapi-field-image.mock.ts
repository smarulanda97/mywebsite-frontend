import { faker } from "@faker-js/faker";

import { JsonApiFieldImage } from "@/models";

export function mockJsonApiFieldImage(): JsonApiFieldImage {
  return {
    id: faker.datatype.uuid(),
    type: "media--image",
    filename: "placeholder.png",
    uri: {
      url: faker.image.imageUrl(),
    },
    resourceIdObjMeta: {
      alt: faker.lorem.words(3),
      title: faker.lorem.words(3),
      width: faker.datatype.number({ max: 500, min: 100 }),
      height: faker.datatype.number({ max: 500, min: 100 }),
    },
  };
}
