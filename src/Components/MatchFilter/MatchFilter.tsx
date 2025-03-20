import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import { AppDispatch, RootState } from "../../store/store";
import { setFilteredMatches } from "../../store/matchSlice";

export const MatchFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allMatches = useSelector((state: RootState) => state.matches.allMatches);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const handleFilter = (status: string) => {
    setSelectedStatus(status);
    dispatch(setFilteredMatches(status === 'all' ? allMatches : allMatches.filter((match) => match.status === status)));
  };

  return (
    <View style={styles.container}>
      <Picker selectedValue={selectedStatus} onValueChange={handleFilter} style={styles.picker} dropdownIconColor="#fff">
        <Picker.Item label="Все матчи" value="all" />
        <Picker.Item label="Идут" value="Ongoing" />
        <Picker.Item label="Запланированы" value="Scheduled" />
        <Picker.Item label="Завершены" value="Finished" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0E12",
    borderRadius: 4,
    marginBottom: 10,
    borderWidth: 0,
    borderColor: 'transparent',
    maxWidth: 396,
    display: 'flex',
  },
  picker: {
    color: "#fff",
    backgroundColor: "#0B0E12",
    borderWidth: 0,
    borderColor: 'transparent',
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 16,
    height: 74,
    alignItems: 'center',
  },
});
