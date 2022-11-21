//function for displaying values
function dis(val)
{
document.getElementById("text-input").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("text-input").value
let y = eval(x)
document.getElementById("text-input").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("text-input").value = ""
}