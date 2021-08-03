var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orlando J Betancourth' });
});

//req -> request 
//res -> response -> metodo para devolver una respuesta
router.get("/info",
  function(req, res){
    res.json(
      {
        "nombre" : "Orlando",
        "edad" : 36
      }
    );
  }
);


router.get("/form",
  (req, res)=>{
    res.render("form", {nombre:""});
  }
); // get form

router.post(
  "/form",
  (req, res)=>{

    console.log(req.body);
    let { txtNombre, txtApellido } = req.body;
    /*
    let txtNombre = req.body.txtNombre;
    let txtApellido = req.body.txtApellido;
    */
    res.render(
      "form",
      {
        nombre: txtNombre,
        apellido:txtApellido
      }
    );
  }
); // post form

/*

int edades[];
Vector, Arreglo, Lista
|indice|valor|
|0     |12   |
|1     |1    |
|2     |22   |
|3     |44   |

$arrayData = array();
Arreglo Asociativos, Listas Ligadas Dinamicas | Diccionario

|llave |valor  |
|nombre|Orlando|
|edad  |36     |






*/

module.exports = router;
