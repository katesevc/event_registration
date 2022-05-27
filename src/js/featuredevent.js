export class FeaturedEvent {

    constructor(id, name, description, imageUrl, date, parentSelector = '.events') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.date = date;
        this.parentSelector = parentSelector;
        this.createHTMLElements2();
    }

    createHTMLElements2() {
        this.element = document.createElement('div');
        this.element.classList.add('featured_event');
        this.element.innerHTML = `
        <div class="event_name">
        <p class="vertical_text">FEATURED EVENT</p>
        </div>
        <div class="picture"></div>
        <div class="description">
        <h1>${this.name}</h1>
        <p>${this.description}</p>
        </div>
        <div class="button_container">
          <button class="featured_button">Register</button>
        </div>
        `
        const button = this.element.querySelector(".featured_button");
        const button1 = document.querySelector(".event_button1");

        const close = document.querySelector(".close");
        const modal = document.querySelector(".modal");

        const openModal = () => {
        modal.style.display = "block";
        };

        button.addEventListener("click", () => openModal());

        window.addEventListener("click", () => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        });

        const futureParent = document.querySelector(this.parentSelector);
        futureParent.appendChild(this.element);
}
}