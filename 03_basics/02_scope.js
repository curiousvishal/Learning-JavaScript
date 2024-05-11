//Scope
let a = 10
const b =20
var c = 30

{

}

// nested Scope

function one(){
    const username = "vishal"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}
one()