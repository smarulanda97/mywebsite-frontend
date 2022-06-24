import { PreviewAlert } from "@/components";

import Header from "./Header/Header.component";
import Footer from "./Footer/Footer.component";

import * as Styled from "./Layout.style";

type Props = {
  children?: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Styled.Layout>
      <Header />
      <PreviewAlert />
      <main data-testid={"layout-container"}>{children ? children : null}</main>
      <Footer />
    </Styled.Layout>
  );
};
