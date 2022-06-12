import { DrupalNode, DrupalParagraph } from "next-drupal";

import { Paragraph } from "./paragraphs.model";

/*
  |--------------------------------------------------------------------------
  | Defines the types that could get from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to node entities returned from JSON:API
  |
  */

export interface JsonApiNode extends DrupalNode {}

export interface JsonApiNodePage extends JsonApiNode {
  field_content: DrupalParagraph[];
}

export interface JsonApiNodeArticle extends JsonApiNode {}

export interface JsonApiNodePortfolio extends JsonApiNode {
  field_content: DrupalParagraph[];
}

/*
  |--------------------------------------------------------------------------
  | Defines the types that could be used to adapt the data from the JSON:API
  |--------------------------------------------------------------------------
  |
  | Types related to node entities
  |
  */

export interface Node {
  id: string;
  type: string;
  title: string;
  langCode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NodeArticle extends Node {
  image?: string;
  tags?: string[];
}

export interface NodePage extends Node {
  content?: Paragraph[];
}

export interface NodePortfolio extends Node {
  content: Paragraph[];
}

export type NodeType = Node | NodeArticle | NodePage | NodePortfolio;
