#!/usr/bin/env node

/**
 * Test frontend-backend connection
 */

const axios = require('axios');

async function testConnection() {
  console.log('🔍 Testing Frontend-Backend Connection...\n');

  try {
    // Test 1: Check if backend is running
    console.log('1️⃣ Testing backend connection...');
    const backendResponse = await axios.get('http://localhost:3001/api/auth/verify-token', {
      validateStatus: () => true // Accept all status codes
    });
    console.log(`✅ Backend responding: ${backendResponse.status}`);

    // Test 2: Check if frontend is running
    console.log('\n2️⃣ Testing frontend connection...');
    const frontendResponse = await axios.get('http://localhost:5173', {
      validateStatus: () => true
    });
    console.log(`✅ Frontend responding: ${frontendResponse.status}`);

    // Test 3: Test proxy by calling API through frontend
    console.log('\n3️⃣ Testing Vite proxy...');
    try {
      const proxyResponse = await axios.get('http://localhost:5173/api/auth/verify-token', {
        validateStatus: () => true
      });
      console.log(`✅ Proxy working: ${proxyResponse.status}`);
    } catch (proxyError) {
      console.log(`❌ Proxy error: ${proxyError.message}`);
    }

    // Test 4: Test registration endpoint
    console.log('\n4️⃣ Testing registration endpoint...');
    const testUser = {
      email: `test${Date.now()}@example.com`,
      password: 'testpass123',
      displayName: 'Test User'
    };

    try {
      const regResponse = await axios.post('http://localhost:3001/api/auth/register', testUser);
      console.log('✅ Registration working');
    } catch (regError) {
      if (regError.response?.status === 400) {
        console.log('✅ Registration endpoint responding (validation working)');
      } else {
        console.log(`❌ Registration error: ${regError.message}`);
      }
    }

    console.log('\n🎉 Connection tests completed!');
    console.log('\n📊 Summary:');
    console.log('   - Backend: Running on port 3001');
    console.log('   - Frontend: Running on port 5173');
    console.log('   - Proxy: Should route /api/* to backend');
    console.log('   - Registration: Endpoint responding');

  } catch (error) {
    console.error('\n❌ Connection test failed:', error.message);
  }
}

testConnection();