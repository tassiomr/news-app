import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import useNotices from "../../hooks/useNotices";
import { useNavigation } from "@react-navigation/native";

const NewsCard = ({ item, onPress }) => {
  return (
    <Card
      onPress={() => onPress(item)}
      mode="outlined"
      style={{ borderRadius: 4 }}
    >
      <Card.Cover
        style={{ borderRadius: 4, elevation: 0 }}
        source={{ uri: item?.multimedia[1]?.url, cache: "force-cache" }}
      />
      <Card.Content>
        <Text style={{ paddingTop: 12 }} variant="titleLarge">
          {item.title}
        </Text>
        <Text variant="bodyMedium">{item.abstract}</Text>
      </Card.Content>
    </Card>
  );
};

const Separator = () => <View style={{ height: 20 }} />;

export default function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const { kindNotice, changeNotice, notices, isLoading } = useNotices();
  const [buttons, setButtons] = useState([
    "arts",
    "home",
    "science",
    "us",
    "world",
  ]);

  const formatButtons = useCallback(() => {
    const newButtons = buttons.slice();

    const kindNoticeIndex = newButtons.findIndex((item) => item === kindNotice);

    if (kindNoticeIndex !== -1) {
      [newButtons[0], newButtons[kindNoticeIndex]] = [
        newButtons[kindNoticeIndex],
        newButtons[0],
      ];
    }

    return newButtons;
  }, [kindNotice]);

  useEffect(() => {
    setButtons(formatButtons);
  }, [formatButtons]);

  const handleOnPress = (url: string) => {
    //@ts-expect-error
    navigation.navigate("Notice", { notice: url });
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.primaryContainer, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text variant="titleLarge" style={{ padding: 16 }}>
          Latest News
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 8,
          }}
          horizontal
          keyExtractor={(item) => item}
          data={buttons}
          renderItem={({ item }) => {
            return (
              <Button
                disabled={isLoading}
                style={{ margin: 4 }}
                mode={kindNotice === item ? "contained" : "outlined"}
                onPress={() => {
                  changeNotice(item);
                }}
              >
                {item}
              </Button>
            );
          }}
        />
      </View>
      <View style={{ flex: 6, padding: 8 }}>
        <FlatList
          ItemSeparatorComponent={Separator}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            if (!item.title.length) {
              return null;
            }
            return <NewsCard onPress={handleOnPress} item={item} />;
          }}
          data={notices}
          showsVerticalScrollIndicator={false}
          windowSize={3}
        />
      </View>
    </SafeAreaView>
  );
}
