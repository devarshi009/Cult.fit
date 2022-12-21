import { Button, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "./Card";

const Cart = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    return fetch(`https://culfitdata.onrender.com/cart`).then((res) => res.json());
  };
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxW={"7xl"}>
        <Flex>
          <Text
            ml={"20px"}
            mt={"20px"}
            as="b"
            fontSize={"25px"}
            alignItems={"center"}
          >
            CART
          </Text>
        </Flex>
        <SimpleGrid columns={3} gap={5}>
          {data.map((e) => (
            <Card
              key={e.id}
              image={e.image}
              noIdea={e.noIdea}
              description={e.description}
              price={e.price}
              originalPrice={e.originalPrice}
              offer={e.offer}
              id={e.id}
            />
          ))}
        </SimpleGrid>
        <Button>CheckOut</Button>
      </Container>

      <Footer />
    </div>
  );
};

export default Cart;
