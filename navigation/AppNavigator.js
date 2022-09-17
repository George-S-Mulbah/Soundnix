import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../app/components/Icon";
import colors from "../app/config/colors";
import AccountScreen from "../app/screens/AccountScreen";
import HomeScreen from "../app/screens/HomeScreen";
import LibraryScreen from '../app/screens/LibraryScreen';
import SearchScreen from './../app/screens/SearchScreen';





const Tab = createBottomTabNavigator();


const AppNavigator = () => (

      <Tab.Navigator
        screenOptions={{
            headerStyle:{
                  backgroundColor: colors.primary,
            },

            tabBarActiveTintColor: colors.dark,
            tabBarStyle:{
                  height:60,
                  padding:20,
                  backgroundColor:colors.primary,
                 
            }
        }}
      >
            <Tab.Screen name="Home"   
             component={HomeScreen} 
             options = {{
                  tabBarIcon:({color,size}) =>
                  <Icon name="home" size={size} />
            }}

            />
            <Tab.Screen name="Search" 
             component={SearchScreen}
             options = {{
                  tabBarIcon:({color,size}) =>
                  <Icon name="magnify" size={size}/>
            }}
                 
            />
            <Tab.Screen name="Library"   
              component={LibraryScreen} 
              options = {{
                  tabBarIcon:({color,size}) =>
                  <Icon name="music-box-multiple" size={size}/>
            }}
            />
            <Tab.Screen name="Account"   
             component={AccountScreen} 
             options = {{
                  tabBarIcon:({color,size}) =>
                  <Icon name="account" size={size}/>
            }}
            />

      </Tab.Navigator>
)


export default AppNavigator;