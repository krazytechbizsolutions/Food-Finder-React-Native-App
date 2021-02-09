import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bakerydata } from '../model/bakerydata';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
const foods = [
  {
    id: '1',
    name: 'Manousheh',
    ingredients: 'Pizza Of Dubai',
    price: '8.30',
    image: require('../assets/banners/item1.jpg'),
  },
  {
    id: '2',
    name: 'Chelo Kebab',
    ingredients: 'A Heavenly Taste',
    price: '7.10',
    image: require('../assets/banners/item2.jpg'),
  },
  {
    id: '3',
    name: 'Al Harees',
    ingredients: 'Taste The Tradition',
    price: '5.10',
    image: require('../assets/banners/item3.jpg'),
  },
  {
    id: '4',
    name: 'Al Machboos',
    ingredients: 'Surprisingly Delicious',
    price: '9.55',
    image: require('../assets/banners/item4.jpg'),
  },
  {
    id: '5',
    name: 'Mandi',
    ingredients: 'A Rendezvous With Tradition',
    price: '9.55',
    image: require('../assets/banners/item5.jpg'),
  },
  {
    id: '6',
    name: 'Oozie',
    ingredients: 'Ramadan Special',
    price: '9.55',
    image: require('../assets/banners/item6.jpg'),
  },
  {
    id: '7',
    name: 'Tabbouleh',
    ingredients: 'For Those Who Are Health Conscious',
    price: '9.55',
    image: require('../assets/banners/item7.jpg'),
  },
];

const bakeryItem = [
  {
    id: '1',
    name: 'Caketalk',
    ingredients: 'Caketalk',
    price: '8.30',
    image: require('../assets/banners/cak1.png'),
  },
  {
    id: '2',
    name: 'Magnolia',
    ingredients: 'Moist and perfect!',
    price: '7.10',
    image: require('../assets/banners/cak2.png'),
  },
  {
    id: '3',
    name: 'Hummingbird',
    ingredients: 'Cupcakes and cakes',
    price: '5.10',
    image: require('../assets/banners/cak3.png'),
  },
  {
    id: '4',
    name: 'La Serre',
    ingredients: 'Priced at slightly',
    price: '9.55',
    image: require('../assets/banners/cak4.png'),
  },
  {
    id: '5',
    name: 'French Bakery',
    ingredients: 'French Bakery',
    price: '9.55',
    image: require('../assets/banners/cak5.png'),
  },
  {
    id: '6',
    name: 'Bakemart',
    ingredients: 'Bakemart Gourmet',
    price: '9.55',
    image: require('../assets/banners/cak6.png'),
  },
  {
    id: '7',
    name: 'Project Cupcake',
    ingredients: 'Project Cupcake',
    price: '9.55',
    image: require('../assets/banners/cak7.png'),
  },
];
const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#ff5722',
  secondary: '#fedac5',
  light: '#E5E5E5',
  grey: '#908e8c',
};

const CardItemDetails = ({route}) => {

  const itemData = route.params.itemData;
  const listType = route.params.listType;
  const navTitleView = useRef(null);


  const renderItems = (listType == 'Bakery') ? bakeryItem : foods;

  const CartCard = ({item}) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={{height: 100, width: 90}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text> */}
          <View style={styles.actionBtn}>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold', padding:3}}>ADD</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={itemData.image} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{itemData.title}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Overview</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={16} color="#FF6347" />
              <Text style={{marginHorizontal: 2}}>{itemData.rating}</Text>
              <Text>({itemData.reviews})</Text>
            </View>
          </View>
        </TriggeringView>
        <View style={[styles.section, styles.sectionLarge]}>
          {/* <Text style={styles.sectionContent}>{itemData.description}</Text> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 80}}
            data={renderItems}
            renderItem={({item}) => <CartCard item={item} />}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          />
        </View>

        {/* <View style={styles.section}>
          <View style={styles.categories}>
            {itemData.categories.map((category, index) => (
              <View style={styles.categoryContainer} key={index}>
                <FontAwesome name="tag" size={16} color="#fff" />
                <Text style={styles.category}>{category}</Text>
              </View>
            ))}
          </View>
        </View>
 
         <View style={[styles.section, {height: 250}]}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1}}
            region={{
              latitude: itemData.coordinate.latitude,
              longitude: itemData.coordinate.longitude,
              latitudeDelta: 0.00864195044303443,
              longitudeDelta: 0.000142817690068,
            }}>
            <MapView.Marker
              coordinate={itemData.coordinate}
              image={require('../assets/map_marker.png')}
            />
          </MapView>
        </View> 
        */}
      </HeaderImageScrollView>
    </View>
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 120,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor:'#354e466e'
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight:'bold'
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});
