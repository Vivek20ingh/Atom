import React from 'react';
import { Text ,View,Image, Button,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';


const MovieScreen=({route: {params},navigation}) => {

    const { movie } = params;

    return(
        <SafeAreaView>
            <ScrollView>
        <View>
            <View style={{marginBottom: 20,marginTop:20}}>
                <Text style={{textAlign: 'center',fontWeight:'bold',fontSize: 20}}>{movie.title}</Text>
            </View>
            <View>
            <Image
                source={{ uri: movie.avatar_url}}
                style={{ width: 400, height: 400 }}/>
            </View>
            <View style={{marginTop:20}}> 
                <Text 
                style={{fontWeight:'bold',fontSize: 15}}>
                Release Year: {movie.year}
                    </Text>
            </View>
            <View style={{marginTop:20}}> 
                <Text 
                style={{fontWeight:'bold',fontSize: 15}}>
                Directed by: {movie.directed}
                    </Text>
            </View>
            <View style={{marginTop:30}}>

                <Button
                title="Delete"
                color="#008080"
                onPress={() => {
                    movie.display='false';
                    navigation.navigate('Home') 
                }}
                />
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default MovieScreen;