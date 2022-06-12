import { rest } from "msw";

export const menuMocks = [
  rest.get(
    "http://admin-santiago-marulanda.lndo.site/jsonapi/menu_items/main",
    function (req, res, ctx) {
      return res(
        ctx.status(200),
        ctx.json(
          // 20220613001710
          // http://admin-santiago-marulanda.lndo.site/jsonapi/menu_items/main
          {
            jsonapi: {
              version: "1.0",
              meta: {
                links: {
                  self: {
                    href: "http://jsonapi.org/format/1.0/",
                  },
                },
              },
            },
            data: [
              {
                type: "menu_link_content--menu_link_content",
                id: "standard.front_page",
                attributes: {
                  description: "",
                  enabled: true,
                  expanded: false,
                  menu_name: "main",
                  meta: [],
                  options: [],
                  parent: "",
                  provider: "standard",
                  route: {
                    name: "<front>",
                    parameters: [],
                  },
                  title: "Home",
                  url: "/",
                  weight: "-50",
                },
              },
              {
                type: "menu_link_content--menu_link_content",
                id: "menu_link_content:878758ea-d179-425c-a81c-d9503eaa6915",
                attributes: {
                  description: null,
                  enabled: true,
                  expanded: false,
                  menu_name: "main",
                  meta: {
                    entity_id: "2",
                  },
                  options: {
                    query: [],
                  },
                  parent: "",
                  provider: "menu_link_content",
                  route: {
                    name: "entity.node.canonical",
                    parameters: {
                      node: "3",
                    },
                  },
                  title: "Portfolio",
                  url: "/portfolio/santiago-marulanda-molina",
                  weight: "-49",
                },
              },
              {
                type: "menu_link_content--menu_link_content",
                id: "menu_link_content:9e294aab-f9f7-438c-8ddd-4006ad6846ce",
                attributes: {
                  description: null,
                  enabled: true,
                  expanded: false,
                  menu_name: "main",
                  meta: {
                    entity_id: "3",
                  },
                  options: [],
                  parent: "",
                  provider: "menu_link_content",
                  route: {
                    name: "",
                    parameters: [],
                  },
                  title: "Blog",
                  url: "/blog",
                  weight: "-48",
                },
              },
              {
                type: "menu_link_content--menu_link_content",
                id: "menu_link_content:83ab2f82-e07b-42c8-882a-c32bec0ea32d",
                attributes: {
                  description: null,
                  enabled: true,
                  expanded: false,
                  menu_name: "main",
                  meta: {
                    entity_id: "4",
                  },
                  options: {
                    query: [],
                  },
                  parent: "",
                  provider: "menu_link_content",
                  route: {
                    name: "contact.site_page",
                    parameters: [],
                  },
                  title: "Contact",
                  url: "/contact",
                  weight: "-47",
                },
              },
              {
                type: "menu_link_content--menu_link_content",
                id: "menu_link_content:badb9242-80f9-4721-8dc4-8588414f19fd",
                attributes: {
                  description: null,
                  enabled: true,
                  expanded: false,
                  menu_name: "main",
                  meta: {
                    entity_id: "5",
                  },
                  options: {
                    external: true,
                  },
                  parent: "",
                  provider: "menu_link_content",
                  route: {
                    name: "",
                    parameters: [],
                  },
                  title: "Github",
                  url: "https://github.com/smarulanda97",
                  weight: "0",
                },
              },
            ],
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/menu_items/main",
              },
            },
          }
        )
      );
    }
  ),
];
