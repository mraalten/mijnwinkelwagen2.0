package nl.aalten.mijnwinkelwagen;

import java.util.List;

import javax.ws.rs.QueryParam;

import nl.aalten.mijnwinkelwagen.domain.Produkt;
import nl.aalten.mijnwinkelwagen.domain.ProduktGroep;
import nl.aalten.mijnwinkelwagen.produkten.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class ProduktenController {
    private Repository repository = new Repository();

//    @GET
//    @Path("/ophalenprodukten")
//    @Produces("application/json")
    public List<Produkt> getProdukten(@QueryParam("produktGroepId") Integer produktGroepId) {
        return repository.getProdukten(produktGroepId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/ophalenprodukten", method= RequestMethod.GET, produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<Produkt> getProdukten2(@RequestParam("produktGroepId") Integer produktGroepId) {
        return repository.getProdukten(produktGroepId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/ophalenproduktgroepen", method= RequestMethod.GET, produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<ProduktGroep> getProduktGroepen() {
        return repository.getProduktGroepen();
    }

}
