import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Configure __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
 
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
  const projects = [
    {
      title: 'Blog App',
      description: 'A full-stack blog app with secure login, dynamic posts, and responsive design using Node.js, Express, and EJS.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7331738159342391297/',
      images: [
        '/images/Blog_page.png',
        '/images/Blog_page2.png',
        '/images/Blog_login.png'
      ]
    },
    {
      title: 'Bookstore App',
      description: 'An e-commerce bookstore with secure checkout, cart, and admin dashboard built using PostgreSQL, Node.js, and EJS.',
      link: 'https://github.com/PRITIKA-GIRI/MindBloom-Ecom',
      images: [
        '/images/Bookstore2.png'
      ]
    },
    // Add more projects here
  ];

  res.render("projects", { 
    title: "Pritika Giri",
    activePage: "projects",
    projects  // pass the array to the view
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