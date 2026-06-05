import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = { bg: '#0B1426', white: '#FFFFFF', gray: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.1)', blue: '#2563EB' };

export default function DatosPersonalesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Datos personales</Text>
      </View>
      {[
        { label: 'Nombre completo', value: 'Javiera Torres Muñoz' },
        { label: 'RUT', value: '20.345.678-9' },
        { label: 'Correo electrónico', value: 'javiera.torres@gmail.com' },
        { label: 'Teléfono', value: '+56 9 8765 4321' },
      ].map((field) => (
        <View key={field.label} style={styles.field}>
          <Text style={styles.fieldLabel}>{field.label}</Text>
          <TextInput style={styles.fieldInput} value={field.value} placeholderTextColor={COLORS.gray} editable={false} />
        </View>
      ))}
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editBtnText}>Editar información</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 55 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 24 },
  backBtn: { width: 34, height: 34, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '500', color: COLORS.white },
  field: { paddingHorizontal: 16, marginBottom: 16 },
  fieldLabel: { fontSize: 11, color: COLORS.gray, marginBottom: 6 },
  fieldInput: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 14, color: COLORS.white, fontSize: 14, borderWidth: 0.5, borderColor: COLORS.border },
  editBtn: { marginHorizontal: 16, marginTop: 8, backgroundColor: COLORS.blue, borderRadius: 14, padding: 15, alignItems: 'center' },
  editBtnText: { color: COLORS.white, fontSize: 15, fontWeight: '500' },
});