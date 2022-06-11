import { render } from "@/lib";
import { mediaImageMock } from "@/src/mocks/handlers/media-image.mock";

import SkillLink from "@/src/components/Paragraph/SkillLink/SkillLink.component";

const paragraph = {
  id: "1",
  type: "paragraph--skill_link",
  link: {
    url: "/placeholder",
    title: "placeholder link",
  },
  mediaImage: mediaImageMock,
};

describe("<SkillLink>", function () {
  let component;
  beforeEach(() => {
    component = render(<SkillLink paragraph={paragraph} />);
  });

  test("Renders correctly", function () {
    const link = component.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
    expect(link).toHaveAttribute("href", "/placeholder");

    expect(component.getByAltText("placeholder")).toBeInTheDocument();
  });
});
