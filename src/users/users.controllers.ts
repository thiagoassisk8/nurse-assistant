
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: { name: string, email: string, password: string }): Promise<User> {
    return this.usersService.create(createUserDto.name, createUserDto.email, createUserDto.password);
  }

//   @Get(':id')
//   @UseGuards(JwtAuthGuard)
//   async findOne(@Param('id') id: string): Promise<User> {
//     return this.usersService.findById(+id);
//   }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
