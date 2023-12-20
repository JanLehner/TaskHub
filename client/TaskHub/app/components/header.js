import { View, Text } from "react-native";
import { styles } from "../stylesheets/style";

export const Header = ({ text }) => {
  return (
    <View style={{ ...styles.flexbox, ...styles.header }}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}