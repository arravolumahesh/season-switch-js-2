let seasonsmallImageElement = document.getElementById("seasonsmallImage");
let seasonmediumImageElement = document.getElementById("seasonmediumImage");

let springsmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springmediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summersmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summermediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnsmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnmediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let wintersmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let wintermediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function changeseasonTospring() {
    seasonsmallImageElement.src = springsmallImage;
    seasonmediumImageElement.src = springmediumImage;
}

function changeseasonTosummer() {
    seasonsmallImageElement.src = summersmallImage;
    seasonmediumImageElement.src = summermediumImage;
}

function changeseasonToautumn() {
    seasonsmallImageElement.src = autumnsmallImage;
    seasonmediumImageElement.src = autumnmediumImage;
}

function changeseasonTowinter() {
    seasonsmallImageElement.src = wintersmallImage;
    seasonmediumImageElement.src = wintermediumImage;
}