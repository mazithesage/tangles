// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import { signInWithPhoneNumber } from "firebase/auth";
// import React, { useRef, useState } from "react";
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
// import { app, auth } from "../../firebase";

// export default function SignInWithPhone() {
//   const [isVerifying, setIsVerifying] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const recaptchaVerifier = useRef(null);
//   const [verificationWrong, setVerificationWrong] = useState(false);

//   const loginWithPhoneNumber = async (c) => {
//     const phoneNumber = "+2348139599128";
//     const result = await signInWithPhoneNumber(
//       auth,
//       phoneNumber,
//       recaptchaVerifier.current
//     );
//     setConfirmationResult(result);
//     setIsVerifying(true);
//   };

//   console.log(confirmationResult, "confirmationResult");

//   const verifyCode = async () => {
//     setIsLoading(true);
//     const code = "123456";
//     if (confirmationResult) {
//       try {
//         const userCredential = await confirmationResult.confirm(code);
//         console.log(userCredential, "userCredential");
//         setLoading(true);
//       } catch (error) {
//         setVerificationWrong(true);
//       }
//     } else {
//     }
//     setIsLoading(false);
//   };

//   if (isLoading) {
//     return <ActivityIndicator size="small" color="#FF355E" />;
//   }

//   return (
//     <View style={styles.container}>
//       <FirebaseRecaptchaVerifierModal
//         ref={recaptchaVerifier}
//         firebaseConfig={app.options}
//       />
//       {/* <Text>SignInWithPhone</Text> */}
//       <TouchableOpacity onPress={loginWithPhoneNumber}>
//         <Text>Get verification code</Text>
//       </TouchableOpacity>
//       {confirmationResult && (
//         <TouchableOpacity onPress={verifyCode}>
//           <Text>SignInWithPhone</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//     gap: 20,
//   },
// });

import { View, Text } from "react-native";
import React from "react";

export default function SignInWithPhone() {
  return (
    <View>
      <Text>SignInWithPhone</Text>
    </View>
  );
}
