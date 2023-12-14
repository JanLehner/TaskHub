import { StyleSheet } from "react-native";

const darkBlue = "#0D1117";
const blue = "#263142";
const orange = "#ba4d09";
const lightOrange = "#d96e2b";

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
  header: {
    height: "15%",
    widht: "100%",
    backgroundColor: darkBlue,
  },
  title: {
    fontSize: 30,
    color: orange,
  },  
  main: {
    height: "75%",
    widht: "100%",
    backgroundColor: blue,
  },
  footer: {
    height: "10%",
    widht: "100%",
    backgroundColor: darkBlue,
  },
  copyright: {
    fontSize: 20,
    color: orange,
  } 
});
