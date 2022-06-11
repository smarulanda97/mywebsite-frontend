import { PreviewAlert } from "@/components";

import Header from "./Header/Header.component";
import Footer from "./Footer/Footer.component";

import * as Styled from "./Layout.style";

export function Layout({ children }) {
  return (
    <Styled.Layout>
      <Header />
      <PreviewAlert />
      <main>{children}</main>
      <Footer />
    </Styled.Layout>
  );
}
