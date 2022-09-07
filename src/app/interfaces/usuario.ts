import { NivelEducativo } from "./nivel-educativo";

export interface Usuario {
  id        : number;
  email     : string;
  contrasena: string;
  nombre    : string;
  apellidoP : string;
  apellidoM : string;
  admin     : boolean;
  niveles_educativos: NivelEducativo[];
}
