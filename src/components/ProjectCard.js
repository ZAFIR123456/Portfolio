import { Box, Flex } from "@chakra-ui/react";
import { Col, Image } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Box
        _before={{
          content: '""',
          background:
            "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
          opacity: 0.85,
          position: "absolute",
          width: "100%",
          height: "0",
          transition: "0.4s ease-in-out",
        }}
        _hover={{
          _before: {
            height: "100%",
          },
          cursor:"pointer"
        }}
        position="relative"
        borderRadius="30px"
        overflow="hidden"
        marginBottom="24px"
      >
        <Image src={imgUrl} />
        <Flex
          flexDirection={"column"}
          h={"100%"}
          position={"absolute"}
          textAlign={"center"}
          justifyContent={"center"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          transition={"0.5s ease-in-out"}
          opacity={"0"}
          width={"100%"}
          _hover={{
            textAlign: "center",
            justifyContent: "center",
            opacity: "1",
          }}
        >
          <Box
            fontSize={"30px"}
            fontWeight={"700"}
            letterSpacing={"0.8px"}
            lineHeight={"1.1em"}
          >
            {title}
          </Box>
          <Box
            fontStyle={" italic"}
            fontWeight={" 400"}
            fontSize={" 15px"}
            letterSpacing={" 0.8px"}
          >
            {description}
          </Box>
        </Flex>
      </Box>
    </Col>
  );
};
