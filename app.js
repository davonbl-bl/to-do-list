
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
        let memoryObj = [{
            id: 1,
            containedText: getText
        }]
        wrapContent.setAttribute('id', 'container1')
        contentContainer.setAttribute('id', 'content1')
        containedText.setAttribute('id', 'text1')
        showDelBtn.setAttribute('id', 'del1')
        showEditBtn.setAttribute('id', 'edit1')
        
        let jsonMemoryObj = JSON.stringify(memoryObj)
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

        // memoryObj = [{
        //     id: 1,
        //     containedText: getText
        // }]

        let changeContent = JSON.parse(localStorage.getItem('content'))
        changeContent[0].containedText = updatedText
        localStorage.setItem('content', JSON.stringify(changeContent))
        // console.log(containedText.innerText)
        // console.log('testing')
    })

    const parentContainer = document.querySelector('#parentContainer');
    parentContainer.append(contentContainer); 

    showDelBtn.addEventListener('click', () => {
        // console.log('testing delete button')
        // console.log(JSON.parse(localStorage.getItem('content')))
        let getAnswer = confirm('Are you sure you want to delete this specific to do task?')

        if(getAnswer){
            wrapContent.remove()
            let removeElement =JSON.parse(localStorage.getItem('content'))
            // console.log(removeElement)
            removeElement.splice(0, 1)
            // console.log('now: ', removeElement)
            // console.log(removeElement.length)
            let placeElementBack = JSON.stringify(removeElement)
            localStorage.setItem('content', placeElementBack)
            let getLength = JSON.parse(localStorage.getItem('content'))
            // console.log(getLength.length)
            if(getLength.length === 0){
                localStorage.clear(); 
            }
            // let placeElementBack = JSON.stringify(removeElement)
            // localStorage.setItem('content', placeElementBack)
        }
    })


}

clickBtn.addEventListener('click', displayInfo)

// create the ability to add a due date for the task at hand (optional: can be a text box for teh due date)
// adding at the bottom of the to do list add the time where it was submitted 
// hidding the main input bar after clicking the edit button 
// setting up an alert when the task is due 
// providing the user the option on when the due date is near ---> example: alert 

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