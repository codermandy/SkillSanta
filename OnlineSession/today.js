function unorderlist(){
    var elem1=document.getElementByTagName('ol')[0]
    var new_elem=document.createElement("ul");
    new_elem.innerHTML=element1.innerHTML;
    elem1.parentNode.replaceChild(new_elem,elem1)
    
}
function orderlist(){
    var elem1=document.getElementByTagName('ol')[0]
    var new_elem=document.createElement("ol");
    new_elem.innerHTML=element1.innerHTML;
    elem1.parentNode.replaceChild(new_elem,elem1)

}