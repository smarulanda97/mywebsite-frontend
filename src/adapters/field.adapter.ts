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
import { resolveImageUrl } from "@/utilities";

/**
 * Returns an specific formatted for field of type "link"
 *
 * @param {JsonApiFieldLink} field
 * @returns {FieldLink}
 */
export const adaptedFieldLink = (field: JsonApiFieldLink): FieldLink => {
  return {
    url: field?.uri ?? "#",
    title: field?.title ?? "",
  };
};

/**
 * Returns an specific formatted for field of type "text formatted"
 *
 * @param {JsonApiFieldTextFormatted} field
 * @returns {FieldTextFormatted}
 */
export const adaptedFieldTextFormatted = (field: JsonApiFieldTextFormatted): FieldTextFormatted => {
  return {
    processed: field?.processed ?? "",
  };
};

/**
 * Retuns an specific formatted for field of type "image"
 *
 * @param {JsonApiFieldImage} field
 * @returns {FieldImage}
 */
export const adaptedFieldImage = (field: JsonApiFieldImage): FieldImage => {
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
 * Returns an specific formatted for field of type "media (entity reference)"
 *
 * @param {JsonApiFieldMediaImage} field
 * @return {FieldMediaImage}
 */
export const adaptedFieldMediaImage = (field: JsonApiFieldMediaImage): FieldMediaImage => {
  return {
    id: field.id,
    type: field.type,
    image: adaptedFieldImage(field.field_media_image),
  };
};
