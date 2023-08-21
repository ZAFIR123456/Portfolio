// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import bannerImage from "../assets/img/banner-bg.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const Banner = () => {
  return (
    <Box
      marginTop="0"
      padding="260px 0 100px 0"
      backgroundImage={`url(${bannerImage})`}
      backgroundPosition="top center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      // id="home"
      className="banner"
    >
      <Container>
        <Flex alignItems={"center"}>
          <Col xs={12} md={6} xl={7}>
            <Box>
              <Box className="animate__animated animate__fadeIn">
                <Text
                  fontWeight="700"
                  letterSpacing="0.8px"
                  padding="8px 10px"
                  background="linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"
                  border="1px solid rgba(255, 255, 255, 0.5)"
                  fontSize="20px"
                  marginBottom="16px"
                  display="inline-block"
                >
                  Welcome to my Portfolio
                </Text>
                <Box
                  fontSize="65px"
                  fontWeight="700"
                  letterSpacing="0.8px"
                  lineHeight="1"
                  marginBottom="20px"
                  display="block"
                >
                  {`Hi! I'm Zafir`}{" "}
                  <span className="wrap">I'm a React Developer</span>
                </Box>

                <Text
                  color="#B8B8B8"
                  fontSize="18px"
                  letterSpacing="0.8px"
                  lineHeight="1.5em"
                  width="96%"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
                <Button
                  color="#fff"
                  fontWeight="700"
                  fontSize="20px"
                  marginTop="60px"
                  letterSpacing="0.8px"
                  display="flex"
                  alignItems="center"
                  >
                  Let’s Connect{" "}
                  <ArrowRightCircle/>
                </Button>
              </Box>
            </Box>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Box>
              <Box className="animate__animated animate__zoomIn">
                <Image
                animation={"updown 3s linear infinite"}
                
                src={headerImg} alt="Header Img" />
              </Box>
            </Box>
          </Col>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;
