import { api } from "./components/data";
import "./components/export";
import Card, {Attribute} from "./components/card/card";

class AppContainer extends HTMLElement {
    stars: Card[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        }
        
        async connectedCallback() {

            const data = await api()
            console.log(api)

            data?.forEach((user:any) => {
                const starsCard = this.ownerDocument.createElement(
                    "my-card"
                    ) as Card;
                    starsCard.setAttribute(Attribute.name, user.name);
                    starsCard.setAttribute(Attribute.birth_year, user.birth_year);
                    starsCard.setAttribute(Attribute.gender, user.gender);
                    this.stars.push(starsCard);
                });

            this.render(this.stars);
        }
        
        render(stars:any){
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                
                this.stars.forEach((star) => {
                    this.shadowRoot?.appendChild(star);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);