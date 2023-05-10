import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import axios from 'react-native-axios';
import { Card } from '@rneui/themed';

export default function Movies({navigation}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1 `
      )
      // .then((res) => {alert(JSON.stringify(res.data.results))})
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => alert(err));
  }, []);

  return ( <ScrollView>
      {movies.map((movie, index) => {
        return (
          <Card key={index}>
            <Card.Title>{movie.title}</Card.Title>
       
            <Card.Divider />
            <Card.Image
              style={{ marginBottom: 10 }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
              }}
            />
               
                 
            <Button
              title="Details"
              onPress={() => navigation.navigate("Details", {id: movie.id}
              )}
            />
          </Card>
        );
      })}
    </ScrollView>
  );
}
