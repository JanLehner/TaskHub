import { StyleSheet } from "react-native";

const darkBlue = "#0D1117";
const blue = "#263142";
const orange = "#ba4d09";
const lightOrange = "#d96e2b";

export const stylesCreateBoard = StyleSheet.create({
  inputField: {
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
  inputFieldBig: {
    height: "20%",
  },
  loginInformationTextView: {
    height: "5%",
    width: "50%",
    margin: 10
  },
  loginErrorMessageText: {
    color: "#c4102e",
    fontSize: 18,
    textAlign: "center",
  },
  addBtn: {
    height: "10%",
    width: "20%",
    backgroundColor: lightOrange,
    borderRadius: 5,
    borderWidth: 1,
  },
  addBtnText: {

  },
});