const express = require("express");
const { mailSender, getMail } = require("../controlllers/mailController");
const router = express.Router();

/*  
    GET request for Checking API status and POST request for sending mail

    Required fields for post request:
    
    {
        "name": "Sender Name",
        "from": "Not Required",
        "to": "Receiver Email Address",
        "subject": "Email Subject",
        "text": "Email Content",
        "html": "Only for Mail with HTML content"
    }
*/
router.route("/").get(getMail).post(mailSender);

module.exports = router;
