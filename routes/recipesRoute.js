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

route.get("/filterResults", (req, res) => {
    let filterKey = req.body.filterKey;
    let filterValues = req.body.filterValues;
    let json = { filterKey: filterValues }
    let listOfConditions = [];
    for (value in filterValues) {
        console.log(filterValues);
        let obj = {};
        obj[filterKey] = filterValues[value];
        listOfConditions.push(obj);
    }
    console.log(listOfConditions);
    Recipe.find({ $or: listOfConditions }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Could not filters recipes");
    })
});

route.get("/search", (req, res) => {
    let parsedURL = url.parse(req.url, true).query;
    let recipeName = parsedURL.recipeName;
    let mealType = parsedURL.mealType;
    let cuisine = parsedURL.cuisine;
    Recipe.find({ $or: [{ "recipeName": recipeName }, { "mealType": mealType }, { "cuisine": cuisine }] }).then(result => {
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
    else {
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
