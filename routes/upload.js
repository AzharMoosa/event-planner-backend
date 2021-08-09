import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import stream from "stream";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images Only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.status(200);
  res.send(`/${req.file.path}`);
});

router.get("/retrieve/:filepath", (req, res) => {
  const filepath = req.params.filepath;

  const imagePath = filepath.substring(
    filepath.lastIndexOf("/") + 1,
    filepath.length
  );

  const __dirname = path.resolve();
  res.sendFile(
    imagePath,
    {
      root: path.join(__dirname, "/uploads"),
    },
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
});

export default router;
