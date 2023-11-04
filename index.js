//const cards = (["Jessica", "Aaron", "Cynthia"], "pizza party")
    function writeCards(names, event){
        const thankYous = []
         for (let i = 0; i < names.length; i++){
            thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
         }
         return thankYous;
}

function countDown(){
    var i = 10
    while (i >= 0){
        console.log(i--);
    }
}
