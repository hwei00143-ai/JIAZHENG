import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(openid: string): Promise<any> {
    // TODO: Implement user validation with database
    return { openid, sub: openid };
  }

  async login(user: any) {
    const payload = { openid: user.openid, sub: user.sub };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}