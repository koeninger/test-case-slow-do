export default async function measure(req: Request, worker: string) {
  let start = Date.now();
  let data = await req.json();
  let duration = Date.now() - start;
  let { length } = JSON.stringify(data);
  return Response.json({ worker, duration, length });
}
