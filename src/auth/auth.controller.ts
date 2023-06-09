import { AuthService } from './auth.service';
import { Controller, HttpCode, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }


    @Post('signin')
    @HttpCode(200)
    singin() {

        return this.authService.signin()

    }

    @Post('signup')
    signup() {
        return this.authService.signup()
    }
}