// Admin Dataset Management Script
// Run this script to add data to your dataset

const AdminDatasetManager = require('./backend/scripts/admin-dataset-manager');

const addMyData = async () => {
  const manager = new AdminDatasetManager();
  
  if (!(await manager.connect())) {
    return;
  }

  // Add your custom responses here
  const myResponses = {
    // Business related
    business: {
      "what is our company": "We are Accord AI, a multilingual AI assistant company focused on providing intelligent conversational experiences.",
      "company services": "We provide AI-powered chat services, multilingual support, and intelligent response systems for businesses.",
      "contact us": "You can reach us through our website or email us at contact@accordai.com",
      "business hours": "We operate 24/7 with our AI services, but human support is available Monday to Friday, 9 AM to 6 PM."
    },
    
    // Product specific
    product: {
      "how to use": "Simply type your message or question, and I'll respond in your preferred language. You can also upload files for analysis.",
      "supported languages": "I support Hindi, English, Urdu, Punjabi, Bengali, Tamil, Telugu, Gujarati, Marathi, Kannada, Malayalam, and more.",
      "file upload": "You can upload PDF documents, Word files, and images. I'll analyze the content and provide insights.",
      "voice input": "Click the microphone button to use voice input. Speak your message and it will be converted to text."
    },
    
    // FAQ
    faq: {
      "is it free": "We offer both free and premium plans. Free users get limited messages, while premium users enjoy unlimited access.",
      "data privacy": "Your data privacy is our priority. We don't store personal conversations and follow strict data protection guidelines.",
      "accuracy": "Our AI provides accurate responses based on our trained dataset and advanced language models.",
      "offline mode": "Currently, our service requires internet connection for the best experience."
    },
    
    // Custom greetings
    custom_greetings: {
      "welcome": "Welcome to Accord AI! I'm here to assist you in multiple languages. How can I help you today?",
      "first time": "It looks like you're new here! I'm your multilingual AI assistant. Feel free to ask me anything or try speaking in your preferred language.",
      "good to see you": "Good to see you again! What would you like to know today?"
    }
  };

  // Add the responses
  const result = await manager.bulkAdd(myResponses);
  
  // Show final statistics
  await manager.getStats();
  
  await manager.disconnect();
  
  console.log('\n🎉 Your custom data has been added to the dataset!');
  console.log('Users can now get these responses when they ask relevant questions.');
};

// Run the script
addMyData().catch(console.error);