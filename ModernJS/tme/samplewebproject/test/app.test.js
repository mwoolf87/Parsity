const assert = require("assert");

it("has a text input", async () => {
  const dom = await render("index.html");
  console.log(dom);

  const input = dom.window.document.querySelector("input");
  assert(input);
});
