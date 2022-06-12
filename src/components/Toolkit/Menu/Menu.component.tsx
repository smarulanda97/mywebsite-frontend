import React from "react";
import { useRouter } from "next/router";

import { useMenu } from "@/hooks";
import { NavLink } from "@/components";
import { MenuLinkContent } from "@/models";

import * as Styled from "./Menu.style";

type Props = {
  name: string;
};

const Menu: React.FC<Props> = (props) => {
  const { asPath } = useRouter();
  const { data, isLoading, isError } = useMenu(props.name);

  if (isLoading || isError) {
    return null;
  }

  return (
    <Styled.Nav role={"navigation"} as={"ul"}>
      {data.tree.map(({ id, url, title }: MenuLinkContent) => (
        <Styled.NavItem key={id} as={"li"}>
          <NavLink url={url} title={title} isActive={asPath === url} />
        </Styled.NavItem>
      ))}
    </Styled.Nav>
  );
};

export default React.memo(Menu);
