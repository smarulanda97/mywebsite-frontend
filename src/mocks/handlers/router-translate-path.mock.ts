import { rest } from "msw";

export const routerTranslatePathMocks = [
  rest.get("*/router/translate-path", (req, res, ctx) => {
    const path: string = req.url.searchParams.get("path");

    return res(
      ctx.status(200),
      ctx.json({
        resolved: "http://admin-santiago-marulanda.lndo.site/portfolio/santiago-marulanda-molina",
        isHomePath: false,
        entity: {
          canonical:
            "http://admin-santiago-marulanda.lndo.site/portfolio/santiago-marulanda-molina",
          type: "node",
          bundle: "portfolio",
          id: "3",
          uuid: "783f7469-2a3f-4287-85f0-da55dd063e41",
          langcode: "en",
        },
        label: "Santiago Marulanda Molina",
        jsonapi: {
          individual:
            "http://admin-santiago-marulanda.lndo.site/jsonapi/node/portfolio/783f7469-2a3f-4287-85f0-da55dd063e41",
          resourceName: "node--portfolio",
          pathPrefix: "jsonapi",
          basePath: "/jsonapi",
          entryPoint: "http://admin-santiago-marulanda.lndo.site/jsonapi",
        },
        meta: {
          deprecated: {
            "jsonapi.pathPrefix":
              "This property has been deprecated and will be removed in the next version of Decoupled Router. Use basePath instead.",
          },
        },
      })
    );
  }),
];
