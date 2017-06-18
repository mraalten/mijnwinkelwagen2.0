import {Component} from "@angular/core";
import {ProduktGroep} from "../produktgroep";
import {Router} from "@angular/router";
import {MijnWinkelwagenComponent} from "../mijnwinkelwagen.component";

@Component({
    selector: 'produktgroepen',
    templateUrl: 'produktgroepen.component.html',
    styleUrls: [
        'produktgroepen.css'
    ]
})

export class ProduktGroepenComponent {
    private produktGroepen: ProduktGroep[];

    constructor(
        private router : Router,
        private mijnwinkelwagenComponent: MijnWinkelwagenComponent
    ) {
        // this.produktGroepen = [
        //     new ProduktGroep(1, "groenten-fruit.jpg", "Groenten"),
        //     new ProduktGroep(2, "fruit.jpg", "Fruit"),
        //     new ProduktGroep(3, "potgroenten.jpg", "Potgroenten"),
        //     new ProduktGroep(4, "zuivel.jpg", "Zuivel/boter")];
    }

    ngOnInit(): void {
        this.mijnwinkelwagenComponent.getProduktGroepen().subscribe(
            produktGroepen => this.produktGroepen = produktGroepen,
            err => {console.log(err)}
        );
    }

}
