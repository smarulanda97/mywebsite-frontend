import { useRouter } from "next/router";

import Header from "./Header/Header.component";
import Footer from "./Footer/Footer.component";
import { ErrorBoundary, PreviewAlert } from "@/components";

import * as Styled from "./Layout.style";

type Props = {
  children?: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <Styled.Layout>
      <Header />
      <PreviewAlert />
      <main data-testid={"layout-container"}>
        <ErrorBoundary key={asPath}>{children ? children : null}</ErrorBoundary>
      </main>
      <Footer />
    </Styled.Layout>
  );
};
