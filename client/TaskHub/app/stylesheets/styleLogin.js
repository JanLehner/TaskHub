import { StyleSheet } from "react-native";

const blue = "#9D8FC5";
const darkBlue = "#6759A7";
const lightBlue = "#57bcde";

export const stylesLogin = StyleSheet.create({
  loginTitle: {
    fontSize: 35,
    color: darkBlue,
  },
  loginInputField: {
    height: "10%",
    width: "60%",
    fontSize: 20,
    backgroundColor: darkBlue,
    color: blue,
    textAlign: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    marginTop: "2%"
  },
});