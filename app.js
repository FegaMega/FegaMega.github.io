function alertButton(){
   alert("Hello World!")
   showTemplate()
}
function showTemplate(){
   var img = document.getElementsByClassName("img")
   alert(img)
   img.visibility = "visible"
   alert(img.visibility)
}