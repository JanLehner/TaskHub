import { StyleSheet } from "react-native";

const darkBlue = "#0D1117";
const blue = "#263142";
const orange = "#ba4d09";
const lightOrange = "#d96e2b";

export const stylesLogin = StyleSheet.create({
  loginTitle: {
    fontSize: 35,
    color: lightOrange,
  },
  loginInputField: {
    height: "10%",
    width: "60%",
    fontSize: 20,
    backgroundColor: darkBlue,
    color: orange,
    textAlign: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    marginTop: "2%"
  },
  loginBtn: {
    height: "10%",
    width: "20%",
    backgroundColor: lightOrange,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: "2%"
  },
  loginBtnText: {
    fontSize: 20,
    color: darkBlue,
  },
});