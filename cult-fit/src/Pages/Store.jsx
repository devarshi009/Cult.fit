import { useState, useEffect } from "react";
import Card from "../Pages/Card"
import { Box, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import Carousal from "./Carousal";

import Footer from "../Components/Footer";
const getData = () => {
  return fetch(`http://localhost:8080/data`).then((res) => res.json());
};
const Store = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);
  console.log(data.TShirt);

  return (
    <div>
      
      <div>
      <Carousal/>
      </div>
      {data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.TShirt.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
         <Heading>CYCLES</Heading>
        </SimpleGrid>


        
      )}


{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.Cycles.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
        <Heading>SPINBIKES</Heading>
        </SimpleGrid>


        
      )}

{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.spikebikes.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
          <Heading>TREADMILLS</Heading>
        </SimpleGrid>


        
      )}


 {data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.Treadmills.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
       <Heading>ACCESSORIES</Heading>
        </SimpleGrid>


        
      )} 


{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.ACCESSORIES.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
        <Heading>TOPWEAR</Heading>
        </SimpleGrid>


        
      )} 


{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.TOPWEAR.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
        <Heading>BOTTOMWEAR</Heading>
        </SimpleGrid>


        
      )} 

{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.BOTTOMWEAR.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
         <Heading>HEALTH & NUTRITION</Heading>
        </SimpleGrid>


        
      )} 


{/* {data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.HEALTHNUTRITION.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}
       
        </SimpleGrid>


        
      )}   */}

{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={4}>
        {data.HEALTHNUTRITION.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}


<Heading>SHOP BY WORKOUT</Heading>
        </SimpleGrid>


        
      )}  



{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        
        <SimpleGrid columns={4}>
          
        {data.SHOPBYWORKOUT.map((e)=>
            <Card key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}

<Heading>SPOTLIGHT</Heading>
         
        </SimpleGrid>


        
      )}  


{data.length == 0 ? (
        <div>Loading...</div>
      ) : (
        
        <SimpleGrid columns={2}>
          
          
          
          
        {data.SPOTLIGHT.map((e)=>
            <Card  key={e.id} image={e.image} noIdea={e.noIdea} description={e.description} price={e.price} originalPrice={e.originalPrice} offer={e.offer}/>
        )}


        </SimpleGrid>


        
      )}  


      <Footer/>
       
    </div>


  );
};

export default Store;
