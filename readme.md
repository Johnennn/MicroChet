# 🚌 Microchet

Aplicación móvil para modernizar el acceso y pago del transporte público en la Región de Valparaíso. Permite subir a la micro usando un código QR desde el celular, sin efectivo ni saldo previo, bajo un modelo de pago postpago inteligente.

---

## 📱 Pantallas

- **Inicio** — resumen de deuda, accesos rápidos y últimos viajes
- **Validar** — código QR dinámico para subir a la micro
- **Viajes** — historial de viajes con filtros
- **Gastos** — estadísticas de gasto por día, semana, mes y año
- **Perfil** — datos personales, certificado estudiantil, métodos de pago y notificaciones

---

## 🛠️ Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

- [Node.js](https://nodejs.org/) versión 18 o superior
- [Git](https://git-scm.com/)
- La app **Expo Go** en tu celular — [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) o [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

## 🚀 Instalación y ejecución

**1. Clona el repositorio**

```bash
git clone https://github.com/TU_USUARIO/microchet.git
cd microchet
```

**2. Configura npm para evitar conflictos de dependencias**

```bash
npm config set legacy-peer-deps true
```

**3. Instala las dependencias**

```bash
npm install
```

**4. Instala dependencias nativas de Expo**

```bash
npx expo install react-native-qrcode-svg react-native-svg react-native-screens react-native-safe-area-context react-native-gesture-handler
```

**5. Inicia el servidor**

```bash
npx expo start --tunnel
```

**6. Abre la app en tu celular**

1. Abre **Expo Go** en tu celular
2. Escanea el código QR que aparece en la terminal
3. Asegúrate de tener conexión a internet

> El modo `--tunnel` permite conectarse desde cualquier red, sin necesidad de estar en el mismo WiFi que el computador.

---

## 📁 Estructura del proyecto

```
microchet/
├── app.js                           # Navegación principal
├── screens/
│   ├── HomeScreen.js                # Pantalla de inicio
│   ├── QRScreen.js                  # Validación QR
│   ├── HistorialScreen.js           # Historial de viajes
│   ├── GastosScreen.js              # Estadísticas de gastos
│   ├── PerfilScreen.js              # Perfil de usuario
│   └── perfil/
│       ├── DatosPersonalesScreen.js # Datos personales
│       ├── CertificadoScreen.js     # Certificado estudiantil
│       ├── MetodosPagoScreen.js     # Métodos de pago
│       └── NotificacionesScreen.js  # Configuración de notificaciones
└── README.md
```

---

## 📦 Dependencias principales

| Paquete | Uso |
|---|---|
| `expo` | Framework base |
| `@react-navigation/native` | Navegación entre pantallas |
| `@react-navigation/bottom-tabs` | Barra de navegación inferior |
| `@react-navigation/stack` | Navegación en stack para subpantallas |
| `react-native-qrcode-svg` | Generación del código QR dinámico |
| `react-native-svg` | Soporte SVG para el QR |
| `@expo/vector-icons` | Íconos de la interfaz |
| `react-native-screens` | Optimización de pantallas nativas |
| `react-native-safe-area-context` | Manejo de áreas seguras del dispositivo |
| `react-native-gesture-handler` | Soporte de gestos táctiles |

---

## ⚙️ Solución de problemas comunes

**Error ERESOLVE al instalar dependencias**
```bash
npm install --legacy-peer-deps
```

**La app no carga en Expo Go**
Asegúrate de que la versión de Expo Go en tu celular sea compatible con SDK 54. Actualízala desde la tienda de aplicaciones si es necesario.

**El QR no conecta desde otro celular**
Usa siempre el modo tunnel al iniciar el servidor:
```bash
npx expo start --tunnel
```
