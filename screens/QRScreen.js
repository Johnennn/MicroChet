import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const COLORS = {
  bg: '#0B1426', white: '#FFFFFF',
  gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)',
  blueLight: '#60A5FA', green: '#34D399',
};

export default function QRScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Subir a la micro</Text>
      </View>

      <View style={styles.qrCard}>
        <QRCode value="microchet://user/javiera-torres-20345678" size={160} />
        <Text style={styles.qrName}>Javiera Torres Muñoz</Text>
        <Text style={styles.qrRut}>RUT 20.345.678-9</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Estudiante — Tarifa rebajada</Text>
        </View>
        <View style={styles.timer}>
          <Ionicons name="refresh-outline" size={13} color="#94A3B8" />
          <Text style={styles.timerText}>Actualiza en 28 segundos</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        {[
          { label: 'Tarifa aplicada', value: '$280' },
          { label: 'Deuda pendiente', value: '$4.850' },
          { label: 'Estado cuenta', value: 'Activa', green: true },
        ].map((item) => (
          <View key={item.label} style={styles.infoChip}>
            <Text style={styles.chipLabel}>{item.label}</Text>
            <Text style={[styles.chipVal, item.green && { color: COLORS.green }]}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.statusBar}>
        <Ionicons name="checkmark-circle-outline" size={20} color={COLORS.green} />
        <Text style={styles.statusText}>Listo para validar en el validador de la micro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55, paddingHorizontal: 16 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '500', color: '#fff' },
  qrCard: { backgroundColor: '#fff', borderRadius: 22, padding: 24, alignItems: 'center', marginBottom: 14 },
  qrName: { fontSize: 15, fontWeight: '500', color: '#1E293B', marginTop: 14 },
  qrRut: { fontSize: 12, color: '#64748B', marginTop: 2 },
  badge: { marginTop: 8, backgroundColor: '#DBEAFE', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  badgeText: { fontSize: 11, fontWeight: '500', color: '#1D4ED8' },
  timer: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 10 },
  timerText: { fontSize: 11, color: '#94A3B8' },
  infoRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  infoChip: { flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 10, alignItems: 'center', borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.08)' },
  chipLabel: { fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 3 },
  chipVal: { fontSize: 13, fontWeight: '500', color: '#fff' },
  statusBar: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(16,185,129,0.1)', borderRadius: 12, padding: 12, borderWidth: 0.5, borderColor: 'rgba(16,185,129,0.3)' },
  statusText: { fontSize: 12, color: 'rgba(255,255,255,0.7)', flex: 1 },
});