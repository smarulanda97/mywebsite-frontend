import mockRouter from "next-router-mock";
import { waitFor, within } from "@testing-library/react";

import { render } from "@/lib";
import { theme } from "@/styles";
import { Menu } from "@/components";

describe("<Menu>", function () {
  let component;

  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
    component = render(<Menu name={"main"} />);
  });

  test("Renders correctly", async () => {
    await waitFor(() => {
      const navigation = component.getByRole("navigation");

      expect(navigation).toBeInTheDocument();
      expect(within(navigation).getByText("home", { exact: false })).toBeInTheDocument();
      expect(within(navigation).getAllByRole("link").length).toBeGreaterThanOrEqual(1);
    });
  });

  test("Current link should have active class ", async function () {
    await waitFor(() => {
      const homeLink = component.getByText("home", { exact: false });

      expect(homeLink).toHaveClass("active");
      expect(homeLink).toHaveStyle({ color: theme.colors.primary });
    });
  });

  test("External links should have rel->noreferrer and target->_blank attributes", async function () {
    await waitFor(() => {
      const externalLink = within(component.getByRole("navigation")).getByText("github", {
        exact: false,
      });

      expect(externalLink).toHaveAttribute("target", "_blank");
      expect(externalLink).toHaveAttribute("rel", "noreferrer");
    });
  });
});
