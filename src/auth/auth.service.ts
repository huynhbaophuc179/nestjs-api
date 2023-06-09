import { Injectable } from '@nestjs/common';




@Injectable({})
export class AuthService {
    signup() {
        return { msg: "Singed Up" }
    }
    signin() {
        return { msg: "Singed In" }
    }
}