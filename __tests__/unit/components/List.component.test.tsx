import { faker } from "@faker-js/faker";

import { render } from "@/lib";
import { List } from "@/components";
import * as mocks from "@/src/mocks/general";

describe("<List>", function () {
  const elements = mocks.list;
  const title = faker.lorem.words(2);

  /**
   * List component should render:
   *  - List of elements using ul>li
   */
  test("Renders correctly", function () {
    const { container, getAllByRole, getByRole } = render(
      <List title={title} elements={elements} render={(element) => <span>{element.text}</span>} />
    );

    expect(getByRole("list")).toBeInTheDocument();
    expect(getByRole("list")).toHaveStyle({ display: "flex" });

    expect(container).toHaveTextContent(title);
    expect(container).toHaveTextContent(elements[0].text);
    expect(container).toHaveTextContent(elements[1].text);

    expect(getAllByRole("listitem")).toHaveLength(2);
  });

  test("Title could be optional", function () {
    const { container } = render(
      <List elements={elements} render={(element) => <span>{element.text}</span>} />
    );

    expect(container).not.toHaveTextContent(title);
  });
});
