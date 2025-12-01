import { IsOptional, IsString, IsNumber, Min, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum OrderBy {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  RECENT = 'recent',
}

export class GetPropertiesQueryDto {
  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  zone?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  bedrooms?: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsEnum(OrderBy)
  orderBy?: OrderBy;
}

