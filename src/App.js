import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos/inicio.css"

function App() {
  return (
    <div align="center">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#def">Definicion</Nav.Link>
            <Nav.Link href="#tipos">Tipos</Nav.Link>
            <Nav.Link href="#bio">Biografía</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <div class="inicio">
        <h1 align="center" name="def">¿Qué es un canal de comunicación?</h1>
        <br></br>
        <p>Un canal de comunicación es el medio físico a través del cual se lleva a cabo un acto comunicativo, 
          es decir, que sirve para el intercambio de información entre un emisor y uno o varios receptores.</p>
        <p>La presencia y disponibilidad de este medio específico es sólo uno de los elementos indispensables 
          para que el circuito de la comunicación se cumpla de manera efectiva. Es sumamente importante,  ya que todo 
          acto de comunicación requiere de la transmisión de información a través de un elemento físico, concreto.</p>
      </div>
      <br></br>
      <br></br>
      <div class="inicio">
        <h1 align="center" name="def">Tipos de canales</h1>
        <br></br>
        <p>Los canales o medios de comunicación pueden ser, a grandes rasgos, de estos tipos:</p>
        <div class="viñetas">
          <p>*Personales</p>
          <p>*Masivos</p>
          <p>*Unidireccionales</p>
          <p>*Bidireccionales</p>
        </div>
        <br></br>
          <p>Algunos ejemplos de estos canales o medios de comunicación son:
          <br></br>
          <div>
            <p><h class="viñetas">- Ondas sonoras: </h> Son transmitidas por el aire, permitiendo que la voz llegue
              desde nuestro dispositivo fonador, hasta los oídos de nuestro interlocutor en una conversación
            </p>
            <p><h class="viñetas">- Ondas de radio: </h> Son emitidas por una estación de radio en algún lugar de nuestro 
            país y recibidas por un dispositivo receptor capáz de decodificarlas y convertirlas en ondas sonoras que, a 
            través del aire, lleguen a nuestro oído.
            </p>
            <p><h class="viñetas">- Papel: </h> Uno de los medios de comunicación más utilizados a lo largo de toda nuestra 
            historia ya que es la base de los mensajes escritos, ya sea una carta, una noticia en algún periódico, algún 
            reportaje en una revista.
            </p>
            <p><h class="viñetas">- Fibra óptica: </h> Medio por el cuál los modems pueden conectarse a internet, 
            envían y reviben señales informáticas en forma de pulsos eléctricos, recorriendo largas distancias de ida y vuelta
            </p>
            <p><h class="viñetas">- Pulsos telefónicos: </h> Son con los que operaban los teléfonos de antaño, o 
            bien las microondas con que operan nuestros teléfonos celulares, permitiendo que el sonido de nuestra voz 
            se transporte desde nuestra terminal hasta la del receptor y viceversa.
            </p>
            <p><h class="viñetas">- Señales de humo: </h> funcionaban y eran ocupadas en áreas vastas y 
            despobladas que se hacen mediante hogueras, estas señales podían comunicar mensjaes complejos y codificados 
            de antemano entre atalayas o puesto de vigilancia.
            </p>
          </div>
           Estos son solo algunos de los ejemplos de medios de comunicación, podemos mencionar igualmente las señales 
           de humo que 
          </p>
      </div>
    </div>
  );
}

export default App;
