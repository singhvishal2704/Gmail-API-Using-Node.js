# Gmail-API-Using-Node.js

## From github
### 1) Clone the repository, install node packages  and verify routes locally

``` 
//on local
git clone git@github.com:singhvishal2704/Gmail-API-Using-Node.js.git
cd Gmail-API-Using-Node.js
npm install
npm start
```

Open your local browser and verify the Gmail-API-Using-Node.js is working by accessing:     
`http://localhost:5000/api/mail/     GET Request`   
`http://localhost:5000/api/mail/     POST Request`   


```
  POST Request Structure
  
  {
        "name": "Sender Name",
        "from": "Not Required",
        "to": "Receiver Email Address",
        "subject": "Email Subject",
        "text": "Email Content",
        "html": "Only for Mail with HTML content"
   }
```

**Note**  
` CLIENT_ID, CLIENT_SECRET and REFRESH_TOKEN has to be generated for new user from google cloud developer console.
`   
   
