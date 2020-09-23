import React, { useEffect, useState } from 'react';
import { View, Text, Image} from 'react-native';
import api from '../api';
import { Main , Imagem } from '../styles';

const App = () => {

    const [drugstores, setDrugstores] = useState([]);
      
      useEffect(() => {
      api.get('drugstores')
      .then(res => {
        setDrugstores(res.data);
      })
      .catch(error => console.log(error));
    }, []);

  return (
   
      <Main>
        {drugstores.map((drugstore) => 
        <View key={drugstore.id}>
        <Imagem source={{ uri: drugstore.image }} ></Imagem>
        <Text>{drugstore.name}</Text>
        <Text>Fármacia.distance</Text>
        <Text>Fármacia.shipping</Text>
        <Text>3.5</Text>
        </View>
        )}
      </Main>
   
  );
};

export default App;
