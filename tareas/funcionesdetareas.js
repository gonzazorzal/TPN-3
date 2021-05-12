const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));
const comando = process.argv[2];

module.exports = {
    leerJson: function () {
        return JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));
    },
    
       

    
    listarTareas: function () {

        /*for (let i = 0; i < tareas.length; i++) {
            console.log(tareas[i]);

        }*/
        tareas.forEach(tarea => {
            console.log(tarea);




        })},

    filtrarPorEstado: function (filtro) {


        let leerPorEstado = tareas.filter(tarea => tarea.estado === filtro);
        console.log(leerPorEstado);

    },
    escribirJSON: () => {

        fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas, 'utf-8'));

    },
    guardarTarea: function(){
        
        switch (comando) {
            case undefined:
        
                console.log('Atención - Tienes que pasar una acción.');
                break;
        
            case 'crear':
            let titulo = process.argv[3];
                if (!titulo) {
                    console.log('dame una tarea!');
                    break;
                }
                let estado = 'pendiente';
                

                let nuevaTarea = {
                    titulo,
                    estado 
                };
                
                tareas.push(nuevaTarea);
                this.escribirJSON();
                this.listarTareas();

        
                break;
            case 'listar':
                this.listarTareas();
        
                break;
            case 'filtrar':
                this.filtrarPorEstado(process.argv[3]);
                break;
        
            default:
                console.log('No entiendo qué quieres hacer');
                break;
        }
        
    }

};

