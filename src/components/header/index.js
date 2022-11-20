import React from "react";
import { Alert } from 'react-bootstrap';

function Aux(){
    return(
        <div>
            <h1> CV Angela Florez Aristizabal</h1>
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
                operativos, sistema contable Visión. Conocimientos avanzados en ventas, planeación 
                y cumplimiento de metas y capacidad de liderazgo. Persona con orientación a 
                desarrollar la labor con calidad, innovadora, con iniciativa y colaboradora. 
                Dispuesta a cumplir con las distintas funciones, obligaciones y normas laborales 
                para así, formar parte del cumplimiento de metas planteadas por la organización.
                </p>
            </Alert>
        </div>
    );
};

export default Aux;