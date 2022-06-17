import { DrupalTaxonomyTerm } from "next-drupal";

import { FieldLink, JsonApiFieldLink } from "@/src/models/fields.model";

/*
  |--------------------------------------------------------------------------
  | Defines the types that could get from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to node entities returned from JSON:API
  |
  */

export interface JsonApiTerm extends DrupalTaxonomyTerm {
  id: string;
  name: string;
  description: string;
  type: string;
  langcode: string;
}

export interface JsonApiTermCompany extends JsonApiTerm {
  field_link: JsonApiFieldLink;
}

/*
  |--------------------------------------------------------------------------
  | Defines the types that could be used to adapt the data from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to node entities
  |
  */

export interface Term {
  id: string;
  type: string;
  name: string;
  description: string;
  langCode?: string;
}

export interface TermCompany extends Term {
  link: FieldLink;
}
