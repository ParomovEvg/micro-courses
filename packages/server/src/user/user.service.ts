import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private injectUserRepository: Repository<UserEntity>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const user = this.injectUserRepository.create({
      email: createUserInput.email,
      name: createUserInput.name,
    });
    return this.injectUserRepository.save(user);
  }

  async findAll() {
    return this.injectUserRepository.find();
  }

  async findOne(id: number) {
    return this.injectUserRepository.findOne(id);
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.injectUserRepository.findOneOrFail(id);

    if (updateUserInput.name) {
      user.name = updateUserInput.name;
    }
    if (updateUserInput.email) {
      user.email = updateUserInput.email;
    }

    return this.injectUserRepository.save(user);
  }

  async remove(id: number) {
    return this.injectUserRepository.delete(id);
  }
}
