import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MatchItem } from "../MatchItem/MatchItem";
import { Match } from "../../types/types";

export const MatchList: React.FC<{ matches: Match[] }> = ({ matches }) => (
  <View style={styles.matchList}>
    <FlatList
      data={matches}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => <MatchItem match={item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  matchList: {
    flex: 1,
    padding: 10,
    backgroundColor: "#06080C",
  },
});
