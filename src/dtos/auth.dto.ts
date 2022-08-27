import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class AuthenticateLoginDto {
    /**
     * @description Email used in user registration
     * @example example.user.silva@examplemail.com
     * @nullable false,
     * @required true,
     */
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string;
    /**
     * @description Password used in user registration, min 6 characters
     * @example 0o1L2E
     * @nullable false,
     * @required true,
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}
