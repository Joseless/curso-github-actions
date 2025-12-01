import { Module } from '@nestjs/common';
import { PropertiesModule } from './properties/properties.module';
import { LeadsModule } from './leads/leads.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, PropertiesModule, LeadsModule],
})
export class AppModule {}

