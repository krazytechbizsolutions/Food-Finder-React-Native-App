import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Modal,
  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme, Paragraph  } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ServicesScreen = (props) => {
   
    const colors = useTheme();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisibleTitle, setmodalVisibleTitle] = React.useState('');
    const [modalVisibleImage, setmodalVisibleImage] = React.useState('');

    const data = [
        {   
            'id'        : 1,
            'title'     : 'Real Estate',
            'icon_name' : 'business',
            'image'     : require('../assets/banners/real_estate.jpg')
        },
        {   
            'id'        : 2,
            'title'     : 'Transporting',
            'icon_name' : 'bus',
            'image'     : require('../assets/banners/transporting.jpg')
        },
        {
            'id'        : 3,
            'title'     : 'Bakery',
            'icon_name' : 'fast-food',
            'image'     : require('../assets/banners/bakery.jpg')
        },
        {
            'id'        : 4,
            'title'     : 'Trading',
            'icon_name' : 'stats-chart',
            'image'     : require('../assets/banners/trading.jpg')
        },
        {
            'id'        : 5,
            'title'     : 'Electricity',
            'icon_name' : 'bulb',
            'image'     : require('../assets/banners/electricity.jpg')
        },
        {
            'id'        : 6,
            'title'     : 'Education',
            'icon_name' : 'school',
            'image'     : require('../assets/banners/education.jpg')
        },
    ]

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <View style={{marginLeft: 20, marginTop:10}}>
                <Icon
                    name="ios-menu"
                    size={25}
                    color={colors.text}
                    backgroundColor={colors.background}
                    onPress={() => props.navigation.openDrawer()}
                /> 
            </View>
            

            <Modal animationType="fade" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontSize:28, fontWeight:'bold', color:'#ff5722',margin:10}}>{modalVisibleTitle}</Text>

                        <ScrollView>

                            <Image source={modalVisibleImage} resizeMode="cover" style={styles.modalImage} />

                            <Text style={styles.paragraph}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </ScrollView>
                       
                    </View>
                </View>	       
            </Modal> 
            
            <View style={styles.categoryContainer}>
                {data.map((t) => (
                    t.id <= 3
                    ? ( <TouchableOpacity 
                        style={styles.categoryBtn} 
                        onPress={() => {setModalVisible(!modalVisible);setmodalVisibleTitle(t.title);setmodalVisibleImage(t.image)}}>
                            <View style={styles.categoryIcon}>
                                <Ionicons name={t.icon_name} size={70} color="#FFF" />
                            </View>
                            <Text style={styles.categoryBtnTxt}>{t.title}</Text>
                        </TouchableOpacity>)
                    : null
                ))}
            </View>
            
            <View style={[styles.categoryContainer, {marginTop: 40}]}>
                {data.map((t) => (
                    t.id > 3
                    ? ( <TouchableOpacity 
                        style={styles.categoryBtn} 
                        onPress={() => {setModalVisible(!modalVisible);setmodalVisibleTitle(t.title);setmodalVisibleImage(t.image)}
                        }>
                            <View style={styles.categoryIcon}>
                                <Ionicons name={t.icon_name} size={70} color="#FFF" />
                            </View>
                            <Text style={styles.categoryBtnTxt}>{t.title}</Text>
                        </TouchableOpacity>)
                    : null
                ))}
            </View>

        </ScrollView>
    );
};

export default ServicesScreen;

const styles = StyleSheet.create({
    modalImage:{
        height:200,
        width:300,
        marginBottom:40,
        marginLeft:10,
        marginTop:10
    },
    paragraph: {
        //margin: 5,
        lineHeight:25,
        fontSize: 16,
        textAlign:'left',
    },
    centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor:'#9e9e9ec7'
	},
	modalView: {
		width:380,
		height:600,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 30,
		alignItems: "center",
	}, 
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },

    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 100,
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
      height: 170,
      backgroundColor: '#ff5722' /* '#FF6347' */,
      borderRadius: 30,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 15,
      fontSize:22,
      fontWeight:'bold',
      color: '#de4f35',
    }
  });
