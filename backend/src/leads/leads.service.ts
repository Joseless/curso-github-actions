import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(createLeadDto: CreateLeadDto) {
    // Verify property exists
    const property = await this.prisma.property.findUnique({
      where: { id: createLeadDto.propertyId },
    });

    if (!property) {
      throw new NotFoundException(
        `Property with id "${createLeadDto.propertyId}" not found`,
      );
    }

    const lead = await this.prisma.lead.create({
      data: createLeadDto,
    });

    return lead;
  }
}

