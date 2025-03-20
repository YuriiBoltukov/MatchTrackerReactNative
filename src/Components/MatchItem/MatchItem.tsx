import React, { useEffect, useState }               from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Match } from '../../types/types';
import { CardStatus } from '../CardStatus/CardStatus';
import { MatchDescription } from '../MatchDescription/MatchDescription';
import { AnimatedWrapper }                          from '../AnimatedWrapper/AnimatedWrapper';
import { ArrowDown }                                from '../../../assets/icons/ArrowDown';
import { TeamIcon }                                 from '../../../assets/icons/TeamIcon';

interface MatchItemProps {
  match: Match;
}

export const MatchItem: React.FC<MatchItemProps> = ({ match }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemSection}>
        <View style={styles.itemSectionTeam}>
          <TeamIcon />
          <Text style={styles.text}>{match.awayTeam.name}</Text>
        </View>
        <View style={styles.itemSectionResult}>
          <View style={styles.resultScore}>
            <AnimatedWrapper value={match.awayScore} animationType="slide" duration={300}>
              <Text style={styles.scoreText}>{match.awayScore}</Text>
            </AnimatedWrapper>

            <Text style={styles.scoreText}> : </Text>

            <AnimatedWrapper value={match.homeScore} animationType="slide" duration={300}>
              <Text style={styles.scoreText}>{match.homeScore}</Text>
            </AnimatedWrapper>
          </View>
          <CardStatus matchStatus={match.status} />
          <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.itemArrow}>
            <ArrowDown />
          </TouchableOpacity>
        </View>
        <View style={styles.itemSectionRight}>
          <View style={styles.itemSectionTeam}>
            <Text style={styles.text}>{match.homeTeam.name}</Text>
            <TeamIcon />
          </View>
        </View>
      </View>
      {visible && <MatchDescription match={match} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#0B0E12',
    borderRadius: 8,
    borderWidth: 0,
  },
  itemSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemSectionTeam: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemSectionResult: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemSectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemArrow: {
    padding: 10,
  },
  scoreText: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 500,
  },
  text: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 500
  },
  resultScore: {
    display: 'flex',
    flexDirection: 'row',
  }
});
