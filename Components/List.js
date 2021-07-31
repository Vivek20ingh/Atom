import React from 'react';
import { Text ,View,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import movielist from './Movielist';
import ItemView from './ItemView';

const ListScreen = ({ navigation}) => {
    return (
      <View>
        <Text>Movie Lists</Text>
        <SafeAreaView>
          <ScrollView>
            {
            movielist.map((movie, index) => {
              if(movie.display==='true'){
                return (<TouchableOpacity  onPress={() =>{
                navigation.navigate('Movie',{ 
                 movie: movie
                }) 
                }}>

                  <ItemView  movie={movie}/>
                </TouchableOpacity>)
              }
            })}
   
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  };


  export default ListScreen;
