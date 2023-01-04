import measure from "./measure";

export class Test {
  state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch(req: Request) {
    return measure(req, "durable");
  }
}
