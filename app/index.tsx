import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Bottone from "../components/Bottone";
import { Colors } from "../constants/colors";
import { useMeteo } from "../hooks/useMeteo";

export default function Index() {
  const { meteo, loading, errore, cercaMeteo } = useMeteo("London");
  const [ricerca, setRicerca] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 24,
          color: Colors.black,
        }}
      >
        🌤️ App Meteo
      </Text>

      {/* Campo ricerca */}
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          marginBottom: 24,
          width: "100%",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: Colors.lightGray,
            borderRadius: 8,
            padding: 12,
          }}
          placeholder="Cerca città..."
          value={ricerca}
          onChangeText={(testo) => setRicerca(testo)}
        />
        <Bottone
          testo="Cerca"
          onPress={() => {
            if (ricerca.trim() === "") return;
            cercaMeteo(ricerca);
          }}
        />
      </View>

      {/* Loading */}
      {loading && <Text style={{ color: Colors.gray }}>Caricamento...</Text>}

      {/* Errore */}
      {errore && <Text style={{ color: Colors.danger }}>❌ {errore}</Text>}

      {/* Dati meteo */}
      {meteo && !loading && (
        <View
          style={{
            backgroundColor: Colors.background,
            padding: 24,
            borderRadius: 16,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 8 }}>
            {meteo.name}
          </Text>
          <Text style={{ fontSize: 64, marginBottom: 8 }}>
            {Math.round(meteo.main.temp)}°C
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 8, color: Colors.gray }}>
            {meteo.weather[0].description}
          </Text>
          <Text style={{ fontSize: 16, color: Colors.gray }}>
            💧 Umidità: {meteo.main.humidity}%
          </Text>
        </View>
      )}
    </View>
  );
}
