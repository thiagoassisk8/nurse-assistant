// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

//   async findByEmail(email: string): Promise<User | undefined> {
//     return this.userRepository.findOne({ where: { email } });
//   }

//   async findById(id: number): Promise<User | undefined> {
//     return this.userRepository.findOne(id);
//   }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
