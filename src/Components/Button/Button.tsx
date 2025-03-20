import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { fetchMatches } from '../../services/api';
import { Refresh } from '../../../assets/icons/Refresh';

export function Button() {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.matches.loading);

  return (
    <TouchableOpacity
      style={[styles.button, loading && styles.buttonLoading]}
      disabled={loading}
      onPress={() => dispatch(fetchMatches())}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          <Text style={styles.text}>Обновить</Text>
          <Refresh />
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginBottom: 32,
    gap: 10,
    backgroundColor: '#eb0237',
    padding: 10,
    height: 56,
    width: 396,
    borderRadius: 4,
  },
  buttonLoading: {
    backgroundColor: '#6c757d',
  },
  text: {
    color: '#fff', // colors.$text
    fontSize: 18,
    fontWeight: '600',
  },
});
