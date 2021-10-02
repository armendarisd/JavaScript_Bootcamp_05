/*
**
** QWASAR.IO -- my_string_formatting
**
**
** @param {String} firstname
** @param {String} lastname
** @param {Integer} age
**
*/

function my_string_formatting(firstname, lastname, age){
    let value;
    value = "Hello, my name is "+firstname+" "+lastname+", I'm "+age.toString()+".";
    console.log(value);
    return value;
};