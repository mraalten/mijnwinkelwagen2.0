import {Component, Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from "@angular/http";
import {ProduktGroep} from "./produktgroep";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Component({
  selector: 'mijnwinkelwagen-page',
  templateUrl: 'mijnwinkelwagen.component.html'
})

@Injectable()
export class MijnWinkelwagenComponent {
  private produktGroepenUrl = 'http://localhost:9200/ophalenproduktgroepen';
  private produktenUrl = 'http://localhost:9200/ophalenprodukten';

  constructor(
      private http: Http
  ) {}

  public getProduktGroepen() {
    return this.http
        .get(this.produktGroepenUrl)
        .map((response) => {
            return response.json();
        });
  }

    public getProdukten(produktGroepId: number) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('produktGroepId', produktGroepId.toString());
        return this.http
            .get(this.produktenUrl, {search: params})
            .map(response => {
                return response.json();
            });
    }

}
