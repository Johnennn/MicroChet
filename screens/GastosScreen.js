import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = {
  bg: '#0B1426', white: '#FFFFFF',
  gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)',
  blueLight: '#60A5FA', green: '#34D399', amber: '#FCD34D', blue: '#2563EB',
};

const periods = ['Día', 'Semana', 'Mes', 'Año'];

const dataByPeriod = {
  'Día': {
    label: 'Gastado hoy',
    total: '$900',
    change: '3 viajes hoy',
    changeIcon: 'trending-up-outline',
    changeColor: '#60A5FA',
    promedio: '$300',
    promedioSub: 'por viaje',
    viajes: '3',
    viajesSub: 'hoy',
    bars: [
      { day: '07:00', amount: 300, max: 900 },
      { day: '12:00', amount: 300, max: 900 },
      { day: '18:00', amount: 300, max: 900 },
    ],
  },
  'Semana': {
    label: 'Gastado esta semana',
    total: '$4.200',
    change: '10% más que semana anterior',
    changeIcon: 'trending-up-outline',
    changeColor: '#F87171',
    promedio: '$600',
    promedioSub: 'por día',
    viajes: '14',
    viajesSub: 'esta semana',
    bars: [
      { day: 'Lun', amount: 900, max: 1200 },
      { day: 'Mar', amount: 600, max: 1200 },
      { day: 'Mié', amount: 1200, max: 1200 },
      { day: 'Jue', amount: 600, max: 1200 },
      { day: 'Vie', amount: 600, max: 1200 },
      { day: 'Sáb', amount: 300, max: 1200 },
      { day: 'Dom', amount: 0, max: 1200 },
    ],
  },
  'Mes': {
    label: 'Gastado en junio',
    total: '$7.500',
    change: '5% menos que mayo',
    changeIcon: 'trending-down-outline',
    changeColor: '#34D399',
    promedio: '$300',
    promedioSub: 'por viaje',
    viajes: '25',
    viajesSub: 'este mes',
    bars: [
      { day: 'S1', amount: 2100, max: 3000 },
      { day: 'S2', amount: 3000, max: 3000 },
      { day: 'S3', amount: 1500, max: 3000 },
      { day: 'S4', amount: 900, max: 3000 },
    ],
  },
  'Año': {
    label: 'Gastado en 2026',
    total: '$39.600',
    change: '3% menos que 2025',
    changeIcon: 'trending-down-outline',
    changeColor: '#34D399',
    promedio: '$7.920',
    promedioSub: 'por mes',
    viajes: '132',
    viajesSub: 'este año',
    bars: [
      { day: 'Ene', amount: 6600, max: 9000 },
      { day: 'Feb', amount: 5700, max: 9000 },
      { day: 'Mar', amount: 9000, max: 9000 },
      { day: 'Abr', amount: 7500, max: 9000 },
      { day: 'May', amount: 7800, max: 9000 },
      { day: 'Jun', amount: 3000, max: 9000 },
    ],
  },
};

export default function GastosScreen() {
  const navigation = useNavigation();
  const [activePeriod, setActivePeriod] = useState('Mes');
  const data = dataByPeriod[activePeriod];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Mis gastos</Text>
      </View>

      <View style={styles.periodRow}>
        {periods.map((p) => (
          <TouchableOpacity key={p} style={[styles.periodBtn, activePeriod === p && styles.periodBtnActive]} onPress={() => setActivePeriod(p)}>
            <Text style={[styles.periodText, activePeriod === p && styles.periodTextActive]}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>{data.label}</Text>
          <Text style={styles.totalAmount}>{data.total}</Text>
          <View style={styles.totalChange}>
            <Ionicons name={data.changeIcon} size={14} color={data.changeColor} />
            <Text style={[styles.totalChangeTxt, { color: data.changeColor }]}>{data.change}</Text>
          </View>
        </View>

        <View style={styles.miniStats}>
          <View style={styles.miniStat}>
            <Text style={styles.msLabel}>Promedio</Text>
            <Text style={styles.msVal}>{data.promedio}</Text>
            <Text style={styles.msSub}>{data.promedioSub}</Text>
          </View>
          <View style={styles.miniStat}>
            <Text style={styles.msLabel}>Viajes</Text>
            <Text style={styles.msVal}>{data.viajes}</Text>
            <Text style={styles.msSub}>{data.viajesSub}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Detalle</Text>
        {data.bars.map((b) => (
          <View key={b.day} style={styles.barRow}>
            <Text style={styles.barDay}>{b.day}</Text>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { width: b.amount === 0 ? 2 : `${(b.amount / b.max) * 100}%` }]} />
            </View>
            <Text style={styles.barVal}>${b.amount.toLocaleString()}</Text>
          </View>
        ))}

        <View style={styles.debtAlert}>
          <View style={styles.debtLeft}>
            <Ionicons name="alert-circle-outline" size={20} color={COLORS.amber} />
            <View>
              <Text style={styles.debtLabel}>Deuda pendiente</Text>
              <Text style={styles.debtVal}>$4.850 · 3 viajes</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payBtnText}>Pagar ahora</Text>
          </TouchableOpacity>
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
  periodRow: { flexDirection: 'row', marginHorizontal: 16, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: 3, marginBottom: 14 },
  periodBtn: { flex: 1, paddingVertical: 7, alignItems: 'center', borderRadius: 8 },
  periodBtnActive: { backgroundColor: COLORS.blue },
  periodText: { fontSize: 12, color: 'rgba(255,255,255,0.4)' },
  periodTextActive: { color: COLORS.white, fontWeight: '500' },
  scroll: { flex: 1, paddingHorizontal: 16 },
  totalCard: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16, marginBottom: 12 },
  totalLabel: { fontSize: 12, color: COLORS.gray },
  totalAmount: { fontSize: 32, fontWeight: '500', color: COLORS.white, marginTop: 2 },
  totalChange: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  totalChangeTxt: { fontSize: 11 },
  miniStats: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  miniStat: { flex: 1, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 12, borderWidth: 0.5, borderColor: COLORS.border },
  msLabel: { fontSize: 11, color: 'rgba(255,255,255,0.35)' },
  msVal: { fontSize: 18, fontWeight: '500', color: COLORS.white, marginTop: 2 },
  msSub: { fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 1 },
  sectionTitle: { fontSize: 13, color: COLORS.gray, marginBottom: 10 },
  barRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  barDay: { fontSize: 11, color: 'rgba(255,255,255,0.3)', width: 30 },
  barTrack: { flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 4, height: 8 },
  barFill: { height: '100%', borderRadius: 4, backgroundColor: COLORS.blue },
  barVal: { fontSize: 11, color: 'rgba(255,255,255,0.4)', width: 50, textAlign: 'right' },
  debtAlert: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(245,158,11,0.1)', borderRadius: 12, padding: 12, borderWidth: 0.5, borderColor: 'rgba(245,158,11,0.3)', marginTop: 6, marginBottom: 20 },
  debtLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  debtLabel: { fontSize: 12, color: 'rgba(255,255,255,0.6)' },
  debtVal: { fontSize: 14, fontWeight: '500', color: COLORS.amber },
  payBtn: { backgroundColor: '#F59E0B', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 7 },
  payBtnText: { fontSize: 11, fontWeight: '500', color: COLORS.white },
});