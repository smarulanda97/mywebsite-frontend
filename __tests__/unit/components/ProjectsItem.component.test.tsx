import { RenderResult } from "@testing-library/react";

import { render } from "@/lib";
import * as mocks from "@/src/mocks/general";
import ProjectsItem from "@/src/components/Paragraph/ProjectsItem/ProjectsItem.component";

describe("<ProjectsItem>", function () {
  let component: RenderResult;
  const paragraph = mocks.projectsItem;

  beforeEach(() => {
    component = render(<ProjectsItem paragraph={paragraph} />);
  });

  /**
   * ProjectsItem component should render:
   *  - title
   *  - subtitle
   *  - company (name and link)
   *  - link
   */
  test("Renders correctly", async function () {
    const { getByAltText, getByRole, getByText, getAllByRole } = component;

    expect(getByAltText(paragraph.mediaImage.image.alt)).toBeInTheDocument();
    expect(getByRole("heading", { level: 3, name: paragraph.title.processed })).toBeInTheDocument();
    expect(getByText(paragraph.subtitle)).toBeInTheDocument();
    expect(getByText("company " + paragraph.company.name, { exact: false })).toBeInTheDocument();
    expect(getAllByRole("link")).toHaveLength(2);
  });
});
