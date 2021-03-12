// import React from 'react';
// import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { Colors } from './Colors';
// import { headingData } from './AllData';



// export default function Header() {
//     return (
//         <View>
//             <View style={styles.headerView}>
//                 <Text style={styles.headerText}> NETFLIX </Text>
//             </View>
//             {/* <ImageBackground
//                 source={{
//                     uri: headingData.imageLink,
//                 }}
//                 style={styles.imageBackground}
//             >
//                 <View style={styles.imageDetailsView}>
//                     <Text style={styles.imageDetailsTextHeader}> {headingData.title} </Text>
//                     <View style={styles.detailsView}>
//                         <Text style={styles.starRatingText}> {headingData.starRating}</Text>
//                         <Text style={styles.detailsViewText}> {headingData.yearOfPublish} </Text>
//                         <Text style={styles.detailsViewText}> {headingData.season} </Text>
//                         <View style={styles.qualityView}>
//                             <Text style={{ color: Colors.white }}> {headingData.quality} </Text>
//                         </View>
//                         <View style={styles.qualityView}>
//                             <Text style={{ color: Colors.white }}> 5.1 </Text>
//                         </View>


//                     </View>
//                     <View style={styles.descriptionView}>
//                         <Text style={styles.descriptionText}>{headingData.description} </Text>
//                     </View>
//                 </View>
//             </ImageBackground> */}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     headerView: {
//         height: 45,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: Colors.darkGrey,
//         width: Dimensions.get('window').width
//     },
//     headerText: {
//         color: 'red',
//         fontSize: 25,
//         fontWeight: 'bold'
//     },
//     imageBackground: {
//         height: Dimensions.get('window').height - 470,
//         width: Dimensions.get('window').width,
//     },
//     imageDetailsView: {
//         width: Dimensions.get('window').width - 80,
//         marginTop: 40,
//         marginLeft: 10
//     },
//     imageDetailsTextHeader: {
//         color: Colors.white,
//         fontSize: 20,
//         fontWeight: 'bold'
//     },
//     detailsView: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//     },
//     starRatingText: {
//         fontWeight: 'bold',
//         color: Colors.red,
//         fontSize: 25
//     },
//     detailsViewText: {
//         color: Colors.white,
//         fontSize: 15,
//         marginBottom: 5
//     },
//     qualityView: {
//         borderWidth: 1,
//         borderColor: Colors.white,
//         height: 25,
//         width: 35,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 5
//     },
//     descriptionView: {
//         padding: 5
//     },
//     descriptionText: {
//         color: Colors.white,
//         fontSize: 18
//     }
// });
