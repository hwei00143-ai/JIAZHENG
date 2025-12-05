import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
@UseGuards(AuthGuard('jwt'))
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('group/:groupId')
  findByGroup(@Param('groupId') groupId: string) {
    return this.productsService.findByGroup(groupId);
  }

  @Post()
  create(@Body() createProductDto: any) {
    return this.productsService.create(createProductDto);
  }
}