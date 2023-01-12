## Huge performance delta between execution in Worker and Durable Object

This test case demonstrates a significate performance difference when executing in a worker vs executing in a durable object worker, in this case parsing a 2MB JSON request body.

```bash
$ npm install
$ wrangler publish
[...]
Published test-case-slow-do (0.41 sec)
  https://test-case-slow-do.estii.workers.dev
[...]
$ curl -X POST https://test-case-slow-do.estii.workers.dev/worker -d @test.json
worker: worker
duration: 0ms
length: 815159
colo: HKG
$ curl -X POST https://test-case-slow-do.estii.workers.dev/durable -d @test.json
worker: durable
duration: 4504ms
length: 815159
colo: SIN
```
