import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Produkt} from "../produkt";

@Component({
    selector: 'produkten',
    templateUrl: 'produkten.component.html',
    styleUrls: [
        'produkten.css'
    ]
})

export class ProduktenComponent implements OnInit{
    private produktId : number;
    private produktGroepId : number;
    private produkten : Produkt[];

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => this.loadProdukten(params['id']));
    }

    toevoegenProduktWinkelwagen(produktId: number) {
        this.produktId = produktId;
        setTimeout(() => this.produktId = undefined, 100);
    }

    loadProdukten(produktGroepId: number) {
        this.produktGroepId = produktGroepId;
        if (produktGroepId == 1) {
            this.produkten = [new Produkt(1, 'Sla', 'sla.jpg', 'St.')];
        } else if (produktGroepId == 2) {
            this.produkten = [new Produkt(2, 'Bananen', 'bananen.jpg', 'Tros')];
        }
    }
}

