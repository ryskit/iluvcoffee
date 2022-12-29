import { Injectable, Module } from '@nestjs/common'
import { CoffeesService } from './coffees.service'
import { CoffeesController } from './coffees.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Coffee } from './entities/coffee.entity'
import { Flavor } from './entities/flavor.entity'
import { COFFEE_BRANDS } from './coffee.constants'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['buddy brew', 'nestcafe'],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
