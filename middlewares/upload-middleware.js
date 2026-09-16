const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|jfif/;

    const extension = path.extname(file.originalname).toLowerCase();
    const mimeType = file.mimetype;

    if (
        allowedTypes.test(extension) &&
        allowedTypes.test(mimeType)
    ) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed."));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload;