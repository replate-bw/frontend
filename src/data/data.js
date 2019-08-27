export default  {
    "users":[
    {
      "name": "Costco", // This is a business
      "contact": {
        "firstName": "John",
        "lastName": "Smith",
        "phone": "(555) 555-5555"
      },
      "address": "111 Miller Drive",
      "email": "s@s.com",
      "accountType": "business",
      "appointments": {
        "08262019": {
          "description": {
            "time": "9:00 PM",
            "quantity": "Estimated quantity of food",
            "type": "Type of food",
            "status": "pending"
          }
        }
      }
    },
    {
      "name": "John Smith", // In the case of a user, this is auto-generated
      "contact": {
        "firstName": "John",
        "lastName": "Smith",
        "phone": "(555) 555-5555"
      },
      "address": "111 Miller Drive",
      "email": "s@s.com",
      "accountType": "volunteer",
      "appointments": {
        "08262019": {
          "description": {
            "time": "9:00 PM",
            "quantity": "Estimated quantity of food",
            "type": "Type of food",
            "status": "pending"
          }
        }
      }
    }
  ]
 }