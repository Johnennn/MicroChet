import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const COLORS = {
  bg: '#0B1426', white: '#FFFFFF',
  gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.06)',
};

const filters = ['Todos', 'Esta semana', 'Este mes', 'Pagados', 'Pendientes'];

const allTrips = [
  { route: 'Micro 612 — Viña centro', meta: 'Hoy 08:14 · Recorrido 612', price: '$280', paid: false, week: true, month: true },
  { route: 'Micro 801 — Valparaíso', meta: 'Ayer 17:52 · Recorrido 801', price: '$280', paid: false, week: true, month: true },
  { route: 'Micro 612 — Agua Santa', meta: 'Lun 26, 07:38 · Recorrido 612', price: '$280', paid: false, week: true, month: true },
  { route: 'Micro 612 — Viña centro', meta: 'Vie 31, 18:10 · Recorrido 612', price: '$280', paid: true, week: false, month: true },
  { route: 'Micro 801 — Valparaíso', meta: 'Jue 30, 08:05 · Recorrido 801', price: '$280', paid: true, week: false, month: true },
];

export default function HistorialScreen() {
  const navigation = useNavigation();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = allTrips.filter(t => {
    if (activeFilter === 'Todos') return true;
    if (activeFilter === 'Esta semana') return t.week;
    if (activeFilter === 'Este mes') return t.month;
    if (activeFilter === 'Pagados') return t.paid;
    if (activeFilter === 'Pendientes') return !t.paid;
    return true;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Mis viajes</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow} contentContainerStyle={{ gap: 6, paddingHorizontal: 16 }}>
        {filters.map((f) => (
          <TouchableOpacity key={f} style={[styles.chip, activeFilter === f && styles.chipActive]} onPress={() => setActiveFilter(f)}>
            <Text style={[styles.chipText, activeFilter === f && styles.chipTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {filtered.length === 0 ? (
          <Text style={styles.empty}>No hay viajes en esta categoría</Text>
        ) : (
          filtered.map((trip, i) => <TripRow key={i} trip={trip} />)
        )}
        <Text style={styles.footer}>{filtered.length} viajes encontrados</Text>
      </ScrollView>
    </View>
  );
}

function TripRow({ trip }) {
  return (
    <View style={styles.tripItem}>
      <View style={styles.tripIcon}>
        <Ionicons name="bus-outline" size={18} color="#60A5FA" />
      </View>
      <View style={styles.tripInfo}>
        <Text style={styles.tripRoute}>{trip.route}</Text>
        <Text style={styles.tripMeta}>{trip.meta}</Text>
      </View>
      <View style={styles.tripRight}>
        <Text style={styles.tripPrice}>{trip.price}</Text>
        <View style={[styles.badge, trip.paid ? styles.badgeOk : styles.badgePend]}>
          <Text style={[styles.badgeText, trip.paid ? styles.badgeTextOk : styles.badgeTextPend]}>
            {trip.paid ? 'Pagado' : 'Pendiente'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 14 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '500', color: COLORS.white },
  filterRow: { marginBottom: 14, flexGrow: 0 },
  chip: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.04)' },
  chipActive: { backgroundColor: 'rgba(37,99,235,0.25)', borderColor: 'rgba(37,99,235,0.5)' },
  chipText: { fontSize: 11, color: 'rgba(255,255,255,0.5)' },
  chipTextActive: { color: '#60A5FA' },
  scroll: { flex: 1, paddingHorizontal: 16 },
  tripItem: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 11, borderBottomWidth: 0.5, borderBottomColor: 'rgba(255,255,255,0.06)' },
  tripIcon: { width: 38, height: 38, borderRadius: 11, backgroundColor: 'rgba(37,99,235,0.2)', justifyContent: 'center', alignItems: 'center', flexShrink: 0 },
  tripInfo: { flex: 1 },
  tripRoute: { fontSize: 13, fontWeight: '500', color: COLORS.white },
  tripMeta: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
  tripRight: { alignItems: 'flex-end' },
  tripPrice: { fontSize: 14, fontWeight: '500', color: COLORS.white },
  badge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, marginTop: 3 },
  badgeOk: { backgroundColor: 'rgba(16,185,129,0.15)' },
  badgePend: { backgroundColor: 'rgba(245,158,11,0.15)' },
  badgeText: { fontSize: 10 },
  badgeTextOk: { color: '#34D399' },
  badgeTextPend: { color: '#FCD34D' },
  empty: { textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 13, marginTop: 40 },
  footer: { textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.25)', paddingVertical: 16 },
});