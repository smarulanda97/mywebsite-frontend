import { JsonApiMenu, JsonApiMenuLinkContent, Menu, MenuLinkContent } from "@/models";

/**
 * This adapter receives an object of MenuLinkContent entity from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type MenuLinkContent.
 *
 * @param {MenuLinkContent} m
 */
const adaptedMenuLinkContent = (m: JsonApiMenuLinkContent): MenuLinkContent => ({
  id: m.id,
  url: m.url,
  type: m.type,
  title: m.title,
  description: m.description,
  parent: m.parent,
  weight: m.weight,
  items: m.items,
  enabled: m.enabled,
});

/**
 * This adapter receives an object of Menu entity from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type Menu.
 *
 * @param {Menu} m
 */
export const adaptedMenu = (m: JsonApiMenu): Menu => ({
  tree: Array.isArray(m.tree)
    ? m.tree.map((menuLinkContent: JsonApiMenuLinkContent) =>
        adaptedMenuLinkContent(menuLinkContent)
      )
    : [],
});
