import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Box, Image, Text } from "@chakra-ui/react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Box className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</Text>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Box className="item">
                                <Image src={meter1} alt="Image" />
                                <h5>Html</h5>
                            </Box>
                            <Box className="item">
                                <Image src={meter2} alt="Image" />
                                <h5>Css</h5>
                            </Box>
                            <Box className="item">
                                <Image src={meter3} alt="Image" />
                                <h5>Javascript</h5>
                            </Box>
                            <Box className="item">
                                <Image src={meter1} alt="Image" />
                                <h5>React js</h5>
                            </Box>
                        </Carousel>
                    </Box>
                </div>
            </div>
        </div>
        <Image className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
