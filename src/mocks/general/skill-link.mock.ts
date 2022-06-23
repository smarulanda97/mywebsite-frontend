import { mediaImage } from "@/src/mocks/general/media-image.mock";
import { faker } from "@faker-js/faker";

export const skillLink = {
  id: faker.datatype.uuid(),
  type: "paragraph--skill_link",
  link: {
    url: faker.internet.url(),
    title: faker.lorem.words(2),
  },
  mediaImage: mediaImage,
};
