import React from "react";
import Colors from "../../constants/Colors";
import useColorScheme from "../../utils/hooks/useColorScheme";
import MovieScreen from "../../screens/movieScreen/";
import TabTwoScreen from "../../screens/seriesScreen";
import ComingSoonScreen from "../../screens/comingSoonScreen";
import BottomTab from "../../utils/navigation/BottomTab";
import Icon from "../icon/";

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Movies'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name='Movies'
        component={MovieScreen}
        options={{
          title: "Peliculas",
          tabBarIcon: ({ color }) => <Icon name='video-camera' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Series'
        component={TabTwoScreen}
        options={{
          title: "Series",
          tabBarIcon: ({ color }) => <Icon name='film' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='ComingSoon'
        component={ComingSoonScreen}
        options={{
          title: "Proximamente",
          tabBarIcon: ({ color }) => <Icon name='bullhorn' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

{
  /* <Pressable
  onPress={() => navigation.navigate("Modal")}
  style={({ pressed }) => ({
    opacity: pressed ? 0.5 : 1,
  })}
>
  <FontAwesome
    name='info-circle'
    size={25}
    color={Colors[colorScheme].text}
    style={{ marginRight: 15 }}
  />
</Pressable>; */
}

export default BottomTabNavigator;
