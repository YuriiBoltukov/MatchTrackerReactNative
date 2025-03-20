import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TeamCard } from '../TeamCard/TeamCard';
import { Match } from '../../types/types';

export const MatchDescription: React.FC<{ match: Match }> = ({ match: { awayTeam, homeTeam } }) => {
  return (
    <View style={styles.description}>
      <TeamCard team={awayTeam} />
      <TeamCard team={homeTeam} />
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
});
