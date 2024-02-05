const express = require("express");
const path = require("path");
const URL = require("./models/url");
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  // allUrls.forEach(url => console.log(url.shortId));
  return res.render("home", {
    urls: allUrls,
    // async: true,
  });
})
connectToMongoDB("mongodb://127.0.0.1:27017/short-url-project");
app.listen(PORT, () => {
  console.log("server is running on PORT: ", PORT);
})
