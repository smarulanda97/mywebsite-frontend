import "cross-fetch/polyfill";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import mockRouter from "next-router-mock";

import { server } from "@/src/mocks/server";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line react/display-name
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

beforeEach(() => mockRouter.setCurrentUrl("/initial"));

beforeAll(() => server.listen());

afterEach(() => server.restoreHandlers());

afterAll(() => server.close());
