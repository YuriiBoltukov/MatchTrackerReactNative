import axios                                from "axios";
import { createAsyncThunk }     from '@reduxjs/toolkit';
import { setMatches } from '../store/matchSlice';
import { Match }                            from '../types/types';


const baseURL = "https://app.ftoyd.com/fronttemp-service";


export const fetchMatches = createAsyncThunk<Match[], void>(
  'matches/fetchMatches',
  async (_, { dispatch }) => {
    const response = await axios.get(`${baseURL}/fronttemp`);
    dispatch(setMatches(response.data.data.matches));
    return response.data.data.matches;
  }
);
