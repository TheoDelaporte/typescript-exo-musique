/*  Déclaration de deux interfaces : Gclef  (clé de sol) & Fclef (clé de fa) */
var Instrument = /** @class */ (function () {
    function Instrument() {
    }
    return Instrument;
}());
var Piano = /** @class */ (function () {
    function Piano(name, price, priceSale) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }
    return Piano;
}());
function positionCleSol() {
    console.log("Pour une guitare électrique, la clé de sol se joue à la main gauche");
}
function positionCleFa() {
    console.log("Pour un piano numérique, la clé de fa se joue à la main gauche");
}
var Guitare = /** @class */ (function () {
    function Guitare(name, price, priceSale) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }
    return Guitare;
}());
function positionCleSol() {
    console.log("Pour une guitare électrique, la clé de sol se joue à la main gauche");
}
