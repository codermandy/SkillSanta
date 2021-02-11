function dupRem(list){
let uniqChar=[];
list.array.forEach(c => {
    if(!uniqChar){
        uniqChar.add(c);
    }
});
}
let list=['Virat','Sachin','Saurav','Virat']
document.getElementById('with-dup').innerHTML+=list;
document.getElementById('without-dup').innerHTML+=dupRem(list)
