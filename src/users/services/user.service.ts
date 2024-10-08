// src/users/services/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async createUser(userDto: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userDto);
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return this.userRepository.findOneBy({ id: parseInt(id) });
    }

    async update(id: string, userDto: Partial<User>): Promise<User> {
        await this.userRepository.update(id, userDto);
        return this.userRepository.findOneBy({ id: parseInt(id) });
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}