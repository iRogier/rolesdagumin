import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { User } from './users/user.entity';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '5336', // tu contraseña original, cámbiala si usas la de la profe
      database: 'rolesdb',
      entities: [User, Ingrediente], // incluye ambas entidades
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    IngredientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
