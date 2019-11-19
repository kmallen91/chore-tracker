const router = require("express").Router();
const children = require("./childrenModel");

router.get("/", (req, res) => {
  children
    .findChildren()
    .then(child => res.status(200).json(child))
    .catch(err => {
      console.log("error from child GET", err);
      res.status(500).json({ message: "error getting children" });
    });
});

router.get("/:id", (req, res) => {
  const child = req.params.id;

  children
    .findChildrenbyId(child)
    .then(child => res.status(200).json(child))
    .catch(err => {
      console.log("error from child ID GET", err);
      res.status(500).json({ message: "Error getting the selected child" });
    });
});

router.post("/", (req, res) => {
  const child = req.body;

  children
    .addChild(child)
    .then(child => res.status(201).json(child))
    .catch(err => {
      console.log("error from child POST", err);
      res.status(500).json({ message: "error adding child" });
    });
});

router.put("/", (req, res) => {
  const updatedChild = req.body;

  children
    .updateChild(updatedChild)
    .then(child => res.status(201).json(updatedChild))
    .catch(err => {
      console.log("error from child PUT", err);
      res.status(500).json({ message: `error updated child` });
    });
});

router.delete("/:id", (req, res) => {
  childId = Number(req.params.id);

  children
    .deleteChild(childId)
    .then(child => res.status(200).json(child))
    .catch(err => {
      console.log("error from child DELETE", err);
      res.status(500).json({ message: "error deleting child" });
    });
});

module.exports = router;
