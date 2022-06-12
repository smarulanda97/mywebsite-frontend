import { drupal } from "@/lib";
import { adaptedMenu } from "@/adapters";
import { JsonApiMenuLinkContent, Menu } from "@/models";

/**
 * Gets menu from JSON:API and returns the menu formatted
 *
 * @param name
 */
export async function getMenu(name: string): Promise<Menu> {
  const menu = await drupal.getMenu<JsonApiMenuLinkContent>(name);
  return adaptedMenu(menu);
}
