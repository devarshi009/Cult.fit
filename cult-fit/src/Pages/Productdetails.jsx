import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function Simple() {
  const [data, setData] = useState({});
  const toast = useToast();
  const { id } = useParams();

  const getByid = (id) => {
    return axios.get(`https://culfitdata.onrender.com/data/${id}`);
  };
  const postCartData = async (data) => {
    try {
      const res = await axios.post(
        `https://culfitdata.onrender.com/cart`,
        data
      );
      return await res.data;
    } catch (e) {
      toast({
        title: "Something went wrong",
        description: `${e.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    getByid(id).then((res) => setData(res.data));
  }, [id]);
  console.log(data);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={data.category}
            src={data.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.description}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $ {data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              {/* <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text> */}
              <Text fontSize={"lg"}>{data.category}</Text>
            </VStack>
            {/* <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            */}
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Price:
                  </Text>{" "}
                  {data.price}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Orignal Price:
                  </Text>{" "}
                  {data.originalPrice}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Offer:
                  </Text>{" "}
                  {data.offer}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand :
                  </Text>{" "}
                  {data.noIdea}
                </ListItem>
                {/* <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem> */}
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Description:
                  </Text>{" "}
                  {data.description}
                </ListItem>
                {/* <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem> */}
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              postCartData(data);
              toast({
                title: "Successfully",
                description: "Product added successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
