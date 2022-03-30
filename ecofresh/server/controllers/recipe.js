/**
 * @author Mugdha Agharkar
 */

const Recipe = require("../models/recipeModel")

const getImageURL = (recipeName) => {
    Recipe.findOne({ "recipeName": recipeName }).then(recipeResult => {
        if (recipeResult.length) {
            s3 = recipeResult.s3URL;
            console.log("recipe img: " + s3);
            return s3;
        }
        else{
            return "";
        }
    }).catch(recipeFetchErr => {
        console.log("Cannot fetch image URL " + recipeFetchErr);
        return "";
    });
}

module.exports = { getImageURL };