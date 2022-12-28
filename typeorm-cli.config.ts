import { Coffee } from 'src/coffees/entities/coffee.entity'
import { Flavor } from 'src/coffees/entities/flavor.entity'
import { CoffeeRefactor1672214928613 } from 'src/migrations/1672214928613-CoffeeRefactor'
import { SchemaSync1672215468245 } from 'src/migrations/1672215468245-SchemaSync'
import { DataSource } from 'typeorm'

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1672214928613, SchemaSync1672215468245],
})
