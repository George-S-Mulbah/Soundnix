import React from "react";
import { View, StyleSheet, Image,TouchableHighlight,Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";


import colors from "../../config/colors";

function ListItem({
    image,
    IconComponent,
    mIconName,
    renderRightActions,
    showMaterialIcon,
    subTitle,
    title,
    onPress,
}) {
  return (
   
      <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          {
           showMaterialIcon &&(

                <MaterialCommunityIcons
                  color={colors.dark}
                  name={mIconName}
                  size={25}
                />
            )
          }
        </View>
        
      </TouchableHighlight>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
