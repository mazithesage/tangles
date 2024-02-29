import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  const [userdata, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  console.log(user, "user");
  //   console.log(user.uid, "user");
  const getUser = async () => {
    setIsLoading(true);
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUser(docSnap.data());
    } else {
      setUser(null);
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getUser();
  }, []);
  const logout = () => {
    auth.signOut();
    navigation.replace("Onboarding");
  };
  if (isLoading) {
    return <ActivityIndicator size="small" color="#FF355E" />;
  }
  return (
    <View>
      {userdata ? (
        <>
          <Text>{userdata?.name}</Text>
          <Text>{userdata?.displayName}</Text>
          <Text>{userdata?.age}</Text>
          <Image
            source={{ uri: userdata?.images }}
            style={{ width: 200, height: 200 }}
          />
        </>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("add-user-data")}
          >
            <Text>Please add user data</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
