export interface Hospedaje {
    id?: number;
    id_mascota: number;
    fecha_ingreso: Date;
    fecha_salida: Date;
    created_at?: string;
    updated_at?: string;
}

export interface HospedajeList {
    id?: number;
    mascota: string;
    fecha_ingreso: Date;
    fecha_salida: Date;
}
