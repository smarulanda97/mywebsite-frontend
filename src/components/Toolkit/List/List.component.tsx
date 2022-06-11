import * as Styled from "./List.style";

type Props = {
  title?: string;
  elements: any[];
  render: (props: any) => JSX.Element;
};

const List: React.FC<Props> = (props) => {
  const { title, elements, render } = props;

  return (
    <Styled.Container>
      {title ? <Styled.Title>{title}</Styled.Title> : null}
      <Styled.List>
        {elements.map((element: any) => (
          <li key={element.id}>{render(element)}</li>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

export default List;
