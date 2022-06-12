import { DehydratedState } from "react-query";

/*
  |--------------------------------------------------------------------------
  | Defines the types of Next.js page props
  |--------------------------------------------------------------------------
  |
  | Types related to node entities returned from JSON:API
  |
  */

export interface PageProps {
  nodePath?: string;
  dehydratedState: DehydratedState;
}
