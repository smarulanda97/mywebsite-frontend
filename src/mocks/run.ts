import { SetupWorkerApi } from "msw";
import { SetupServerApi } from "msw/node";

if (typeof window === "undefined") {
  const { server }: { server: SetupServerApi } = require("./server");
  server.listen();
} else {
  const { worker }: { worker: SetupWorkerApi } = require("./browser");
  worker.start();
}
