const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient('http://192.168.0.107:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE');

async function main(name) {
    let globalResponse;
    if (name == 'email'){
      // Authenticate a specific user (e.g., with email/password)
      console.log('Login in with Email');
      globalResponse = await supabase.auth.signInWithPassword({
          email: 'alien@alien.com',
          password: 'alien',
      });
    } else if (name == 'provider') {
      // Auth user with discord provider
      console.log('Login in with Discord');
      globalResponse = await supabase.auth.signInWithOAuth({
        provider: 'discord',
      })
    }
    console.log(globalResponse)
    const {data, error} = globalResponse;

    if (error) {
        console.error('Error:', error.message);
        return;
    }

    // Access session information
    const accessToken = data.session.access_token;
    const refreshToken = data.session.refresh_token;
    const expiresAt = data.session.expires_at;
    const expiresIn = data.session.expires_in;

    // Use the tokens or their expiry details as needed
    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);
    console.log('Expires At:', expiresAt);
    console.log('Expires In:', expiresIn);
    console.log('\n\n ### The right format ### \n\n')
    console.log(`appflowy://login-callback?access_token=${accessToken}&expires_at=${expiresAt}&expires_in=${expiresIn}&refresh_token=${refreshToken}&token_type=Bearer`)

}

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question and wait for user input
rl.question('Login with email or provider (email/provider)? ', async (name) => {
  console.log(`Login in with ${name}`);
  rl.close();
  await main(name);
});

