import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('login')
  async login(@Body() loginDto: any) {
    // TODO: Implement WeChat mini-program login
    return this.authService.login(loginDto);
  }
}