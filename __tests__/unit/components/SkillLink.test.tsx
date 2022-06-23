import { RenderResult } from "@testing-library/react";

import { render } from "@/lib";
import * as mocks from "@/src/mocks/general";
import SkillLink from "@/src/components/Paragraph/SkillLink/SkillLink.component";

describe("<SkillLink>", function () {
  let component: RenderResult;
  const paragraph = mocks.skillLink;

  beforeEach(() => {
    component = render(<SkillLink paragraph={paragraph} />);
  });

  /**
   * SkillLink component should render:
   *  - Image
   *  - Link
   */
  test("Renders correctly", function () {
    const link = component.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
    expect(link).toHaveAttribute("href", paragraph.link.url);

    expect(component.getByAltText(paragraph.mediaImage.image.alt)).toBeInTheDocument();
  });
});
