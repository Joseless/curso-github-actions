import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetPropertiesQueryDto, OrderBy } from './dto/get-properties-query.dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: GetPropertiesQueryDto) {
    const {
      city,
      zone,
      minPrice,
      maxPrice,
      bedrooms,
      status,
      orderBy,
    } = query;

    const where: any = {};

    if (city) {
      where.city = city;
    }

    if (zone) {
      where.zone = zone;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) {
        where.price.gte = minPrice;
      }
      if (maxPrice !== undefined) {
        where.price.lte = maxPrice;
      }
    }

    if (bedrooms !== undefined) {
      where.bedrooms = Number(bedrooms);
    }

    if (status) {
      where.status = status;
    }

    const orderByClause: any = {};

    switch (orderBy) {
      case OrderBy.PRICE_ASC:
        orderByClause.price = 'asc';
        break;
      case OrderBy.PRICE_DESC:
        orderByClause.price = 'desc';
        break;
      case OrderBy.RECENT:
        orderByClause.createdAt = 'desc';
        break;
      default:
        orderByClause.createdAt = 'desc';
    }

    const properties = await this.prisma.property.findMany({
      where,
      orderBy: orderByClause,
    });

    return properties.map((property) => ({
      ...property,
      imageUrls: JSON.parse(property.imageUrls || '[]'),
    }));
  }

  async findOne(slug: string) {
    const property = await this.prisma.property.findUnique({
      where: { slug },
    });

    if (!property) {
      throw new NotFoundException(`Property with slug "${slug}" not found`);
    }

    return {
      ...property,
      imageUrls: JSON.parse(property.imageUrls || '[]'),
    };
  }
}

