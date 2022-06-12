import { DrupalMenuLinkContent } from "next-drupal";

/*
  |--------------------------------------------------------------------------
  | Defines the types that could get from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to menu entities returned from JSON:API
  |
  */

export interface JsonApiMenuLinkContent extends DrupalMenuLinkContent {}

export interface JsonApiMenu {
  items: JsonApiMenuLinkContent[];
  tree: JsonApiMenuLinkContent[];
}

/*
  |--------------------------------------------------------------------------
  | Defines the types that could be used to adapt the data from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to menu entities
  |
  */

export interface MenuLinkContent {
  id: string;
  type: string;
  title: string;
  description: string;
  enabled: boolean;
  parent: string;
  url: string;
  weight: string;
  items?: DrupalMenuLinkContent[];
}

export interface Menu {
  tree: MenuLinkContent[];
}
