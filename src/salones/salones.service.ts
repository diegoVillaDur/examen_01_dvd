import { Injectable, NotFoundException } from '@nestjs/common';
import { Salon } from './models/salon';
import { CreateSalonDto } from './dto/create-salon.dto';

@Injectable()
export class SalonesService {
    private salones: Salon[] = [];
    private idContador: number = 1;

    createSalon(nuevoSalon: CreateSalonDto): Salon {
        const salon: Salon = {
            id: this.idContador,
            nombre: nuevoSalon.nombre,
            capacidad: nuevoSalon.capacidad,
            edificio: nuevoSalon.edificio
        };

        this.salones.push(salon);
        this.idContador += 1;

        return salon;
    }

    getAllSalones(): Salon[] {
        return this.salones;
    }

    deleteSalon(id: number): void {
        const index = this.salones.findIndex(salon => salon.id === id);

        if (index === -1) {
            throw new NotFoundException(`El salón con ID ${id} no existe en la lista`);
        }

        this.salones.splice(index, 1);
    }
}
