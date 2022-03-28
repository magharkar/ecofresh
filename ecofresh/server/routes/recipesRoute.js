/**
 * @author Mugdha Agharkar
 */

const express = require("express");
const recipeModel = require("../models/recipeModel");
const route = express.Router();
const Recipe = require("../models/recipeModel");
const url = require("url");
const { request } = require("http");
const e = require("express");

route.get("/allRecipes", (req, res) => {
    Recipe.find({}).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err)
        res.status(400).send("Could not get recipes");
    });

});

route.post("/filterResults", (req, res) => {
    let requestArray = req.body;
    let listOfConditions = [];
    for (index in requestArray) {
        let filterObj = requestArray[index];
        console.log(filterObj);
        let filterKey = filterObj.filterKey;
        let filterValues = filterObj.filterValues;
        for (value in filterValues) {
            let obj = {};
            obj[filterKey] = filterValues[value];
            console.log(obj);
            listOfConditions.push(obj);
        }
        console.log(listOfConditions);
    }

    Recipe.find({ $or: listOfConditions }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Could not filters recipes");
    })
});

route.get("/search", (req, res) => {
    let parsedURL = url.parse(req.url, true).query;
    let value = parsedURL.searchKey;
    let mealType = parsedURL.mealType;
    let cuisine = parsedURL.cuisine;
    let listOfConditions = []
    // if (recipeName) {
        listOfConditions.push({ "recipeName": {
            $regex: value.toLowerCase(),
            $options: 'i'
            }});
    // }
    // if (mealType) {
        listOfConditions.push({ "mealType": {
            $regex: value.toLowerCase(),
            $options: 'i'
            } });
    // }
    // if (cuisine) {
        listOfConditions.push({ "cuisine": {
            $regex: value.toLowerCase(),
            $options: 'i'
            } });
    // }
    console.log(listOfConditions);
    Recipe.find({ $or: listOfConditions }).collation({locale: "en", strength: 2}).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Could not search recipes");
    });
});

route.get("/sort", (req, res) => {
    let parsedURL = url.parse(req.url, true).query;
    let key = parsedURL.key;
    let ascendingValue = parsedURL.asc;
    console.log(ascendingValue);
    let asc = {}
    if (ascendingValue == "true") {
        asc[key] = 1;
    }
    if (ascendingValue == "false") {
        asc[key] = -1;
    }
    console.log(asc);
    Recipe.find({}).sort(asc).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Could not search recipes");
    });
});

module.exports = route;
