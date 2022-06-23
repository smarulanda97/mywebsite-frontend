import { faker } from "@faker-js/faker";

import { ParagraphProjectsItem } from "@/models";
import { mediaImage } from "@/src/mocks/general/media-image.mock";

export const projectsItem: ParagraphProjectsItem = {
  id: faker.datatype.uuid(),
  type: "paragraph--projects_item",
  mediaImage: mediaImage,
  title: {
    processed: faker.lorem.words(4),
  },
  subtitle: faker.word.adjective(3),
  description: {
    processed: faker.lorem.lines(5),
  },
  link: {
    url: faker.internet.url(),
  },
  company: {
    id: faker.datatype.uuid(),
    type: "taxonomy_term--companies",
    name: faker.lorem.word(1),
    description: null,
    // @ts-ignore
    link: {
      url: faker.internet.url(),
    },
  },
};
