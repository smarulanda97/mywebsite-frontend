import { waitFor, within } from "@testing-library/react";

import { render } from "@/lib";
import { Node } from "@/components";

describe("<NodePortfolio>", () => {
  let component;
  beforeEach(() => {
    component = render(<Node nodePath="/page/portfolio" />);
  });

  test("Renders correctly.", async () => {
    await waitFor(() => {
      // Check title, subtitle, description and image are rendered
      expect(component.getByRole("heading", { level: 1 }).textContent).toMatch(/santiago/i);
      expect(component.getByAltText("santiago marulanda", { exact: false })).toBeInTheDocument();
    });
  });

  test("Renders social and skills icons", async () => {
    await waitFor(() => {
      const socialLinks = component.getByTestId("portfolio-icons");
      expect(socialLinks).toBeInTheDocument();

      // Checks each links and inside each one exists the icon
      const links = within(socialLinks).getAllByRole("link");
      expect(links).toHaveLength(5);

      // Checks each line has _blank and noreferrer attributes
      expect(links.map((anchor: HTMLAnchorElement) => `${anchor.target},${anchor.rel}`)).toEqual([
        "_blank,noreferrer",
        "_blank,noreferrer",
        "_blank,noreferrer",
        "_blank,noreferrer",
        "_blank,noreferrer",
      ]);

      // Checks icons images are rendered
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
