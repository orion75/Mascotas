export interface Mascota {
    id?: number;
    nombre: string;
    id_persona: number;
    id_raza: number;
    tamano: string;
    edad: number;
    created_at?: string;
    updated_at?: string;
}

export interface MascotaList {
    id?: number;
    nombre: string;
    id_persona: number;
    id_raza: number;
    tamano: string;
    edad: number;
    persona: string;
    raza: string;
    created_at?: string;
    updated_at?: string;
}
