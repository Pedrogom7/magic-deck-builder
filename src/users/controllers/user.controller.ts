// src/users/controllers/user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() userDto: any): Promise<User> {
        return this.userService.createUser(userDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() userDto: any): Promise<User> {
        return this.userService.update(id, userDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.userService.remove(id);
    }
}