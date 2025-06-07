import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Configure __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Configure EJS view engine
app.set("views", path.join(__dirname, "views"));  // Set views directory
app.set("view engine", "ejs");  // Set EJS as template engine

// Routes
app.get("/", (req, res) => {
  res.render("index", { 
    title: "Pritika Giri",
    activePage: "home" 
  });
});
app.get("/projects", (req, res) => {
  res.render("projects.ejs", { 
    title: "Pritika Giri",
    activePage: "projects" 
  });
});
app.get("/about", (req, res) => {
  res.render("about.ejs", { 
    title: "Pritika Giri",
    activePage: "about" 
  });
});

app.get("/skills", (req, res) => {
  res.render("skills.ejs", { 
    title: "About Me",
    activePage: "skills" 
  });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs", { 
    title: "Pritika Giri",
    activePage: "contact" 
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});