// ol
// li class= "list-item"
// li 
// li


const tempClassList = document.getelementbyclassname('list-item')// gives htmlcolection 

 const myConvertedAray = Array.from(tempClassList)   // convert all items into Array

myConvertedAray.forEach(function(l){
    l.style.backgroundColor = "red"
})
//-----------------------------------------------------------

const templist = document.queryselectorall('li') ---// gives nodes list

templist.foreach(function (l){
l.style.backgroundColor = "red"
})