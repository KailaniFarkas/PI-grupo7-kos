const db = {
  usuario:  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juanperez@gmail.com",
    contrasenia: "clave123",
    dni: "30123456",
    fechaNacimiento: "15-04-1990",
    fotoPerfil: "juan.png"
  },
  lista: [
    {
      id: 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      annio: 1967,
      genero: "Realismo mágico",
      comentarios: [
        {
          usuario: "Ana Gómez",
          texto: "Una novela hermosa, me encantó. El realismo mágico está presente en cada rincón de Macondo.",
          fotoPerfil: "ana.png"
        },
        {
          usuario: "Carlos Díaz",
          texto: "Un clásico que siempre recomiendo. La historia de los Buendía es tan rica y compleja que merece varias lecturas.",
          fotoPerfil: "carlos.png"
        },
        {
          usuario: "Luciana Torres",
          texto: "Cada página es una joya. Gabo construye un mundo lleno de magia, tragedia y humanidad. Una obra imprescindible.",
          fotoPerfil: "luciana.png"
        },
        {
          usuario: "Marcos Ruiz",
          texto: "Lo releo cada pocos años y siempre descubro algo nuevo. Es una experiencia casi espiritual.",
          fotoPerfil: "marcos.png"
        },
        {
          usuario: "Julia Herrera",
          texto: "Una narrativa hipnótica. El tiempo cíclico, los personajes entrañables y el estilo poético lo hacen único.",
          fotoPerfil: "julia.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Como dije antes, Macondo está complicado pero bueno… hay que seguir leyendo.",
          fotoPerfil: "leo.png"
        }
      ]
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      annio: 1949,
      genero: "Distopía",
      comentarios: [
        {
          usuario: "Juan Pérez",
          texto: "Me dejó pensando días. Inquietante y visionario.",
          fotoPerfil: "juan.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Mirá que yo no hablo mucho, pero esto… esto es fuerte.",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Valeria Mazza",
          texto: "Brutal y vigente. Orwell era un visionario. La vigilancia total y la manipulación del lenguaje son miedos muy reales.",
          fotoPerfil: "valeria.png"
        },
        {
          usuario: "Martín Alegre",
          texto: "Uno de los libros más importantes del siglo XX. Cada vez que lo leo, me impacta más. Es aterrador cuánto se aplica a la actualidad.",
          fotoPerfil: "martin.png"
        }
      ]
    },
    {
      id: 3,
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      annio: 1813,
      genero: "Romance",
      comentarios: [
        {
          usuario: "Claudia Bolivar",
          texto: "Elizabeth Bennet es una heroína inolvidable. Romántico, crítico y con una prosa deliciosa.",
          fotoPerfil: "claudia.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Nada, el amor siempre es difícil, como en los clásicos partidos.",
          fotoPerfil: "leo.png"
        }
      ]
    },
    {
      id: 4,
      titulo: "The Metamorphosis",
      autor: "Franz Kafka",
      annio: 1915,
      genero: "Ficción existencial / Absurdo",
      comentarios: [
        {
          usuario: "Emilia Viernes",
          texto: "Desconcertante e inquietante. Kafka transforma lo absurdo en cotidiano de manera aterradora.",
          fotoPerfil: "emilia.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Me desperté siendo bicho, pero seguimos con humildad y trabajo.",
          fotoPerfil: "leo.png"
        },        
        {
          usuario: "Bruno Marte",
          texto: "Una obra maestra del absurdo. Te hace cuestionar todo. A pesar de su brevedad, es una lectura densa y profunda.",
          fotoPerfil: "bruno.png"
        }
      ]
    },
    {
      id: 5,
      titulo: "Crimen y castigo",
      autor: "Fíodor Dostoyevski",
      annio: 1866,
      genero: "Novela psicológica",
      comentarios: [
        {
          usuario: "Sofía Quiroga",
          texto: "Denso pero valioso. Una exploración profunda del alma humana.",
          fotoPerfil: "sofia.png"
        },
        {
          usuario: "Leo Messi",
          texto: "No me gusta perder… pero esto es perder contra uno mismo.",
          fotoPerfil: "leo.png"
        },        
        {
          usuario: "Esteban Echeverría",
          texto: "Raskólnikov es uno de los personajes más complejos que he leído. La lucha entre el bien y el mal está muy bien desarrollada.",
          fotoPerfil: "esteban.png"
        },
        {
          usuario: "Clara Galles",
          texto: "Un viaje a la culpa, la redención y la moral. No es fácil, pero definitivamente vale la pena.",
          fotoPerfil: "clara.png"
        }
      ]
    },
    {
      id: 6,
      titulo: "Rayuela",
      autor: "Julio Cortázar",
      annio: 1963,
      genero: "Ficción experimental",
      comentarios: [
        {
          usuario: "Gonzalo Vega",
          texto: "Leerlo fue un reto, pero también una aventura literaria inigualable. Cortázar juega con la forma, el orden y el lenguaje.",
          fotoPerfil: "gonzalo.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Lo empecé por el capítulo 73 como me dijeron, después fui viendo.",
          fotoPerfil: "leo.png"
        }
        
      ]
    },
    {
      id: 7,
      titulo: "Jane Eyre",
      autor: "Charlotte Brontë",
      annio: 1847,
      genero: "Romance / Drama",
      comentarios: [
        {
          usuario: "Natalia Pelusa",
          texto: "Un clásico poderoso. Jane es un personaje fuerte y determinado.",
          fotoPerfil: "natalia.png"
        },
        {
          usuario: "Leo Messi",
          texto: "No entendi. No speak english.",
          fotoPerfil: "leo.png"
        },        
        {
          usuario: "Agustina Prieto",
          texto: "Atmosférico, emotivo y con un mensaje feminista adelantado a su tiempo. Me atrapó desde el inicio.",
          fotoPerfil: "agustina.png"
        }
      ]
    },
    {
      id: 8,
      titulo: "El retrato de Dorian Gray",
      autor: "Oscar Wilde",
      annio: 1890,
      genero: "Filosofía / Fantasía oscura",
      comentarios: [
        {
          usuario: "Santiago Moyano",
          texto: "Oscuro y brillante. Una meditación sobre la belleza, el narcisismo y la corrupción del alma.",
          fotoPerfil: "santiago.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Si el retrato envejece por vos, es como tener un doble en la cancha.",
          fotoPerfil: "leo.png"
        }
        
      ]
    },
    {
      id: 9,
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      annio: 1953,
      genero: "Ciencia ficción",
      comentarios: [
        {
          usuario: "Micaela Luna",
          texto: "Una advertencia potente sobre la censura. Aún resuena en esta era digital.",
          fotoPerfil: "micaela.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Nada, contento.",
          fotoPerfil: "leo.png"
        },
      
      ]
    },
    {
      id: 10,
      titulo: "Wide Sargasso Sea",
      autor: "Jean Rhys",
      annio: 1966,
      genero: "Ficción poscolonial / Reescritura literaria",

      comentarios: [
        {
          usuario: "Leo Messi",
          texto: "Me gustó. Como dije recién, siempre hay otra historia detrás.",
          fotoPerfil: "leo.png"
        },        
        {
          usuario: "Lucía Fernández",
          texto: "Una relectura feminista muy potente de Jane Eyre. Me encantó ver la otra perspectiva.",
          fotoPerfil: "lucia.png"
        },
        {
          usuario: "Claudia Bolivar",
          texto: "Una historia tan triste como necesaria. Rhys le dio voz a la locura silenciada.",
          fotoPerfil: "claudia.png"
        }
      ]
    },
    {
      id: 11,
      titulo: "Matar a un ruiseñor",
      autor: "Harper Lee",
      annio: 1960,
      genero: "Drama social",
      comentarios: [
        {
          usuario: "Valentina Castro",
          texto: "Conmovedor y valiente. Atticus Finch es un modelo de integridad.",
          fotoPerfil: "valentina.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Lo terminé justo antes de un partido… fuerte, pero muy bueno.",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Claudia Bolivar",
          texto: "Un retrato muy humano de la injusticia y el racismo. Scout es inolvidable.",
          fotoPerfil: "claudia.png"
        },
        {
          usuario: "Martín López",
          texto: "Un clásico que todo el mundo debería leer al menos una vez.",
          fotoPerfil: "martin.png"
        }
      ]      
    },

    {
      id: 12,
      titulo: "El código Da Vinci",
      autor: "Dan Brown",
      annio: 2003,
      genero: "Thriller",
      comentarios: [
        {
          usuario: "Leo Messi",
          texto: "Me enganché mal, lo leí todo en la concentración. Después ya tenía que ir a entrenar.",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Diego Torres",
          texto: "Adictivo y lleno de giros. No podía dejar de leer.",
          fotoPerfil: "diego.png"
        },
        {
          usuario: "Florencia Ruiz",
          texto: "Entretenido y muy visual. Dan Brown te atrapa desde la primera página.",
          fotoPerfil: "flor.png"
        }
      ]      
    },
    {
      id: 13,
      titulo: "Asesinato en el Orient Express",
      autor: "Agatha Christie",
      annio: 1934,
      genero: "Misterio",
      comentarios: [
        {
          usuario: "Florencia Ruiz",
          texto: "Un clásico del crimen. Hercule Poirot es brillante.",
          fotoPerfil: "flor.png"
        },
        {
          usuario: "Esteban Echeverría",
          texto: "La resolución me voló la cabeza. De los mejores finales del género.",
          fotoPerfil: "esteban.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Lo leí en el avión. Estaba bueno… pero no sé, me dormí en el medio.",
          fotoPerfil: "leo.png"
        }
      ]      
    },

    {
      id: 14,
      titulo: "Lolita",
      autor: "Vladimir Nabokov",
      annio: 1955,
      genero: "Ficción / Controversial",
      comentarios: [
        {
          usuario: "Esteban Echeverría",
          texto: "Perturbador pero literariamente impresionante. Nabokov escribe como pocos.",
          fotoPerfil: "esteban.png"
        },
        {
          usuario: "Leo Messi",
          texto: "No sé si es para mí este libro, pero bueno, lo intenté.",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Clara Galles",
          texto: "Una lectura incómoda pero fascinante. Me dejó pensando durante días.",
          fotoPerfil: "clara.png"
        }
      ]      
    },
    {
      id: 15,
      titulo: "The Great Gatsby",
      autor: "F. Scott Fitzgerald",
      annio: 1925,
      genero: "Novela clásica / Crítica social",
      comentarios: [
        {
          usuario: "María Silva",
          texto: "Una crítica elegante al sueño americano. La ambientación es preciosa.",
          fotoPerfil: "maria.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Triste el final, la verdad… igual me tengo que ir al entrenamiento.",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Gonzalo Vega",
          texto: "Melancólico y sutil. El final me partió el alma.",
          fotoPerfil: "gonzalo.png"
        }
      ]      
    },
    {
      id: 16,
      titulo: "Great Expectations",
      autor: "Charles Dickens",
      annio: 1861,
      genero: "Novela de formación / Realismo",
      comentarios: [
        {
          usuario: "Martín López",
          texto: "Una historia de maduración llena de personajes memorables. Dickens nunca falla.",
          fotoPerfil: "martin.png"
        },
        {
          usuario: "Santiago Moyano",
          texto: "Me atrapó la transformación de Pip y la atmósfera sombría del relato.",
          fotoPerfil: "santiago.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Me lo recomendaron, me costó empezarlo… después me re metí.",
          fotoPerfil: "leo.png"
        }
      ]      
    },

    {
      id: 17,
      titulo: "Los miserables",
      autor: "Victor Hugo",
      annio: 1862,
      genero: "Novela histórica",
      comentarios: [
        {
          usuario: "Leo Messi",
          texto: "Es largo, eh… lo iba leyendo entre partidos. Valjean la pelea como loco.",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Gonzalo Vega",
          texto: "Una epopeya de la redención y la justicia. Jean Valjean es inolvidable.",
          fotoPerfil: "gonzalo.png"
        },
        {
          usuario: "Carlos Díaz",
          texto: "Victor Hugo lo escribió todo: política, religión, amor y justicia. Monumental.",
          fotoPerfil: "carlos.png"
        }
      ]      
    },

    {
      id: 18,
      titulo: "El extranjero",
      autor: "Albert Camus",
      annio: 1942,
      genero: "Existencialismo",
      comentarios: [
        {
          usuario: "Santiago Moyano",
          texto: "Frío, directo y poderoso. El sinsentido de la vida retratado como nunca.",
          fotoPerfil: "santiago.png"
        },
        {
          usuario: "Micaela Luna",
          texto: "Camus me hizo sentir incómoda, y eso fue lo mejor del libro.",
          fotoPerfil: "micaela.png"
        },
        {
          usuario: "Leo Messi",
          texto: "No sé qué decir… raro. Pero algo tiene.",
          fotoPerfil: "leo.png"
        }
      ]      
    },

    {
      id: 19,
      titulo: "Romeo y Julieta",
      autor: "William Shakespeare",
      annio: 1597,
      genero: "Tragedia romántica",
      comentarios: [
        {
          usuario: "Lucía Fernández",
          texto: "La tragedia de amor más famosa de todos los tiempos. Pura emoción.",
          fotoPerfil: "lucia.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Como dije recién, una historia complicada.",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Natalia Pelusa",
          texto: "Me emociona cada vez. Shakespeare sabía cómo escribir el amor imposible.",
          fotoPerfil: "natalia.png",
        }
      ]      
    },

    {
      id: 20,
      titulo: "Frankenstein",
      autor: "Mary Shelley",
      annio: 1818,
      genero: "Ciencia ficción gótica",
      comentarios: [
        {
          usuario: "Micaela Luna",
          texto: "Una historia conmovedora sobre el rechazo y la humanidad. Me sorprendió muchísimo.",
          fotoPerfil: "micaela.png"
        },
        {
          usuario: "Leo Messi",
          texto: "Me dio cosa el monstruo, pobre...",
          fotoPerfil: "leo.png"
        },
        {
          usuario: "Juan Pérez",
          texto: "No me lo esperaba así. Más filosófico que de terror. Me encantó.",
          fotoPerfil: "juan.png"
        }
      ]      
    }
  ]
};

module.exports = db;