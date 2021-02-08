
 import React, {Component} from 'react';
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
 import ServiceIcon from '../components/ServiceIcon';

 const initialState = {
	isModalVisible: false,
    modalTitle : ','
};


 class ServicesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
	}

    setModalVisible = (bool) => {
        this.setState({ isModalVisible: bool })
    }

    onIconClick = (data) => {
        this.setModalVisible(true);
        this.setState({
            modalTitle : data.title
        })
    }

    render() {

        const data = [
            {   
                'id'        : 1,
                'title'     : 'PRO Service',
                'icon_name' : 'business',
                'image'     : require('.././assets/banners/pro_service.jpg')
            },
            {   
                'id'        : 2,
                'title'     : 'Business Setup',
                'icon_name' : 'bus',
                'image'     : require('.././assets/banners/business.jpg')
            },
            {
                'id'        : 3,
                'title'     : 'DHA And MOH License',
                'icon_name' : 'fast-food',
                'image'     : require('.././assets/banners/dha.jpg')
            },
            {
                'id'        : 4,
                'title'     : 'Fruits And Vegetables',
                'icon_name' : 'stats-chart',
                'image'     : require('.././assets/banners/veg.jpg')
            },
            {
                'id'        : 5,
                'title'     : 'Sweet Corn',
                'icon_name' : 'bulb',
                'image'     : require('.././assets/banners/sweet.jpg')
            },
            {
                'id'        : 6,
                'title'     : 'Shamseen Bakery Group',
                'icon_name' : 'school',
                'image'     : require('.././assets/banners/shamseen.jpg')
            },
            {
                'id'        : 7,
                'title'     : 'Dune Sand & Aggregate',
                'icon_name' : 'school',
                'image'     : require('.././assets/banners/dune.jpg')
            },
            {
                'id'        : 8,
                'title'     : 'Logistics Only For GCC',
                'icon_name' : 'school',
                'image'     : require('.././assets/banners/log.jpg')
            },
            {
                'id'        : 9,
                'title'     : 'Spare Parts (KSA)',
                'icon_name' : 'school',
                'image'     : require('.././assets/banners/spare.jpg')
            },
            
        ];
        
        return(
            <ScrollView style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <View style={{marginLeft: 20, marginTop:10}}>
                    <Icon
                        name="ios-menu"
                        size={25}
                        //color={colors.text}
                        //backgroundColor={colors.background}
                        onPress={() => props.navigation.openDrawer()}
                    /> 
                </View>

                <Modal animationType="fade" visible={this.state.isModalVisible} onRequestClose={() => this.setModalVisible(false)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{fontSize:28, fontWeight:'bold', color:'#ff5722',margin:10}}>{this.state.modalTitle}</Text>

                                <ScrollView>
                                {this.state.modalTitle == 'PRO Service' && (
                                    
                                    <View style={{flexDirection: 'column', flex:1, justifyContent:'space-between'}}>
                                        <Text style={styles.modalText}>{'\u2705'} Employment visa(New & Renewal)</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Typing services (All types of employment application)</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Trade license renewal service and Add or Remove activity</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Change sponsor or Cancel sponsor</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Labour related work </Text>
                                        <Text style={styles.modalText}>{'\u2705'} Immigration related Work</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Employment visa cancellation services</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Family visas assistance</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Authorized for Emirates ID Typing Service</Text>
                                        <Text style={styles.modalText}>{'\u2705'} Application Tracking Reports. Weekly and Monthly.</Text>
                                    </View> 
                                )}

                                {this.state.modalTitle == 'Business Setup' && (
                                    
                                    <View style={{flexDirection: 'column', flex:1}}>
                                        <Text style={styles.modalText}>{'\u2705'} Dubai is a global city and the business hub of the Middle East. It is the most populous city in the UAE and located in the north-eastern part of the country. Dubai is one of the world’s fastest growing economies, with the largest contributors to its GDP being real estate, trade, tourism, and financial service industries. Despite the emirate’s infrastructure having been built on the oil exports over 3 decades ago, oil and natural gas contribute to less than 5% of its GDP now.</Text>

                                        <Text style={styles.modalText}>{'\u2705'} Dubai has gained the reputation of a leading trading hub in UAE, owing to premier business locations and an environment that is not unduly restrictive. It offers businessmen the most liberal operating conditions, tax exemptions, asset protection, complete privacy, and limited liability, in establishing a business in Dubai. The tax haven also offers tremendous promise to overseas companies, as it has:</Text>   
                                    </View> 
                                )}

                                {this.state.modalTitle == 'DHA And MOH License' && (
                                    
                                    <View style={{flexDirection: 'column', flex:1}}>
                                        <Text style={styles.modalText}>{'\u2705'} 
                                            Medical professionals who are aspiring to secure a position in Dubai where they can practice their chosen field of expertise must first secure a professional license. The Dubai Health Authority licensing program ensures healthcare professionals and institutions are competent and able to provide quality and safe medical services in the Emirate of Dubai.
                                        </Text>  
                                        <Text style={styles.modalText}>{'\u2705'} 
                                        If you are a medical professional who needs expert assistance in securing a DHA Dubai license, or if you are part of an organisation that seeks to provide healthcare services, Al Sumood is the company that you can trust to guide you through every step of the way.
                                        </Text>
                                        
                                    </View> 
                                )}

                                {this.state.modalTitle == 'Fruits And Vegetables' && (
                                    
                                    <View style={{flexDirection: 'column', flex:1}}>
                                        <Text style={styles.modalText}>{'\u2705'} 
                                        We Trade sell and market local and imported fruits and fresh vegetable, we also have the lowest price in the market, our company leading trading in the field of agricultural products.
                                        </Text>  
                                        <Text style={styles.modalText}>{'\u2705'} 
                                        We provide a realistic and alternative competitive commercial solution for National and Local Independent Foodservice companies in a fragmented and constantly changing market.Delivering consistent and transparent product quality, service and pricing to all customers.We bring all the benefits and the expertise of sourcing locally on a National scale, combined with the advantages of a flexible service proposition.
                                        </Text>
                                        <Text style={styles.modalText}>{'\u2705'} 
                                        We provide a realistic and alternative competitive commercial solution for National and Local Independent Foodservice companies in a fragmented and constantly changing market.Delivering consistent and transparent product quality, service and pricing to all customers.We bring all the benefits and the expertise of sourcing locally on a National scale, combined with the advantages of a flexible service proposition.
                                        </Text>
                                        
                                    </View> 
                                )}
                                
                                </ScrollView>
                        
                        </View>
                    </View>	       
                </Modal> 
                
                <View style={[styles.categoryContainer]}>
                    {data.map((t) => (
                        t.id <= 3
                        ? (<ServiceIcon data={t} onIconClick={this.onIconClick} />)
                        : null
                    ))}
                </View>
             
                <View style={[styles.categoryContainer]}>
                    {data.map((t) => (
                        t.id >= 4 && t.id <=6
                        ? (<ServiceIcon data={t} onIconClick={this.onIconClick} />)
                        : null
                    ))}
                </View>

                <View style={[styles.categoryContainer]}>
                    {data.map((t) => (
                        t.id >= 7 && t.id <=9
                        ? (<ServiceIcon data={t} onIconClick={this.onIconClick} />)
                        : null
                    ))}
                </View> 

            </ScrollView>
        )
    }
 }

 export default ServicesScreen;

