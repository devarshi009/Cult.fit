import React from "react";
import {
  Button,
  Box,
  HStack,
  Container,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import "./Home.css";
import Footer from "../Components/Footer"


import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="homePage">
      {/* <Navbar/> */}
      {/* HOMEPAGE FIRST VEDIO POSTER STARTS */}
      <>
        <div className="homePage__video-poster-one">
          <video
            autoPlay
            loop
            playsInline
            poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
          >
            <source
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1278,ar_1.77,q_auto:eco,dpr_1.0700000524520874,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="homePage__text-poster-one">
          <div className="homePage__text-poster-one_img-one">
            <img
              className="Image"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_2.13,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
              alt="we-are-cult-img"
              loading="lazy"
            />
          </div>
          <div className="homePage-text">
            <h4>
              A fitness movemet that is worth
              <br /> breaking a sweat for{" "}
            </h4>
          </div>

          <Button color="red" pos="absolute" top="350" left="160">
            EXPLORE CULTPASS
          </Button>
        </div>
        <div className="Icon">
          <BsChevronDown fontSize="30" />
        </div>
        {/* <Container> */}
        <HStack gap="5" bg="#171a26">
          <Box
            h="220"
            border="1px solid gray"
            w="25%"
            ml="150"
            borderRadius={20}
            bg="#232631"
          >
            <Heading mt="5" fontSize={30} color="gray">
              cultpass
              <br />
              <Text color="#e1b460" fontSize={50} fontWeight="bold">
                {" "}
                ELITE
              </Text>
            </Heading>
            <Text mt="5">
              Unlimited access to
              <br /> group classes,all gyms <br />
              and at-home workouts
            </Text>
          </Box>
          <Box
            h="220"
            border="1px solid gray"
            w="25%"
            ml="100"
            borderRadius={20}
            bg="#232631"
          >
            <Heading mt="5" fontSize={30} color="gray">
              cultpass
              <Text fontSize={50} fontWeight="bold" color="#d3d3d7">
                {" "}
                PRO
              </Text>
            </Heading>
            <Text>
              Unlimited access to all
              <br /> PRO gyms and at-home <br /> workouts
            </Text>
          </Box>
          <Box
            h="220"
            border="1px solid gray"
            w="25%"
            ml="100"
            borderRadius={20}
            bg="#232631"
          >
            <Heading mt="5" fontSize={30} color="gray">
              cultpass{" "}
              <Text fontSize={50} fontWeight="bold" color="#ad5b94">
                HOME
              </Text>
            </Heading>
            <Text mt="5">
              unlimited access to at- <br />
              home workouts with <br /> calorie tracking
            </Text>
          </Box>
        </HStack>
        {/* </Container> */}
      </>
      <HStack gap="200">
        <Box>
          <Image
            ml="100"
            mt="20"
            w="100%"
            h="400px"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.488,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
          />
        </Box>

        <Box>
          <Image
            w="100%"
            h="400px"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.404,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
          />
        </Box>
      </HStack>
      <Box>
        <Text
          pos="absolute"
          top="1300"
          left="200"
          fontWeight={"bolder"}
          zIndex={400}
          fontSize={100}
        >
          One membership for all
          <br /> your fitness needs
        </Text>
      </Box>
      <HStack>
        <Box>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.29,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png" />
        </Box>
        <Box>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.488,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png" />
        </Box>
        <Box>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.123,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png" />
        </Box>
      </HStack>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        templateRows="repeat(2)"
        m="20"
      >
        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png" />
        </GridItem>
        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png" />

        </GridItem>
        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png" />

        </GridItem>
        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png" />

        </GridItem>
        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
                />
        </GridItem>
        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
                 />
        </GridItem>
        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png" /></GridItem>

        <GridItem w="100%" h="400" bg="">
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png" />

        </GridItem>
      </Grid>
      <Text pos="absolute"
          top="2400"
          left="250" opacity={10}  color="gray" fontSize={100}>Fun, trainerled group<br/> classes</Text>
          
    </div>
  );
};

export default Home;
