import { faker } from "@faker-js/faker";

import { mockJsonApiMediaImage, mockJsonApiFieldImage } from "@/mocks";
import {
  adaptedFieldLink,
  adaptedFieldImage,
  adaptedFieldMediaImage,
  adaptedFieldTextFormatted,
} from "@/adapters";

describe("<FieldMediaImageAdapter>", function () {
  test("Should return an object of type FieldMediaImage", function () {
    const jsonApiFieldMediaImage = mockJsonApiMediaImage();

    expect(adaptedFieldMediaImage(jsonApiFieldMediaImage)).toMatchObject({
      id: jsonApiFieldMediaImage.id,
      type: jsonApiFieldMediaImage.type,
      image: {
        filename: jsonApiFieldMediaImage.field_media_image.filename,
        alt: jsonApiFieldMediaImage.field_media_image.resourceIdObjMeta.alt,
        title: jsonApiFieldMediaImage.field_media_image.resourceIdObjMeta.title,
        width: jsonApiFieldMediaImage.field_media_image.resourceIdObjMeta.width,
        height: jsonApiFieldMediaImage.field_media_image.resourceIdObjMeta.height,
        url: jsonApiFieldMediaImage.field_media_image.uri.url,
        styles: {},
      },
    });
  });

  test("Should return null if pass undefined as argument", function () {
    expect(adaptedFieldMediaImage(undefined)).toBeNull();
  });
});

describe("<FieldImageAdapter>", function () {
  test("Should return and object of type FieldImage", function () {
    const jsonApiFieldImage = mockJsonApiFieldImage();

    expect(adaptedFieldImage(jsonApiFieldImage)).toMatchObject({
      filename: jsonApiFieldImage.filename,
      alt: jsonApiFieldImage.resourceIdObjMeta.alt,
      title: jsonApiFieldImage.resourceIdObjMeta.title,
      width: jsonApiFieldImage.resourceIdObjMeta.width,
      height: jsonApiFieldImage.resourceIdObjMeta.height,
      url: jsonApiFieldImage.uri.url,
      styles: {},
    });
  });

  test("Should return null if pass undefined as argument", function () {
    expect(adaptedFieldImage(undefined)).toBeNull();
  });
});

describe("<FieldTextFormattedAdapter>", function () {
  test("Should return an object of type FieldTextFormatted", function () {
    const value = faker.lorem.text();
    const fieldText = adaptedFieldTextFormatted({
      processed: value,
      value: value,
      format: "html",
    });

    expect(fieldText).toMatchObject({
      processed: value,
    });
  });

  test("Should return null if pass undefined as argument", function () {
    expect(adaptedFieldTextFormatted(undefined)).toBeNull();
  });
});

describe("<FieldLinkAdapter>", function () {
  test("Should return an object of FieldLink", function () {
    const url = faker.internet.url();
    const title = faker.lorem.words(1);
    const fieldLink = adaptedFieldLink({
      uri: url,
      title: title,
      options: [],
    });

    expect(fieldLink).toMatchObject({
      title,
      url,
    });
  });

  test("Should return empty string if property title is missing", function () {
    const url = faker.internet.url();
    const fieldLink = adaptedFieldLink({
      uri: url,
      options: [],
    });

    expect(fieldLink).toMatchObject({
      title: "",
      url: url,
    });
  });

  test("Should return # if property uri is undefined", function () {
    const fieldLink = adaptedFieldLink({
      uri: undefined,
      options: [],
    });

    expect(fieldLink).toMatchObject({
      url: "#",
      title: "",
    });
  });

  test("Should return null if pass undefined as argument", function () {
    expect(adaptedFieldLink(undefined)).toBeNull();
  });
});
