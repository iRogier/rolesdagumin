import { Controller, Post, Body, Get } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { Param, Put, Delete } from '@nestjs/common';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Post()
  create(@Body() dto: CreateIngredienteDto) {
    return this.ingredientesService.create(dto);
  }

  @Get()
  findAll() {
    return this.ingredientesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIngredienteDto) {
    return this.ingredientesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesService.remove(+id);
  }
}
