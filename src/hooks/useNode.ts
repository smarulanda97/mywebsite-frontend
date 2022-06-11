import { useQuery } from "react-query";

import { NodeType } from "@/models";
import { getNode } from "@/services";
import { getQueryKeyNode } from "@/utilities";

/**
 * Returns the node entity that is related to that nodePath
 *
 * @param {string} nodePath
 * @returns
 */
export function useNode(nodePath: string = "") {
  return useQuery<NodeType, Error>(getQueryKeyNode(nodePath), () => getNode(nodePath));
}
