import { ImageProps } from "next/image";
import { FieldImage } from "../models";

export function resolveImageUrl(relativeUrl: string): string {
  if (!relativeUrl.length) {
    return "";
  }

  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${relativeUrl}`;
}

export function getImageProps(field: FieldImage): ImageProps & { alt: string } {
  return {
    src: field.url,
    alt: field.alt,
    title: field.alt,
    width: field.width,
    height: field.height,
  };
}
