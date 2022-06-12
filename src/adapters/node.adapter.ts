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
 * This adapter receives an object of Node entity from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type Node.
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
 * This adapter receives an object of NodePage (bundle) of entity Node from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type NodePage.
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
 * This adapter receives an object of NodeArticle (bundle) of entity Node from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type NodeArticle.
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
 * This adapter receives an object of NodePortfolio (bundle) of entity Node from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type NodePortfolio.
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
