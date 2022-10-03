import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos/inicio.css"
import sonido from "./imgs/sonido.jpg"
import radio from "./imgs/radio.jpg"
import papel from "./imgs/papel.jpg"
import fibra from "./imgs/fibra.jpg"
import tel from "./imgs/tel.png"
import humo from "./imgs/humo.jpg"

function App() {
  return (
    <div align="center">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#def">Definicion</Nav.Link>
            <Nav.Link href="#tipos">Tipos</Nav.Link>
            <Nav.Link href="#bio">Bibliografía</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br id='def'></br>
      <div class="inicio">
        <h1 align="center">¿Qué es un canal de comunicación?</h1>
        <br></br>
        <p>Un canal de comunicación es el medio físico a través del cual se lleva a cabo un acto comunicativo, 
          es decir, que sirve para el intercambio de información entre un emisor y uno o varios receptores.</p>
        <p>La presencia y disponibilidad de este medio específico es sólo uno de los elementos indispensables 
          para que el circuito de la comunicación se cumpla de manera efectiva. Es sumamente importante,  ya que todo 
          acto de comunicación requiere de la transmisión de información a través de un elemento físico, concreto.</p>
      </div>
      <br></br>
      <br></br>
      <div class="inicio2" id='tipos'>
        <h1 align="center">Tipos de canales</h1>
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
        <br></br>
        <div class="cont">
          <p class="texto"><img src={sonido} alt='' class="izq"/> <h class="viñetas">- Ondas Sonoras: </h> Son transmitidas por el aire, 
          permitiendo que la voz llegue desde nuestro dispositivo fonador hasta los oídos de nuestro interlocutor en una conversación.</p>
          <p class="texto"><img src={radio} alt='' class="izq"/> <h class="viñetas">- Ondas de radio: </h> Son emitidas por una estación de radio en algún lugar de nuestro 
          país y recibidas por un dispositivo receptor capáz de decodificarlas y convertirlas en ondas sonoras que, a 
          través del aire, lleguen a nuestro oído.
          </p>
          <p class="texto"><img src={papel} alt='' class="izq"/> <h class="viñetas">- Papel: </h> Uno de los medios de comunicación más utilizados a lo largo de toda nuestra 
          historia ya que es la base de los mensajes escritos, ya sea una carta, una noticia en algún periódico, algún 
          reportaje en una revista.
          </p>
          <p class="texto"><img src={fibra} alt='' class="izq"/> <h class="viñetas">- Fibra óptica: </h> Medio por el cuál los modems pueden conectarse a internet, 
          envían y reviben señales informáticas en forma de pulsos eléctricos, recorriendo largas distancias de ida y vuelta
          </p>
          <p class="texto"><img src={tel} alt='' class="izq"/> <h class="viñetas">- Pulsos telefónicos: </h> Son con los que operaban los teléfonos de antaño, o 
          bien las microondas con que operan nuestros teléfonos celulares, permitiendo que el sonido de nuestra voz 
          se transporte desde nuestra terminal hasta la del receptor y viceversa.
          </p>
          <p class="texto"><img src={humo} alt='' class="izq"/><h class="viñetas">- Señales de humo: </h> funcionaban y eran ocupadas en áreas vastas y 
          despobladas que se hacen mediante hogueras, estas señales podían comunicar mensjaes complejos y codificados 
          de antemano entre atalayas o puesto de vigilancia.
          </p>
        </div>
        </p>
      </div>
      <div class="inicio2" id='bio'>
        <h3>Bibliografía</h3>

      </div>
    </div>
  );
}

export default App;
