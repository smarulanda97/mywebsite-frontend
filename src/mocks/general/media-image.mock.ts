import { faker } from "@faker-js/faker";

import { FieldMediaImage } from "@/models";

const alt = faker.random.words(3);
const size = faker.datatype.number({ min: 100, max: 800 });
const image = faker.image.abstract(size, size);

export const mediaImage: FieldMediaImage = {
  id: faker.datatype.uuid(),
  type: "media--image",
  image: {
    filename: "placeholder.png",
    alt: alt,
    title: alt,
    width: size,
    height: size,
    url: image,
    styles: {
      large: image,
    },
  },
};
