import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors";

type BottoneProps = {
  testo: string;
  onPress: () => void;
  colore?: string; // ? → opzionale, ha un valore di default
  disabled?: boolean;
};

export default function Bottone({
  testo,
  onPress,
  colore = Colors.primary,
  disabled = false,
}: BottoneProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: disabled ? Colors.gray : colore,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        opacity: disabled ? 0.6 : 1,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ color: Colors.white, fontWeight: "bold", fontSize: 16 }}>
        {testo}
      </Text>
    </TouchableOpacity>
  );
}
