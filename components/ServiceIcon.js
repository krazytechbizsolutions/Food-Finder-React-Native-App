import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Modal,
  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ServiceIcon = ({data, onIconClick}) => {
  
  return (
    
        <TouchableOpacity 
        style={styles.categoryBtn} 
        onPress={() => onIconClick(data)}
        //onPress={() => {setModalVisible(!modalVisible);setmodalVisibleTitle(t.title);setmodalVisibleImage(t.image)}
        >
            <View style={styles.categoryIcon}>
                <Image source={data.image} resizeMode="cover" style={styles.modalImage} />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.categoryBtnTxt}>{data.title}</Text>
            </View>
            
        </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
    modalImage:{
        height:144,
        width:110,
        borderRadius: 30,
    },
    categoryContainer: {
      flexDirection: 'row',
      //width: '100%',
      alignSelf: 'center',
      marginTop: 40,
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 115,
      height: 150,
      backgroundColor: '#ff5722' /* '#FF6347' */,
      borderRadius: 30,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 15,
      fontSize:12,
      fontWeight:'bold',
      color: '#de4f35',
    }
  });

export default ServiceIcon;