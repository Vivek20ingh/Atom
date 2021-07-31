import React from "react";  
import { ListItem, Avatar } from 'react-native-elements'

const ItemView = ({movie}) =>{
  return(
  <ListItem>
    <Avatar source={{uri: movie.avatar_url}} />
    <ListItem.Content>
      <ListItem.Title>{movie.title}</ListItem.Title>
      <ListItem.Subtitle>{movie.year}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  )
}
  export default ItemView;