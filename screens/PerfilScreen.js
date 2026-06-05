import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const COLORS = {
  bg: '#0B1426', white: '#FFFFFF',
  gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)',
  blue: '#2563EB', blueLight: '#60A5FA', green: '#34D399',
};

const menuItems = [
  { label: 'Datos personales', sub: 'Correo, teléfono, RUT', icon: 'person-outline', bg: 'rgba(37,99,235,0.2)', color: '#60A5FA', screen: 'DatosPersonales' },
  { label: 'Certificado estudiantil', sub: 'Vigente hasta dic 2026', icon: 'school-outline', bg: 'rgba(16,185,129,0.15)', color: '#34D399', screen: 'Certificado' },
  { label: 'Métodos de pago', sub: '2 métodos vinculados', icon: 'card-outline', bg: 'rgba(139,92,246,0.15)', color: '#A78BFA', screen: 'MetodosPago' },
  { label: 'Notificaciones', sub: 'Recordatorios y alertas', icon: 'notifications-outline', bg: 'rgba(245,158,11,0.15)', color: '#FCD34D', screen: 'Notificaciones' },
  { label: 'Cerrar sesión', sub: null, icon: 'log-out-outline', bg: 'rgba(239,68,68,0.15)', color: '#F87171', screen: null },
];

export default function PerfilScreen({ navigation }) {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.navigate('Inicio')} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Mi perfil</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JT</Text>
          </View>
          <Text style={styles.name}>Javiera Torres Muñoz</Text>
          <Text style={styles.rut}>RUT 20.345.678-9</Text>
          <View style={styles.badges}>
            <View style={styles.badgeBlue}><Text style={styles.badgeBlueText}>Estudiante</Text></View>
            <View style={styles.badgeGreen}><Text style={styles.badgeGreenText}>Verificada</Text></View>
          </View>
        </View>

        <View style={styles.stats}>
          {[
            { val: '26', label: 'Viajes junio' },
            { val: '$7.280', label: 'Gastado' },
            { val: '142', label: 'Viajes totales' },
          ].map((s) => (
            <View key={s.label} style={styles.stat}>
              <Text style={styles.statVal}>{s.val}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.menu}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.menuItem}
              onPress={() => item.screen && navigation.navigate(item.screen)}
            >
              <View style={[styles.menuIcon, { backgroundColor: item.bg }]}>
                <Ionicons name={item.icon} size={18} color={item.color} />
              </View>
              <View style={styles.menuText}>
                <Text style={styles.menuTitle}>{item.label}</Text>
                {item.sub && <Text style={styles.menuSub}>{item.sub}</Text>}
              </View>
              <Ionicons name="chevron-forward-outline" size={16} color="rgba(255,255,255,0.2)" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 14 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '500', color: COLORS.white },
  hero: { alignItems: 'center', paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: COLORS.border },
  avatar: { width: 68, height: 68, borderRadius: 34, backgroundColor: COLORS.blue, justifyContent: 'center', alignItems: 'center', marginBottom: 10, borderWidth: 2, borderColor: 'rgba(255,255,255,0.15)' },
  avatarText: { fontSize: 24, fontWeight: '500', color: COLORS.white },
  name: { fontSize: 17, fontWeight: '500', color: COLORS.white },
  rut: { fontSize: 12, color: COLORS.gray, marginTop: 3 },
  badges: { flexDirection: 'row', gap: 8, marginTop: 10 },
  badgeBlue: { backgroundColor: 'rgba(37,99,235,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, borderWidth: 0.5, borderColor: 'rgba(37,99,235,0.4)' },
  badgeBlueText: { fontSize: 11, fontWeight: '500', color: COLORS.blueLight },
  badgeGreen: { backgroundColor: 'rgba(16,185,129,0.15)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, borderWidth: 0.5, borderColor: 'rgba(16,185,129,0.35)' },
  badgeGreenText: { fontSize: 11, fontWeight: '500', color: COLORS.green },
  stats: { flexDirection: 'row', paddingVertical: 16, borderBottomWidth: 0.5, borderBottomColor: COLORS.border },
  stat: { flex: 1, alignItems: 'center' },
  statVal: { fontSize: 18, fontWeight: '500', color: COLORS.white },
  statLabel: { fontSize: 10, color: COLORS.gray, marginTop: 3 },
  menu: { paddingVertical: 8 },
  menuItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14, paddingHorizontal: 20 },
  menuIcon: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexShrink: 0 },
  menuText: { flex: 1 },
  menuTitle: { fontSize: 14, color: COLORS.white },
  menuSub: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
});