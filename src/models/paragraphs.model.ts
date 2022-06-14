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

export interface JsonApiParagraph extends DrupalParagraph {
  id: string;
  uuid: string;
  type: string;
  created?: string;
  updated?: string;
}

export interface JsonApiParagraphPortfolioBanner extends JsonApiParagraph {
  field_title: JsonApiFieldTextFormatted;
  field_subtitle?: string;
  field_description?: JsonApiFieldTextFormatted;
  field_media: JsonApiFieldMediaImage;
  field_reference_list: JsonApiParagraph[];
  field_reference_list_secondary: JsonApiParagraph[];
}

export interface JsonApiParagraphSocialLink extends JsonApiParagraph {
  field_media?: JsonApiFieldMediaImage;
  field_link: JsonApiFieldLink;
}

export interface JsonApiParagraphSkillLink extends JsonApiParagraph {
  field_media?: JsonApiFieldMediaImage;
  field_link: JsonApiFieldLink;
}

export interface JsonApiParagraphProjects extends JsonApiParagraph {
  field_title: JsonApiFieldTextFormatted;
  field_subtitle?: string;
  field_description?: JsonApiFieldTextFormatted;
  field_reference_list: JsonApiParagraph[];
}

export interface JsonApiParagraphProjectsItem extends JsonApiParagraph {
  field_media?: JsonApiFieldMediaImage;
  field_title: JsonApiFieldTextFormatted;
  field_subtitle?: string;
  field_description?: JsonApiFieldTextFormatted;
  field_link: JsonApiFieldLink;
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

export interface ParagraphProjects extends Paragraph {
  title: FieldTextFormatted;
  subtitle?: string;
  description?: FieldTextFormatted;
  projects: Paragraph[];
}

export interface ParagraphProjectsItem extends Paragraph {
  mediaImage: FieldMediaImage;
  title: FieldTextFormatted;
  subtitle?: string;
  description?: FieldTextFormatted;
  link: FieldLink;
}
