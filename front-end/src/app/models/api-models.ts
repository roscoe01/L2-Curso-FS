  export interface Obras {
    data:  Obra[];
    error: boolean;
  }
  
  export interface Obra {
    _id:         string;
    id:          string;
    nombre:      string;
    descripcion: string;
    tamaño:      string;
    img:         string;
    año:         string;
    coleccion:   string;
  }