export interface Persona {
    id?: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    created_at?: string;
    updated_at?: string;
}

export interface PersonaSL {
    id?: number;
    nombrecompleto: string;
}