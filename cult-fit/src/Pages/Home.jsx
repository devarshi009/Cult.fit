import React from 'react'
import { Button,Box,HStack,Container,Text,Heading } from '@chakra-ui/react'
import {BsChevronDown} from "react-icons/bs"
import "./Home.css"
import Navbar from "../Components/Navbar"
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
            <img className="Image"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_2.13,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
              alt="we-are-cult-img"
              loading="lazy"
            />
          </div>
          <div className="homePage-text">
            <h4 >A fitness movemet that is worth<br/> breaking a sweat for </h4>
            </div>
             
              <Button color="red" pos="absolute" top="350" left="160">EXPLORE CULTPASS</Button>
              
            
          
        </div>
        <div className='Icon' >
          <BsChevronDown  fontSize="30"  />
        </div>
        {/* <Container> */}
        <HStack gap="5" bg="#171a26" >
        <Box h="220" border="1px solid gray" w="25%" ml="150" borderRadius={20} bg="#232631">
          <Heading mt="5" fontSize={30} color="gray">cultpass<br/><Text color="#e1b460" fontSize={50} fontWeight="bold"> ELITE</Text></Heading>
          <Text mt="5">Unlimited access to<br/> group classes,all gyms <br/>and at-home workouts</Text>
        </Box>
        <Box  h="220" border="1px solid gray" w="25%" ml="100" borderRadius={20} bg="#232631">
          <Heading  mt="5" fontSize={30} color="gray">cultpass<Text fontSize={50} fontWeight="bold" color="#d3d3d7"> PRO</Text></Heading>
          <Text>Unlimited access to all<br/> PRO gyms and at-home <br/> workouts</Text>
        </Box>
        <Box  h="220" border="1px solid gray" w="25%" ml="100" borderRadius={20} bg="#232631">
          <Heading  mt="5" fontSize={30} color="gray">cultpass <Text fontSize={50} fontWeight="bold" color="#ad5b94">HOME</Text></Heading>
          <Text mt="5">unlimited access to at- <br/>home workouts with <br/> calorie tracking</Text>
        </Box>
        </HStack>
        {/* </Container> */}



      
      </>
        
           
           
          </div>
          
  )
}

export default Home