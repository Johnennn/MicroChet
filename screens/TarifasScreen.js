import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const COLORS = {
  bg: '#0B1426', white: '#FFFFFF',
  gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)',
  blue: '#2563EB', blueLight: '#60A5FA',
};

const tarifas = [
  { tipo: 'Estudiante', precio: '$300', antes: '$200', icon: 'school-outline', bg: 'rgba(37,99,235,0.2)', color: '#60A5FA' },
  { tipo: 'Adulto mayor', precio: '$450', antes: '$350', icon: 'heart-outline', bg: 'rgba(16,185,129,0.15)', color: '#34D399' },
  { tipo: 'Trabajador', precio: '$850', antes: '$750', icon: 'briefcase-outline', bg: 'rgba(245,158,11,0.15)', color: '#FCD34D' },
];

export default function TarifasScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Tarifas Microchet</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={16} color={COLORS.blueLight} />
          <Text style={styles.infoText}>Nuestras tarifas incluyen una comisión de servicio digital de $100 respecto a la tarifa tradicional.</Text>
        </View>

        {tarifas.map((t) => (
          <View key={t.tipo} style={styles.card}>
            <View style={[styles.cardIcon, { backgroundColor: t.bg }]}>
              <Ionicons name={t.icon} size={24} color={t.color} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTipo}>{t.tipo}</Text>
              <Text style={styles.cardAntes}>Tarifa tradicional: {t.antes}</Text>
            </View>
            <View style={styles.cardPrecio}>
              <Text style={styles.cardPrecioVal}>{t.precio}</Text>
              <Text style={styles.cardPrecioSub}>por viaje</Text>
            </View>
          </View>
        ))}

        <View style={styles.nota}>
          <Ionicons name="shield-checkmark-outline" size={16} color="#34D399" />
          <Text style={styles.notaText}>El cobro se realiza de forma postpago. No necesitas cargar saldo previamente.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 20 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '500', color: COLORS.white },
  scroll: { flex: 1, paddingHorizontal: 16 },
  infoBox: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, backgroundColor: 'rgba(37,99,235,0.1)', borderRadius: 12, padding: 12, marginBottom: 16, borderWidth: 0.5, borderColor: 'rgba(37,99,235,0.25)' },
  infoText: { fontSize: 12, color: 'rgba(255,255,255,0.6)', flex: 1, lineHeight: 18 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: 16, marginBottom: 10, borderWidth: 0.5, borderColor: COLORS.border },
  cardIcon: { width: 48, height: 48, borderRadius: 14, justifyContent: 'center', alignItems: 'center', flexShrink: 0 },
  cardInfo: { flex: 1 },
  cardTipo: { fontSize: 15, fontWeight: '500', color: COLORS.white },
  cardAntes: { fontSize: 12, color: COLORS.gray, marginTop: 3 },
  cardPrecio: { alignItems: 'flex-end' },
  cardPrecioVal: { fontSize: 22, fontWeight: '500', color: COLORS.white },
  cardPrecioSub: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
  nota: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, backgroundColor: 'rgba(16,185,129,0.08)', borderRadius: 12, padding: 12, marginTop: 6, marginBottom: 20, borderWidth: 0.5, borderColor: 'rgba(16,185,129,0.2)' },
  notaText: { fontSize: 12, color: 'rgba(255,255,255,0.6)', flex: 1, lineHeight: 18 },
});