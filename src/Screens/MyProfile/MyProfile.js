import React from "react";
import {
  Image,
  ScrollView,
  Text,
  View
} from "react-native";
import Editbtn, { IncompleteBtn } from "../../Components/Buttons/Editbtn";
import navigationString from "../../Navigations/navigationString";
import Strings from "../../constants/Strings";
import imagePath from "../../constants/imagePath";
import styles from "./Styles";

const MyProfile = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Image style={styles.imgprofile} source={imagePath.icProfile} />
        </View>

        <View style={{ marginRight: 85 }}>
          <Text style={styles.txt1}>{Strings.ALLAN}</Text>
          <View>
            <Text style={styles.txt2}>{Strings.EXAMPLE}</Text>
          </View>
        </View>

        <View style={styles.viewPercent}>
          <Text style={{ fontSize: 16 }}>{Strings.PERCENT}</Text>
          <Text style={{ fontSize: 10, color: "#556b2f", fontWeight: "600" }}>
            {Strings.COMPLETE}
          </Text>
        </View>
      </View>

      <View
        style={{ borderWidth: 0.5, borderColor: "lightgrey", marginTop: 20 }}
      ></View>

      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "800" }}>
          {Strings.SUMMARY}
        </Text>
      </View>

      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 12, color: "grey" }}>{Strings.IDENTITY}</Text>
      </View>
      <View style={{ marginTop: 8, marginLeft: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>
          {Strings.VENTICULAR}
        </Text>
      </View>

      <View style={{ marginTop: 22, marginLeft: 10 }}>
        <Text style={{ fontSize: 12, color: "grey" }}>
          {Strings.DESCRIPTION}
        </Text>
      </View>

      <IncompleteBtn />

      <View style={{ marginTop: 22, marginLeft: 10 }}>
        <Text style={{ fontSize: 12, color: "grey" }}>{Strings.CONDITION}</Text>
      </View>

      <View style={{ marginTop: 8, marginLeft: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>
          {Strings.VENTICULAR}
        </Text>
      </View>

      <View style={{ marginTop: 22, marginLeft: 10 }}>
        <Text style={{ fontSize: 12, color: "grey" }}>{Strings.HEALTH}</Text>
      </View>

      <View style={{ marginTop: 8, marginLeft: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>{Strings.NO}</Text>
      </View>

      <View style={{ marginTop: 22, marginLeft: 10 }}>
        <Text style={{ fontSize: 12, color: "grey" }}>{Strings.INTEREST}</Text>
      </View>

      <View style={{ marginTop: 8, marginLeft: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>
          {Strings.VENTICULAR}
        </Text>
      </View>

      <View style={{ marginTop: 22, marginLeft: 10 }}>
        <Text style={{ fontSize: 12, color: "grey" }}>
          {Strings.SHORT_TERM}
        </Text>
      </View>

      <View style={{ marginTop: 8, marginLeft: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>{Strings.LEARN}</Text>
      </View>

      <Editbtn
        onPress={() => navigation.navigate(navigationString.EDITPROFILE)}
      />

      <View
        style={{ borderWidth: 0.5, borderColor: "lightgrey", marginTop: 20 }}
      ></View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image
          style={{ width: 17, height: 17, marginTop: 5, marginLeft: 7 }}
          source={require("../../assets/images/contact.png")}
        />
        <View style={{ marginLeft: 25 }}>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>Contact Us</Text>
        </View>
      </View>

      <View
        style={{ borderWidth: 0.5, borderColor: "lightgrey", marginTop: 20 }}
      ></View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image
          style={{ width: 17, height: 17, marginTop: 5, marginLeft: 7 }}
          source={imagePath.icTerms}
        />
        <View style={{ marginLeft: 25 }}>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            {Strings.TERMS}
          </Text>
        </View>
      </View>

      <View
        style={{ borderWidth: 0.5, borderColor: "lightgrey", marginTop: 20 }}
      ></View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image
          style={{ width: 17, height: 17, marginTop: 5, marginLeft: 7 }}
          source={imagePath.icLogout}
        />
        <View style={{ marginLeft: 25 }}>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            {Strings.LOGOUT}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default MyProfile;
