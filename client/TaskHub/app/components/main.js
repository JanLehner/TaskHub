import { View, Text } from "react-native";
import { styles } from "../stylesheets/style";

export const Main = ({ children }) => {
  return (
    <View style={{ ...styles.flexbox, ...styles.main }}>
      {children}
    </View>
  );
}