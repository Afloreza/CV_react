import React from "react";
import { Carousel } from 'react-bootstrap';
import deporte from './imagenes/deporte.jpg'
import lectura from './imagenes/lectura.jpg'
import viajes from './imagenes/viajes.jpg'
import gatos from './imagenes/gatos.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
function Footer(){
return(
<div>
  <h1 className="tituloempresas">Experiencia profesional</h1>
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Técnico de Sistemas</Accordion.Header>
      <Accordion.Body>
        <p>Stepan Colombia S.A</p>
        <p>Vía la Manuela - Manizales Caldas</p>
        <p>2017-2018</p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item segundotrabajo="1">
      <Accordion.Header> Técnico de Soporte</Accordion.Header>
      <Accordion.Body>
        <p>Comdata Group</p>
        <p>Manizales Caldas</p>
        <p>2018-2022</p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item tercerempleo="2">
      <Accordion.Header>Técnico de servicio Nivel II</Accordion.Header>
      <Accordion.Body>
        <p>Ternium Colombia</p>
        <p>Vía Malteria KM 2</p>
        <p>2022- Actualmente</p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  <h1 className="tituloeducacion">Educación</h1>
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Tecnico Bachiller</Accordion.Header>
      <Accordion.Body>
        <p>Instituto Tecnico Pensilvania</p>
        <p>Dirección: CRA 12 N° 24-35 Pensilvania Caldas</p>
        <p>2009-2014</p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item segundoestudio="1">
      <Accordion.Header> Técnico laboral en sistemas</Accordion.Header>
      <Accordion.Body>
        <p>Academia Nacional de Aprendizaje ANDAP</p>
        <p>Manizales Caldas</p>
        <p>2017-2018</p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item tercerestudio="2">
      <Accordion.Header>Ingenieria en sistemas y telecomunicaciones</Accordion.Header>
      <Accordion.Body>
        <p>Universidad de Manizales</p>
        <p>Dirección: Cra 8 # 8 3, MAnizales</p>
        <p>2017- Actualmente</p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  <h1 className="tituloreferencias">Referencias Laborales</h1>
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Coordinador IT Stepan Colombia S.A</Accordion.Header>
      <Accordion.Body>
        <p>Fredy Calle Marín</p>
        <p>Stepan Colombia S.A</p>
        <p>Tel. 3216789898</p>
        <p>Correo: fcalle@stepan.com</p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item segundotrabajo="1">
      <Accordion.Header>Coordinador Comdata Group - Soporte Técnico</Accordion.Header>
      <Accordion.Body>
        <p>Lucas Martínez Gomez</p>
        <p>Comdata Gropu</p>
        <p>Tel. 3216789898</p>
        <p>Correo: lucasm@comdata.com</p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item tercerempleo="2">
      <Accordion.Header>Coordinadora de Servicio</Accordion.Header>
      <Accordion.Body>
        <p>Paula Andrea Flórez Muñoz</p>
        <p>Ternium Colombia</p>
        <p>Tel. 3106789898</p>
        <p>Correo: paflorez@ternium.com</p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  <h1 className="titulopasatiempos">
    Mis pasatiempos
  </h1>
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={gatos}
        alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Gatos</h3>
        <p>
          Mis mascotas son gatos, Lili y Lulu, me encanta compartir con ellos todo el tiempo.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={viajes}
        alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Viajar</h3>
        <p>
          Me encanta viajar, conocer nuevas culturas, nuevas personas y nuevas comidas.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={deporte}
        alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Natación</h3>
        <p>
          Me encanta la natación, puedo ejercitar mi cuerpo completo y distraerme.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lectura}
        alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Lectura</h3>
        <p>
          Me encanta la lectura, abre mi imaginación y me libera la menta.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
);
};
export default Footer;