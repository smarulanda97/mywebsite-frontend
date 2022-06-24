import { RenderResult, waitFor, within } from "@testing-library/react";

import { render } from "@/lib";
import { Node } from "@/components";

describe("<Node>", function () {
  describe("<Portfolio>", () => {
    let component: RenderResult;

    beforeEach(() => {
      component = render(<Node nodePath="/page/portfolio" />);
    });

    /**
     * Checks tan component is rendered correctly.
     *
     * The component should render title, subtitle, description and an image.
     */
    test("Renders correctly.", async () => {
      const { getByRole, getByAltText } = component;

      await waitFor(() => {
        expect(getByRole("heading", { level: 1 }).textContent).toMatch(/santiago/i);
        expect(getByAltText("santiago marulanda", { exact: false })).toBeInTheDocument();
      });
    });

    /**
     *
     */
    test("Renders social and skills icons", async () => {
      const { getByTestId } = component;

      await waitFor(() => {
        const socialLinks = getByTestId("portfolio-icons");
        expect(socialLinks).toBeInTheDocument();

        const links = within(socialLinks).getAllByRole("link");
        expect(links).toHaveLength(5);
        expect(links.map((anchor: HTMLAnchorElement) => `${anchor.target},${anchor.rel}`)).toEqual([
          "_blank,noreferrer",
          "_blank,noreferrer",
          "_blank,noreferrer",
          "_blank,noreferrer",
          "_blank,noreferrer",
        ]);
        expect(within(socialLinks).getAllByRole("img")).toHaveLength(5);
      });
    });

    test("Renders projects of portfolio", async () => {
      await waitFor(() => {
        // Checks title and subtitle of container
        const container = component.getByTestId("portfolio-projects");
        expect(container).toBeInTheDocument();
        expect(component.getByRole("heading", { level: 2 })).toBeInTheDocument();
        expect(
          component.getByText("some awesome projects i've participated", { exact: false })
        ).toBeInTheDocument();

        // Checks each project is rendered title, subtitle, image, link
        const { getAllByRole } = within(container);
        expect(getAllByRole("img").length).toBeGreaterThanOrEqual(1);
        expect(getAllByRole("link").length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
