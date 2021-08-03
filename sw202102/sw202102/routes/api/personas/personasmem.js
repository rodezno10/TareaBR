//Modelo de Datos en Memory
// Guardando serializando la informacion en un documento json


// serializar
const fs = require('fs');

const filename = "persona.json";

let fileFirstRead = false;

const writeToFile = (handler)=>{
  fs.writeFile(
    filename, // archivo
    JSON.stringify(personasList), //informacion JSON
    handler //la funcion que se disapara un vez guardado el archivo
  );
}

const readFile = (handler)=>{
  fs.readFile(
    filename,
    'utf8',
    handler
  );
}

var personasList = [];

if(!fileFirstRead){
  readFile(
    (err,object)=>{
      if(err){
        console.log(err);
      }else{
        personasList = JSON.parse(object);
      }
    }
  );
}

let personaStruct = {
  nombre:"",
  telefono:"",
  correo:"",
  bio:""
}

module.exports.getAllPersonas = ()=>{
  return personasList;
}

module.exports.getById = (id)=>{
  try {
    return personasList[id];
  }catch(ex){
    return {};
  }
}


/*
var fun = function(a){
  return a
}

var fun = (a) => {return a};

 */
module.exports.getStruct = ()=>{
  // ES6 esto se conoce como destructor de objetos
  return { ...personaStruct }; //clone
}

module.exports.addToList = ( persona ) =>{
  personasList.push(persona);
  writeToFile(
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Succesfully Saved!!!");
      }
    }
  );
  return personasList.length -1;
}

module.exports.update = (id, nombre, telefono, correo, bio) => {
  if (id >= personasList.length);
  personasList[id] = {
    ...personasList[id], // old values
    ...{ nombre, telefono, correo, bio } // new values
  };
  writeToFile(
    (err)=>{
      if(err){
        console.log(err);
      }else {
        console.log("File Succesfully Saved!!!");
      }
    }
  );
  return personasList[id];
  /*
  personasList[id] = Object.assign(
    {},
    personasList[id],
    {nombre, telefono, correo, bio}
  );
  */
}

module.exports.deletePersona = (id)=>{
  let newPersonasList = personasList.filter(
    (persona, index)=>{ 
      return index != id;
    }
  );
  personasList = newPersonasList;
  writeToFile(
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Succesfully Saved!!!");
      }
    }
  );
  return true;
}
