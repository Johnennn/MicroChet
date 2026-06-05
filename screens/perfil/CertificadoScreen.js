import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = { bg: '#0B1426', white: '#FFFFFF', gray: 'rgba(255,255,255,0.5)', green: '#34D399', blue: '#2563EB' };

export default function CertificadoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Certificado estudiantil</Text>
      </View>
      <View style={styles.statusCard}>
        <Ionicons name="checkmark-circle-outline" size={48} color={COLORS.green} />
        <Text style={styles.statusTitle}>Certificado verificado</Text>
        <Text style={styles.statusSub}>Tu condición de estudiante está activa</Text>
        <View style={styles.infoRow}>
          {[
            { label: 'Institución', value: 'PUCV' },
            { label: 'Vigencia', value: 'Dic 2026' },
            { label: 'Tarifa', value: '$280' },
          ].map((item) => (
            <View key={item.label} style={styles.infoItem}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoVal}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.uploadBtn}>
        <Ionicons name="cloud-upload-outline" size={20} color={COLORS.white} />
        <Text style={styles.uploadText}>Actualizar certificado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 24 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '500', color: COLORS.white },
  statusCard: { marginHorizontal: 16, backgroundColor: 'rgba(16,185,129,0.08)', borderRadius: 20, padding: 24, alignItems: 'center', borderWidth: 0.5, borderColor: 'rgba(16,185,129,0.25)' },
  statusTitle: { fontSize: 18, fontWeight: '500', color: COLORS.white, marginTop: 12 },
  statusSub: { fontSize: 13, color: COLORS.gray, marginTop: 4 },
  infoRow: { flexDirection: 'row', gap: 16, marginTop: 20 },
  infoItem: { alignItems: 'center' },
  infoLabel: { fontSize: 11, color: COLORS.gray },
  infoVal: { fontSize: 15, fontWeight: '500', color: COLORS.white, marginTop: 3 },
  uploadBtn: { marginHorizontal: 16, marginTop: 16, backgroundColor: COLORS.blue, borderRadius: 14, padding: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 8 },
  uploadText: { color: COLORS.white, fontSize: 15, fontWeight: '500' },
});