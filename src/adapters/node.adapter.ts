import { adaptedParagraphs } from "@/adapters";
import {
  Node,
  NodePage,
  NodeArticle,
  NodePortfolio,
  JsonApiNode,
  JsonApiNodePage,
  JsonApiNodeArticle,
  JsonApiNodePortfolio,
} from "@/models";

/**
 * Returns an generic formatted for any content type.
 *
 * @param {JsonApiNode} n
 * @returns {Node}
 */
export const adaptedNode = (n: JsonApiNode): Node => ({
  id: n.id,
  type: n.type,
  title: n.title,
  createdAt: n.created,
  updatedAt: n.changed,
});

/**
 * Returns an specific formatted of content type basic page.
 *
 * @param {JsonApiNodePage} n
 * @returns {NodePage}
 */
export const adaptedNodePage = (n: JsonApiNodePage): NodePage => ({
  id: n.id,
  type: n.type,
  title: n.title,
  content: Array.isArray(n.field_content) ? adaptedParagraphs(n.field_content) : [],
  createdAt: n.created,
  updatedAt: n.changed,
});

/**
 * Returns an specific formatted of content type article.
 *
 * @param {JsonApiNodeArticle} a
 * @returns {NodeArticle}
 */
export const adaptedNodeArticle = (a: JsonApiNodeArticle): NodeArticle => ({
  id: a.id,
  type: a.type,
  title: a.title,
  createdAt: a.created,
  updatedAt: a.changed,
});

/**
 * Returns an specific formatted of content type portfolio.
 *
 * @param {JsonApiNodePortfolio} n
 * @returns {NodePortfolio}
 */
export const adaptedNodePortfolio = (n: JsonApiNodePortfolio): NodePortfolio => ({
  id: n.id,
  type: n.type,
  title: n.title,
  content: Array.isArray(n.field_content) ? adaptedParagraphs(n.field_content) : [],
  createdAt: n.created,
  updatedAt: n.changed,
});
