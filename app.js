let date = require("date-fns/addDays");
let express = require("express");
let app = express();
app.get("/", (request, response) => {
  let result = date(new Date(), 100);
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
