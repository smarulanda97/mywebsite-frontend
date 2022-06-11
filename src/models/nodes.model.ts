import { DrupalNode, DrupalParagraph } from "next-drupal";

import { Paragraph } from "./paragraphs.model";

export interface JsonApiNode extends DrupalNode {}

export interface JsonApiNodePage extends JsonApiNode {
  field_content: DrupalParagraph[];
}

export interface JsonApiNodeArticle extends JsonApiNode {}

export interface JsonApiNodePortfolio extends JsonApiNode {
  field_content: DrupalParagraph[];
}

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
