const router = require('express').Router();
const { Stores, User } = require("../models");

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
    if (req.session.logged_in) {
        res.redirect("/");
    }
    else {
        res.render("login");
    }
});

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    }).then ((userData) => {
        console.log(userData)
        if(!userData) {
            res.status(400).json({message: "Invalid Credentials!"})
            return
        }

        const passwordOK = userData.checkPassword(req.body.password);

        if(!passwordOK) {
            res.status(400).json({message: "Invalid Credentials!"})
        }

        req.session.save(() => {
            req.session.userid = userData.id;
            req.session.user_name = userData.user_name;
            req.session.logged_in = true;

            res.json(userData)
        })
    }).catch((err) => res.status(500).json(err))
})

router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
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

module.exports = router;