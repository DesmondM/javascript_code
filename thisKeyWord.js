const parent ={
    dad_name: "BT",
    dad_age: 70,
    father: function(){
        return `${this.dad_name} is papa`;
    }
}
console.log(parent.father());
