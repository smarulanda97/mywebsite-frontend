import { DrupalTranslatedPath } from "next-drupal";

import { drupal } from "@/lib";
import { JsonApiNode } from "@/models";
import { adaptedNodeByType } from "@/adapters";

const params = {
  "node--page": {
    include: [
      "field_content",
      "field_content.field_media",
      "field_content.field_media.field_media_image",
    ].join(","),
  },
  "node--article": {
    include: ["uid", "field_image"].join(","),
  },
  "node--portfolio": {
    include: [
      "field_content",
      "field_content.field_media",
      "field_content.field_media.field_media_image",
      "field_content.field_reference_list",
      "field_content.field_reference_list.field_reference_term",
      "field_content.field_reference_list.field_media",
      "field_content.field_reference_list.field_media.field_media_image",
      "field_content.field_reference_list_secondary",
      "field_content.field_reference_list_secondary.field_media",
      "field_content.field_reference_list_secondary.field_media.field_media_image",
    ].join(","),
  },
};

/**
 * Fetches a node resource from JSON:API using the path and context.
 *
 * @param {DrupalTranslatedPath} path
 * @param {any} context
 * @returns
 */
export const getNodeFromContext = async (path: DrupalTranslatedPath, context: any) => {
  const type = path.jsonapi.resourceName;

  let resourceParams = {};
  if (params[type]) {
    resourceParams = { ...params[type] };
  }

  const node = await drupal.getResourceFromContext<JsonApiNode>(path, context, {
    params: {
      ...resourceParams,
    },
  });

  return adaptedNodeByType(node);
};

/**
 * Fetches a node resource from JSON:API using the path`.
 *
 * @param {string} path
 * @returns
 */
export const getNode = async (path: string) => {
  const translatePath = await drupal.translatePath(path);
  const entityType = translatePath.jsonapi.resourceName;
  const entityUuid = translatePath.entity.uuid;

  let resourceParams = {};
  if (params[entityType]) {
    resourceParams = { ...params[entityType] };
  }

  const node = await drupal.getResource<JsonApiNode>(entityType, entityUuid, {
    params: {
      ...resourceParams,
    },
  });

  return adaptedNodeByType(node);
};
