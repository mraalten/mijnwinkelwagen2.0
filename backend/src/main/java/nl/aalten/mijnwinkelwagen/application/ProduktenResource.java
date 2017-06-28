package nl.aalten.mijnwinkelwagen.application;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import io.swagger.annotations.Api;
import nl.aalten.mijnwinkelwagen.produkten.Repository;
import org.springframework.stereotype.Component;

@Component
@Path("/mijnwinkelwagen")
@Api
public class ProduktenResource {

    private Repository repository;

    @Inject
    public ProduktenResource(Repository repository) {
        this.repository = repository;
        System.out.println("** initialized resource!!! ** " + repository);
    }

    @GET
    @Path("/ophalenproduktgroepen")
    @Produces("application/json")
    public Response getProduktGroepen() {
        return Response
            .ok(repository.getProduktGroepen())
            .header("Access-Control-Allow-Origin", "*")
            .build();
    }
}
