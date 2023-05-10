
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import axios from 'react-native-axios';

export default function MoviesDetails({navigation, route}) {
// alert(JSON.stringify(route.params.id))
const id =route.params.id

const [moviesDetails, setMoviesDetails]=useState({})

useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`
      )
      // .then((res) => {alert(JSON.stringify(res.data.results))})
      .then((res) => {
        alert(JSON.stringify(res.data))
        setMoviesDetails(res.data);
      })
      .catch((err) => alert(err)); 
  }, []);


  return (<Card >
            <Card.Title>{moviesDetails.title}</Card.Title>
       
            <Card.Divider />
            <Card.Image
              style={{ marginBottom: 10 }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${moviesDetails.backdrop_path}`,
              }}
            />
            <Text style={{ marginBottom: 10 }}>
           {moviesDetails.overview} 
          </Text>
        
          
          </Card>
         
        );
  
}