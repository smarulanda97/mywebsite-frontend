import { faker } from "@faker-js/faker";

import { JsonApiFieldMediaImage } from "@/models";
import { mockJsonApiFieldImage } from "./jsonapi-field-image.mock";

export function mockJsonApiMediaImage(): JsonApiFieldMediaImage {
  return {
    drupal_internal__mid: "",
    drupal_internal__vid: faker.datatype.number({ min: 0, max: 1000 }).toString(),
    id: faker.datatype.uuid(),
    type: "media--image",
    name: "placeholder.png",
    status: faker.datatype.boolean(),
    created: faker.datatype.datetime().toString(),
    changed: faker.datatype.datetime().toString(),
    langcode: "en",
    thumbnail: mockJsonApiFieldImage(),
    field_media_image: mockJsonApiFieldImage(),
  };
}
