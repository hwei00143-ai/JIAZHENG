import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('groups')
@UseGuards(AuthGuard('jwt'))
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Post()
  create(@Body() createGroupDto: any) {
    return this.groupsService.create(createGroupDto);
  }
}