import { StyleSheet } from "react-native";

const darkBlue = "#0D1117";
const blue = "#263142";
const orange = "#ba4d09";
const lightOrange = "#d96e2b";

export const styleCreateItem = StyleSheet.create({
  mainHeader: {
    height: "10%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  backBtn:{
    height: "80%",
    width: "100%",
    backgroundColor: orange,
    borderRadius: 5,
  },
  formView: {
    height: "60%",
    width: "90%",
  },
  formInputfield: {
    height: "15%",
    width: "100%",
    fontSize: 20,
    backgroundColor: darkBlue,
    color: orange,
    textAlign: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    marginTop: "2%"
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
  saveBtn: {
    height: "10%",
    width: "20%",
    backgroundColor: lightOrange,
    borderRadius: 5,
    borderWidth: 1,
  },
  saveBtnText: {
    fontSize: 20,
    color: darkBlue,
  },
});