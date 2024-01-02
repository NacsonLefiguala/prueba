const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    /**
     * @param {*} req 
     * @param {*} file 
     * @param {*} cb 
     */
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../../pdfs"));
    },    
    /**
     * @param {*} req 
     * @param {*} file 
     * @param {*} cb 
     */
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    },
});

/**
 * @param {*} req 
 * @param {*} file 
 * @param {*} cb 
 */
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only PDF files are allowed."), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload;

