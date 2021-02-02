function skillsanta(){
    var mylist=document.getElementById('main');
    document.getElementById('course').value=mylist.options[mylist.selectedIndex].text;


}
function addElem(){
   let x=document.getElementById("main");
   let option=document.createElement("option");
   option.text=document.getElementById('course').value;
   x.add(option);
}