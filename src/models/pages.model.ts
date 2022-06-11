import { DehydratedState } from "react-query";

export interface PageProps {
  nodePath?: string;
  dehydratedState: DehydratedState;
}
