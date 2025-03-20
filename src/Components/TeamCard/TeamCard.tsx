import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserCard } from "../UserCard/UserCard";
import { Player, Team } from "../../types/types";

export const TeamCard: React.FC<{ team: Team }> = ({ team }) => (
  <View style={styles.card}>
    <View style={styles.playerContainer}>
      {team.players.map((player) => (
        <UserCard user={player} key={player.username} />
      ))}
    </View>
    <View style={styles.cardTeam}>
      <Text style={styles.cardTeamPoints}>
        <Text style={styles.text}>Points:</Text> {team.points}
      </Text>
      <Text style={styles.cardTeamPoints}>
        <Text style={styles.text}>Место:</Text> {team.place}
      </Text>
      <Text style={styles.cardTeamPoints}>
        <Text style={styles.text}>Всего убийств:</Text>{" "}
        {team.players.reduce((acc, player) => acc + player.kills, 0)}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#0B0E12",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTeam: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#101318",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 4,
  },
  cardTeamPoints: {
    marginBottom: 5,
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "Inter",
    lineHeight: 14 * 1.5,
    fontSize: 14,
    fontWeight: "500",
  },
  text: {
    fontWeight: "400",
    color: "#FAFAFA",
    fontFamily: "Inter",
    lineHeight: 12 * 1.5,
    fontSize: 12,
    alignItems: "center",
  },
  playerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 8,
  },
});
