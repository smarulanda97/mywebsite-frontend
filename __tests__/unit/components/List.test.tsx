import { render } from "@/lib";
import { List } from "@/components";

describe("<List>", function () {
  const placeholders = [
    {
      id: 1,
      text: "hello",
    },
    {
      id: 2,
      text: "world",
    },
  ];

  test("Renders correctly", function () {
    const component = render(
      <List
        title="placeholder list"
        elements={placeholders}
        render={(element) => <span>{element.text}</span>}
      />
    );

    // Checks styles
    const list = component.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveStyle({ display: 'flex' });

    // Checks elements rendered
    expect(component.container).toHaveTextContent("placeholder list");
    expect(component.getAllByRole("listitem")).toHaveLength(2);
    expect(component.container).toHaveTextContent("world");
    expect(component.container).toHaveTextContent("hello");
  });

  test("Title prop could be optional", function () {
    const { container } = render(
      <List elements={placeholders} render={(element) => <span>{element.text}</span>} />
    );

    expect(container).not.toHaveTextContent("placeholder list");
  });

  test("UI shouldn't change", function () {
    const { container } = render(
      <List
        title="placeholder list"
        elements={placeholders}
        render={(element) => <span>{element.text}</span>}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
