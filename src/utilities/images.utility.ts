import { ImageProps } from "next/image";

import { FieldImage } from "@/models";
import { isAbsoluteUrl } from "@/utilities";

export function resolveImageUrl(path: string): string {
  if (!path.length) {
    return "";
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${path}`;
}

export function getImageProps(field: FieldImage): ImageProps & { alt: string } {
  if (!field.url) {
    return undefined;
  }

  return {
    src: field.url,
    alt: field.alt,
    title: field.alt,
    width: field.width ?? 100,
    height: field.height ?? 100,
  };
}
