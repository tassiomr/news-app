import { SafeAreaView, StyleSheet, View, useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "./src/theme/pallete";
import { Home } from "./src/screens";
import Navigator from "./src/app/routes";

export default function App() {
  const systemTheme = useColorScheme();

  const paperTheme =
    systemTheme === "dark"
      ? {
          ...MD3DarkTheme,
          colors: darkTheme,
        }
      : { ...MD3LightTheme, colors: lightTheme };

  return (
    <PaperProvider theme={paperTheme}>
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    </PaperProvider>
  );
}
