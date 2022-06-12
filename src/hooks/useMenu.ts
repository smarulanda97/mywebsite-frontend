import { useQuery } from "react-query";

import { Menu } from "@/models";
import { getMenu } from "@/services";
import { getQueryKeyMenu } from "@/utilities";

/**
 * Returns the menu entity that is related to name parameter
 *
 * @param {string} name
 * @returns
 */
export function useMenu(name: string = "") {
  return useQuery<Menu, Error>(getQueryKeyMenu(name), () => getMenu(name));
}
