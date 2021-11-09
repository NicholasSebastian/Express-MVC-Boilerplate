import express from "express";
import handlebars from "express-handlebars";

const app = express();
const PORT = process.env.PORT || 3000;

// Allows access to static files inside of the 'content' folder.
app.use(express.static("content"));

// Set the view render engine to 'handlebars'.
const hbs = handlebars.create({ extname: ".hbs", layoutsDir: "./views/shared", defaultLayout: "layout" });
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// Register all the routes from the 'controllers' folder.
app.use("/", require("./routes/HomeRouter"));
// add routes here.

// Fallback page if requested path does not exist.
app.use((req, res) => {
    res.status(404).redirect("/login");
});

// Listen on the port.
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
