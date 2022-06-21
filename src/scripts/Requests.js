import { getRequests } from "./dataAccess.js"


//define function that will be passed to the map method
//converts each service request object into HTML representations
//one param/value is each obj in array

//function that takes in a obj as a param and returns <li>objrequests.name</li>

//making the delete button
const requestListMaker = (requestObj) => {
    return `<li>${requestObj.description}
    <button class="request__delete"
    id="request--${requestObj.id}">
    
Delete
</button>
    </li>`
}

//make plumber display


export const Requests = () => {
    const requests = getRequests()
    let html = `
        <ul>`
    const requestsList = requests.map(requestListMaker)
    html += requestsList.join('')
    html += `</ul>
    `
    return html
}

