const router = require("express").Router();
const withAuth  = require("../utils/auth");
const { User, Stores, Parts, Reviews } = require("../models");

router.get("/", async (req, res) => {
  try {
    const stores = await Stores.findAll();
    const data = stores.map((store) => store.get({ plain: true }));
    console.log(data);
    res.render("home", { data, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((userData) => {
      console.log(userData);
      if (!userData) {
        res.status(400).json({ message: "Invalid Credentials!" });
        return;
      }

      const passwordOK = userData.checkPassword(req.body.password);

      if (!passwordOK) {
        res.status(400).json({ message: "Invalid Credentials!" });
      }

      req.session.save(() => {
        req.session.userid = userData.id;
        req.session.user_name = userData.user_name;
        req.session.logged_in = true;

        res.json(userData);
      });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    res.render("signup");
  }
});

router.get("/parts", withAuth, (req, res) => {
   //if (req.session.loggedIn) {
  //    res.redirect("/");
  //}
  //else {
  res.render("parts", {logged_in: req.session.logged_in});
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
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/newPart", async (req, res) => {
  try {
    const data = await Parts.create(req.body);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json("Unable to add new part");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});
// logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/partsPage/:value", withAuth, async (req, res) => {
  try {
    const data = await Parts.findAll({
      where: {
        category: req.params.value,
      },
    });
    const data2 = data.map((e) => e.get({ plain: true }));
    console.log(req.session.logged_in)
    res.render('partsPage', { data2, logged_in: req.session.logged_in});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.delete("/deletePart/:id", async (req, res) => {
  try {
    const data = await Parts.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/updatePart/:id", async (req, res) => {
  try {
    const data = await Parts.update(
      {
        part_name: req.body.part_name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        category: req.body.category,
        store_id: req.body.store_id
      },
      { where: { id: req.params.id } }
    )
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
