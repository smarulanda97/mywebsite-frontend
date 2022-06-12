import Link from "next/link";
import { Nav } from "react-bootstrap";
import { getDefaultLinkAttributes } from "@/utilities";

type Props = {
  url: string;
  title: string;
  isActive: boolean;
};

const NavLink: React.FC<Props> = (props) => {
  const { url, title, isActive } = props;

  return (
    <Link href={url} passHref>
      <Nav.Link href={url} active={isActive} {...getDefaultLinkAttributes(url)}>
        {title}
      </Nav.Link>
    </Link>
  );
};

export default NavLink;
