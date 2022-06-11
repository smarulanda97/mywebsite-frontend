import { drupal } from "@/lib";
import { adaptedNodeArticle } from "@/adapters";
import { JsonApiParams, JsonApiNodeArticle } from "@/models";

const resourceType = "node--article";

const params: JsonApiParams = {
  params: {
    "filter[status]": 1,
    sort: "-created",
    include: "field_image,uid",
  },
};

/**
 * Fetches a resource collection of node--article from JSON:API context
 * and returns formatted nodes.
 *
 * @param {any} context
 * @returns {JsonApiNodeArticle[]}
 */
export const getNodesArticleFromContext = async (context) => {
  const nodes = await drupal.getResourceCollectionFromContext<JsonApiNodeArticle[]>(
    resourceType,
    context,
    params
  );

  const formattedNodes = nodes.map((node: JsonApiNodeArticle) => adaptedNodeArticle(node));

  return formattedNodes;
};
