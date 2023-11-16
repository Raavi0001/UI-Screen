import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { IncompleteBtn, Savebutton } from "../../Components/Buttons/Editbtn";
import Strings from "../../constants/Strings";
import imagePath from "../../constants/imagePath";
import styles from "./Styles";

const EditProfile = () => {
  return (
    <View>
      <ScrollView>
        <View style={{ marginTop: 20, marginLeft: 10 }}>
          <Text style={styles.txt1}>{Strings.EDIT_DETAILS}s</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.txt2}>{Strings.FULL_NAME}</Text>
            <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 10 }}>
              {Strings.SALLIE}
            </Text>
          </View>

          <View style={{ alignItems: "flex-end", marginRight: 20 }}>
            <Image style={styles.imgprofile} source={imagePath.icProfile} />

           <TouchableOpacity>
           <Image
              style={{ width: 20, height: 20, marginTop: -18 }}
              source={imagePath.icEditprofile}
            />
           </TouchableOpacity>
          </View>
        </View>

        <View style={styles.borderTop}></View>

        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 12, color: "#848482" }}>{Strings.DOB}</Text>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            {Strings.DOB_NUM}
          </Text>
        </View>

        <View style={styles.bottomLine}></View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: "#848482" }}>
              {Strings.ADDRESS}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              {Strings.FULL_ADDRESS}
            </Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Image style={styles.imgaddress} source={imagePath.icAddress} />
          </View>
        </View>

        <View style={styles.bottomLine2}></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: "#848482" }}>
              {Strings.SEX}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              {Strings.GENDER}
            </Text>
          </View>

          <TouchableOpacity>
            <View style={{ alignItems: "flex-end" }}>
              <Image style={styles.downBar} source={imagePath.icDownbar} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLine2}></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: "#848482" }}>
              {Strings.PASSWORD}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              {Strings.SECURITY_PASSWORD}
            </Text>
          </View>

          <View
            style={{ alignItems: "flex-end", marginRight: 20, marginTop: 30 }}
          >
            <Text style={{ color: "red", fontWeight: "500", marginTop: 8 }}>
              {Strings.CHANGE_PASSWORD}
            </Text>
          </View>
        </View>

        <View style={styles.bottomLine3}></View>

        <View style={{ marginLeft: 10, marginTop: 18 }}>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            {Strings.EDIT_SUMMARY}
          </Text>
        </View>
        <Text style={styles.txtIdentity}>{Strings.IDENTITY}</Text>
        <Text style={styles.txtseptal}>{Strings.VENTICULAR}</Text>

        <View style={styles.bottomLine}></View>

        <View style={{}}>
          <Text style={styles.txtDescription}>{Strings.DESCRIPTION}</Text>
        </View>
        <IncompleteBtn />
        <View style={styles.bottomLine}></View>

        <View style={{ marginLeft: 10, marginTop: 18 }}>
          <Text style={styles.txtCondition}>{Strings.CONDITION}</Text>
          <Text style={styles.txtseptal}>{Strings.VENTICULAR}</Text>
        </View>

        <View style={styles.bottomLine}></View>

        <View style={{ marginLeft: 10, marginTop: 18 }}>
          <Text style={styles.txtHealth}>{Strings.HEALTH}</Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            {Strings.NO}
          </Text>
        </View>

        <View style={styles.bottomLine}></View>

        <View style={{ marginLeft: 10, marginTop: 18 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "grey",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {Strings.INTEREST}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            {Strings.VENTICULAR}
          </Text>
        </View>

        <View style={styles.bottomLine}></View>

        <View style={{ marginLeft: 10, marginTop: 18 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "grey",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {Strings.SHORT_TERM}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            {Strings.LEARN}
          </Text>
        </View>

        <View style={styles.bottomLine}></View>

        <Savebutton />
      </ScrollView>
    </View>
  );
};
export default EditProfile;
