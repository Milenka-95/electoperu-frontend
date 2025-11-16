import { MiembroMesaInfo } from '@/types';

export const miembrosMesaInfo: MiembroMesaInfo[] = [
  {
    id: "1",
    tipo: "general",
    titulo: "Información General para Miembros de Mesa",
    descripcion: "Guía general sobre las responsabilidades y derechos de los miembros de mesa",
    pasos: [
      {
        numero: 1,
        titulo: "Designación",
        descripcion: "Has sido seleccionado mediante sorteo público para ser miembro de mesa. Esta es una función ciudadana obligatoria.",
        importante: true
      },
      {
        numero: 2,
        titulo: "Capacitación obligatoria",
        descripcion: "Debes asistir a la capacitación programada por la ONPE. Recibirás una constancia de capacitación.",
        importante: true
      },
      {
        numero: 3,
        titulo: "Recojo de material electoral",
        descripcion: "Tres días antes de la elección, debes recoger el material electoral en el local designado por la ONPE."
      },
      {
        numero: 4,
        titulo: "Día de la elección",
        descripcion: "Debes presentarte en tu centro de votación a las 7:00 AM con tu DNI original y tu constancia de miembro de mesa."
      }
    ],
    documentos_pdf: [
      "/documentos/manual_miembro_mesa.pdf",
      "/documentos/derechos_miembro_mesa.pdf"
    ],
    orden: 1
  },
  {
    id: "2",
    tipo: "instalacion",
    titulo: "Instalación de la Mesa de Sufragio",
    descripcion: "Procedimiento para la correcta instalación de la mesa de votación",
    pasos: [
      {
        numero: 1,
        titulo: "Presentación temprana",
        descripcion: "Llegar al local de votación antes de las 7:00 AM. La mesa debe instalarse entre las 7:00 AM y 8:00 AM.",
        importante: true
      },
      {
        numero: 2,
        titulo: "Verificar identidad",
        descripcion: "Presentar DNI original a los personeros y coordinadores de local."
      },
      {
        numero: 3,
        titulo: "Organizar el material",
        descripcion: "Colocar sobre la mesa: ánfora, actas electorales, padrón electoral, útiles de escritorio y sello de mesa."
      },
      {
        numero: 4,
        titulo: "Firmar el Acta de Instalación",
        descripcion: "Completar y firmar el Acta de Instalación de Mesa junto con los personeros presentes.",
        importante: true
      },
      {
        numero: 5,
        titulo: "Mostrar ánfora vacía",
        descripcion: "Mostrar el ánfora vacía a los personeros y público presente antes de sellarla."
      },
      {
        numero: 6,
        titulo: "Sellar el ánfora",
        descripcion: "Colocar el precinto de seguridad en el ánfora. Anotar el número del precinto en el acta."
      },
      {
        numero: 7,
        titulo: "Inicio del sufragio",
        descripcion: "Anunciar el inicio del sufragio a las 8:00 AM en punto. Llamar a los primeros electores.",
        importante: true
      }
    ],
    documentos_pdf: [
      "/documentos/acta_instalacion.pdf"
    ],
    orden: 2
  },
  {
    id: "3",
    tipo: "sufragio",
    titulo: "Proceso de Sufragio",
    descripcion: "Pasos a seguir durante el proceso de votación",
    pasos: [
      {
        numero: 1,
        titulo: "Verificar identidad del elector",
        descripcion: "Solicitar el DNI original. Verificar que la foto coincida con la persona y que figure en el padrón electoral.",
        importante: true
      },
      {
        numero: 2,
        titulo: "Marcar el padrón",
        descripcion: "Marcar en el padrón electoral que el ciudadano está votando."
      },
      {
        numero: 3,
        titulo: "Entregar la cédula",
        descripcion: "Entregar la cédula de sufragio al elector. Verificar que esté firmada por el miembro de mesa."
      },
      {
        numero: 4,
        titulo: "Guiar al elector",
        descripcion: "Indicar al elector que debe marcar su voto en la cámara secreta."
      },
      {
        numero: 5,
        titulo: "Recibir la cédula",
        descripcion: "Recibir la cédula doblada. NO desdoblarla ni verificar el voto (es secreto)."
      },
      {
        numero: 6,
        titulo: "Depositar en el ánfora",
        descripcion: "Colocar la cédula en el ánfora frente al elector."
      },
      {
        numero: 7,
        titulo: "Aplicar tinta indeleble",
        descripcion: "Aplicar tinta indeleble en el dedo índice derecho del elector."
      },
      {
        numero: 8,
        titulo: "Firmar el padrón",
        descripcion: "Solicitar al elector que firme el padrón electoral."
      },
      {
        numero: 9,
        titulo: "Devolver el DNI",
        descripcion: "Devolver el DNI al elector junto con su constancia de sufragio."
      }
    ],
    documentos_pdf: [
      "/documentos/procedimiento_sufragio.pdf"
    ],
    orden: 3
  },
  {
    id: "4",
    tipo: "escrutinio",
    titulo: "Escrutinio de Votos",
    descripcion: "Procedimiento para el conteo de votos al finalizar la jornada electoral",
    pasos: [
      {
        numero: 1,
        titulo: "Cierre de la votación",
        descripcion: "A las 4:00 PM, anunciar el cierre de la votación. Los electores en cola pueden votar.",
        importante: true
      },
      {
        numero: 2,
        titulo: "Contar electores",
        descripcion: "Contar el número total de electores que votaron según el padrón firmado."
      },
      {
        numero: 3,
        titulo: "Abrir el ánfora",
        descripcion: "Abrir el ánfora frente a personeros y público presente. Retirar el precinto de seguridad."
      },
      {
        numero: 4,
        titulo: "Contar cédulas",
        descripcion: "Contar el número total de cédulas que hay en el ánfora. Debe coincidir con el número de votantes.",
        importante: true
      },
      {
        numero: 5,
        titulo: "Desdoblar y mostrar",
        descripcion: "Desdoblar cada cédula y mostrarla en voz alta a personeros y público."
      },
      {
        numero: 6,
        titulo: "Clasificar votos",
        descripcion: "Clasificar los votos en: válidos, nulos y en blanco."
      },
      {
        numero: 7,
        titulo: "Contar por opción",
        descripcion: "Contar los votos válidos por cada opción electoral (candidato o partido)."
      },
      {
        numero: 8,
        titulo: "Llenar el Acta de Escrutinio",
        descripcion: "Completar el Acta de Escrutinio con los resultados obtenidos. Firmar junto con personeros.",
        importante: true
      },
      {
        numero: 9,
        titulo: "Publicar resultados",
        descripcion: "Colocar una copia del acta en un lugar visible del local de votación."
      }
    ],
    documentos_pdf: [
      "/documentos/acta_escrutinio.pdf",
      "/documentos/guia_escrutinio.pdf"
    ],
    orden: 4
  },
  {
    id: "5",
    tipo: "clausura",
    titulo: "Clausura de la Mesa",
    descripcion: "Pasos finales para clausurar la mesa de votación",
    pasos: [
      {
        numero: 1,
        titulo: "Organizar material",
        descripcion: "Organizar todo el material electoral: actas, padrón, cédulas sobrantes."
      },
      {
        numero: 2,
        titulo: "Entregar material a ONPE",
        descripcion: "Entregar el material electoral completo al personal de la ONPE en el local.",
        importante: true
      },
      {
        numero: 3,
        titulo: "Recibir constancia",
        descripcion: "Solicitar y recibir tu constancia de participación como miembro de mesa."
      },
      {
        numero: 4,
        titulo: "Compensación económica",
        descripcion: "Tienes derecho a una compensación económica. Se te informará sobre el procedimiento de cobro."
      }
    ],
    documentos_pdf: [
      "/documentos/clausura_mesa.pdf"
    ],
    orden: 5
  }
];
