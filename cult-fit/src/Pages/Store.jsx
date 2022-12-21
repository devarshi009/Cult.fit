import { useState, useEffect } from "react";
import Card from "../Pages/Card";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import Carousal from "./Carousal";

import Footer from "../Components/Footer";
const getD1 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=0&_end=8`).then((res) =>
    res.json()
  );
};
const getD2 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=8&_end=16`).then((res) =>
    res.json()
  );
};
const getD3 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=16&_end=24`).then((res) =>
    res.json()
  );
};
const getD4 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=24&_end=32`).then((res) =>
    res.json()
  );
};
const getD5 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=32&_end=40`).then((res) =>
    res.json()
  );
};
const getD6 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=40&_end=48`).then((res) =>
    res.json()
  );
};
const getD7 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=48&_end=56`).then((res) =>
    res.json()
  );
};
const getD8 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=56&_end=64`).then((res) =>
    res.json()
  );
};

const getD9 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=64&_end=68`).then((res) =>
    res.json()
  );
};

const getD10 = () => {
  return fetch(`https://culfitdata.onrender.com/data?_start=68&_end=70`).then((res) =>
    res.json()
  );
};
const Store = () => {
  const [d1, setD1] = useState([]);
  const [d2, setD2] = useState([]);
  const [d3, setD3] = useState([]);
  const [d4, setD4] = useState([]);
  const [d5, setD5] = useState([]);
  const [d6, setD6] = useState([]);
  const [d7, setD7] = useState([]);
  const [d8, setD8] = useState([]);
  const [d9, setD9] = useState([]);
  const [d10, setD10] = useState([]);

  useEffect(() => {
    getD1().then((res) => setD1(res));
    getD2().then((res) => setD2(res));
    getD3().then((res) => setD3(res));
    getD4().then((res) => setD4(res));
    getD5().then((res) => setD5(res));
    getD6().then((res) => setD6(res));
    getD7().then((res) => setD7(res));
    getD8().then((res) => setD8(res));
    getD9().then((res) => setD9(res));
    getD10().then((res) => setD10(res));
  }, []);

  return (
    <div>
      <div>
        <Carousal />
      </div>
      {/* <Flex>
        <Text as="b" fontSize={"25px"} alignItems={"center"}>
          T-SHIRTS
        </Text>
      </Flex> */}
      <Container maxW={"7xl"}>
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
            T-SHIRTS
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d1.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
            CYCLES
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d2.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
          SPINBIKES
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d3.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
         TREADMILLS
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d4.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
           ACCESSORIES
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d5.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
            TOPWEAR
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d6.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
           BOTTOMWEAR
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d7.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
          HEALTH & NUTRITION
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d8.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
          SHOP BY WORKOUT
          </Text>
        </Flex>
        <SimpleGrid columns={4} gap={5}>
          {d9.map((e) => (
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
        <Flex>
          <Text ml={"20px"} mt={"20px"} as="b" fontSize={"25px"} alignItems={"center"}>
          SPOTLIGHT
          </Text>
        </Flex>
        <SimpleGrid columns={2} gap={1}>
          {d10.map((e) => (
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
       
      </Container>

      <Footer />
    </div>
  );
};

export default Store;
