import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { Box, Image, Flex, Grid } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import Useric from "../image/Useric.png"
const Navbar = () => {
  return (
    <Box>
      <Grid zIndex="1000" bg="#1b1f2a">
        <Link to="/">
          <Image  h={"20"} src={logo} />
        </Link>
      </Grid>
      <Flex
        pos="absolute"
        top="5"
        left="500"
        gap="20"
        fontSize={"20"}
        fontWeight={"bold"}
        color="gray"
      >
        <Link to="/fitness">FITNESS</Link>
        <Link to="/care">CARE</Link>
        <Link to="/mind">MIND</Link>
        <Link to="/store">STORE</Link>
      </Flex>
      <Flex pos="absolute"
        top="5"
        left="1210"
        gap="10"
        fontSize={"30"}>

        <Link to="/location">
          <img style={{height:"50px"}} src="https://www.shutterstock.com/image-vector/gps-icon-map-pin-location-600w-1130808221.jpg"  />
        </Link>
      
        <Button colorScheme="transparent" border="2px solid white">GET APP</Button>
        <Link to="/user">
          <img src={Useric}/>
        </Link>
        <Link to="/cart">
          <img style={{height:"50px"}} src="https://as2.ftcdn.net/v2/jpg/02/11/05/75/1000_F_211057598_Vzh78rIIokEndQVbh1DpxtF2VlfCtG3F.jpg" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
