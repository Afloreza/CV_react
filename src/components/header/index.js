import React from "react";
import { Alert } from 'react-bootstrap';
import perfil from './perfil.jpg'
function Aux(){
return(
<div>
  <h1> CV Angela Florez Aristizabal</h1>
  <img
    className="d-block w-100"
    src={perfil}
    alt="Third slide"
    />
  <Alert variant="warning">
    <Alert.Heading></Alert.Heading>
    <p aling="center">
      "Sin importar los obstaculos siempre sigo adelante"
    </p>
    <hr />
    <Alert.Heading>Perfil Profesional</Alert.Heading>
    <p className="mb-0">
      Técnico laboral en sistemas, actualmente estudiante de Ingeniería de Sistemas
      y Telecomunicaciones, Conocimientos ofimáticos en programas office, sistemas
      operativos, sistema contable Contapyme, Agrowin y SAP BO. Conocimientos en bases de datos y seguridad informatica,
      dispuesta avanzar cada día y dar lo mejor de mi para cumplir las metas propuestas.
    </p>
  </Alert>
</div>
);
};
export default Aux;