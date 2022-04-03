import { UpdateShippingCompanyInput } from './dto/updateShippingCompany.input';
import { CreateShippingCompanyInput } from './dto/createShippingCompany.input';
import { Args, Mutation, Query , Resolver } from "@nestjs/graphql";
import { ShippingCompany } from "./model/shippingCompany.model";
import { ShippingCompanyService } from "./shippingCompany.service";

@Resolver('ShippingCompany')
export class ShippingCompanyResolver {
    constructor(private shippingCompanyService: ShippingCompanyService) {}

    @Query(() => [ShippingCompany], { name : 'getAllShippingCompanies' })
    async getAll(): Promise<ShippingCompany[]> {
        return this.shippingCompanyService.getAll();
    }

    @Query(() => ShippingCompany, { name : 'getShippingCompanyById' })
    async getShippingCompanyById(@Args('id') id: string) {
        return this.shippingCompanyService.getShippingCompanyById(id);
    }

    @Mutation(() => ShippingCompany, { name : 'createShippingCompany' })
    async createShippingCompany(@Args('createShippingCompanyInput') createShippingCompanyInput: CreateShippingCompanyInput) {
        return this.shippingCompanyService.create(createShippingCompanyInput);
    }

    @Mutation(()=> ShippingCompany, { name : 'updateShippingCompany' })
    async updateShippingCompany(@Args('updateShippingCompanyInput') updateShippingCompanyInput: UpdateShippingCompanyInput) {
        return this.shippingCompanyService.updateShippingCompany(updateShippingCompanyInput);
    }

    @Mutation(()=> ShippingCompany, { name : 'deleteShippingCompany' })
    async deleteShippingCompany(@Args('id') id: string) {
        return this.shippingCompanyService.deleteShippingCompany(id);
    }

}