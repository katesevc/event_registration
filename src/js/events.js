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

<p>${this.name}</p>
<button class="event_button">More</button>
`

// const button = this.element.querySelector(".event_button");
// const button1 = document.querySelector(".event_button1");

//         const close = document.querySelector(".close");
//         const modal = document.querySelector(".modal");

//         const openModal = () => {
//         modal.style.display = "block";
//         };

//         button.addEventListener("click", () => openModal());

//         window.addEventListener("click", () => {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//         });

const futureParent = document.querySelector(this.parentSelector);
futureParent.appendChild(this.element);

}

}

// }   

// const addName = document.querySelector('.name');
// addElement.innerHTML = ${this.name};
// const addDescription = document.querySelector('.description')
// addElement.innerHTML = ${this.description};
