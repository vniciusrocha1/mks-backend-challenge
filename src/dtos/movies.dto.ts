import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
export class MoviesPOSTBodyDTO {
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
export class MoviesPATCHBodyDTO {
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
export class MoviesParamsDTO {
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
