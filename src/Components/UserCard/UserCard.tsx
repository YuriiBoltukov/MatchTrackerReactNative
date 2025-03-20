import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Player } from "../../types/types";

export const UserCard: React.FC<{ user: Player }> = ({ user }) => (
  <View style={styles.user}>
    <View style={styles.userPlayer}>
      <ImageBackground
        style={styles.userPlayerAvatar}
        source={require("../../../assets/icons/avatar_global.png")}
        resizeMethod={"resize"}
        resizeMode={"cover"}
      />
      <Text style={styles.playerName}>{user.username}</Text>
    </View>
    <Text style={styles.textContainer}>
      <Text style={styles.text}>Убийств: </Text>
      {user.kills}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    flexShrink: 1,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#101318",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  userPlayer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  userPlayerAvatar: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: "transparent",
    marginRight: 4,
  },
  text: {
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 12 * 1.5,
  },
  playerName: {
    fontWeight: "600",
    color: "#fff",
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  textContainer: {
    fontWeight: "600",
    color: "#fff",
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 14 * 1.5,
    display: "flex",
    gap: 2,
  },
});
