import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const mockdata = [
  {
    id: 1,
    username: 'thiago',
    password: 'password',    
  },
  {
    id: 2,
    username: 'assis',
    password: 'password',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ name, password }: AuthPayloadDto) {
    const findUser = mockdata.find((user) => user.username === name);
    if (!findUser) return null;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
