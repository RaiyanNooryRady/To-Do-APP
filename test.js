console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.URL);
console.log(document.all);
console.dir(document);
// for(let element of document.all){
//     console.log(element);
// }
console.log(document.forms);
console.log(document.links);
console.log(document.images);
const children=document.querySelector('.item');
const grandParent=children.closest('.todo-list');
console.log(grandParent);