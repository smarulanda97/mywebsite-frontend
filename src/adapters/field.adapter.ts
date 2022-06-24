import { resolveImageUrl } from "@/utilities";
import {
  FieldImage,
  FieldLink,
  FieldMediaImage,
  FieldTextFormatted,
  JsonApiFieldImage,
  JsonApiFieldLink,
  JsonApiFieldMediaImage,
  JsonApiFieldTextFormatted,
} from "@/models";

/**
 * This adapter receives an object of Field Link from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type FieldLink.
 *
 * @param {JsonApiFieldLink} field
 * @returns {FieldLink}
 */
export const adaptedFieldLink = (field: JsonApiFieldLink): FieldLink => {
  if (!field) {
    return null;
  }

  return {
    url: field?.uri ?? "#",
    title: field?.title ?? "",
  };
};

/**
 * This adapter receives an object of Text Formatted from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type FieldTextFormatted.
 *
 * @param {JsonApiFieldTextFormatted} field
 * @returns {FieldTextFormatted}
 */
export const adaptedFieldTextFormatted = (field: JsonApiFieldTextFormatted): FieldTextFormatted => {
  if (!field) {
    return null;
  }

  return {
    processed: field?.processed ?? "",
  };
};

/**
 * This adapter receives an object of Image (Entity Reference) from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type FieldImage.
 *
 * @param {JsonApiFieldImage} field
 * @returns {FieldImage}
 */
export const adaptedFieldImage = (field: JsonApiFieldImage): FieldImage => {
  if (!field) {
    return null;
  }

  return {
    filename: field.filename ?? "",
    url: resolveImageUrl(field.uri.url),
    alt: field.resourceIdObjMeta?.alt ?? "",
    title: field.resourceIdObjMeta?.title ?? "",
    height: field.resourceIdObjMeta?.height ?? 100,
    width: field.resourceIdObjMeta?.width ?? 100,
    styles: {
      ...field.image_style_uri,
    },
  };
};

/**
 * This adapter receives an object of Media Image (Entity Reference) from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type FieldMediaImage.
 *
 * @param {JsonApiFieldMediaImage} field
 * @return {FieldMediaImage}
 */
export const adaptedFieldMediaImage = (field: JsonApiFieldMediaImage): FieldMediaImage => {
  if (!field) {
    return null;
  }

  return {
    id: field.id,
    type: field.type,
    image: adaptedFieldImage(field.field_media_image),
  };
};
