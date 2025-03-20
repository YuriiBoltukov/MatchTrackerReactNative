import React, { useEffect, useState } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { MatchList } from "../MatchList/MatchList";
import { fetchMatches } from "../../services/api";

export const MatchTracker: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredMatches, allMatches } = useSelector(
    (state: RootState) => state.matches,
  );

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <MatchList matches={filteredMatches} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#06080C",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
});
