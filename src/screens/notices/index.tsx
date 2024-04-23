import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";
import { WebView } from "react-native-webview";

export default function Notice({ route, navigation }) {
  const { notice } = route.params;
  const { colors } = useTheme();

  if (!notice?.url) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryContainer }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        }}
      >
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon source={"close"} size={24} />
        </TouchableOpacity>
        <Text
          style={{ paddingHorizontal: 16, textAlign: "center" }}
          variant="labelMedium"
        >
          {notice.title}
        </Text>
      </View>
      <WebView source={{ uri: notice.url }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
