import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { Box, Image, Flex, Grid } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box>
      <Grid bg="gray.600">
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
          <GrLocation />
        </Link>
        <Button colorScheme="transparent" border="2px solid white">GET APP</Button>
        <Link to="/user">
          <AiOutlineUser />
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
