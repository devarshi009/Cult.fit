import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container,Box ,Image, Input,Stack,InputGroup,InputLeftAddon,InputRightAddon,Button,Text,HStack} from '@chakra-ui/react'
import {BsGoogle,BsFacebook} from "react-icons/bs"
import {CiMail} from "react-icons/ci"

const User = () => {
  const navigate=useNavigate()
const [phone,setPhone]=useState("")
const handleChange=(e)=>{
setPhone(e.target.value)
}
const handleClick=()=>{
  
    navigate("/")
  
  
}
  return (
    <Container h="100vh" w="450px" bg="black" border="1px solid white" borderRadius={20} pos="absolute" top="10" left="500">
      <Box>
        <Image h="200" ml="100px" mt="100px" src="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQC-VOUCHERSQWIK86179325FFE843/0x1920/70/2.jpg"/>
      </Box>
      <Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children='+91' />
    <Input type='tel' placeholder='Enter your phone number' value={phone} onChange={handleChange}/>
  
  </InputGroup>
</Stack>
<Button bg='#b3b3b3' w="410px" mt="40px" onClick={handleClick}>CONTINUE</Button>
<Box bg="#b3b3b3" w="410px" mt="40px"><Text textAlign={"start"} fontSize={20} fontWeight="bold" color="gray.100"> Or connect with </Text>
<HStack pos="relative" bottom="5" left="300">
<BsGoogle fontSize={20}/><BsFacebook fontSize={20}/><CiMail fontSize={20}/>
</HStack>
</Box>
<Text mt="30" color="white">*By continuing you agree to the Terms of <br/> Services and Privacy Policy.</Text>
    </Container>
  )
}

export default User

