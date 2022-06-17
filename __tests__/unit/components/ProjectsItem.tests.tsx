import { render } from "@/lib";
import { projectsItemMock } from "@/src/mocks/handlers/projects-item.mock";
import ProjectsItem from "@/src/components/Paragraph/ProjectsItem/ProjectsItem.component";

describe("<ProjectsItem>", function () {
  let component;
  beforeEach(() => {
    component = render(<ProjectsItem paragraph={projectsItemMock} />);
  });

  test("Renders correctly", async function () {
    expect(component.getByAltText("Placeholder image")).toBeInTheDocument();
    // Checks title and subtitle are rendered
    expect(
      component.getByRole("heading", { level: 3, name: "Placeholder title" })
    ).toBeInTheDocument();
    expect(component.getByText("Placeholder subtitle")).toBeInTheDocument();
    expect(component.getByText("Placeholder company"));
    // Should render 3 links (Title wrapper, and Company wrapper)
    expect(component.getAllByRole("link")).toHaveLength(2);
    // Render description
    expect(component.getByText(/Placeholder description/i)).toBeInTheDocument();
  });
});
