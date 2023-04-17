const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

const express = require("express"),
    app = express();


app.use(
    express.urlencoded({
        extended: false
    })
);


const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");

app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get(
            "port"
        )}`
    );
});