const styles = StyleSheet.create({

    modalText:{
        flex: 1, 
        paddingLeft: 5,
        fontSize:16,
        padding:10
    },
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
      marginTop: 40,
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
      backgroundColor: '#ff5722',
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

/* import React from 'react';
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
import ServiceIcon from '../components/ServiceIcon';

const ServicesScreen = (props) => {
   
    const colors = useTheme();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisibleTitle, setmodalVisibleTitle] = React.useState('');
    const [modalVisibleImage, setmodalVisibleImage] = React.useState('');

    const data = [
        {   
            'id'        : 1,
            'title'     : 'PRO Service',
            'icon_name' : 'business',
            'image'     : require('.././assets/banners/pro_service.jpg')
        },
        {   
            'id'        : 2,
            'title'     : 'Business Setup',
            'icon_name' : 'bus',
            'image'     : require('.././assets/banners/business.jpg')
        },
        {
            'id'        : 3,
            'title'     : 'DHA And MOH License',
            'icon_name' : 'fast-food',
            'image'     : require('.././assets/banners/dha.jpg')
        },
        {
            'id'        : 4,
            'title'     : 'Fruits And Vegetables',
            'icon_name' : 'stats-chart',
            'image'     : require('.././assets/banners/veg.jpg')
        },
        {
            'id'        : 5,
            'title'     : 'Sweet Corn',
            'icon_name' : 'bulb',
            'image'     : require('.././assets/banners/sweet.jpg')
        },
        {
            'id'        : 6,
            'title'     : 'Shamseen Bakery Group',
            'icon_name' : 'school',
            'image'     : require('.././assets/banners/shamseen.jpg')
        },
        {
            'id'        : 7,
            'title'     : 'Dune Sand & Aggregate',
            'icon_name' : 'school',
            'image'     : require('.././assets/banners/dune.jpg')
        },
        {
            'id'        : 8,
            'title'     : 'Logistics Only For GCC',
            'icon_name' : 'school',
            'image'     : require('.././assets/banners/log.jpg')
        },
        {
            'id'        : 9,
            'title'     : 'Spare Parts (KSA)',
            'icon_name' : 'school',
            'image'     : require('.././assets/banners/spare.jpg')
        },
        
    ];

    const onIconHandelClick = (e) => {
        alert("element clicked");
    };

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
                    ? (<ServiceIcon data={t}  onIconHandelClick={onIconHandelClick} />)
                    : null
                ))}
            </View>

            <View style={[styles.categoryContainer]}>
                {data.map((t) => (
                    t.id >= 4 && t.id <=6
                    ? (<ServiceIcon data={t}/>)
                    : null
                ))}
            </View>

            <View style={[styles.categoryContainer]}>
                {data.map((t) => (
                    t.id >= 7 && t.id <=9
                    ? (<ServiceIcon data={t}/>)
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
      marginTop: 40,
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
      backgroundColor: '#ff5722',
      borderRadius: 30,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 15,
      fontSize:22,
      fontWeight:'bold',
      color: '#de4f35',
    }
  }); */
