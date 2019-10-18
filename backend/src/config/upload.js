const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);

      // Retorna o nome do arquivo sem a extensão, o replace está substituindo todo
      // espeço em branco por underline.
      const name = path.basename(file.originalname.replace(/\s/g, "_"), ext);

      cb(null, `${name}-${Date.now()}${ext}`);
    }
  })
};
