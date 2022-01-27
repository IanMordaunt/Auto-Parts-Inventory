const router = require('express').Router();
const { Stores } = require("../models");

router.get("/", async (req, res) => {
    try {
        const stores = await Stores.findAll();
        const data = stores.map((store) => store.get({ plain: true }));
        res.render("home", { data, logged_in: req.session.logged_in });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
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