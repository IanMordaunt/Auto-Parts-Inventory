const router = require('express').Router();
//const { Parts, User } = require("../models");

router.get("/", async (req, res) => {
    res.render("home", { logged_in: req.session.logged_in });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
    }
    else {
        res.render("login");
    }
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
    }
    else {
        res.render("signup");
    }
});

module.exports = router;