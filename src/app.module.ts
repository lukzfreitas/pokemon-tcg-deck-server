import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigurationService } from './configuration/configuration.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

@Module({
  imports: [
    PokemonsModule,
    ConfigurationModule,
    MongooseModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (appConfigService: ConfigurationService) => {
        const options: MongooseModuleOptions = {
          uri: appConfigService.connectionString,
          useUnifiedTopology: true,
        };
        return options
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
