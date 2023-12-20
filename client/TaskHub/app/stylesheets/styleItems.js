import { StyleSheet } from "react-native";

const darkBlue = "#0D1117";
const blue = "#263142";
const orange = "#ba4d09";
const lightOrange = "#d96e2b";

export const styleItems = StyleSheet.create({
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
  boardsScrollView: {
    height: "70%",
    width: "90%",
  },
  emptyPromt: {
    textAlign: "center",
    color: lightOrange,
    fontSize: 20,
    marginTop: 20,
  },
  item: {
    height: 180,
    width: "80%",
    marginTop: 20,
    backgroundColor: darkBlue,
    borderRadius: 5,
    justifyContent: "space-evenly",
  },
  itemTitle:{
    height: "15%",
    width: "95%",
    color: orange,
    fontSize: 28,
    marginBottom: 5
  },
  itemDescription:{
    height: "75%",
    width: "95%",
    color: orange,
    fontSize: 15,
    marginBottom: 5
  },
  itemDueDate: {
    height: "10%",
    width: "95%",
    color: orange,
    fontSize: 15,
  },
  mainFooter: {
    height: "20%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  logoutBtn: {
    height: "50%",
    width: "20%",
    backgroundColor: lightOrange,
    borderRadius: 5,
  },
  logoutBtnText: {
    fontSize: 15,
    color: darkBlue,
  },
  addBtn: {
    height: "50%",
    width: "20%",
    backgroundColor: orange,
    borderRadius: 40,
    fontSize: 45,
  },
});