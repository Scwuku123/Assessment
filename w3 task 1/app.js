function write(message){
    document.getElementById('message').innerHTML += message + '<br/>';
}
function newParagraph(){
    write("");
}
var character = "SIT120".charAt(2);
write("Third character in 'SIT120' is :" + character);
write("Type of character is : " + typeof character);
newParagraph();
var name = "Thomas"
write("Upper case of 'Thomas': " + name.toUpperCase());
write("Lower case of 'Thomas': " + name.toLowerCase());
var index = "abcd".index0f("c");
write("Index of 'c' in 'abcd' is: " + index);