import { View, Text } from "react-native";
import { styles } from "../stylesheets/style";

export const Footer = ({ text }) => {
  return (
    <View style={{ ...styles.flexbox, ...styles.footer }}>
      <Text style={styles.copyright}>{text}</Text>
    </View>
  );
}