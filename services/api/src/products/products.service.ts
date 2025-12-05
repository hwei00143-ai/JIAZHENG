import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  // TODO: Implement products service methods
  async findByGroup(groupId: string) {
    return [];
  }

  async create(productData: any) {
    return null;
  }
}