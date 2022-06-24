import { RenderResult, waitFor } from "@testing-library/react";

import { render } from "@/lib";
import { Layout } from "@/components";

describe("<Layout>", function () {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Layout />);
  });

  /**
   * Layout component should render:
   *  - Header:
   *      This component should render main navbar brand, navigation
   *  - Main ()
   *      This component should render main tag
   *  - Footer ()
   *      This component should render navbar brand, copyright
   */
  test("Should render layout containers correctly", async function () {
    const { getByTestId } = component;

    await waitFor(() => {
      expect(getByTestId("layout-header")).toBeInTheDocument();
      expect(getByTestId("layout-container")).toBeInTheDocument();
      expect(getByTestId("layout-footer")).toBeInTheDocument();
    });
  });

  /**
   * Layout component should render:
   *  - Header logo
   *  - Header navigation
   *  - Footer logo
   *  - Copyright
   */
  test("Should render header and footer elements", async function () {
    const { getAllByAltText, getByText } = component;

    await waitFor(() => {
      expect(getAllByAltText("logo", { exact: false })).toHaveLength(2);
      expect(getByText("home", { exact: false, selector: "a" })).toBeInTheDocument();
      expect(getByText("rights reserved", { exact: false })).toBeInTheDocument();
    });
  });
});
