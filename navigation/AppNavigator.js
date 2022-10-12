import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../app/components/Icon";
import colors from "../app/config/colors";
import AccountScreen from "../app/screens/AccountScreen";
import HomeScreen from "../app/screens/HomeScreen";
import LibraryScreen from '../app/screens/LibraryScreen';
import SearchScreen from './../app/screens/SearchScreen';


const Tab = createBottomTabNavigator();

const IconSize = { size :30}


const AppNavigator = () => (

      <Tab.Navigator
        screenOptions={{
            headerStyle:{
                  backgroundColor: colors.primary,
            },
            headerTitleAlign: 'center',

            tabBarActiveTintColor: colors.dark,
            tabBarStyle:{
                  height:60,
                  padding:10,
                  backgroundColor:colors.primary,
                  textSize:20,
                 
            }
        }}
      >
            <Tab.Screen name="Home"   
             component={HomeScreen} 
             options = {{
                  tabBarIcon:({}) =>
                  <Icon name="home" size={IconSize.size}  iconColor={colors.white}/>
            }}

            />
            <Tab.Screen name="Search" 
             component={SearchScreen}
             options = {{
                  tabBarIcon:({color}) =>
                  <Icon name="magnify" size={IconSize.size} iconColor={colors.white}/>
            }}
                 
            />
            <Tab.Screen name="Library"   
              component={LibraryScreen} 
              options = {{
                  tabBarIcon:({color}) =>
                  <Icon name="music-box-multiple" size={IconSize.size} iconColor={colors.white}/>
            }}
            />
            <Tab.Screen name="Account"   
             component={AccountScreen} 
             options = {{
                  tabBarIcon:({color}) =>
                  <Icon name="account" size={IconSize.size} iconColor={colors.white}/>
            }}
            />


      </Tab.Navigator>
)

export default AppNavigator;