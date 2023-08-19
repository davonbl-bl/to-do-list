
const typeHere = document.querySelector('#typeHere')
const clickBtn = document.querySelector('#clickBtn');

//this is where localStorage appends the DOM


// When submiting a text
const displayInfo = () => {
    let getText = typeHere.value
    console.log(getText)

    const containedText = document.createElement('p');
    containedText.innerText = getText;

    const showDelBtn = document.createElement('button');
    showDelBtn.innerText = 'Delete';

    const showEditBtn = document.createElement('button');
    showEditBtn.innerText = 'Edit';



    const wrapContent  = document.createElement('div');
    wrapContent.append(containedText, showEditBtn, showDelBtn)

    const contentContainer = document.createElement('div');
    contentContainer.append(wrapContent)

    const parentContainer = document.querySelector('#parentContainer');
    parentContainer.append(contentContainer); 
    
    // if(!localStorage.getItem('content')){
    //     const memoryObj = {
    //         id: 1,
    //         containedText: containedText
    //     }
    //     wrapContent.setAttribute('id', 'container1')
    //     contentContainer.setAttribute('id', 'content1')
    //     containedText.setAttribute('id', 'text1')
    //     showDelBtn.setAttribute('id', 'del1')
    //     showEditBtn.setAttribute('id', 'edit1')
        
    //     const jsonMemoryObj
    //     localStorage.setItem('content')
    // }


}

clickBtn.addEventListener('click', displayInfo)


