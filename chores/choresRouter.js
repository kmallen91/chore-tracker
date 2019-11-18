const router = require("express").Router();
const chores = require("./choresModel");

router.get("/", (req, res) => {
  chores
    .find()
    .then(chore => res.status(200).json(chore))
    .catch(err => {
      console.log("error from chore get", err);
      res.status(500).json({ message: "error getting chores" });
    });
});

router.post("/", (req, res) => {
  chores
    .addChore(req.body)
    .then(chore => res.status(201).json({ chore }))
    .catch(err => {
      console.log("error from chore post", err);
      res.status(500).json({ message: "error adding chore" });
    });
});

router.put("/", (req, res) => {
  const updatedChore = req.body;
  chores
    .update(updatedChore)
    .then(chore => res.status(201).json({ data: chore }))
    .catch(err => {
      console.log("error from chore put", err);
      res.status(500).json({ message: "error updating the chore" });
    });
});

router.delete("/:id", (req, res) => {
  chore = req.params.id;
  chores
    .findById(chore)
    .then(chore => {
      res.status(200).json({ chore });
      chores
        .deleteChore(chore)
        .catch(err =>
          res.status(500).json({ message: "Unable to delete chore", err })
        );
    })
    .catch(err => {
      console.log("error finding chore id on delete", err);
      res.status(500).json({ message: "Unable to locate the chore" });
    });
});

module.exports = router;
