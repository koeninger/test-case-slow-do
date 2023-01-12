async function locate() {
  let res = await fetch("https://cloudflare.com/cdn-cgi/trace");
  let text = await res.text();
  let info = Object.fromEntries(
    text.split("\n").map((line) => line.split("="))
  );
  return info.colo;
}

export default async function measure(req: Request, worker: string) {
  let colo = await locate();
  let start = Date.now();
  let data = await req.json();
  let duration = Date.now() - start;
  let { length } = JSON.stringify(data);
  return new Response(`worker: ${worker}
duration: ${duration}ms
length: ${length}
colo: ${colo}
`);
}
