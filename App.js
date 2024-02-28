import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainRouter from "./pages/router/MainRouter";

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // paddingHorizontal: 30,
  },
});
