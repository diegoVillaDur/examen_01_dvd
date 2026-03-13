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

    getSalonById(id: number): Salon {
        return this.salones[id];
    }

    getAllSalones(): Salon[] {
        return this.salones;
    }

    updateSalon(id: number, salon: CreateSalonDto): Salon {
        const salonUpdate = this.getSalonById(id);
        if (salonUpdate) {
            salonUpdate.nombre = salon.nombre;
            salonUpdate.capacidad = salon.capacidad;
            salonUpdate.edificio = salon.edificio;
        }
        return salonUpdate;
    }

    deleteSalon(id: number): void {
        const index = this.salones.findIndex(salon => salon.id === id);

        if (index === -1) {
            throw new NotFoundException(`El salón con ID ${id} no existe en la lista`);
        }

        this.salones.splice(index, 1);
    }
}
