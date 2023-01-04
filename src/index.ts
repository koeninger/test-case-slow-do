import measure from "./measure";
export { Test } from "./test";

export interface Env {
  TEST: DurableObjectNamespace;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === "/durable") {
      const test = env.TEST.get(env.TEST.idFromName("test"));
      return test.fetch(req);
    }

    return measure(req, "worker");
  },
};
