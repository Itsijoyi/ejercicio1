const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());


//put: actualizar un estudiante por id
app.put('/estudiantes/:id', 
    (req,res)=>{
        console.log(req.body); // Add this line to log the req.body
        const id=parseInt(req.params.id); 
        const estudiante=estudiantes.find(e=>e.id === id); 
        if (estudiante)
            {
                estudiante.nombre=req.body.nombre;
                res.json(estudiante);
            }
        else
            {
                res.status(404).send('Estudiante no localizado');
            }
    }
);

//delete: eliminar un estudiante por id
app.delete('/estudiantes/:id', //dando una ruta

    (req, res) => {
        const id = parseInt(req.params.id); // obteniendo el id de la ruta
        const index = estudiantes.findIndex(e => e.id === id); //  buscando el index del estudiante en el array
        if (index !== -1) {
            estudiantes.splice(index, 1); //  eliminando el estudiante del array
            res.status(204).send('Estudiante eliminado');
        } else {
            res.status(404).send('Estudiante no localizado');
        }
    }
);

app.use(express.json());

//arreglo "Estudiantes"
let estudiantes =
[
    {id:1,nombre:'Francisco Alvarez'},
    {id:2,nombre:'Monica Gutierrez'},
    {id:3,nombre:'Carlos Ruiz'}
];


//get: Obtener todos los estudiantes
app.get
(
    '/estudiantes',//solicitud get a esa ruta para que devuelva el arreglo "Estudiantes"
    (req,res)=>//=>arrow function
    {
        res.json(estudiantes);//se obtiene el arreglo en el formato json
    } 
); 

//get: obtener un estudiante por id
app.get
('/estudiantes/:id', //id parametro dinámico, ya que se va a cambiar constantenmente, en la url se va a estar usando y por eso se cambia
    (req,res)=>
    {
        const id=parseInt(req.params.id); //parseInt convierte el parametro id a un valor a un entero
        const estudiante=estudiantes.find(e=>e.id === id); //se busca al estudiante que coincida con el id de la url en el arreglo, operador lógico
        //si la id coincide con el estudiante, entonces se envia el resultado del estudiante, si no, un mensaje que dice que no se encuentra
        if (estudiante)
            {
                res.json(estudiante);
            }
        else
            {
                res.status(404).send('Estudiante no localizado');
            }
    }
);

//post para crear un nuevo estudiante
app.post
(
    '/estudiantes',
    (req,res)=>
    {
        const nuevoEstudiante=
        {
            id:estudiantes.length+1,
            nombre:req.body.nombre
        };
        estudiantes.push(nuevoEstudiante);
        res.status(201).json(nuevoEstudiante);
    }
);

//iniciar el servidor
app.listen
(PORT,()=>
    {
        console.log('Servidor ejecutando en http://localhost:${PORT}'); //se manda un mensaje para notificar del servidor
    }
);
