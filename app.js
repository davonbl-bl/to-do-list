
const typeHere = document.querySelector('#typeHere')
const clickBtn = document.querySelector('#clickBtn');

//this is where localStorage appends the DOM


// When submiting a text
const displayInfo = () => {
    let getText = typeHere.value
    console.log(getText)

    let containedText = document.createElement('p');
    containedText.innerText = getText;

    typeHere.value = ''

    const showDelBtn = document.createElement('button');
    showDelBtn.innerText = 'Delete';

    const showEditBtn = document.createElement('button');
    showEditBtn.innerText = 'Edit';



    const wrapContent  = document.createElement('div');
    wrapContent.append(containedText, showEditBtn, showDelBtn)

    const contentContainer = document.createElement('div');

    
    if(!localStorage.getItem('content')){
        const memoryObj = {
            id: 1,
            containedText: getText
        }
        wrapContent.setAttribute('id', 'container1')
        contentContainer.setAttribute('id', 'content1')
        containedText.setAttribute('id', 'text1')
        showDelBtn.setAttribute('id', 'del1')
        showEditBtn.setAttribute('id', 'edit1')
        
        const jsonMemoryObj = JSON.stringify(memoryObj)
        localStorage.setItem('content', jsonMemoryObj)
    }

    contentContainer.append(wrapContent)

    showEditBtn.addEventListener('click', () => {
        console.log('testing edit button')
        showEditBtn.innerText = 'Update'
        containedText = document.createElement('input')
        containedText.innerText = getText

        showEditBtn.addEventListener('click', () => {
            console.log('testing')
        })
    })

    const parentContainer = document.querySelector('#parentContainer');
    parentContainer.append(contentContainer); 


}

clickBtn.addEventListener('click', displayInfo)


const deleteAllBtn = document.querySelector('#deleteAll')

deleteAllBtn.addEventListener('click', () => {
    const confirmChoice = confirm('Are you sure you want to delete all items?')
    console.log(confirmChoice)
    const removeAllChildren = document.querySelector('#parentContainer');
    // why do I keep on getting true? 
    // console.log(removeAllChildren.hasChildNodes())
    let getChildElementsLength = removeAllChildren.children.length
    if(getChildElementsLength > 0){
        alert('everything has been deleted')
        while(removeAllChildren.hasChildNodes()){
            removeAllChildren.removeChild(removeAllChildren.firstChild);
        }
        localStorage.clear();
    }else{
        alert("there's nothing to be deleted")
    }
})