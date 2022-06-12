import { DrupalMedia } from "next-drupal";

/*
  |--------------------------------------------------------------------------
  | Defines the types that could get from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to field entities returned from JSON:API
  |
  */

export interface JsonApiField {}

export interface JsonApiFieldLink extends JsonApiField {
  uri: string;
  title?: string;
  options: any[];
}

export interface JsonApiFieldTextFormatted extends JsonApiField {
  value: string;
  format: string;
  processed: string;
}

export interface JsonApiFieldImage extends JsonApiField {
  id: string;
  type: string;
  langcode: string;
  filename: string;
  filemime: string;
  filesize: number;
  status: boolean;
  uri: {
    value: string;
    url: string;
  };
  image_style_uri: {
    [key: string]: string;
  };
  resourceIdObjMeta: {
    alt: string;
    title?: string;
    width: number;
    height: number;
  };
}

export interface JsonApiFieldMediaImage extends JsonApiField, DrupalMedia {
  id: string;
  type: string;
  name: string;
  created: string;
  change: string;
  status: boolean;
  langcode: string;
  thumbnail: JsonApiFieldImage;
  field_media_image: JsonApiFieldImage;
}

/*
  |--------------------------------------------------------------------------
  | Defines the types that could be used to adapt the data from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to field entities
  |
  */

interface Field {}

export interface FieldLink extends Field {
  url: string;
  title?: string;
}

export interface FieldTextFormatted extends Field {
  processed: string;
}

export interface FieldImage extends Field {
  filename: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  url: string;
  styles: {
    [key: string]: string;
  };
}

export interface FieldMediaImage extends Field {
  id: string;
  type: string;
  image: FieldImage;
}
