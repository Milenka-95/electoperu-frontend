import { CentroVotacion } from '@/types';

export const centrosVotacion: CentroVotacion[] = [
  {
    id: "1",
    nombre: "I.E. Ricardo Palma",
    direccion: "Av. Arequipa 2350",
    distrito: "Lince",
    provincia: "Lima",
    departamento: "Lima",
    coords: {
      lat: -12.0887,
      lng: -77.0355
    },
    mesas: [
      {
        mesa_id: "001234",
        numero: "001234",
        ubicacion_dentro_local: "Pabellón A - Aula 101",
        accesibilidad_info: "Primer piso, acceso para sillas de ruedas disponible"
      },
      {
        mesa_id: "001235",
        numero: "001235",
        ubicacion_dentro_local: "Pabellón A - Aula 102"
      },
      {
        mesa_id: "001236",
        numero: "001236",
        ubicacion_dentro_local: "Pabellón A - Aula 103"
      }
    ],
    accesibilidad: "Rampas de acceso para personas con discapacidad",
    referencia: "A dos cuadras del Parque Mariscal Castilla"
  },
  {
    id: "2",
    nombre: "Colegio San Agustín",
    direccion: "Jr. Nicolás de Piérola 345",
    distrito: "Miraflores",
    provincia: "Lima",
    departamento: "Lima",
    coords: {
      lat: -12.1196,
      lng: -77.0302
    },
    mesas: [
      {
        mesa_id: "002456",
        numero: "002456",
        ubicacion_dentro_local: "Edificio Principal - Salón 201",
        accesibilidad_info: "Segundo piso, ascensor disponible"
      },
      {
        mesa_id: "002457",
        numero: "002457",
        ubicacion_dentro_local: "Edificio Principal - Salón 202"
      }
    ],
    accesibilidad: "Ascensor y rampas disponibles",
    referencia: "Cerca al Parque Kennedy"
  },
  {
    id: "3",
    nombre: "I.E. Nuestra Señora de Fátima",
    direccion: "Av. La Marina 2055",
    distrito: "San Miguel",
    provincia: "Lima",
    departamento: "Lima",
    coords: {
      lat: -12.0782,
      lng: -77.0918
    },
    mesas: [
      {
        mesa_id: "003789",
        numero: "003789",
        ubicacion_dentro_local: "Pabellón B - Aula 301"
      },
      {
        mesa_id: "003790",
        numero: "003790",
        ubicacion_dentro_local: "Pabellón B - Aula 302"
      },
      {
        mesa_id: "003791",
        numero: "003791",
        ubicacion_dentro_local: "Pabellón B - Aula 303"
      },
      {
        mesa_id: "003792",
        numero: "003792",
        ubicacion_dentro_local: "Pabellón C - Aula 401"
      }
    ],
    referencia: "Frente a la Plaza San Miguel"
  },
  {
    id: "4",
    nombre: "Universidad Nacional Mayor de San Marcos - Pabellón Central",
    direccion: "Av. Universitaria s/n, Ciudad Universitaria",
    distrito: "Lima",
    provincia: "Lima",
    departamento: "Lima",
    coords: {
      lat: -12.0582,
      lng: -77.0831
    },
    mesas: [
      {
        mesa_id: "004123",
        numero: "004123",
        ubicacion_dentro_local: "Auditorio Principal"
      },
      {
        mesa_id: "004124",
        numero: "004124",
        ubicacion_dentro_local: "Sala de Conferencias A"
      },
      {
        mesa_id: "004125",
        numero: "004125",
        ubicacion_dentro_local: "Sala de Conferencias B"
      }
    ],
    accesibilidad: "Acceso completo para personas con discapacidad",
    referencia: "Ciudad Universitaria de San Marcos"
  },
  {
    id: "5",
    nombre: "I.E. José María Arguedas",
    direccion: "Jr. Los Alhelíes 456",
    distrito: "San Juan de Lurigancho",
    provincia: "Lima",
    departamento: "Lima",
    coords: {
      lat: -11.9918,
      lng: -76.9946
    },
    mesas: [
      {
        mesa_id: "005678",
        numero: "005678",
        ubicacion_dentro_local: "Pabellón A - Aula 101",
        accesibilidad_info: "Primer piso, acceso directo"
      },
      {
        mesa_id: "005679",
        numero: "005679",
        ubicacion_dentro_local: "Pabellón A - Aula 102"
      },
      {
        mesa_id: "005680",
        numero: "005680",
        ubicacion_dentro_local: "Pabellón A - Aula 103"
      },
      {
        mesa_id: "005681",
        numero: "005681",
        ubicacion_dentro_local: "Pabellón B - Aula 201"
      },
      {
        mesa_id: "005682",
        numero: "005682",
        ubicacion_dentro_local: "Pabellón B - Aula 202"
      }
    ],
    referencia: "Cerca al mercado de Zárate"
  },
  {
    id: "6",
    nombre: "Colegio Santa Rosa",
    direccion: "Av. Salaverry 1255",
    distrito: "Jesús María",
    provincia: "Lima",
    departamento: "Lima",
    coords: {
      lat: -12.0742,
      lng: -77.0529
    },
    mesas: [
      {
        mesa_id: "006234",
        numero: "006234",
        ubicacion_dentro_local: "Pabellón Principal - Aula 105"
      },
      {
        mesa_id: "006235",
        numero: "006235",
        ubicacion_dentro_local: "Pabellón Principal - Aula 106"
      }
    ],
    accesibilidad: "Rampas disponibles",
    referencia: "A una cuadra del Campo de Marte"
  }
];
