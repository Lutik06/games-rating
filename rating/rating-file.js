const fs = require("fs");

const makeRatingFile = async (path, array) => {
    fs.readFile(path,"utf-8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const ratingArray = JSON.parse(data);

        array.forEach((game) => {
            if (!ratingArray.find(g => g.id === game.id)) {
                const newGame = {
                    id: game.id,
                    title: game.title,
                    image: game.image,
                    link: game.link,
                    description: game.description,
                    rating: 0,
                };

                ratingArray.push(newGame);
            }
        });

        fs.writeFile(path, JSON.stringify(ratingArray), () => {
            console.log("Файл записан!");
        });
    });
};

module.exports = {
    makeRatingFile,
};