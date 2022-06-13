import { rest } from "msw";

export const nodePortfolioMocks = [
  rest.get("*/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41", (req, res, ctx) => {
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
        data: {
          type: "node--portfolio",
          id: "783f7469-2a3f-4287-85f0-da55dd063e41",
          links: {
            self: {
              href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41?resourceVersion=id%3A11",
            },
          },
          attributes: {
            path: {
              alias: "/portfolio/santiago-marulanda-molina",
              pid: 3,
              langcode: "en",
            },
            drupal_internal__nid: 3,
            drupal_internal__vid: 11,
            langcode: "en",
            revision_timestamp: "2022-05-30T00:14:43+00:00",
            revision_log: null,
            status: true,
            title: "Santiago Marulanda Molina",
            created: "2022-05-14T13:38:22+00:00",
            changed: "2022-05-30T00:14:43+00:00",
            promote: true,
            sticky: false,
            default_langcode: true,
            revision_translation_affected: true,
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
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/node_type?resourceVersion=id%3A11",
                },
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/relationships/node_type?resourceVersion=id%3A11",
                },
              },
            },
            revision_uid: {
              data: {
                type: "user--user",
                id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                meta: {
                  drupal_internal__target_id: 1,
                },
              },
              links: {
                related: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/revision_uid?resourceVersion=id%3A11",
                },
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/relationships/revision_uid?resourceVersion=id%3A11",
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
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/uid?resourceVersion=id%3A11",
                },
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/relationships/uid?resourceVersion=id%3A11",
                },
              },
            },
            field_content: {
              data: [
                {
                  type: "paragraph--portfolio_banner",
                  id: "8b6c2dfe-22bc-46b7-a5f5-b4eeeb90d1ce",
                  meta: {
                    target_revision_id: 18,
                    drupal_internal__target_id: 2,
                  },
                },
              ],
              links: {
                related: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/field_content?resourceVersion=id%3A11",
                },
                self: {
                  href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41/relationships/field_content?resourceVersion=id%3A11",
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
              drupal_internal__revision_id: 18,
              langcode: "en",
              status: true,
              created: "2022-05-14T13:38:34+00:00",
              parent_id: "3",
              parent_type: "node",
              parent_field_name: "field_content",
              behavior_settings: [],
              default_langcode: true,
              revision_translation_affected: true,
              field_description: {
                value:
                  "<p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>\r\n",
                format: "basic_html",
                processed:
                  "<p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>",
              },
              field_subtitle: "Drupal Backend Developer & Coding Lover",
              field_title: {
                value:
                  "Hi, I’m <span>Santiago Marulanda</span> a Developer.Professional Coder.Developer.",
                format: "basic_html",
                processed:
                  "Hi, I’m <span>Santiago Marulanda</span> a Developer.Professional Coder.Developer.",
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
                    id: "cea91fb6-314e-48bf-9da2-5fb7808e0638",
                    meta: {
                      target_revision_id: 13,
                      drupal_internal__target_id: 5,
                    },
                  },
                  {
                    type: "paragraph--social_link",
                    id: "d34ac63a-a3ab-4bca-ac21-2d1214932d23",
                    meta: {
                      target_revision_id: 14,
                      drupal_internal__target_id: 6,
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
                      target_revision_id: 15,
                      drupal_internal__target_id: 7,
                    },
                  },
                  {
                    type: "paragraph--skill_link",
                    id: "4d8155be-9084-4e72-a1dd-95d143f23133",
                    meta: {
                      target_revision_id: 16,
                      drupal_internal__target_id: 8,
                    },
                  },
                  {
                    type: "paragraph--skill_link",
                    id: "0e5354e8-53af-4971-8af7-575ddfde0ab4",
                    meta: {
                      target_revision_id: 17,
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
            type: "media--image",
            id: "210eaf87-c046-4cc7-9199-23bcaf4448b7",
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7?resourceVersion=id%3A1",
              },
            },
            attributes: {
              drupal_internal__mid: 1,
              drupal_internal__vid: 1,
              langcode: "en",
              revision_created: "2022-05-12T21:26:57+00:00",
              revision_log_message: null,
              status: true,
              name: "banner-01.png",
              created: "2022-05-12T21:26:49+00:00",
              changed: "2022-05-12T21:26:49+00:00",
              default_langcode: true,
              revision_translation_affected: true,
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/bundle?resourceVersion=id%3A1",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/bundle?resourceVersion=id%3A1",
                  },
                },
              },
              revision_user: {
                data: null,
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/revision_user?resourceVersion=id%3A1",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/revision_user?resourceVersion=id%3A1",
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/uid?resourceVersion=id%3A1",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/uid?resourceVersion=id%3A1",
                  },
                },
              },
              thumbnail: {
                data: {
                  type: "file--file",
                  id: "8501f896-9f02-4380-acb4-977cea4111fe",
                  meta: {
                    alt: "Placeholder image",
                    title: null,
                    width: 700,
                    height: 960,
                    drupal_internal__target_id: 1,
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/thumbnail?resourceVersion=id%3A1",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/thumbnail?resourceVersion=id%3A1",
                  },
                },
              },
              field_media_image: {
                data: {
                  type: "file--file",
                  id: "8501f896-9f02-4380-acb4-977cea4111fe",
                  meta: {
                    alt: "Placeholder image",
                    title: "",
                    width: 700,
                    height: 960,
                    drupal_internal__target_id: 1,
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/field_media_image?resourceVersion=id%3A1",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/210eaf87-c046-4cc7-9199-23bcaf4448b7/relationships/field_media_image?resourceVersion=id%3A1",
                  },
                },
              },
            },
          },
          {
            type: "file--file",
            id: "8501f896-9f02-4380-acb4-977cea4111fe",
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/8501f896-9f02-4380-acb4-977cea4111fe",
              },
            },
            attributes: {
              drupal_internal__fid: 1,
              langcode: "en",
              filename: "banner-01.png",
              uri: {
                value: "public://2022-05/banner-01.png",
                url: "/sites/default/files/2022-05/banner-01.png",
              },
              filemime: "image/png",
              filesize: 9049,
              status: true,
              created: "2022-05-12T21:26:49+00:00",
              changed: "2022-05-12T21:26:57+00:00",
              image_style_uri: {
                large:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-05/banner-01.png?itok=w8tG1f_e",
                media_library:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-05/banner-01.png?itok=R66bJieT",
                medium:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-05/banner-01.png?itok=g3UOhe4N",
                thumbnail:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-05/banner-01.png?itok=xfS3DCDs",
                wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-05/banner-01.png?itok=3-Sw_cY2",
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/8501f896-9f02-4380-acb4-977cea4111fe/uid",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/8501f896-9f02-4380-acb4-977cea4111fe/relationships/uid",
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
              drupal_internal__revision_id: 13,
              langcode: "en",
              status: true,
              created: "2022-05-29T11:16:51+00:00",
              parent_id: "2",
              parent_type: "paragraph",
              parent_field_name: "field_reference_list",
              behavior_settings: [],
              default_langcode: true,
              revision_translation_affected: null,
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
            type: "paragraph--social_link",
            id: "d34ac63a-a3ab-4bca-ac21-2d1214932d23",
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/paragraph/social_link/d34ac63a-a3ab-4bca-ac21-2d1214932d23",
              },
            },
            attributes: {
              drupal_internal__id: 6,
              drupal_internal__revision_id: 14,
              langcode: "en",
              status: true,
              created: "2022-05-29T11:16:53+00:00",
              parent_id: "2",
              parent_type: "paragraph",
              parent_field_name: "field_reference_list",
              behavior_settings: [],
              default_langcode: true,
              revision_translation_affected: null,
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
            type: "media--image",
            id: "0ee46c61-f8fd-48a5-8c02-88d2a11f9619",
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619?resourceVersion=id%3A3",
              },
            },
            attributes: {
              drupal_internal__mid: 3,
              drupal_internal__vid: 3,
              langcode: "en",
              revision_created: "2022-05-26T09:23:50+00:00",
              revision_log_message: null,
              status: true,
              name: "instagram_icon.png",
              created: "2022-05-26T09:23:41+00:00",
              changed: "2022-05-26T09:23:41+00:00",
              default_langcode: true,
              revision_translation_affected: true,
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/bundle?resourceVersion=id%3A3",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/bundle?resourceVersion=id%3A3",
                  },
                },
              },
              revision_user: {
                data: null,
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/revision_user?resourceVersion=id%3A3",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/revision_user?resourceVersion=id%3A3",
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/uid?resourceVersion=id%3A3",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/uid?resourceVersion=id%3A3",
                  },
                },
              },
              thumbnail: {
                data: {
                  type: "file--file",
                  id: "d87e51bb-9823-4988-9fae-d37b9a0c0a4e",
                  meta: {
                    alt: "Instagram Santiago Marulanda Molina",
                    title: null,
                    width: 32,
                    height: 32,
                    drupal_internal__target_id: 3,
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/thumbnail?resourceVersion=id%3A3",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/thumbnail?resourceVersion=id%3A3",
                  },
                },
              },
              field_media_image: {
                data: {
                  type: "file--file",
                  id: "d87e51bb-9823-4988-9fae-d37b9a0c0a4e",
                  meta: {
                    alt: "Instagram Santiago Marulanda Molina",
                    title: "",
                    width: 32,
                    height: 32,
                    drupal_internal__target_id: 3,
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/field_media_image?resourceVersion=id%3A3",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/0ee46c61-f8fd-48a5-8c02-88d2a11f9619/relationships/field_media_image?resourceVersion=id%3A3",
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
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43?resourceVersion=id%3A4",
              },
            },
            attributes: {
              drupal_internal__mid: 2,
              drupal_internal__vid: 4,
              langcode: "en",
              revision_created: "2022-05-26T09:24:57+00:00",
              revision_log_message: null,
              status: true,
              name: "linkedin_icon_0.png",
              created: "2022-05-26T09:21:14+00:00",
              changed: "2022-05-26T09:24:57+00:00",
              default_langcode: true,
              revision_translation_affected: true,
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/bundle?resourceVersion=id%3A4",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/bundle?resourceVersion=id%3A4",
                  },
                },
              },
              revision_user: {
                data: {
                  type: "user--user",
                  id: "0ba425f3-b917-4df4-ac55-ca54d89132ed",
                  meta: {
                    drupal_internal__target_id: 1,
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/revision_user?resourceVersion=id%3A4",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/revision_user?resourceVersion=id%3A4",
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/uid?resourceVersion=id%3A4",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/uid?resourceVersion=id%3A4",
                  },
                },
              },
              thumbnail: {
                data: {
                  type: "file--file",
                  id: "223cb367-0790-4b58-ab65-548c7ad40a64",
                  meta: {
                    alt: "LinkedIn Santiago Marulanda Molina",
                    title: null,
                    width: 32,
                    height: 32,
                    drupal_internal__target_id: 4,
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/thumbnail?resourceVersion=id%3A4",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/thumbnail?resourceVersion=id%3A4",
                  },
                },
              },
              field_media_image: {
                data: {
                  type: "file--file",
                  id: "223cb367-0790-4b58-ab65-548c7ad40a64",
                  meta: {
                    alt: "LinkedIn Santiago Marulanda Molina",
                    title: "",
                    width: 32,
                    height: 32,
                    drupal_internal__target_id: 4,
                  },
                },
                links: {
                  related: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/field_media_image?resourceVersion=id%3A4",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/media/image/aaebd344-ab9d-4688-bcf0-6f8c4e54bd43/relationships/field_media_image?resourceVersion=id%3A4",
                  },
                },
              },
            },
          },
          {
            type: "file--file",
            id: "d87e51bb-9823-4988-9fae-d37b9a0c0a4e",
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/d87e51bb-9823-4988-9fae-d37b9a0c0a4e",
              },
            },
            attributes: {
              drupal_internal__fid: 3,
              langcode: "en",
              filename: "instagram_icon.png",
              uri: {
                value: "public://2022-05/instagram_icon.png",
                url: "/sites/default/files/2022-05/instagram_icon.png",
              },
              filemime: "image/png",
              filesize: 637,
              status: true,
              created: "2022-05-26T09:23:41+00:00",
              changed: "2022-05-26T09:23:50+00:00",
              image_style_uri: {
                large:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-05/instagram_icon.png?itok=e_TksLu6",
                media_library:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-05/instagram_icon.png?itok=Tk8_TW7w",
                medium:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-05/instagram_icon.png?itok=xpKKvfmt",
                thumbnail:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-05/instagram_icon.png?itok=ZVqpMHOG",
                wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-05/instagram_icon.png?itok=yWN7-Tfb",
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/d87e51bb-9823-4988-9fae-d37b9a0c0a4e/uid",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/d87e51bb-9823-4988-9fae-d37b9a0c0a4e/relationships/uid",
                  },
                },
              },
            },
          },
          {
            type: "file--file",
            id: "223cb367-0790-4b58-ab65-548c7ad40a64",
            links: {
              self: {
                href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/223cb367-0790-4b58-ab65-548c7ad40a64",
              },
            },
            attributes: {
              drupal_internal__fid: 4,
              langcode: "en",
              filename: "linkedin_icon_0.png",
              uri: {
                value: "public://2022-05/linkedin_icon_0.png",
                url: "/sites/default/files/2022-05/linkedin_icon_0.png",
              },
              filemime: "image/png",
              filesize: 646,
              status: true,
              created: "2022-05-26T09:24:54+00:00",
              changed: "2022-05-26T09:24:57+00:00",
              image_style_uri: {
                large:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/large/public/2022-05/linkedin_icon_0.png?itok=ohNQ9Qtu",
                media_library:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/media_library/public/2022-05/linkedin_icon_0.png?itok=hcggzL1m",
                medium:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/medium/public/2022-05/linkedin_icon_0.png?itok=iBkTZDEy",
                thumbnail:
                  "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/thumbnail/public/2022-05/linkedin_icon_0.png?itok=7zayz_1J",
                wide: "http://admin-santiago-marulanda.lndo.site/sites/default/files/styles/wide/public/2022-05/linkedin_icon_0.png?itok=1kBTUafB",
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
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/223cb367-0790-4b58-ab65-548c7ad40a64/uid",
                  },
                  self: {
                    href: "http://admin-santiago-marulanda.lndo.site/jsonapi/file/file/223cb367-0790-4b58-ab65-548c7ad40a64/relationships/uid",
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
              drupal_internal__revision_id: 15,
              langcode: "en",
              status: true,
              created: "2022-05-30T00:13:21+00:00",
              parent_id: "2",
              parent_type: "paragraph",
              parent_field_name: "field_reference_list_secondary",
              behavior_settings: [],
              default_langcode: true,
              revision_translation_affected: true,
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
                  id: "0ee46c61-f8fd-48a5-8c02-88d2a11f9619",
                  meta: {
                    drupal_internal__target_id: 3,
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
              drupal_internal__revision_id: 16,
              langcode: "en",
              status: true,
              created: "2022-05-30T00:13:44+00:00",
              parent_id: "2",
              parent_type: "paragraph",
              parent_field_name: "field_reference_list_secondary",
              behavior_settings: [],
              default_langcode: true,
              revision_translation_affected: true,
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
                  id: "aaebd344-ab9d-4688-bcf0-6f8c4e54bd43",
                  meta: {
                    drupal_internal__target_id: 2,
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
              drupal_internal__revision_id: 17,
              langcode: "en",
              status: true,
              created: "2022-05-30T00:14:12+00:00",
              parent_id: "2",
              parent_type: "paragraph",
              parent_field_name: "field_reference_list_secondary",
              behavior_settings: [],
              default_langcode: true,
              revision_translation_affected: true,
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
                  id: "aaebd344-ab9d-4688-bcf0-6f8c4e54bd43",
                  meta: {
                    drupal_internal__target_id: 2,
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
        ],
        links: {
          self: {
            href: "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41?include=field_content%2Cfield_content.field_media%2Cfield_content.field_media.field_media_image%2Cfield_content.field_reference_list%2Cfield_content.field_reference_list.field_media%2Cfield_content.field_reference_list.field_media.field_media_image%2Cfield_content.field_reference_list_secondary%2Cfield_content.field_reference_list_secondary.field_media%2Cfield_content.field_reference_list_secondary.field_media.field_media_image",
          },
        },
      })
    );
  }),
];
