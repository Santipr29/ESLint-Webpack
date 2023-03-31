import styles from "./card.css";

export enum Attribute {
    "name" = "name",
    "birth_year" = "birth_year",
    "gender" = "gender"
}

class Card extends HTMLElement {
    name?: string;
    birth_year?: string;
    gender?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            birth_year: null,
            gender: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section>
                <h2>Name: ${this.name}</h2>
                <p>Birth Year:${this.birth_year}</p>
                <p>Gender:${this.gender}</p>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;