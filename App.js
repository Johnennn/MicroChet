import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import QRScreen from './screens/QRScreen';
import HistorialScreen from './screens/HistorialScreen';
import GastosScreen from './screens/GastosScreen';
import PerfilScreen from './screens/PerfilScreen';
import DatosPersonalesScreen from './screens/perfil/DatosPersonalesScreen';
import CertificadoScreen from './screens/perfil/CertificadoScreen';
import MetodosPagoScreen from './screens/perfil/MetodosPagoScreen';
import NotificacionesScreen from './screens/perfil/NotificacionesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const COLORS = {
  bg: '#0B1426', card: '#111E35', blue: '#2563EB',
  blueLight: '#60A5FA', border: 'rgba(255,255,255,0.08)',
};

function PerfilStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PerfilMain" component={PerfilScreen} />
      <Stack.Screen name="DatosPersonales" component={DatosPersonalesScreen} />
      <Stack.Screen name="Certificado" component={CertificadoScreen} />
      <Stack.Screen name="MetodosPago" component={MetodosPagoScreen} />
      <Stack.Screen name="Notificaciones" component={NotificacionesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.card,
            borderTopColor: COLORS.border,
            borderTopWidth: 0.5,
            paddingBottom: 20,
            paddingTop: 10,
            height: 70,
          },
          tabBarActiveTintColor: COLORS.blueLight,
          tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
          tabBarLabelStyle: { fontSize: 10 },
          tabBarIcon: ({ color }) => {
            const icons = {
              Inicio: 'home-outline',
              Viajes: 'map-outline',
              Validar: 'qr-code-outline',
              Gastos: 'bar-chart-outline',
              Perfil: 'person-outline',
            };
            if (route.name === 'Validar') {
              return (
                <View style={{
                  width: 50, height: 50, borderRadius: 14,
                  backgroundColor: COLORS.blue,
                  justifyContent: 'center', alignItems: 'center',
                  marginTop: -20,
                }}>
                  <Ionicons name="qr-code-outline" size={24} color="#fff" />
                </View>
              );
            }
            return <Ionicons name={icons[route.name]} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Viajes" component={HistorialScreen} />
        <Tab.Screen name="Validar" component={QRScreen} />
        <Tab.Screen name="Gastos" component={GastosScreen} />
        <Tab.Screen name="Perfil" component={PerfilStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}