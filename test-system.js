const axios = require('axios');

const testSystem = async () => {
  console.log('🧪 Testing Complete System...\n');
  
  const backendUrl = 'http://localhost:3001/api';
  const frontendUrl = 'http://localhost:5173';
  
  // Test 1: Backend Health Check
  console.log('1. Testing Backend Health...');
  try {
    const healthResponse = await axios.get(`${backendUrl}/health`);
    if (healthResponse.data.success) {
      console.log('   ✅ Backend is running and healthy');
    } else {
      console.log('   ❌ Backend health check failed');
    }
  } catch (error) {
    console.log('   ❌ Backend is not accessible:', error.message);
    return;
  }
  
  // Test 2: Dataset API
  console.log('\n2. Testing Dataset API...');
  try {
    const statsResponse = await axios.get(`${backendUrl}/dataset/stats`);
    if (statsResponse.data.success) {
      const stats = statsResponse.data.stats;
      console.log(`   ✅ Dataset API working - ${stats.totalResponses} responses in ${stats.totalCategories} categories`);
    } else {
      console.log('   ❌ Dataset API failed');
    }
  } catch (error) {
    console.log('   ❌ Dataset API error:', error.message);
  }
  
  // Test 3: AI Chat API (Dataset Response)
  console.log('\n3. Testing AI Chat with Dataset Response...');
  try {
    const chatResponse = await axios.post(`${backendUrl}/ai/chat-anonymous`, {
      message: 'hello',
      isAnonymous: true
    });
    
    if (chatResponse.data.success) {
      console.log(`   ✅ Chat API working`);
      console.log(`   Source: ${chatResponse.data.source}`);
      console.log(`   Language: ${chatResponse.data.detectedLanguage || 'unknown'}`);
      console.log(`   Response: "${chatResponse.data.response.substring(0, 50)}..."`);
    } else {
      console.log('   ❌ Chat API failed:', chatResponse.data.message);
    }
  } catch (error) {
    console.log('   ❌ Chat API error:', error.message);
  }
  
  // Test 4: AI Chat API (Should go to Gemini)
  console.log('\n4. Testing AI Chat with Gemini API...');
  try {
    const geminiResponse = await axios.post(`${backendUrl}/ai/chat-anonymous`, {
      message: 'What is the capital of France?',
      isAnonymous: true
    });
    
    if (geminiResponse.data.success) {
      console.log(`   ✅ Gemini API integration working`);
      console.log(`   Source: ${geminiResponse.data.source}`);
      console.log(`   Response: "${geminiResponse.data.response.substring(0, 50)}..."`);
    } else {
      console.log('   ❌ Gemini API failed:', geminiResponse.data.message);
    }
  } catch (error) {
    console.log('   ❌ Gemini API error:', error.message);
  }
  
  // Test 5: Multilingual Support
  console.log('\n5. Testing Multilingual Support...');
  const multilingualTests = [
    { message: 'namaste', expectedLang: 'hindi' },
    { message: 'assalam alaikum', expectedLang: 'urdu' },
    { message: 'hello', expectedLang: 'english' }
  ];
  
  for (const test of multilingualTests) {
    try {
      const response = await axios.post(`${backendUrl}/ai/chat-anonymous`, {
        message: test.message,
        isAnonymous: true
      });
      
      if (response.data.success) {
        const detectedLang = response.data.detectedLanguage;
        if (detectedLang === test.expectedLang) {
          console.log(`   ✅ "${test.message}" → ${detectedLang} (correct)`);
        } else {
          console.log(`   ⚠️ "${test.message}" → ${detectedLang} (expected ${test.expectedLang})`);
        }
      }
    } catch (error) {
      console.log(`   ❌ "${test.message}" → Error: ${error.message}`);
    }
  }
  
  console.log('\n🎉 System testing completed!');
  console.log('\n📋 Summary:');
  console.log('   - Backend running on http://localhost:3001');
  console.log('   - Frontend should be on http://localhost:5173');
  console.log('   - MongoDB dataset with multilingual support');
  console.log('   - Gemini API integration for unknown queries');
  console.log('   - Language detection and appropriate responses');
};

// Run the test
testSystem().catch(console.error);