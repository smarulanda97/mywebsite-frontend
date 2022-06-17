import { rest } from "msw";

export const nodePortfolioMocks = [
  rest.get("*/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        // 20220617224304
        // http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41?include=field_content%2Cfield_content.field_media%2Cfield_content.field_media.field_media_image%2Cfield_content.field_reference_list%2Cfield_content.field_reference_list.field_reference_term%2Cfield_content.field_reference_list.field_media%2Cfield_content.field_reference_list.field_media.field_media_image%2Cfield_content.field_reference_list_secondary%2Cfield_content.field_reference_list_secondary.field_media%2Cfield_content.field_reference_list_secondary.field_media.field_media_image

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
          data: {
            type: "node--portfolio",
            id: "783f7469-2a3f-4287-85f0-da55dd063e41",
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41?resourceVersion=id%3A30",
              },
            },
            attributes: {
              drupal_internal__nid: 3,
              drupal_internal__vid: 30,
              langcode: "en",
              title: "Santiago Marulanda Molina",
              created: "2022-05-14T13:38:22+00:00",
              changed: "2022-06-16T17:04:42+00:00",
              path: {
                alias: "/portfolio/santiago-marulanda-molina",
                pid: 3,
                langcode: "en",
              },
              body: null,
            },
            relationships: {
              node_type: {
                data: {
                  type: "node_type--node_type",
                  id: "b24cd35e-fcf0-4079-a8b0-0823dcdb207d",
                  meta: {
                    drupal_internal__target_id: "portfolio",
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/node_type?resourceVersion=id%3A30",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/relationships/node_type?resourceVersion=id%3A30",
                  },
                },
              },
              field_content: {
                data: [
                  {
                    type: "paragraph--portfolio_banner",
                    id: "8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce",
                    meta: {
                      target_revision_id: 167,
                      drupal_internal__target_id: 2,
                    },
                  },
                  {
                    type: "paragraph--projects",
                    id: "af3c0d84-82f5-45a9-ab96-846df485afdb",
                    meta: {
                      target_revision_id: 174,
                      drupal_internal__target_id: 11,
                    },
                  },
                ],
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/field_content?resourceVersion=id%3A30",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/relationships/field_content?resourceVersion=id%3A30",
                  },
                },
              },
            },
          },
          included: [
            {
              type: "paragraph--portfolio_banner",
              id: "8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce",
                },
              },
              attributes: {
                drupal_internal__id: 2,
                langcode: "en",
                created: "2022-05-14T13:38:34+00:00",
                field_description: {
                  value:
                    "<p>I'm a semi-senior Drupal backend developer with +4 years of experience developing websites, E-commerce, integrating different kinds of API (Google AD, payment gateways, ERP web services), and working with headless CMS. My main stack is based on PHP using Drupal and Laravel.</p>\r\n",
                  format: "basic_html",
                  processed:
                    "<p>I'm a semi-senior Drupal backend developer with +4 years of experience developing websites, E-commerce, integrating different kinds of API (Google AD, payment gateways, ERP web services), and working with headless CMS. My main stack is based on PHP using Drupal and Laravel.</p>",
                },
                field_subtitle: "Drupal, Laravel & React",
                field_title: {
                  value: "Hi, I’m <span>Santiago</span><br> a Full-stack Developer.",
                  format: "basic_html",
                  processed: "Hi, I’m <span>Santiago</span><br /> a Full-stack Developer.",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "67bf5660-f547-4dbe-8461-869dc2f1d887",
                    meta: {
                      drupal_internal__target_id: "portfolio_banner",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "210eaf87-c046-4cc7-9199-23bcaf4448b7",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/relationships/field_media",
                    },
                  },
                },
                field_reference_list: {
                  data: [
                    {
                      type: "paragraph--social_link",
                      id: "d34ac63a-a3ab-4bca-ac21-2d1214932d23",
                      meta: {
                        target_revision_id: 162,
                        drupal_internal__target_id: 6,
                      },
                    },
                    {
                      type: "paragraph--social_link",
                      id: "cea91fb6-314e-48bf-9da2-5fb7808e0638",
                      meta: {
                        target_revision_id: 163,
                        drupal_internal__target_id: 5,
                      },
                    },
                  ],
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/field_reference_list",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/relationships/field_reference_list",
                    },
                  },
                },
                field_reference_list_secondary: {
                  data: [
                    {
                      type: "paragraph--skill_link",
                      id: "f301434d-abdf-481f-8291-bae798a7d0e9",
                      meta: {
                        target_revision_id: 164,
                        drupal_internal__target_id: 7,
                      },
                    },
                    {
                      type: "paragraph--skill_link",
                      id: "4d8155be-9084-4e72-a1dd-95d143f23133",
                      meta: {
                        target_revision_id: 165,
                        drupal_internal__target_id: 8,
                      },
                    },
                    {
                      type: "paragraph--skill_link",
                      id: "0e5354e8-53af-4971-8af7-575ddfde0ab4",
                      meta: {
                        target_revision_id: 166,
                        drupal_internal__target_id: 9,
                      },
                    },
                  ],
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/field_reference_list_secondary",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/portfolio_banner/8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce/relationships/field_reference_list_secondary",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--projects",
              id: "af3c0d84-82f5-45a9-ab96-846df485afdb",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects/af3c0d84-82f5-45a9-ab96-846df485afdb",
                },
              },
              attributes: {
                drupal_internal__id: 11,
                langcode: "en",
                created: "2022-06-13T23:06:54+00:00",
                field_description: null,
                field_subtitle: "Some awesome projects I've participated",
                field_title: {
                  value: "My portfolio",
                  format: "basic_html",
                  processed: "My portfolio",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "546f5c85-c8e8-44ab-9031-7d5b0e4303cb",
                    meta: {
                      drupal_internal__target_id: "projects",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects/af3c0d84-82f5-45a9-ab96-846df485afdb/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects/af3c0d84-82f5-45a9-ab96-846df485afdb/relationships/paragraph_type",
                    },
                  },
                },
                field_reference_list: {
                  data: [
                    {
                      type: "paragraph--projects_item",
                      id: "e1a638d6-7ba2-4b89-8488-156f4ff08484",
                      meta: {
                        target_revision_id: 168,
                        drupal_internal__target_id: 10,
                      },
                    },
                    {
                      type: "paragraph--projects_item",
                      id: "f30e3e6d-26df-4a57-bbd4-f2726b7a20d6",
                      meta: {
                        target_revision_id: 169,
                        drupal_internal__target_id: 12,
                      },
                    },
                    {
                      type: "paragraph--projects_item",
                      id: "48458462-0fa3-400a-b22b-1189649c0c15",
                      meta: {
                        target_revision_id: 170,
                        drupal_internal__target_id: 13,
                      },
                    },
                    {
                      type: "paragraph--projects_item",
                      id: "405e2ca1-399f-41fa-8f78-cfa556bcef3d",
                      meta: {
                        target_revision_id: 171,
                        drupal_internal__target_id: 14,
                      },
                    },
                    {
                      type: "paragraph--projects_item",
                      id: "3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f",
                      meta: {
                        target_revision_id: 172,
                        drupal_internal__target_id: 15,
                      },
                    },
                    {
                      type: "paragraph--projects_item",
                      id: "599b0fad-54e6-4554-b9a6-e04711c1d2d1",
                      meta: {
                        target_revision_id: 173,
                        drupal_internal__target_id: 16,
                      },
                    },
                  ],
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects/af3c0d84-82f5-45a9-ab96-846df485afdb/field_reference_list",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects/af3c0d84-82f5-45a9-ab96-846df485afdb/relationships/field_reference_list",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "210eaf87-c046-4cc7-9199-23bcaf4448b7",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7?resourceVersion=id%3A18",
                },
              },
              attributes: {
                drupal_internal__mid: 1,
                drupal_internal__vid: 18,
                name: "banner-01.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/bundle?resourceVersion=id%3A18",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/bundle?resourceVersion=id%3A18",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/uid?resourceVersion=id%3A18",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/uid?resourceVersion=id%3A18",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "cb530386-a9da-40c2-9207-5ee3fdfb06d4",
                    meta: {
                      alt: "Santiago Marulanda",
                      title: "",
                      width: 700,
                      height: 960,
                      drupal_internal__target_id: 19,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/field_media_image?resourceVersion=id%3A18",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/field_media_image?resourceVersion=id%3A18",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "cb530386-a9da-40c2-9207-5ee3fdfb06d4",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/cb530386-a9da-40c2-9207-5ee3fdfb06d4",
                },
              },
              attributes: {
                drupal_internal__fid: 19,
                filename: "banner-01.png",
                uri: {
                  value: "public://2022-06/banner-01.png",
                  url: "/sites/default/files/2022-06/banner-01.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/banner-01.png?itok=GFPplmoo",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/banner-01.png?itok=D9vMcsr_",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/banner-01.png?itok=83SXU0oE",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/banner-01.png?itok=_BGPihHI",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/banner-01.png?itok=_SQ54nS7",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/cb530386-a9da-40c2-9207-5ee3fdfb06d4/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/cb530386-a9da-40c2-9207-5ee3fdfb06d4/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--social_link",
              id: "d34ac63a-a3ab-4bca-ac21-2d1214932d23",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/d34ac63a-a3ab-4bca-ac21-2d1214932d23",
                },
              },
              attributes: {
                drupal_internal__id: 6,
                created: "2022-05-29T11:16:53+00:00",
                field_link: {
                  uri: "https://www.linkedin.com/in/smarulanda97",
                  title: "",
                  options: [],
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "6ca140aa-9382-4117-a135-d83411c5257a",
                    meta: {
                      drupal_internal__target_id: "social_link",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/d34ac63a-a3ab-4bca-ac21-2d1214932d23/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/d34ac63a-a3ab-4bca-ac21-2d1214932d23/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "aaebd344-ab9d-4688-bcf0-6f8c4e54bd43",
                    meta: {
                      drupal_internal__target_id: 2,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/d34ac63a-a3ab-4bca-ac21-2d1214932d23/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/d34ac63a-a3ab-4bca-ac21-2d1214932d23/relationships/field_media",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--social_link",
              id: "cea91fb6-314e-48bf-9da2-5fb7808e0638",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/cea91fb6-314e-48bf-9da2-5fb7808e0638",
                },
              },
              attributes: {
                drupal_internal__id: 5,
                created: "2022-05-29T11:16:51+00:00",
                field_link: {
                  uri: "https://www.instagram.com/smarulanda97",
                  title: "",
                  options: [],
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "6ca140aa-9382-4117-a135-d83411c5257a",
                    meta: {
                      drupal_internal__target_id: "social_link",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/cea91fb6-314e-48bf-9da2-5fb7808e0638/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/cea91fb6-314e-48bf-9da2-5fb7808e0638/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "0ee46c61-f8fd-48a5-8c02-88d2a11f9619",
                    meta: {
                      drupal_internal__target_id: 3,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/cea91fb6-314e-48bf-9da2-5fb7808e0638/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/cea91fb6-314e-48bf-9da2-5fb7808e0638/relationships/field_media",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--projects_item",
              id: "e1a638d6-7ba2-4b89-8488-156f4ff08484",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/e1a638d6-7ba2-4b89-8488-156f4ff08484",
                },
              },
              attributes: {
                drupal_internal__id: 10,
                langcode: "en",
                created: "2022-06-13T23:07:27+00:00",
                field_description: null,
                field_link: {
                  uri: "https://www.stellaartoisafrica.com/en-za",
                  title: "",
                  options: [],
                },
                field_subtitle: "Drupal 8",
                field_title: {
                  value: "Stella Artois Africa",
                  format: "basic_html",
                  processed: "Stella Artois Africa",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "dc5125d1-1cfd-4ea0-b638-fe11e4ed9eec",
                    meta: {
                      drupal_internal__target_id: "projects_item",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/e1a638d6-7ba2-4b89-8488-156f4ff08484/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/e1a638d6-7ba2-4b89-8488-156f4ff08484/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "8db8af47-ccfa-47ec-93a6-921908cbfd40",
                    meta: {
                      drupal_internal__target_id: 8,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/e1a638d6-7ba2-4b89-8488-156f4ff08484/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/e1a638d6-7ba2-4b89-8488-156f4ff08484/relationships/field_media",
                    },
                  },
                },
                field_reference_term: {
                  data: {
                    type: "taxonomy_term--companies",
                    id: "57b00e49-a348-4e17-b4f2-9a06491a7432",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/e1a638d6-7ba2-4b89-8488-156f4ff08484/field_reference_term",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/e1a638d6-7ba2-4b89-8488-156f4ff08484/relationships/field_reference_term",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--projects_item",
              id: "f30e3e6d-26df-4a57-bbd4-f2726b7a20d6",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/f30e3e6d-26df-4a57-bbd4-f2726b7a20d6",
                },
              },
              attributes: {
                drupal_internal__id: 12,
                langcode: "en",
                created: "2022-06-13T23:08:17+00:00",
                field_description: null,
                field_link: {
                  uri: "https://coronaafrica.com/",
                  title: "",
                  options: [],
                },
                field_subtitle: "Drupal 8",
                field_title: {
                  value: "Corona Beer Africa",
                  format: "basic_html",
                  processed: "Corona Beer Africa",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "dc5125d1-1cfd-4ea0-b638-fe11e4ed9eec",
                    meta: {
                      drupal_internal__target_id: "projects_item",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/f30e3e6d-26df-4a57-bbd4-f2726b7a20d6/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/f30e3e6d-26df-4a57-bbd4-f2726b7a20d6/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "ada3778f-a917-4ad7-8500-f48791d70582",
                    meta: {
                      drupal_internal__target_id: 9,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/f30e3e6d-26df-4a57-bbd4-f2726b7a20d6/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/f30e3e6d-26df-4a57-bbd4-f2726b7a20d6/relationships/field_media",
                    },
                  },
                },
                field_reference_term: {
                  data: {
                    type: "taxonomy_term--companies",
                    id: "57b00e49-a348-4e17-b4f2-9a06491a7432",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/f30e3e6d-26df-4a57-bbd4-f2726b7a20d6/field_reference_term",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/f30e3e6d-26df-4a57-bbd4-f2726b7a20d6/relationships/field_reference_term",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--projects_item",
              id: "48458462-0fa3-400a-b22b-1189649c0c15",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/48458462-0fa3-400a-b22b-1189649c0c15",
                },
              },
              attributes: {
                drupal_internal__id: 13,
                langcode: "en",
                created: "2022-06-13T23:08:49+00:00",
                field_description: null,
                field_link: {
                  uri: "https://castlemilkstout.co.za/",
                  title: "",
                  options: [],
                },
                field_subtitle: "Drupal 8",
                field_title: {
                  value: "Castle Milk Stout Africa",
                  format: "basic_html",
                  processed: "Castle Milk Stout Africa",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "dc5125d1-1cfd-4ea0-b638-fe11e4ed9eec",
                    meta: {
                      drupal_internal__target_id: "projects_item",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/48458462-0fa3-400a-b22b-1189649c0c15/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/48458462-0fa3-400a-b22b-1189649c0c15/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "8208961c-08c4-4f16-b348-05fdfdba9381",
                    meta: {
                      drupal_internal__target_id: 11,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/48458462-0fa3-400a-b22b-1189649c0c15/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/48458462-0fa3-400a-b22b-1189649c0c15/relationships/field_media",
                    },
                  },
                },
                field_reference_term: {
                  data: {
                    type: "taxonomy_term--companies",
                    id: "57b00e49-a348-4e17-b4f2-9a06491a7432",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/48458462-0fa3-400a-b22b-1189649c0c15/field_reference_term",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/48458462-0fa3-400a-b22b-1189649c0c15/relationships/field_reference_term",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--projects_item",
              id: "405e2ca1-399f-41fa-8f78-cfa556bcef3d",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/405e2ca1-399f-41fa-8f78-cfa556bcef3d",
                },
              },
              attributes: {
                drupal_internal__id: 14,
                langcode: "en",
                created: "2022-06-13T23:09:29+00:00",
                field_description: null,
                field_link: {
                  uri: "https://voyconitau.co/",
                  title: "",
                  options: [],
                },
                field_subtitle: "Drupal 8 Headless & React",
                field_title: {
                  value: "Voy con Itaú Colombia",
                  format: "basic_html",
                  processed: "Voy con Itaú Colombia",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "dc5125d1-1cfd-4ea0-b638-fe11e4ed9eec",
                    meta: {
                      drupal_internal__target_id: "projects_item",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/405e2ca1-399f-41fa-8f78-cfa556bcef3d/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/405e2ca1-399f-41fa-8f78-cfa556bcef3d/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "2c253eef-50cc-41c0-80e6-4eb45f4189ca",
                    meta: {
                      drupal_internal__target_id: 10,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/405e2ca1-399f-41fa-8f78-cfa556bcef3d/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/405e2ca1-399f-41fa-8f78-cfa556bcef3d/relationships/field_media",
                    },
                  },
                },
                field_reference_term: {
                  data: {
                    type: "taxonomy_term--companies",
                    id: "57b00e49-a348-4e17-b4f2-9a06491a7432",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/405e2ca1-399f-41fa-8f78-cfa556bcef3d/field_reference_term",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/405e2ca1-399f-41fa-8f78-cfa556bcef3d/relationships/field_reference_term",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--projects_item",
              id: "3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f",
                },
              },
              attributes: {
                drupal_internal__id: 15,
                langcode: "en",
                created: "2022-06-13T23:09:48+00:00",
                field_description: null,
                field_link: {
                  uri: "https://sanvicentefundacion.com/",
                  title: "",
                  options: [],
                },
                field_subtitle: "Drupal 8 Commerce",
                field_title: {
                  value: "Evertect & Drupal Commerce Integration",
                  format: "basic_html",
                  processed: "Evertect &amp; Drupal Commerce Integration",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "dc5125d1-1cfd-4ea0-b638-fe11e4ed9eec",
                    meta: {
                      drupal_internal__target_id: "projects_item",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "8c1d75b0-ef18-4367-8518-b53f8c0f4958",
                    meta: {
                      drupal_internal__target_id: 12,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f/relationships/field_media",
                    },
                  },
                },
                field_reference_term: {
                  data: {
                    type: "taxonomy_term--companies",
                    id: "b2b0542b-e02e-40af-b734-ea9018f072d1",
                    meta: {
                      drupal_internal__target_id: 2,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f/field_reference_term",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/3e6d6063-dc5b-4fc3-b7a7-ad01e3e1131f/relationships/field_reference_term",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--projects_item",
              id: "599b0fad-54e6-4554-b9a6-e04711c1d2d1",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/599b0fad-54e6-4554-b9a6-e04711c1d2d1",
                },
              },
              attributes: {
                drupal_internal__id: 16,
                langcode: "en",
                created: "2022-06-13T23:10:27+00:00",
                field_description: null,
                field_link: {
                  uri: "https://sanvicentefundacion.com/",
                  title: "",
                  options: [],
                },
                field_subtitle: "Drupal 8 Multisite",
                field_title: {
                  value: "San Vicente Fundación Colombia",
                  format: "basic_html",
                  processed: "San Vicente Fundación Colombia",
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "dc5125d1-1cfd-4ea0-b638-fe11e4ed9eec",
                    meta: {
                      drupal_internal__target_id: "projects_item",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/599b0fad-54e6-4554-b9a6-e04711c1d2d1/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/599b0fad-54e6-4554-b9a6-e04711c1d2d1/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "8052e809-6346-49f2-963d-e9b97222c1a0",
                    meta: {
                      drupal_internal__target_id: 7,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/599b0fad-54e6-4554-b9a6-e04711c1d2d1/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/599b0fad-54e6-4554-b9a6-e04711c1d2d1/relationships/field_media",
                    },
                  },
                },
                field_reference_term: {
                  data: {
                    type: "taxonomy_term--companies",
                    id: "b2b0542b-e02e-40af-b734-ea9018f072d1",
                    meta: {
                      drupal_internal__target_id: 2,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/599b0fad-54e6-4554-b9a6-e04711c1d2d1/field_reference_term",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/projects_item/599b0fad-54e6-4554-b9a6-e04711c1d2d1/relationships/field_reference_term",
                    },
                  },
                },
              },
            },
            {
              type: "taxonomy_term--companies",
              id: "57b00e49-a348-4e17-b4f2-9a06491a7432",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/57b00e49-a348-4e17-b4f2-9a06491a7432",
                },
              },
              attributes: {
                drupal_internal__tid: 1,
                drupal_internal__revision_id: 1,
                langcode: "en",
                revision_created: "2022-06-16T17:01:28+00:00",
                revision_log_message: null,
                status: true,
                name: "VMLY&R",
                description: null,
                weight: 0,
                changed: "2022-06-16T17:01:28+00:00",
                default_langcode: true,
                revision_translation_affected: true,
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
                field_link: {
                  uri: "https://www.vmlyr.com/",
                  title: "",
                  options: [],
                },
              },
              relationships: {
                vid: {
                  data: {
                    type: "taxonomy_vocabulary--taxonomy_vocabulary",
                    id: "43524750-417b-438d-84d1-c9d39bfabd7d",
                    meta: {
                      drupal_internal__target_id: "companies",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/57b00e49-a348-4e17-b4f2-9a06491a7432/vid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/57b00e49-a348-4e17-b4f2-9a06491a7432/relationships/vid",
                    },
                  },
                },
                revision_user: {
                  data: null,
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/57b00e49-a348-4e17-b4f2-9a06491a7432/revision_user",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/57b00e49-a348-4e17-b4f2-9a06491a7432/relationships/revision_user",
                    },
                  },
                },
                parent: {
                  data: [
                    {
                      type: "taxonomy_term--companies",
                      id: "virtual",
                      meta: {
                        links: {
                          help: {
                            href: "https://www.drupal.org/docs/8/modules/json-api/core-concepts#virtual",
                            meta: {
                              about: "Usage and meaning of the 'virtual' resource identifier.",
                            },
                          },
                        },
                      },
                    },
                  ],
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/57b00e49-a348-4e17-b4f2-9a06491a7432/parent",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/57b00e49-a348-4e17-b4f2-9a06491a7432/relationships/parent",
                    },
                  },
                },
              },
            },
            {
              type: "taxonomy_term--companies",
              id: "b2b0542b-e02e-40af-b734-ea9018f072d1",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/b2b0542b-e02e-40af-b734-ea9018f072d1",
                },
              },
              attributes: {
                drupal_internal__tid: 2,
                drupal_internal__revision_id: 2,
                langcode: "en",
                revision_created: "2022-06-16T17:01:45+00:00",
                revision_log_message: null,
                status: true,
                name: "Julius2Grow",
                description: null,
                weight: 0,
                changed: "2022-06-16T17:01:45+00:00",
                default_langcode: true,
                revision_translation_affected: true,
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
                field_link: {
                  uri: "https://www.julius2grow.com/home/",
                  title: "",
                  options: [],
                },
              },
              relationships: {
                vid: {
                  data: {
                    type: "taxonomy_vocabulary--taxonomy_vocabulary",
                    id: "43524750-417b-438d-84d1-c9d39bfabd7d",
                    meta: {
                      drupal_internal__target_id: "companies",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/b2b0542b-e02e-40af-b734-ea9018f072d1/vid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/b2b0542b-e02e-40af-b734-ea9018f072d1/relationships/vid",
                    },
                  },
                },
                revision_user: {
                  data: null,
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/b2b0542b-e02e-40af-b734-ea9018f072d1/revision_user",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/b2b0542b-e02e-40af-b734-ea9018f072d1/relationships/revision_user",
                    },
                  },
                },
                parent: {
                  data: [
                    {
                      type: "taxonomy_term--companies",
                      id: "virtual",
                      meta: {
                        links: {
                          help: {
                            href: "https://www.drupal.org/docs/8/modules/json-api/core-concepts#virtual",
                            meta: {
                              about: "Usage and meaning of the 'virtual' resource identifier.",
                            },
                          },
                        },
                      },
                    },
                  ],
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/b2b0542b-e02e-40af-b734-ea9018f072d1/parent",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/taxonomy_term/companies/b2b0542b-e02e-40af-b734-ea9018f072d1/relationships/parent",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "aaebd344-ab9d-4688-bcf0-6f8c4e54bd43",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43?resourceVersion=id%3A10",
                },
              },
              attributes: {
                drupal_internal__mid: 2,
                drupal_internal__vid: 10,
                name: "linkedin.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/bundle?resourceVersion=id%3A10",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/bundle?resourceVersion=id%3A10",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/uid?resourceVersion=id%3A10",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/uid?resourceVersion=id%3A10",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "0bb89d7f-3cd7-4883-a1da-c2ae0aadf6be",
                    meta: {
                      alt: "Linkedin",
                      title: "",
                      width: 64,
                      height: 64,
                      drupal_internal__target_id: 11,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/field_media_image?resourceVersion=id%3A10",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/field_media_image?resourceVersion=id%3A10",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "0ee46c61-f8fd-48a5-8c02-88d2a11f9619",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619?resourceVersion=id%3A13",
                },
              },
              attributes: {
                drupal_internal__mid: 3,
                drupal_internal__vid: 13,
                name: "instagram_0.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/bundle?resourceVersion=id%3A13",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/bundle?resourceVersion=id%3A13",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/uid?resourceVersion=id%3A13",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/uid?resourceVersion=id%3A13",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "63e7311c-7657-410e-92ee-361e241b4d0f",
                    meta: {
                      alt: "Instagram",
                      title: "",
                      width: 64,
                      height: 64,
                      drupal_internal__target_id: 14,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/field_media_image?resourceVersion=id%3A13",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/field_media_image?resourceVersion=id%3A13",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "8db8af47-ccfa-47ec-93a6-921908cbfd40",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8db8af47-ccfa-47ec-93a6-921908cbfd40?resourceVersion=id%3A20",
                },
              },
              attributes: {
                drupal_internal__mid: 8,
                drupal_internal__vid: 20,
                name: "stellaartoisafrica.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8db8af47-ccfa-47ec-93a6-921908cbfd40/bundle?resourceVersion=id%3A20",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8db8af47-ccfa-47ec-93a6-921908cbfd40/relationships/bundle?resourceVersion=id%3A20",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8db8af47-ccfa-47ec-93a6-921908cbfd40/uid?resourceVersion=id%3A20",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8db8af47-ccfa-47ec-93a6-921908cbfd40/relationships/uid?resourceVersion=id%3A20",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "fb0feac4-9e07-4c7c-bbd9-024fee382dc5",
                    meta: {
                      alt: "Stella Artois Africa",
                      title: "",
                      width: 1919,
                      height: 939,
                      drupal_internal__target_id: 21,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8db8af47-ccfa-47ec-93a6-921908cbfd40/field_media_image?resourceVersion=id%3A20",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8db8af47-ccfa-47ec-93a6-921908cbfd40/relationships/field_media_image?resourceVersion=id%3A20",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "ada3778f-a917-4ad7-8500-f48791d70582",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/ada3778f-a917-4ad7-8500-f48791d70582?resourceVersion=id%3A21",
                },
              },
              attributes: {
                drupal_internal__mid: 9,
                drupal_internal__vid: 21,
                name: "coronasouthafrica.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/ada3778f-a917-4ad7-8500-f48791d70582/bundle?resourceVersion=id%3A21",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/ada3778f-a917-4ad7-8500-f48791d70582/relationships/bundle?resourceVersion=id%3A21",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/ada3778f-a917-4ad7-8500-f48791d70582/uid?resourceVersion=id%3A21",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/ada3778f-a917-4ad7-8500-f48791d70582/relationships/uid?resourceVersion=id%3A21",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "e79e74bc-87cc-49f3-8ffa-0f03d6205f00",
                    meta: {
                      alt: "Corona Beer South Africa",
                      title: "",
                      width: 1919,
                      height: 940,
                      drupal_internal__target_id: 22,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/ada3778f-a917-4ad7-8500-f48791d70582/field_media_image?resourceVersion=id%3A21",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/ada3778f-a917-4ad7-8500-f48791d70582/relationships/field_media_image?resourceVersion=id%3A21",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "8208961c-08c4-4f16-b348-05fdfdba9381",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8208961c-08c4-4f16-b348-05fdfdba9381?resourceVersion=id%3A23",
                },
              },
              attributes: {
                drupal_internal__mid: 11,
                drupal_internal__vid: 23,
                name: "castlemilkstout.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8208961c-08c4-4f16-b348-05fdfdba9381/bundle?resourceVersion=id%3A23",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8208961c-08c4-4f16-b348-05fdfdba9381/relationships/bundle?resourceVersion=id%3A23",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8208961c-08c4-4f16-b348-05fdfdba9381/uid?resourceVersion=id%3A23",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8208961c-08c4-4f16-b348-05fdfdba9381/relationships/uid?resourceVersion=id%3A23",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "fdf46515-6861-442c-849f-f429657e1e3c",
                    meta: {
                      alt: "Castle Milk Stout",
                      title: "",
                      width: 1919,
                      height: 940,
                      drupal_internal__target_id: 24,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8208961c-08c4-4f16-b348-05fdfdba9381/field_media_image?resourceVersion=id%3A23",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8208961c-08c4-4f16-b348-05fdfdba9381/relationships/field_media_image?resourceVersion=id%3A23",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "2c253eef-50cc-41c0-80e6-4eb45f4189ca",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/2c253eef-50cc-41c0-80e6-4eb45f4189ca?resourceVersion=id%3A25",
                },
              },
              attributes: {
                drupal_internal__mid: 10,
                drupal_internal__vid: 25,
                name: "voyconitau.jpg",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/2c253eef-50cc-41c0-80e6-4eb45f4189ca/bundle?resourceVersion=id%3A25",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/2c253eef-50cc-41c0-80e6-4eb45f4189ca/relationships/bundle?resourceVersion=id%3A25",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/2c253eef-50cc-41c0-80e6-4eb45f4189ca/uid?resourceVersion=id%3A25",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/2c253eef-50cc-41c0-80e6-4eb45f4189ca/relationships/uid?resourceVersion=id%3A25",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "ee6c88f1-7c19-4609-ad04-5e93c20b81fa",
                    meta: {
                      alt: "Voy con Itau",
                      title: "",
                      width: 1902,
                      height: 940,
                      drupal_internal__target_id: 26,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/2c253eef-50cc-41c0-80e6-4eb45f4189ca/field_media_image?resourceVersion=id%3A25",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/2c253eef-50cc-41c0-80e6-4eb45f4189ca/relationships/field_media_image?resourceVersion=id%3A25",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "8c1d75b0-ef18-4367-8518-b53f8c0f4958",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8c1d75b0-ef18-4367-8518-b53f8c0f4958?resourceVersion=id%3A24",
                },
              },
              attributes: {
                drupal_internal__mid: 12,
                drupal_internal__vid: 24,
                name: "placetopay.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8c1d75b0-ef18-4367-8518-b53f8c0f4958/bundle?resourceVersion=id%3A24",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8c1d75b0-ef18-4367-8518-b53f8c0f4958/relationships/bundle?resourceVersion=id%3A24",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8c1d75b0-ef18-4367-8518-b53f8c0f4958/uid?resourceVersion=id%3A24",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8c1d75b0-ef18-4367-8518-b53f8c0f4958/relationships/uid?resourceVersion=id%3A24",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "5b43a9d3-babe-4e54-8281-b48a2ba2103f",
                    meta: {
                      alt: "Payment Gateway Integration",
                      title: "",
                      width: 1919,
                      height: 940,
                      drupal_internal__target_id: 25,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8c1d75b0-ef18-4367-8518-b53f8c0f4958/field_media_image?resourceVersion=id%3A24",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8c1d75b0-ef18-4367-8518-b53f8c0f4958/relationships/field_media_image?resourceVersion=id%3A24",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "8052e809-6346-49f2-963d-e9b97222c1a0",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8052e809-6346-49f2-963d-e9b97222c1a0?resourceVersion=id%3A19",
                },
              },
              attributes: {
                drupal_internal__mid: 7,
                drupal_internal__vid: 19,
                name: "sanvicentefundacion.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8052e809-6346-49f2-963d-e9b97222c1a0/bundle?resourceVersion=id%3A19",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8052e809-6346-49f2-963d-e9b97222c1a0/relationships/bundle?resourceVersion=id%3A19",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8052e809-6346-49f2-963d-e9b97222c1a0/uid?resourceVersion=id%3A19",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8052e809-6346-49f2-963d-e9b97222c1a0/relationships/uid?resourceVersion=id%3A19",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "8baf432a-7ce8-45a3-9714-6811a147e3b5",
                    meta: {
                      alt: "San Vicente Fundación",
                      title: "",
                      width: 1919,
                      height: 940,
                      drupal_internal__target_id: 20,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8052e809-6346-49f2-963d-e9b97222c1a0/field_media_image?resourceVersion=id%3A19",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8052e809-6346-49f2-963d-e9b97222c1a0/relationships/field_media_image?resourceVersion=id%3A19",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "0bb89d7f-3cd7-4883-a1da-c2ae0aadf6be",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/0bb89d7f-3cd7-4883-a1da-c2ae0aadf6be",
                },
              },
              attributes: {
                drupal_internal__fid: 11,
                filename: "linkedin.png",
                uri: {
                  value: "public://2022-06/linkedin.png",
                  url: "/sites/default/files/2022-06/linkedin.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/linkedin.png?itok=h0MqTYn_",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/linkedin.png?itok=IYdPo6-Q",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/linkedin.png?itok=dZF2UHnV",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/linkedin.png?itok=YejkGuhY",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/linkedin.png?itok=Qnq_d2H1",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/0bb89d7f-3cd7-4883-a1da-c2ae0aadf6be/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/0bb89d7f-3cd7-4883-a1da-c2ae0aadf6be/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "63e7311c-7657-410e-92ee-361e241b4d0f",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/63e7311c-7657-410e-92ee-361e241b4d0f",
                },
              },
              attributes: {
                drupal_internal__fid: 14,
                filename: "instagram_0.png",
                uri: {
                  value: "public://2022-06/instagram_0.png",
                  url: "/sites/default/files/2022-06/instagram_0.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/instagram_0.png?itok=tMHzjYlp",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/instagram_0.png?itok=Dq7Y-m2C",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/instagram_0.png?itok=xu9HDavL",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/instagram_0.png?itok=kMMzoCyp",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/instagram_0.png?itok=jhBCQwt7",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/63e7311c-7657-410e-92ee-361e241b4d0f/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/63e7311c-7657-410e-92ee-361e241b4d0f/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "fb0feac4-9e07-4c7c-bbd9-024fee382dc5",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/fb0feac4-9e07-4c7c-bbd9-024fee382dc5",
                },
              },
              attributes: {
                drupal_internal__fid: 21,
                filename: "stellaartoisafrica.png",
                uri: {
                  value: "public://2022-06/stellaartoisafrica.png",
                  url: "/sites/default/files/2022-06/stellaartoisafrica.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/stellaartoisafrica.png?itok=FwiSpwOp",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/stellaartoisafrica.png?itok=swoQxodF",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/stellaartoisafrica.png?itok=QRSx7In3",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/stellaartoisafrica.png?itok=yY-xfUvu",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/stellaartoisafrica.png?itok=EHPn33_d",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/fb0feac4-9e07-4c7c-bbd9-024fee382dc5/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/fb0feac4-9e07-4c7c-bbd9-024fee382dc5/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "e79e74bc-87cc-49f3-8ffa-0f03d6205f00",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/e79e74bc-87cc-49f3-8ffa-0f03d6205f00",
                },
              },
              attributes: {
                drupal_internal__fid: 22,
                filename: "coronasouthafrica.png",
                uri: {
                  value: "public://2022-06/coronasouthafrica.png",
                  url: "/sites/default/files/2022-06/coronasouthafrica.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/coronasouthafrica.png?itok=EMgEO66t",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/coronasouthafrica.png?itok=5Fm66Qm2",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/coronasouthafrica.png?itok=zt8huYCq",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/coronasouthafrica.png?itok=hl7tZyxt",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/coronasouthafrica.png?itok=-PAPCW1E",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/e79e74bc-87cc-49f3-8ffa-0f03d6205f00/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/e79e74bc-87cc-49f3-8ffa-0f03d6205f00/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "fdf46515-6861-442c-849f-f429657e1e3c",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/fdf46515-6861-442c-849f-f429657e1e3c",
                },
              },
              attributes: {
                drupal_internal__fid: 24,
                filename: "castlemilkstout.png",
                uri: {
                  value: "public://2022-06/castlemilkstout.png",
                  url: "/sites/default/files/2022-06/castlemilkstout.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/castlemilkstout.png?itok=GCakoGC7",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/castlemilkstout.png?itok=y8J9dJyw",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/castlemilkstout.png?itok=37QMEszI",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/castlemilkstout.png?itok=cTdENJ9J",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/castlemilkstout.png?itok=Vw6P6zTI",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/fdf46515-6861-442c-849f-f429657e1e3c/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/fdf46515-6861-442c-849f-f429657e1e3c/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "ee6c88f1-7c19-4609-ad04-5e93c20b81fa",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/ee6c88f1-7c19-4609-ad04-5e93c20b81fa",
                },
              },
              attributes: {
                drupal_internal__fid: 26,
                filename: "voyconitau.jpg",
                uri: {
                  value: "public://2022-06/voyconitau.jpg",
                  url: "/sites/default/files/2022-06/voyconitau.jpg",
                },
                filemime: "image/jpeg",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/voyconitau.jpg?itok=EII1i-k2",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/voyconitau.jpg?itok=mRWsnEEW",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/voyconitau.jpg?itok=Tq8g9bEF",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/voyconitau.jpg?itok=JlVP9vcx",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/voyconitau.jpg?itok=ZzhxkR4N",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/ee6c88f1-7c19-4609-ad04-5e93c20b81fa/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/ee6c88f1-7c19-4609-ad04-5e93c20b81fa/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "5b43a9d3-babe-4e54-8281-b48a2ba2103f",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/5b43a9d3-babe-4e54-8281-b48a2ba2103f",
                },
              },
              attributes: {
                drupal_internal__fid: 25,
                filename: "placetopay.png",
                uri: {
                  value: "public://2022-06/placetopay.png",
                  url: "/sites/default/files/2022-06/placetopay.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/placetopay.png?itok=4mpOnhDN",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/placetopay.png?itok=xbU6Qbg_",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/placetopay.png?itok=tMFffXhT",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/placetopay.png?itok=UmpfnVC2",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/placetopay.png?itok=HpmX-ugo",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/5b43a9d3-babe-4e54-8281-b48a2ba2103f/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/5b43a9d3-babe-4e54-8281-b48a2ba2103f/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "8baf432a-7ce8-45a3-9714-6811a147e3b5",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/8baf432a-7ce8-45a3-9714-6811a147e3b5",
                },
              },
              attributes: {
                drupal_internal__fid: 20,
                filename: "sanvicentefundacion.png",
                uri: {
                  value: "public://2022-06/sanvicentefundacion.png",
                  url: "/sites/default/files/2022-06/sanvicentefundacion.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/sanvicentefundacion.png?itok=AkClRuK4",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/sanvicentefundacion.png?itok=44zugVmr",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/sanvicentefundacion.png?itok=VkcFRCFU",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/sanvicentefundacion.png?itok=fuybdem5",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/sanvicentefundacion.png?itok=5sFcxJCq",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/8baf432a-7ce8-45a3-9714-6811a147e3b5/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/8baf432a-7ce8-45a3-9714-6811a147e3b5/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--skill_link",
              id: "f301434d-abdf-481f-8291-bae798a7d0e9",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/f301434d-abdf-481f-8291-bae798a7d0e9",
                },
              },
              attributes: {
                drupal_internal__id: 7,
                langcode: "en",
                created: "2022-05-30T00:13:21+00:00",
                field_link: {
                  uri: "https://drupal.org/",
                  title: "",
                  options: [],
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "15fcde78-3888-4da8-bf5b-7577a973b7cd",
                    meta: {
                      drupal_internal__target_id: "skill_link",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/f301434d-abdf-481f-8291-bae798a7d0e9/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/f301434d-abdf-481f-8291-bae798a7d0e9/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "51f549ac-d7ee-4e4f-8089-d4195b93039d",
                    meta: {
                      drupal_internal__target_id: 4,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/f301434d-abdf-481f-8291-bae798a7d0e9/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/f301434d-abdf-481f-8291-bae798a7d0e9/relationships/field_media",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--skill_link",
              id: "4d8155be-9084-4e72-a1dd-95d143f23133",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/4d8155be-9084-4e72-a1dd-95d143f23133",
                },
              },
              attributes: {
                drupal_internal__id: 8,
                langcode: "en",
                created: "2022-05-30T00:13:44+00:00",
                field_link: {
                  uri: "https://laravel.com/",
                  title: "",
                  options: [],
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "15fcde78-3888-4da8-bf5b-7577a973b7cd",
                    meta: {
                      drupal_internal__target_id: "skill_link",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/4d8155be-9084-4e72-a1dd-95d143f23133/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/4d8155be-9084-4e72-a1dd-95d143f23133/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "89578109-f42a-4d4d-94e9-29f6732a386e",
                    meta: {
                      drupal_internal__target_id: 5,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/4d8155be-9084-4e72-a1dd-95d143f23133/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/4d8155be-9084-4e72-a1dd-95d143f23133/relationships/field_media",
                    },
                  },
                },
              },
            },
            {
              type: "paragraph--skill_link",
              id: "0e5354e8-53af-4971-8af7-575ddfde0ab4",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/0e5354e8-53af-4971-8af7-575ddfde0ab4",
                },
              },
              attributes: {
                drupal_internal__id: 9,
                langcode: "en",
                created: "2022-05-30T00:14:12+00:00",
                field_link: {
                  uri: "https://reactjs.org/",
                  title: "",
                  options: [],
                },
              },
              relationships: {
                paragraph_type: {
                  data: {
                    type: "paragraphs_type--paragraphs_type",
                    id: "15fcde78-3888-4da8-bf5b-7577a973b7cd",
                    meta: {
                      drupal_internal__target_id: "skill_link",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/0e5354e8-53af-4971-8af7-575ddfde0ab4/paragraph_type",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/0e5354e8-53af-4971-8af7-575ddfde0ab4/relationships/paragraph_type",
                    },
                  },
                },
                field_media: {
                  data: {
                    type: "media--image",
                    id: "8d312514-6f5f-465b-946c-0973bfe30eb9",
                    meta: {
                      drupal_internal__target_id: 6,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/0e5354e8-53af-4971-8af7-575ddfde0ab4/field_media",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/skill_link/0e5354e8-53af-4971-8af7-575ddfde0ab4/relationships/field_media",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "51f549ac-d7ee-4e4f-8089-d4195b93039d",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/51f549ac-d7ee-4e4f-8089-d4195b93039d?resourceVersion=id%3A11",
                },
              },
              attributes: {
                drupal_internal__mid: 4,
                drupal_internal__vid: 11,
                name: "drupal_1.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/51f549ac-d7ee-4e4f-8089-d4195b93039d/bundle?resourceVersion=id%3A11",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/51f549ac-d7ee-4e4f-8089-d4195b93039d/relationships/bundle?resourceVersion=id%3A11",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/51f549ac-d7ee-4e4f-8089-d4195b93039d/uid?resourceVersion=id%3A11",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/51f549ac-d7ee-4e4f-8089-d4195b93039d/relationships/uid?resourceVersion=id%3A11",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "3368f4a1-500b-4278-95dd-d0b3f78ebe6a",
                    meta: {
                      alt: "Drupal",
                      title: "",
                      width: 64,
                      height: 64,
                      drupal_internal__target_id: 12,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/51f549ac-d7ee-4e4f-8089-d4195b93039d/field_media_image?resourceVersion=id%3A11",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/51f549ac-d7ee-4e4f-8089-d4195b93039d/relationships/field_media_image?resourceVersion=id%3A11",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "89578109-f42a-4d4d-94e9-29f6732a386e",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/89578109-f42a-4d4d-94e9-29f6732a386e?resourceVersion=id%3A8",
                },
              },
              attributes: {
                drupal_internal__mid: 5,
                drupal_internal__vid: 8,
                name: "logomark.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/89578109-f42a-4d4d-94e9-29f6732a386e/bundle?resourceVersion=id%3A8",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/89578109-f42a-4d4d-94e9-29f6732a386e/relationships/bundle?resourceVersion=id%3A8",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/89578109-f42a-4d4d-94e9-29f6732a386e/uid?resourceVersion=id%3A8",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/89578109-f42a-4d4d-94e9-29f6732a386e/relationships/uid?resourceVersion=id%3A8",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "2586310a-bfec-449a-84d6-ba82808a53db",
                    meta: {
                      alt: "Laravel",
                      title: "",
                      width: 50,
                      height: 52,
                      drupal_internal__target_id: 9,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/89578109-f42a-4d4d-94e9-29f6732a386e/field_media_image?resourceVersion=id%3A8",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/89578109-f42a-4d4d-94e9-29f6732a386e/relationships/field_media_image?resourceVersion=id%3A8",
                    },
                  },
                },
              },
            },
            {
              type: "media--image",
              id: "8d312514-6f5f-465b-946c-0973bfe30eb9",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8d312514-6f5f-465b-946c-0973bfe30eb9?resourceVersion=id%3A9",
                },
              },
              attributes: {
                drupal_internal__mid: 6,
                drupal_internal__vid: 9,
                name: "react.png",
                path: {
                  alias: null,
                  pid: null,
                  langcode: "en",
                },
              },
              relationships: {
                bundle: {
                  data: {
                    type: "media_type--media_type",
                    id: "9426d659-d163-406a-92b9-285b95f435bd",
                    meta: {
                      drupal_internal__target_id: "image",
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8d312514-6f5f-465b-946c-0973bfe30eb9/bundle?resourceVersion=id%3A9",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8d312514-6f5f-465b-946c-0973bfe30eb9/relationships/bundle?resourceVersion=id%3A9",
                    },
                  },
                },
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8d312514-6f5f-465b-946c-0973bfe30eb9/uid?resourceVersion=id%3A9",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8d312514-6f5f-465b-946c-0973bfe30eb9/relationships/uid?resourceVersion=id%3A9",
                    },
                  },
                },
                field_media_image: {
                  data: {
                    type: "file--file",
                    id: "ada1193e-3758-4e89-a9e6-41498bee91be",
                    meta: {
                      alt: "React",
                      title: "",
                      width: 74,
                      height: 64,
                      drupal_internal__target_id: 10,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8d312514-6f5f-465b-946c-0973bfe30eb9/field_media_image?resourceVersion=id%3A9",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/8d312514-6f5f-465b-946c-0973bfe30eb9/relationships/field_media_image?resourceVersion=id%3A9",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "3368f4a1-500b-4278-95dd-d0b3f78ebe6a",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/3368f4a1-500b-4278-95dd-d0b3f78ebe6a",
                },
              },
              attributes: {
                drupal_internal__fid: 12,
                filename: "drupal_1.png",
                uri: {
                  value: "public://2022-06/drupal_1.png",
                  url: "/sites/default/files/2022-06/drupal_1.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/drupal_1.png?itok=QZxWLpkQ",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/drupal_1.png?itok=YxfSJqA-",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/drupal_1.png?itok=3sEX_KYW",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/drupal_1.png?itok=yD-LftLp",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/drupal_1.png?itok=Pz6NlyPS",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/3368f4a1-500b-4278-95dd-d0b3f78ebe6a/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/3368f4a1-500b-4278-95dd-d0b3f78ebe6a/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "2586310a-bfec-449a-84d6-ba82808a53db",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/2586310a-bfec-449a-84d6-ba82808a53db",
                },
              },
              attributes: {
                drupal_internal__fid: 9,
                filename: "logomark.png",
                uri: {
                  value: "public://2022-06/logomark.png",
                  url: "/sites/default/files/2022-06/logomark.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/logomark.png?itok=i060gEAv",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/logomark.png?itok=cKLJS9OE",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/logomark.png?itok=1TEnvxcV",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/logomark.png?itok=QAyUB7Yw",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/logomark.png?itok=xkFVYCn5",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/2586310a-bfec-449a-84d6-ba82808a53db/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/2586310a-bfec-449a-84d6-ba82808a53db/relationships/uid",
                    },
                  },
                },
              },
            },
            {
              type: "file--file",
              id: "ada1193e-3758-4e89-a9e6-41498bee91be",
              links: {
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/ada1193e-3758-4e89-a9e6-41498bee91be",
                },
              },
              attributes: {
                drupal_internal__fid: 10,
                filename: "react.png",
                uri: {
                  value: "public://2022-06/react.png",
                  url: "/sites/default/files/2022-06/react.png",
                },
                filemime: "image/png",
                status: true,
                image_style_uri: {
                  large:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-06/react.png?itok=bQ0HV0Zv",
                  media_library:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-06/react.png?itok=OTjmpCVP",
                  medium:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-06/react.png?itok=poGlfTsA",
                  thumbnail:
                    "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-06/react.png?itok=VOvgOWxg",
                  wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-06/react.png?itok=XBwO09rN",
                },
              },
              relationships: {
                uid: {
                  data: {
                    type: "user--user",
                    id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                    meta: {
                      drupal_internal__target_id: 1,
                    },
                  },
                  links: {
                    related: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/ada1193e-3758-4e89-a9e6-41498bee91be/uid",
                    },
                    self: {
                      href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/ada1193e-3758-4e89-a9e6-41498bee91be/relationships/uid",
                    },
                  },
                },
              },
            },
          ],
          links: {
            self: {
              href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41?include=field_content%2Cfield_content.field_media%2Cfield_content.field_media.field_media_image%2Cfield_content.field_reference_list%2Cfield_content.field_reference_list.field_reference_term%2Cfield_content.field_reference_list.field_media%2Cfield_content.field_reference_list.field_media.field_media_image%2Cfield_content.field_reference_list_secondary%2Cfield_content.field_reference_list_secondary.field_media%2Cfield_content.field_reference_list_secondary.field_media.field_media_image",
            },
          },
        }
      )
    );
  }),
];
