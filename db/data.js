const data = {
    usuarios: [
        {
            id: 1,
            email: 'pablo@gmail.com',
            clave: 'pablo',
            nombreUsuario: 'Pablo',
            fotoPerfil: '/img/pablo.jpg',
            fecha: '15/12/1865',
            dni: '44986213'
        },

        {
            id: 2,
            email: 'maria@gmail.com',
            clave: 'maria',
            nombreUsuario: 'Maria',
            fotoPerfil: '/img/maria.jpg',
            fecha: '20/09/2002',
            dni: '42871032'
        },

        {
            id: 3,
            email: 'martin@gmail.com',
            clave: 'martin',
            nombreUsuario: 'Martin',
            fotoPerfil: '../public/img/martin.jpg',
            fecha: '16/07/1924',
            dni: '78951468'
        },

        {
            id: 4,
            email: 'paula@gmail.com',
            clave: 'paula',
            nombreUsuario: 'Paula',
            fotoPerfil: '../public/img/paula.jpg',
            fecha: '28/10/1970',
            dni: '45236987'
        },

        {
            id: 5,
            email: 'franco@gmail.com',
            clave: 'franco',
            nombreUsuario: 'Franco',
            fotoPerfil: '../public/img/franco.jpg',
            fecha: '03/03/2003',
            dni: '46257465'
        },

        {
            id: 6,
            email: 'lola@gmail.com',
            clave: 'lola',
            nombreUsuario: 'Lola',
            fotoPerfil: '../public/img/lola.jpg',
            fecha: '30/12/1999',
            dni: '40458965'
        },

        {
            id: 7,
            email: 'tomas@gmail.com',
            clave: 'tomas',
            nombreUsuario: 'Tomas',
            fotoPerfil: '../public/img/tomas.jpg',
            fecha: '19/10/2005',
            dni: '48987201'
        },

        {
            id: 8,
            email: 'magui@gmail.com',
            clave: 'magui',
            nombreUsuario: 'Magui',
            fotoPerfil: '../public/img/magui.jpg',
            fecha: '20/12/1975',
            dni: '22659874'
        },

        {
            id: 9,
            email: 'raul@gmail.com',
            clave: 'raul',
            nombreUsuario: 'Raul',
            fotoPerfil: '../public/img/raul.jpg',
            fecha: '08/11/2001',
            dni: '43598712'
        },

        {
            id: 10,
            email: 'emma@gmail.com',
            clave: 'emma',
            nombreUsuario: 'Emma',
            fotoPerfil: '../public/img/emma.jpg',
            fecha: '18/08/1980',
            dni: '38965417'
        },
    ],
    posteos: [{
        id: 1,
        clienteid: 1,
        nombreUsuario: 'Pablo',
        fotoPerfil: '../',
        nombreImg: "https://cdn.motor1.com/images/mgl/Akkwn2/s1/lanzamiento-mercedes-benz-clasec-1.jpg",
        textonombre: "mercedez benz",
        textoposteo: "color negro",
        comentarios: [{
            id: 1,
            idPost: 1,
            idUsuario: 2,
            nombre: 'Maria',
            fotoPerfil: '/img/maria.jpg',
            textoComentario: "Muy bueno" ,
        },
        {
            id: 1,
            idPost: 1,
            idUsuario: 3,
            nombre: 'Martin',
            fotoPerfil: '../public/img/martin.jpg',
            textoComentario: "No me gusto" ,
        },
        {
            id: 1,
            idPost: 1,
            idUsuario: 4,
            nombre: 'Paula',
            fotoPerfil: '../public/img/paula.jpg',
            textoComentario: "Esplendido" ,
        },
        {
            id: 1,
            idPost: 1,
            idUsuario: 5,
            nombre: 'Franco',
            fotoPerfil: '../public/img/franco.jpg',
            textoComentario: "Buenisimo" ,
        },
    ]
    },
    {
        id: 2,
        clienteid: 2,
        nombreUsuario: 'Maria',
        fotoPerfil: '../public/img/maria.jpg',
        nombreImg: "https://tourismmedia.italia.it/is/image/mitur/20210302144440-varenna-lago-di-como-lombardia-gettyimages-874859776-2",
        textonombre: "Lago di Como",
        textoposteo: "Me fui de vacaciones!",
        comentarios: [{
            id: 1,
            idPost: 2,
            idUsuario: 10,
            nombre: 'Emma',
            fotoPerfil: '../public/img/emma.jpg',
            textoComentario: "Que lindo lugar" ,
        },
        {
            id: 2,
            idPost: 2,
            idUsuario: 9,
            nombre: 'Raul',
            fotoPerfil: '../public/img/raul.jpg',
            textoComentario: "Italia" ,
        },
        {
            id: 3,
            idPost: 2,
            idUsuario: 8,
            nombre: 'Magui',
            fotoPerfil: '../public/img/magui.jpg',
            textoComentario: "Europa es god" ,
        },
        {
            id: 4,
            idPost: 2,
            idUsuario: 7,
            nombre: 'Tomas',
            fotoPerfil: '../public/img/tomas.jpg',
            textoComentario: "LLevame!" ,
        }
    ]
    },
    {
        id: 3,
        clienteid: 7,
        nombreUsuario: 'Tomas',
        fotoPerfil: '../public/img/tomas.jpg',
        nombreImg: "https://media.npr.org/assets/img/2022/11/30/ap22334713805422-bf2e9ef9ad834246d7204a5e599e5835a9b70cf3-s1100-c50.jpg",
        textonombre: "Messi",
        textoposteo: "El mejor de la historia",
        comentarios: [{
            id: 1,
            idPost: 3,
            idUsuario: 6,
            nombre: 'Lola',
            fotoPerfil: '../public/img/lola.jpg',
            textoComentario: "Aguante messiii" ,
        },
        {
            id: 2,
            idPost: 3,
            idUsuario: 5,
            nombre: 'Franco',
            fotoPerfil: '../public/img/franco.jpg',
            textoComentario: "vamooosss" ,
        },
        {
            id: 3,
            idPost: 3,
            idUsuario: 8,
            nombre: 'Magui',
            fotoPerfil: '../public/img/magui.jpg',
            textoComentario: "goat " ,
        },
        {
            id: 4,
            idPost: 3,
            idUsuario: 4,
            nombre: 'Paula',
            fotoPerfil: '../public/img/paula.jpg',
            textoComentario: "indiscutido!" ,
        }
    ]
    },
    {
        id: 4,
        clienteid: 3,
        nombreUsuario: 'Martin',
        fotoPerfil: '../public/img/martin.jpg',
        nombreImg: "https://i.pinimg.com/originals/81/6d/95/816d95932601dc85e3cb8e35e9f62cb1.jpg",
        textonombre: "Asado",
        textoposteo: "Que rico asado voy a comer",
        comentarios: [{
            id: 1,
            idPost: 4,
            idUsuario: 1,
            nombre: 'Pablo',
            fotoPerfil: '../public/img/pablo.jpg',
            textoComentario: "Que rico" ,
        },
        {
            id: 2,
            idPost: 4,
            idUsuario: 9,
            nombre: 'Raul',
            fotoPerfil: '../public/img/raul.jpg',
            textoComentario: "Prefiero el vacio!!" ,
        },
        {
            id: 3,
            idPost: 4,
            idUsuario: 7,
            nombre: 'Tomas',
            fotoPerfil: '../public/img/tomas.jpg',
            textoComentario: "Invitame mal amigo " ,
        },
        {
            id: 4,
            idPost: 4,
            idUsuario: 10,
            nombre: 'Emma',
            fotoPerfil: '../public/img/emma.jpg',
            textoComentario: "El mejor corte lejos" ,
        }
    ]
    },
    {
        id: 5,
        clienteid: 6,
        nombreUsuario: 'Lola',
        fotoPerfil: '../public/img/lola.jpg',
        nombreImg: "https://media.glamour.mx/photos/640258dd03837e4b8abcfa87/1:1/w_1999,h_1999,c_limit/Pareja%20enamorada.jpg",
        textonombre: "Pareja",
        textoposteo: "Mi pareja",
        comentarios: [{
            id: 1,
            idPost: 5,
            idUsuario: 1,
            nombre: 'Pablo',
            fotoPerfil: '../public/img/pablo.jpg',
            textoComentario: "Les mando un abrazo" ,
        },
        {
            id: 2,
            idPost: 5,
            idUsuario: 4,
            nombre: 'Paula',
            fotoPerfil: '../public/img/paula.jpg',
            textoComentario: "A mi me dejaron" ,
        },
        {
            id: 3,
            idPost: 5,
            idUsuario: 5,
            nombre: 'Franco',
            fotoPerfil: '../public/img/franco.jpg',
            textoComentario: "Paula yo te propongo matrimonio no hay drama" ,
        },
        {
            id: 4,
            idPost: 5,
            idUsuario: 2,
            nombre: 'Maria',
            fotoPerfil: '../public/img/maria.jpg',
            textoComentario: "Que tiernos" ,
        }
    ]
    },
    {
        id: 6,
        clienteid: 10,
        nombreUsuario: 'Emma',
        fotoPerfil: '../public/img/emma.jpg',
        nombreImg: "https://es.web.img3.acsta.net/medias/nmedia/18/72/41/74/20198901.jpg",
        textonombre: "Pelicula",
        textoposteo: "Que buena pelicula",
        comentarios: [{
            id: 1,
            idPost: 6,
            idUsuario: 2,
            nombre: 'Maria',
            fotoPerfil: '../public/img/maria.jpg',
            textoComentario: "No la entiendo" ,
        },
        {
            id: 2,
            idPost: 6,
            idUsuario: 9,
            nombre: 'Raul',
            fotoPerfil: '../public/img/raul.jpg',
            textoComentario: "Nolan crack" ,
        },
        {
            id: 3,
            idPost: 6,
            idUsuario: 3,
            nombre: 'Martin',
            fotoPerfil: '../public/img/martin.jpg',
            textoComentario: "Tarantino es mejor" ,
        },
        {
            id: 4,
            idPost: 6,
            idUsuario: 7,
            nombre: 'Tomas',
            fotoPerfil: '../public/img/tomas.jpg',
            textoComentario: "Aburrida" ,
        }
    ]
    },
    {
        id: 7,
        clienteid: 8,
        nombreUsuario: 'Magui',
        fotoPerfil: '../public/img/magui.jpg',
        nombreImg: "https://marketplace.canva.com/EAE77G_seFw/1/0/1067w/canva-tarjeta-para-receta-%C2%B7-hoja-de-recetario-espagueti-a-la-bolo%C3%B1esa-vintage-con-dibujos-JJowlmR8hzM.jpg",
        textonombre: "Receta",
        textoposteo: "Miren esta receta",
        comentarios: [{
            id: 1,
            idPost: 7,
            idUsuario: 5,
            nombre: 'Franco',
            fotoPerfil: '../public/img/franco.jpg',
            textoComentario: "Prefiero el pesto" ,
        },
        {
            id: 2,
            idPost: 7,
            idUsuario: 3,
            nombre: 'Martin',
            fotoPerfil: '../public/img/martin.jpg',
            textoComentario: "Cuando me cocinas?" ,
        },
        {
            id: 3,
            idPost: 7,
            idUsuario: 2,
            nombre: 'Maria',
            fotoPerfil: '../public/img/maria.jpg',
            textoComentario: "Bolognesaaa" ,
        },
        {
            id: 4,
            idPost: 7,
            idUsuario: 6,
            nombre: 'Lola',
            fotoPerfil: '../public/img/lola.jpg',
            textoComentario: "Fideo con salsa" ,
        }
    ]
    },
    {
        id: 8,
        clienteid: 5,
        nombreUsuario: 'Franco',
        fotoPerfil: '../public/img/franco.jpg',
        nombreImg: "https://images.ecestaticos.com/sTRDdRvKDYME49pxYnrumQ1Upd8=/0x0:2272x1615/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F524%2F7d4%2Fa75%2F5247d4a75ad51daa279b66430b49d04b.jpg",
        textonombre: "Djokovic",
        textoposteo: "Mejor tenista del mundo",
        comentarios: [{
            id: 1,
            idPost: 8,
            idUsuario: 1,
            nombre: 'Pablo',
            fotoPerfil: '../public/img/pablo.jpg',
            textoComentario: "Asi es" ,
        },
        {
            id: 2,
            idPost: 8,
            idUsuario: 7,
            nombre: 'Tomas',
            fotoPerfil: '../public/img/tomas.jpg',
            textoComentario: "Sin dudas" ,
        },
        {
            id: 3,
            idPost: 8,
            idUsuario: 2,
            nombre: 'Maria',
            fotoPerfil: '../public/img/maria.jpg',
            textoComentario: "Epico" ,
        },
        {
            id: 4,
            idPost: 8,
            idUsuario: 6,
            nombre: 'Lola',
            fotoPerfil: '../public/img/lola.jpg',
            textoComentario: "Nadal es mejor" ,
        }
    ]
    },
    {
        id: 9,
        clienteid: 9,
        nombreUsuario: 'Raul',
        fotoPerfil: '../public/img/raul.jpg',
        nombreImg: "https://www.el1digital.com.ar/wp-content/uploads/2023/09/milei-massa.jpg",
        textonombre: "MassaMilei",
        textoposteo: "Quien gana?",
        comentarios: [{
            id: 1,
            idPost: 9,
            idUsuario: 1,
            nombre: 'Pablo',
            fotoPerfil: '../public/img/pablo.jpg',
            textoComentario: "Massa" ,
        },
        {
            id: 2,
            idPost: 9,
            idUsuario: 7,
            nombre: 'Tomas',
            fotoPerfil: '../public/img/tomas.jpg',
            textoComentario: "Milei" ,
        },
        {
            id: 3,
            idPost: 9,
            idUsuario: 3,
            nombre: 'Martin',
            fotoPerfil: '../public/img/martin.jpg',
            textoComentario: "Todos" ,
        },
        {
            id: 4,
            idPost: 9,
            idUsuario: 6,
            nombre: 'Lola',
            fotoPerfil: '../public/img/lola.jpg',
            textoComentario: "Ninguno" ,
        }
    ]
    },
    {
        id: 10,
        clienteid: 4,
        nombreUsuario: 'Paula',
        fotoPerfil: '../public/img/paula.jpg',
        nombreImg: "https://storage.googleapis.com/diariodemocracia/cache/a9/20/98491.jpg",
        textonombre: "Paretto",
        textoposteo: "Foto mia paula paretto",
        comentarios: [{
            id: 1,
            idPost: 10,
            idUsuario: 1,
            nombre: 'Pablo',
            fotoPerfil: '../public/img/pablo.jpg',
            textoComentario: "Que grande paula!" ,
        },
        {
            id: 2,
            idPost: 10,
            idUsuario: 7,
            nombre: 'Tomas',
            fotoPerfil: '../public/img/tomas.jpg',
            textoComentario: "Felicitaciones" ,
        },
        {
            id: 3,
            idPost: 10,
            idUsuario: 3,
            nombre: 'Martin',
            fotoPerfil: '../public/img/martin.jpg',
            textoComentario: "Sos crack" ,
        },
        {
            id: 4,
            idPost: 10,
            idUsuario: 6,
            nombre: 'Lola',
            fotoPerfil: '../public/img/lola.jpg',
            textoComentario: "Bien ahi" ,
        }
    ]
    },
    ]}