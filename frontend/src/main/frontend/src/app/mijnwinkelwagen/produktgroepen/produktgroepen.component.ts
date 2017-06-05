import {Component} from "@angular/core";
import {ProduktGroep} from "../produktgroep";

@Component({
    selector: 'produktgroepen',
    templateUrl: 'produktgroepen.component.html',
    styleUrls: [
        'produktgroepen.css'
    ]
})

export class ProduktGroepenComponent {
    private produktGroepen: ProduktGroep[];

    constructor() {
        this.produktGroepen = [
            new ProduktGroep(1, "groenten-fruit.jpg", "Groenten"),
            new ProduktGroep(2, "fruit.jpg", "Fruit"),
            new ProduktGroep(3, "potgroenten.jpg", "Potgroenten"),
            new ProduktGroep(4, "zuivel.jpg", "Zuivel/boter")];
        console.log(this.produktGroepen);
    }
}
