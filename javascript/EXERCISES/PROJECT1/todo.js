
//---------------creating a TextNode--------------
// let h = document.createTextNode('h1')
// let text = document.createTextNode('hello World!')
// h.appendChild(text)
//  document.querySelector('h1').appendChild(h)

// var a = 5;
// while(a>0){
//     console.log(a)
//     a--;
// }
let ul = document.getElementById('list')
let li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addfn);

var remButton = document.getElementById('remove')
remButton.addEventListener('click',remfn)

function addfn(){
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if(item === ''){
        return false;
        //-------------***Assignment***-------------
        //Add a p tagand assign a value of "enter ur todo"
    }
    else{
        //create li
        li = document.createElement('li')
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        //create label  
        var label = document.createElement('label')
        

        //add these elements on web page
        ul.appendChild(li)
        li.appendChild(checkbox)
        li.appendChild(label)
        label.appendChild(textnode)
        
        ul.insertBefore(li, ul.childNodes[0])
        li.className = 'visual';
        // setTimeout(() => {
        //     li.className= 'visual'
        // }, 2);
        // input.value = '';

    }
}
function remfn() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])

        }        
    }
  }


  //------***remove button for removing everything