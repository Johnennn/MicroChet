import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = { bg: '#0B1426', white: '#FFFFFF', gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)', blue: '#2563EB' };

const metodos = [
  { nombre: 'Visa — Banco BCI', detalle: '•••• 4821', icon: 'card-outline', color: '#60A5FA' },
  { nombre: 'Transferencia bancaria', detalle: 'Banco Santander', icon: 'swap-horizontal-outline', color: '#34D399' },
];

export default function MetodosPagoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Métodos de pago</Text>
      </View>
      {metodos.map((m) => (
        <View key={m.nombre} style={styles.card}>
          <View style={[styles.cardIcon, { backgroundColor: 'rgba(255,255,255,0.06)' }]}>
            <Ionicons name={m.icon} size={22} color={m.color} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardNombre}>{m.nombre}</Text>
            <Text style={styles.cardDetalle}>{m.detalle}</Text>
          </View>
          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>Activo</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-outline" size={20} color={COLORS.white} />
        <Text style={styles.addText}>Agregar método de pago</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 24 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '500', color: COLORS.white },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: 14, borderWidth: 0.5, borderColor: COLORS.border },
  cardIcon: { width: 42, height: 42, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  cardInfo: { flex: 1 },
  cardNombre: { fontSize: 14, fontWeight: '500', color: COLORS.white },
  cardDetalle: { fontSize: 12, color: COLORS.gray, marginTop: 2 },
  activeBadge: { backgroundColor: 'rgba(16,185,129,0.15)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  activeText: { fontSize: 11, color: '#34D399' },
  addBtn: { marginHorizontal: 16, marginTop: 8, backgroundColor: COLORS.blue, borderRadius: 14, padding: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 8 },
  addText: { color: COLORS.white, fontSize: 15, fontWeight: '500' },
});