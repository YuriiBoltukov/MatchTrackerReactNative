import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MatchStatus } from "../../types/types";

type StatusClass = "live" | "waiting" | "finished";

interface CardStatusProps {
  matchStatus: MatchStatus;
}

export const CardStatus: React.FC<CardStatusProps> = ({ matchStatus }) => {
  function resolveStatus(status: MatchStatus): StatusClass {
    switch (status) {
      case MatchStatus.Ongoing:
        return "live";
      case MatchStatus.Scheduled:
        return "waiting";
      case MatchStatus.Finished:
        return "finished";
      default:
        return "waiting";
    }
  }

  const statusClass: StatusClass = resolveStatus(matchStatus);

  return (
    <View style={[styles.status, styles[statusClass]]}>
      <Text style={styles.text}>{matchStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    padding: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
  },
  text: {
    color: "white",
    fontFamily: "Inter",
    fontSize: 12,
  },
  live: {
    backgroundColor: "#43AD28",
  },
  waiting: {
    backgroundColor: "#EB6402",
  },
  finished: {
    backgroundColor: "#EB0237",
  },
});
