var trainer ={
    name : "xyz",
    location : "bangalore",
    age : 22,
    salary : 10000,
    isAvailable : true
};

window.alert("Your age is_" + trainer.age);
document.write(trainer);

let customer = {
    id : 1009,
    name : "abc",
    registerDate : 10/02/2022,
    type : {
        action : "regular",
        actions : "register",
    },
    actives : true

}

var order={
    id : 2202,
    date : 20/03/2022,
    totalOrder : 20,
    customer : {
        fname : "tapas",
        lname :"kumar",
        

    }

}
window.alert("fullname" + "=" + order.customer.fname +" "+ order.customer.lname);

let item = {
    id : "a1b3c",
    name : "man",
    type : [ "you are in array" +"\n" +"fname" + "\n"+ "lname"],


};

window.alert(item.type);

console.log(item);