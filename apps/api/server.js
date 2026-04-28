import http from "node:http";

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "ok", service: "portfolio-api-placeholder" }));
    return;
  }

  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API placeholder listening on port ${port}`);
});
