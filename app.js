
const typeHere = document.querySelector('#typeHere')
const clickBtn = document.querySelector('#clickBtn');

//this is where localStorage appends the DOM


// When submiting a text
const displayInfo = () => {
    let getText = typeHere.value
    // console.log(getText)

    let containedText = document.createElement('p');
    containedText.innerText = getText;

    typeHere.value = ''

    const showDelBtn = document.createElement('button');
    showDelBtn.innerText = 'Delete';

    let showEditBtn = document.createElement('button');
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

    let updateBtn = document.createElement('button');
    updateBtn.setAttribute('id', 'update1')
    updateBtn.innerText = 'Update'

    let inputEditText = document.createElement('input')
    inputEditText.setAttribute('value',getText)
    inputEditText.setAttribute('id', 'editHere1')

    showEditBtn.addEventListener('click', () => {
        wrapContent.replaceChild(inputEditText, wrapContent.childNodes[0])
        wrapContent.replaceChild(updateBtn,wrapContent.childNodes[1])
    })

    updateBtn.addEventListener('click', () => {
        let updatedText = inputEditText.value
        containedText.innerText = updatedText
        wrapContent.replaceChild(containedText, wrapContent.childNodes[0])
        wrapContent.replaceChild(showEditBtn,wrapContent.childNodes[1])
        // console.log(containedText.innerText)
        // console.log('testing')
    })

    const parentContainer = document.querySelector('#parentContainer');
    parentContainer.append(contentContainer); 


}

clickBtn.addEventListener('click', displayInfo)


const deleteAllBtn = document.querySelector('#deleteAll')

deleteAllBtn.addEventListener('click', () => {
    const confirmChoice = confirm('Are you sure you want to delete all items?')
    // console.log(confirmChoice)
    const removeAllChildren = document.querySelector('#parentContainer');
    // why do I keep on getting true? 
    // console.log(removeAllChildren.hasChildNodes())
    let getChildElementsLength = removeAllChildren.children.length
    if(localStorage.getItem('content')){
        localStorage.clear();
        if(getChildElementsLength > 0){
            while(removeAllChildren.hasChildNodes()){
                removeAllChildren.removeChild(removeAllChildren.firstChild);
            }
        }
        alert('everything has been deleted')
    }else{
        alert("there's nothing to be deleted")
    }
})