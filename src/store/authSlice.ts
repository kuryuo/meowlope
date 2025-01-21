import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginApi, register as registerApi } from '../services/api';
import { setTokens, removeTokens } from '../services/token';

 
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

 
const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

 

 
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginApi(credentials.username, credentials.password);
      const { access, refresh } = response.data;
      setTokens(access.token, refresh.token);  
      return { token: access.token, isAuthenticated: true };
    } catch (error) {
      console.error('Ошибка при логине:', error);
      return rejectWithValue('Ошибка при входе');
    }
  }
);

 
export const registerAsync = createAsyncThunk(
  'auth/register',
  async (data: { username: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await registerApi(data.username, data.email, data.password);
      const { access, refresh } = response.data;
      setTokens(access.token, refresh.token);  
      return { token: access.token, isAuthenticated: true };
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
      return rejectWithValue('Ошибка при регистрации');
    }
  }
);

 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      removeTokens();  
    },
  },
  extraReducers: (builder) => {
     
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
       
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
