import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingrediente } from './entities/ingrediente.entity';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private ingredienteRepo: Repository<Ingrediente>,
  ) {}

  create(dto: CreateIngredienteDto) {
    const nuevo = this.ingredienteRepo.create(dto);
    return this.ingredienteRepo.save(nuevo);
  }

  @Get()
  findAll() {
    return this.ingredienteRepo.find();
  }

  async update(id: number, dto: UpdateIngredienteDto) {
    await this.ingredienteRepo.update(id, dto);
    return this.ingredienteRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.ingredienteRepo.delete(id);
  }
}
