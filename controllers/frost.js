const Page = require("../models/page");

module.exports = {
    index,
    show,
};

function index (req, res) {
    res.render("frost/index", {
        page: Page.getAll()
    });
};

function show(req, res) {
    res.render("frost/show", {
        page: Page.getOne(req.params.id),
    });
};