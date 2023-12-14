import { StyleSheet } from "react-native";

const blue = "#9D8FC5";
const darkBlue = "#6759A7";
const lightBlue = "#57bcde";

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
    color: lightBlue,
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
    color: lightBlue,
  } 
});
