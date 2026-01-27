import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#ffd33d',
        // tabBarInactiveTintColor: '#ffffff',

        headerStyle: {
            backgroundColor: '#25292e',
        },
        headerTintColor: '#fff',
        headerShadowVisible: false, //줄 x
        


        tabBarStyle: {
            backgroundColor: '#25292e',            
        },
    }}> 
        <Tabs.Screen
            name="index"
            options={{ 
                title: 'Home',
                tabBarIcon: ({ focused, color }) => ( 
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/> 
                ) }}                
        />


        <Tabs.Screen
            name="about"
            options={{
            title: 'About',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
            ),
            }}
        />
      
    </Tabs>
  );
}