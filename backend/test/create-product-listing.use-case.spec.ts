import { CreateProductListingUseCase } from "../src/modules/products/application/use-cases/create-product-listing.use-case.js"
import { ProductListing, ProductListingStatus } from "../src/modules/products/domain/entities/product-listing.entity.js"

describe("CreateProductListingUseCase",()=>{

    it("deve criar um anuncio",()=> {
        const useCase = new CreateProductListingUseCase()

        const listing = useCase.execute({
                title: "Bicicleta Caloi",
                description:"Bicicleta usada",
                priceInCents: 50000,
                sellerId:"seller-1",
                categoryId:"category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
        expect(listing.status).toBe(ProductListingStatus.AVAILABLE)
    })
})