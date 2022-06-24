import { faker } from "@faker-js/faker";

import * as mocks from "@/mocks";
import { FieldImage, FieldMediaImage } from "@/models";
import { getImageProps, resolveImageUrl } from "@/utilities";

describe("<ImageUtilities>", function () {
  describe("function resolveImageUrl()", function () {
    test("Should return the absolute url if argument path is a relative url", function () {
      expect(resolveImageUrl("/files/images/placeholder.png")).toMatch(/^[a-zA-Z][a-zA-Z\d+\-.]*:/);
    });

    test("Should return the same url if the argument path is an absolute url", function () {
      const path = faker.internet.url();
      expect(resolveImageUrl(path)).toEqual(path);
    });
  });

  describe("function getImageProps()", function () {
    test("Should return necessary properties for next/image component", function () {
      const fieldMediaImage: FieldMediaImage = mocks.mediaImage;

      expect(getImageProps(fieldMediaImage.image)).toMatchObject({
        src: fieldMediaImage.image.url,
        alt: fieldMediaImage.image.alt,
        title: fieldMediaImage.image.alt,
        width: fieldMediaImage.image.width,
        height: fieldMediaImage.image.height,
      });
    });

    test("Should return undefined if src property is empty", function () {
      const fieldImage: FieldImage = {
        ...mocks.mediaImage.image,
        url: undefined,
      };

      expect(getImageProps(fieldImage)).toBeUndefined();
    });

    test("Should return width and height 100 as default", function () {
      const fieldImage: FieldImage = {
        ...mocks.mediaImage.image,
        width: undefined,
        height: undefined,
      };

      expect(getImageProps(fieldImage)).toMatchObject({
        width: 100,
        height: 100,
      });
    });
  });
});
