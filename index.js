const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "template", "index.html"),
        "utf-8",
        (err, conten) => {
          if (err) throw err;
          res.end(conten);
        }
      )
    }


    else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "template", "about.html"),
        "utf-8",
        (err, conten) => {
          if (err) throw err;
          res.end(conten);
        }
      )
    }
    else if (req.url === "/contact") {
        fs.readFile(
          path.join(__dirname, "template", "contact.html"),
          "utf-8",
          (err, conten) => {
            if (err) throw err;
            res.end(conten);
          }
        )
      }

  }
  
  else if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    const body = [];
    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });
    req.on("end", () => {
      const massage = body.toString().split("=")[1];
      res.end(`user keldi: ${massage}`);
    });
  }
});

server.listen(3000, () => {
  console.log("server has been started port on 3000");
});
