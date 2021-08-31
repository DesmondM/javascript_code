/* var carDetails = {
    shoWDetails:function(registrationNumber, brandName){
        return this.name + ", "+ "Car details " + registrationNumber + ", " + brandName;
    }
}
var person1 = {
    name:"Desmond"

};

var detailsOfPerson1 = carDetails.shoWDetails.bind(person1, "HB81HS", "Ecosport");

console.log(detailsOfPerson1()); */

var carDetails = {
    shoWDetails:function(){
        return this.name + ", "+ "Car details " + this.registrationNumber + ", Brand " + this.brandName;
    }
}
var person1 = {
    name:"Desmond",
    registrationNumber: "HB81HS",
    brandName:"Honda",
};

var detailsOfPerson1 = carDetails.shoWDetails.bind(person1);

console.log(detailsOfPerson1());