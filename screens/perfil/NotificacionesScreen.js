import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const COLORS = { bg: '#0B1426', white: '#FFFFFF', gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)', blue: '#2563EB' };

const opciones = [
  { label: 'Recordatorio de pago', sub: 'Aviso cuando tengas deuda pendiente', icon: 'alert-circle-outline', default: true },
  { label: 'Confirmación de viaje', sub: 'Notificación al validar en la micro', icon: 'bus-outline', default: true },
  { label: 'Resumen semanal', sub: 'Resumen de gastos cada domingo', icon: 'bar-chart-outline', default: false },
  { label: 'Cuenta bloqueada', sub: 'Aviso si tu cuenta es suspendida', icon: 'lock-closed-outline', default: true },
];

export default function NotificacionesScreen({ navigation }) {
  const [switches, setSwitches] = useState(opciones.map(o => o.default));

  const toggle = (i) => {
    const updated = [...switches];
    updated[i] = !updated[i];
    setSwitches(updated);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Notificaciones</Text>
      </View>
      {opciones.map((op, i) => (
        <View key={op.label} style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name={op.icon} size={18} color="#60A5FA" />
          </View>
          <View style={styles.rowText}>
            <Text style={styles.rowLabel}>{op.label}</Text>
            <Text style={styles.rowSub}>{op.sub}</Text>
          </View>
          <Switch
            value={switches[i]}
            onValueChange={() => toggle(i)}
            trackColor={{ false: 'rgba(255,255,255,0.1)', true: COLORS.blue }}
            thumbColor={COLORS.white}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 24 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '500', color: COLORS.white },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 0.5, borderBottomColor: COLORS.border },
  rowIcon: { width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(37,99,235,0.2)', justifyContent: 'center', alignItems: 'center' },
  rowText: { flex: 1 },
  rowLabel: { fontSize: 14, color: COLORS.white },
  rowSub: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
});