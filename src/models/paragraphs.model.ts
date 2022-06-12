import { DrupalParagraph } from "next-drupal";
import {
  FieldLink,
  FieldMediaImage,
  FieldTextFormatted,
  JsonApiFieldLink,
  JsonApiFieldMediaImage,
  JsonApiFieldTextFormatted,
} from "./fields.model";

/*
  |--------------------------------------------------------------------------
  | Defines the types that could get from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to paragraph entities returned from JSON:API
  |
  */

export interface JsonApiParagraph extends DrupalParagraph {}

export interface JsonApiParagraphPortfolioBanner extends JsonApiParagraph {
  id: string;
  uuid: string;
  type: string;
  field_title: JsonApiFieldTextFormatted;
  field_subtitle?: string;
  field_description?: JsonApiFieldTextFormatted;
  field_media: JsonApiFieldMediaImage;
  field_reference_list: JsonApiParagraph[];
  field_reference_list_secondary: JsonApiParagraph[];
  created: string;
  updated: string;
}

export interface JsonApiParagraphSocialLink extends JsonApiParagraph {
  id: string;
  uuid: string;
  type: string;
  field_media?: JsonApiFieldMediaImage;
  field_link: JsonApiFieldLink;
  created: string;
  updated: string;
}

export interface JsonApiParagraphSkillLink extends JsonApiParagraph {
  id: string;
  uuid: string;
  type: string;
  field_media?: JsonApiFieldMediaImage;
  field_link: JsonApiFieldLink;
  created: string;
  updated: string;
}

/*
  |--------------------------------------------------------------------------
  | Defines the types that could be used to adapt the data from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to paragraph entities
  |
  */

export interface Paragraph {
  id: string;
  type: string;
}

export interface ParagraphPortfolioBanner extends Paragraph {
  title: FieldTextFormatted;
  subtitle?: string;
  description?: FieldTextFormatted;
  mediaImage: FieldMediaImage;
  socialLinks: Paragraph[];
  skillLinks: Paragraph[];
}

export interface ParagraphSocialLink extends Paragraph {
  link: FieldLink;
  mediaImage: FieldMediaImage;
}

export interface ParagraphSkillLink extends Paragraph {
  link: FieldLink;
  mediaImage: FieldMediaImage;
}
