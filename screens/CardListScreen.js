import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {data} from '../model/data';
import {bakerydata} from '../model/bakerydata';
import Card from '../components/Card';

const CardListScreen = ({navigation, route}) => {

    const renderItem = ({item}) => {
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
            />
        );
    };

    let listData = data;
    if(route.params.title == 'Bakery')
      listData = bakerydata;
    return (
      <View style={styles.container}>
        <FlatList 
            data={listData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
