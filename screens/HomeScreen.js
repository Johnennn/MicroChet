import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const COLORS = {
  bg: '#0B1426', card: '#111E35', blue: '#2563EB',
  blueLight: '#60A5FA', white: '#FFFFFF',
  gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)',
};

const quickActions = [
  { label: 'Código QR', icon: 'qr-code-outline', bg: 'rgba(37,99,235,0.25)', color: '#60A5FA', tab: 'Validar' },
  { label: 'Historial', icon: 'time-outline', bg: 'rgba(139,92,246,0.2)', color: '#A78BFA', tab: 'Viajes' },
  { label: 'Gastos', icon: 'bar-chart-outline', bg: 'rgba(16,185,129,0.2)', color: '#34D399', tab: 'Gastos' },
  { label: 'Mi perfil', icon: 'person-outline', bg: 'rgba(245,158,11,0.2)', color: '#FCD34D', tab: 'Perfil' },
];

const tarifas = [
  { tipo: 'Estudiante', precio: '$300', antes: '$200', icon: 'school-outline', bg: 'rgba(37,99,235,0.2)', color: '#60A5FA' },
  { tipo: 'Adulto mayor', precio: '$450', antes: '$350', icon: 'heart-outline', bg: 'rgba(16,185,129,0.15)', color: '#34D399' },
  { tipo: 'Trabajador', precio: '$850', antes: '$750', icon: 'briefcase-outline', bg: 'rgba(245,158,11,0.15)', color: '#FCD34D' },
];

const trips = [
  { route: 'Micro 612 — Viña centro', time: 'Hoy, 08:14 · Tarifa estudiante', price: '$300' },
  { route: 'Micro 801 — Valparaíso', time: 'Ayer, 17:52 · Tarifa estudiante', price: '$300' },
  { route: 'Micro 612 — Agua Santa', time: 'Lun 26, 07:38 · Tarifa estudiante', price: '$300' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Buenas tardes,</Text>
            <Text style={styles.name}>Javiera Torres Muñoz</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JT</Text>
          </View>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Deuda acumulada</Text>
          <Text style={styles.balanceAmount}>$4.850</Text>
          <Text style={styles.balanceSub}>3 viajes pendientes de pago</Text>
          <View style={styles.balanceActions}>
            {[
              { label: 'Pagar', icon: 'card-outline', tab: 'Gastos' },
              { label: 'Historial', icon: 'receipt-outline', tab: 'Viajes' },
              { label: 'Gastos', icon: 'bar-chart-outline', tab: 'Gastos' },
            ].map((item) => (
              <TouchableOpacity key={item.label} style={styles.balBtn} onPress={() => navigation.navigate(item.tab)}>
                <Ionicons name={item.icon} size={18} color="#fff" />
                <Text style={styles.balBtnText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acceso rápido</Text>
          <View style={styles.actionGrid}>
            {quickActions.map((item) => (
              <TouchableOpacity key={item.label} style={styles.actionItem} onPress={() => navigation.navigate(item.tab)}>
                <View style={[styles.actionIcon, { backgroundColor: item.bg }]}>
                  <Ionicons name={item.icon} size={22} color={item.color} />
                </View>
                <Text style={styles.actionLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tarifas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tarifas Microchet</Text>
          <View style={styles.tarifaInfo}>
            <Ionicons name="information-circle-outline" size={14} color="#60A5FA" />
            <Text style={styles.tarifaInfoText}>Incluye comisión de servicio digital de $100</Text>
          </View>
          {tarifas.map((t) => (
            <View key={t.tipo} style={styles.tarifaCard}>
              <View style={[styles.tarifaIcon, { backgroundColor: t.bg }]}>
                <Ionicons name={t.icon} size={20} color={t.color} />
              </View>
              <View style={styles.tarifaInfo2}>
                <Text style={styles.tarifaTipo}>{t.tipo}</Text>
                <Text style={styles.tarifaAntes}>Tarifa tradicional: {t.antes}</Text>
              </View>
              <View style={styles.tarifaPrecioBox}>
                <Text style={styles.tarifaPrecio}>{t.precio}</Text>
                <Text style={styles.tarifaPreciSub}>por viaje</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Recent Trips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimos viajes</Text>
          {trips.map((trip, i) => (
            <View key={i} style={[styles.tripItem, i === trips.length - 1 && { borderBottomWidth: 0 }]}>
              <View style={styles.tripIcon}>
                <Ionicons name="bus-outline" size={18} color="#60A5FA" />
              </View>
              <View style={styles.tripInfo}>
                <Text style={styles.tripRoute}>{trip.route}</Text>
                <Text style={styles.tripTime}>{trip.time}</Text>
              </View>
              <Text style={styles.tripPrice}>{trip.price}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { flex: 1, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 16 },
  greeting: { fontSize: 13, color: COLORS.gray },
  name: { fontSize: 20, fontWeight: '500', color: COLORS.white, marginTop: 2 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.blue, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: COLORS.white, fontWeight: '500', fontSize: 14 },
  balanceCard: { marginHorizontal: 16, borderRadius: 20, backgroundColor: '#1E3A8A', padding: 18, marginBottom: 20 },
  balanceLabel: { fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 4 },
  balanceAmount: { fontSize: 30, fontWeight: '500', color: COLORS.white },
  balanceSub: { fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 2 },
  balanceActions: { flexDirection: 'row', gap: 8, marginTop: 14 },
  balBtn: { flex: 1, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 10, padding: 10, alignItems: 'center', gap: 4 },
  balBtnText: { color: COLORS.white, fontSize: 11, fontWeight: '500' },
  section: { paddingHorizontal: 16, marginBottom: 20 },
  sectionTitle: { fontSize: 13, color: COLORS.gray, marginBottom: 12 },
  actionGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  actionItem: { alignItems: 'center', gap: 8, width: '22%' },
  actionIcon: { width: 52, height: 52, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  actionLabel: { fontSize: 11, color: COLORS.gray, textAlign: 'center' },
  tarifaInfo: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10, backgroundColor: 'rgba(37,99,235,0.1)', padding: 8, borderRadius: 8 },
  tarifaInfoText: { fontSize: 11, color: 'rgba(255,255,255,0.5)' },
  tarifaCard: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: 14, marginBottom: 8, borderWidth: 0.5, borderColor: COLORS.border },
  tarifaIcon: { width: 42, height: 42, borderRadius: 12, justifyContent: 'center', alignItems: 'center', flexShrink: 0 },
  tarifaInfo2: { flex: 1 },
  tarifaTipo: { fontSize: 14, fontWeight: '500', color: COLORS.white },
  tarifaAntes: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
  tarifaPrecioBox: { alignItems: 'flex-end' },
  tarifaPrecio: { fontSize: 18, fontWeight: '500', color: COLORS.white },
  tarifaPreciSub: { fontSize: 10, color: COLORS.gray, marginTop: 1 },
  tripItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: COLORS.border },
  tripIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(37,99,235,0.2)', justifyContent: 'center', alignItems: 'center' },
  tripInfo: { flex: 1 },
  tripRoute: { fontSize: 13, fontWeight: '500', color: COLORS.white },
  tripTime: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
  tripPrice: { fontSize: 14, fontWeight: '500', color: COLORS.blueLight },
});