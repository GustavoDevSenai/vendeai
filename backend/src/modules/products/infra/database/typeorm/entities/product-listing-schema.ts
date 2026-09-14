import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"



@Entity("product_listings")
export class ProductListingSchema {

    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column()
    title:string
    @Column()
    description:string
    @Column()
    priceInCents: number
    @Column()
    sellerId: string
    @Column()
    categoryId: string
    @Column()
    status: string
}