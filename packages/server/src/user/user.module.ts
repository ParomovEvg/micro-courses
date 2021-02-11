import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigKeys } from '../configuration/configKeys';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), ConfigModule],
  providers: [UserResolver, UserService],
})
export class UserModule {
  constructor(
    private config: ConfigService<ConfigKeys>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    if (config.get('TEST_DATA')) {
      this.initTestData();
    }
  }

  initTestData() {
    for (let i = 0; i < 10; i++) {
      const user = this.userRepository.create();
      user.name = `user-${i}`;
      user.email = `user-${i}@mail.ru`;
      this.userRepository.save(user)
    }
  }
}
