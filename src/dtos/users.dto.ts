import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
export class UsersPOSTBodyDTO {
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    overview: string;
    @IsNotEmpty()
    @IsDateString()
    release_date: Date;
    @IsOptional()
    @IsBoolean()
    is_adult: boolean;
}
export class UsersPATCHBodyDTO {
    @IsOptional()
    @IsString()
    title: string;
    @IsOptional()
    @IsString()
    overview: string;
    @IsOptional()
    @IsDateString()
    release_date: Date;
    @IsOptional()
    @IsBoolean()
    is_adult: boolean;
}
export class UsersParamsDTO {
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
