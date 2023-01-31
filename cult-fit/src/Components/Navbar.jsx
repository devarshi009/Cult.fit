import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { Box, Image, Flex, Grid } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box
      style={{
        position: "fixed",
        zIndex: "1000",
        backgroundColor: "gray.600",
        top: "0",
      }}
    >
      <Grid zIndex="100" bg="#1b1f2a">
        <Link to="/">
          <Image h={"20"} src={logo} />
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
      <Flex pos="absolute" top="5" left="1210" gap="10" fontSize={"30"}>
        <Link to="/location">
          <img
            style={{ height: "35px", width: "100%" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
          />
        </Link>

        <Button colorScheme="transparent" border="2px solid white">
          GET APP
        </Button>
        <Link to="/user">
          <Image
            h="35px"
            w="100%"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
          />
        </Link>
        <Link to="/cart">
          <img
            style={{ height: "25px", width: "100%", marginRight: "20px" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
