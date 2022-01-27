const router = require('express').Router();
const { User, Stores } = require("../models");

router.get("/", async (req, res) => {
    try {
        const stores = await Stores.findAll();
        const data = stores.map((store) => store.get({ plain: true }));
        console.log(data)
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

router.get("/parts", (req, res) => {
    //if (req.session.loggedIn) {
    //    res.redirect("/");
    //}
    //else {
        res.render("parts");
    //}
});

router.post("/signup", async (req, res) => {
    try {
        const data = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = data.id;
            req.session.logged_in = true;
            res.status(200).json(data);
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;