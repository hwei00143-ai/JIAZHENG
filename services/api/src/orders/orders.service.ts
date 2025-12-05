import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  // TODO: Implement orders service methods
  async findByUser(userId: string) {
    return [];
  }

  async create(orderData: any) {
    return null;
  }
}