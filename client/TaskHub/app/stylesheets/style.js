import { StyleSheet } from "react-native";

const lightBlue = "#9D8FC5";
const darkBlue = "#6759A7";
const pink = "#d633b0";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    height: "15%",
    widht: "100%",
    backgroundColor: darkBlue,
  },  
  main: {
    height: "75%",
    widht: "100%",
    backgroundColor: lightBlue,
  },
  footerText: {
    height: "10%",
    widht: "100%",
    backgroundColor: darkBlue,
  },  
});
