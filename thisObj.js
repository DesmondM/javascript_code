var obj = {
    name: "Desmond",
    getName: function(){
        console.log(this.name);
    }
}
obj.getName();

var getName =obj.getName;
var obj2 = {
    name:"Poppie",
    getName
};
obj2.getName();