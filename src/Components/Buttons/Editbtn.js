import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Editbtn = ({ onPress }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.editbtn}>
          <Text style={{ color: "white" }}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Editbtn;
const styles = StyleSheet.create({
  editbtn: {
    fontSize: 12,
    fontWeight: "400",
    backgroundColor: "red",
    width: 165,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

const Savebutton = ({ onClick }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 20, marginBottom: 35 }}>
      <TouchableOpacity onPress={onClick}>
        {/* <View style={styles.editbtn}> */}
         <View style={{...styles.editbtn,width:350}}>
          <Text style={{ color: "white", fontWeight: "600" }}>SAVE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export { Savebutton };

const IncompleteBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: "#fcc1c1",
          width: 96,
          marginLeft: 10,
          height: 24,
          borderRadius: 4,
          marginTop:3
        }}
      >
        <Text
          style={{ color: "red", fontSize: 12, marginTop: 4, marginLeft: 12 }}
        >
          Incomplete
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export { IncompleteBtn };
