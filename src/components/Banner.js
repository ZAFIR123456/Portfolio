// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Box, Button, Image } from "@chakra-ui/react";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

 const Banner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <Box>
              <Box className= "animate__animated animate__fadeIn" >
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Zafir`} <span className="wrap">I'm a React Developer</span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Button >Let’s Connect <ArrowRightCircle size={25} /></Button>
              </Box>
            </Box>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Box>
                <Box className="animate__animated animate__zoomIn">
                  <Image src={headerImg} alt="Header Img"/>
                </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner