import { faker } from "@faker-js/faker";

import { getDefaultLinkAttributes, isAbsoluteUrl } from "@/utilities";

describe("<UrlUtilities>", function () {
  describe("function isAbsoluteUrl()", function () {
    test("Should return true if pass an absolute url as argument", function () {
      expect(isAbsoluteUrl(faker.internet.url())).toBeTruthy();
    });

    test("Should return false if pass a relative url as argument", function () {
      expect(isAbsoluteUrl("/node/1")).toBeFalsy();
    });
  });

  describe("function getDefaultLinkAttributes()", function () {
    test("Should return an empty object if the url is not absolute", function () {
      expect(getDefaultLinkAttributes("/node/1")).toEqual({});
    });

    test("Should return and object with rel->noreferrer and target->_blank if url is absolute", function () {
      expect(getDefaultLinkAttributes(faker.internet.url())).toMatchObject({
        rel: "noreferrer",
        target: "_blank",
      });
    });
  });
});
