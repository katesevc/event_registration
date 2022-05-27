export class Event {
    constructor(id, name, description, imageUrl, date, parentSelector = '.events') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.date = date;
        this.parentSelector = parentSelector;
        this.createHTMLElements();
    }

createHTMLElements() {
this.element = document.createElement('div');
this.element.classList.add('event');
this.element.innerHTML = `

<p>event ${this.name}</p>
<button class="event_button">More</button>
`
const futureParent = document.querySelector(this.parentSelector);
futureParent.appendChild(this.element);

}

}

// }   

// const addName = document.querySelector('.name');
// addElement.innerHTML = ${this.name};
// const addDescription = document.querySelector('.description')
// addElement.innerHTML = ${this.description};
