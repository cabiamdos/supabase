import 'package:supabase/supabase.dart';

void main() {
  // Initialize Supabase client
  final supabase = SupabaseClient('http://192.168.0.107:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE');

  // Assuming you have already authenticated the user and obtained the session
  // Retrieve the session for the authenticated user
  final session = supabase.auth.session();

  // Access session information
  final accessToken = session.accessToken;
  final refreshToken = session.refreshToken;
  final expiresAt = session.expiresAt;
  final expiresIn = session.expiresIn;

  // Use the tokens or their expiry details as needed
  print('Access Token: $accessToken');
  print('Refresh Token: $refreshToken');
  print('Expires At: $expiresAt');
  print('Expires In: $expiresIn');
}
