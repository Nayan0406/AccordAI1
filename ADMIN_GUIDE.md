# 🔧 Admin Dataset Management Guide

## 🚫 User Restrictions Applied

### ✅ **Changes Made:**
1. **Dataset Management Button** - Only visible to admin@accordai.com
2. **API Routes Protected** - All dataset modification routes require admin privileges
3. **Admin-Only Access** - Regular users cannot add/edit/delete dataset responses

### 👤 **Admin Access:**
- Only users with email `admin@accordai.com` can access dataset management
- To add more admin emails, edit `backend/routes/dataset.js` line with `adminEmails` array

## 🛠️ **Admin Tools Available**

### 1. **Interactive CLI Manager**
```bash
cd backend/scripts
node admin-dataset-manager.js
```

**Commands available:**
- `add` - Add single response
- `update` - Update existing response  
- `delete` - Delete response
- `search` - Search in dataset
- `stats` - View statistics
- `import` - Import from CSV
- `bulk` - Bulk add responses
- `quit` - Exit

### 2. **Quick Data Addition Script**
```bash
node admin-add-data.js
```
- Pre-configured with sample business/product data
- Edit the script to add your own responses
- Automatically connects to database and adds data

### 3. **CSV Import**
```bash
cd backend/scripts
node admin-dataset-manager.js
# Then use 'import' command and provide CSV file path
```

**CSV Format:**
```csv
category,key,response
business,what is our company,We are Accord AI...
product,how to use,Simply type your message...
```

## 📁 **Files for Admin Use**

### 1. **admin-add-data.js** (Root directory)
- Quick script to add your custom data
- Edit the `myResponses` object with your data
- Run with: `node admin-add-data.js`

### 2. **dataset-template.csv** (Root directory)  
- Template CSV file with sample data
- Use this format for bulk imports
- Edit with your own data

### 3. **backend/scripts/admin-dataset-manager.js**
- Full-featured admin tool
- Interactive CLI interface
- All dataset operations available

## 🎯 **How to Add Your Data**

### Method 1: Edit admin-add-data.js
```javascript
const myResponses = {
  business: {
    "your question": "Your response here",
    "another question": "Another response"
  },
  product: {
    "how does it work": "Detailed explanation..."
  }
};
```

### Method 2: Create CSV file
```csv
category,key,response
business,company info,Your company information here
product,features,List of features and benefits
support,contact,How to contact support team
```

### Method 3: Interactive CLI
```bash
node backend/scripts/admin-dataset-manager.js
> add
Category: business
Key: company vision
Response: Our vision is to make AI accessible to everyone
```

## 📊 **Monitoring Usage**

### View Statistics:
```bash
node backend/scripts/admin-dataset-manager.js
> stats
```

### Search Responses:
```bash
> search
Search term: company
```

## 🔒 **Security Features**

1. **Admin Email Check** - Only specific emails can access dataset management
2. **Authentication Required** - Must be logged in to access admin features  
3. **API Protection** - All modification endpoints protected
4. **Audit Trail** - All changes tracked with timestamps

## 🚀 **Quick Start for Admins**

1. **Add your admin email** to the system:
   ```javascript
   // In backend/routes/dataset.js
   const adminEmails = ['admin@accordai.com', 'your-email@example.com'];
   ```

2. **Add your data** using the quick script:
   ```bash
   node admin-add-data.js
   ```

3. **Test the responses** by chatting with the AI

4. **Monitor usage** with the stats command

## 📝 **Best Practices**

1. **Organize by Categories** - Group related responses
2. **Use Clear Keys** - Make trigger phrases natural
3. **Test Responses** - Verify they work as expected
4. **Regular Backups** - Export data periodically
5. **Monitor Usage** - Check which responses are used most

## 🆘 **Troubleshooting**

### Database Connection Issues:
```bash
cd backend/scripts
node check-mongodb.js
```

### Permission Denied:
- Check if your email is in the admin list
- Ensure you're logged in as admin user

### Import Errors:
- Verify CSV format matches template
- Check for special characters in responses
- Ensure MongoDB is running

---

**Remember:** Only admins can modify the dataset. Regular users can only chat and receive responses from your curated dataset! 🔒