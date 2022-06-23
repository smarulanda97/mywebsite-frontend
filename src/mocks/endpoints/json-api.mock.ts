import { rest } from "msw";

export const endpointsJsonApi = [
  rest.get("*/jsonapi", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
        data: [],
        meta: {
          links: {
            me: {
              meta: {
                id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
              },
              href: "http://admin-santiago-marulanda.lndo.site/jsonapi/user/user/0ba425f3-b917-4df4-ac55-ca54d89132ed",
            },
          },
        },
        links: {
          "file--file": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file",
          },
          "filter_format--filter_format": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/filter_format/filter_format",
          },
          "image_style--image_style": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/image_style/image_style",
          },
          "jsonapi_resource_config--jsonapi_resource_config": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/jsonapi_resource_config/jsonapi_resource_config",
          },
          "media--image": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image",
          },
          "media_type--media_type": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media_type/media_type",
          },
          "menu--menu": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/menu/menu",
          },
          "menu_link_content--menu_link_content": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/menu_link_content/menu_link_content",
          },
          "next_entity_type_config--next_entity_type_config": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/next_entity_type_config/next_entity_type_config",
          },
          "next_site--next_site": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/next_site/next_site",
          },
          "node--article": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/article",
          },
          "node--page": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/page",
          },
          "node--portfolio": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio",
          },
          "node_type--node_type": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node_type/node_type",
          },
          "oauth2_token--access_token": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/oauth2_token/access_token",
          },
          "oauth2_token--auth_code": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/oauth2_token/auth_code",
          },
          "oauth2_token--refresh_token": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/oauth2_token/refresh_token",
          },
          "oauth2_token_type--oauth2_token_type": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/oauth2_token_type/oauth2_token_type",
          },
          "paragraph--portfolio_banner": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner",
          },
          "paragraphs_category--paragraphs_category": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraphs_category/paragraphs_category",
          },
          "paragraphs_type--paragraphs_type": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraphs_type/paragraphs_type",
          },
          "path_alias--path_alias": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/path_alias/path_alias",
          },
          self: {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi",
          },
          "taxonomy_term--tags": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/tags",
          },
          "taxonomy_vocabulary--taxonomy_vocabulary": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_vocabulary/taxonomy_vocabulary",
          },
          "user--user": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/user/user",
          },
          "user_role--user_role": {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/user_role/user_role",
          },
        },
      })
    );
  }),
];
