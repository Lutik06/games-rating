const { createRating, updateRating } = require('./calculations');
const config = require("./config");
const { PATH_TO_RATING_FILE } = require("./config");
const { makeRatingFile } = require("./rating-file");

module.exports = {
    PATH_TO_RATING_FILE,
    makeRatingFile,
    config,
    createRating,
    updateRating,
}