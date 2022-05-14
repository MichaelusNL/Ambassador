import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dtos/register.dto';
import * as bcrypt from 'bcryptjs';

@Controller()
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('admin/register')
  async register(@Body() body: RegisterDto) {
    const { passwordConfirm, ...data } = body;

    if (body.password !== body.passwordConfirm) {
      throw new BadRequestException('Passwords do not match');
    }

    const hashed = await bcrypt.hash(body.password, 12);

    return this.userService.save({
      ...data,
      password: hashed,
      isAmbassador: false,
    });
  }
}
