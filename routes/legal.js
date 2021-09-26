const express = require('express');
const router = express.Router();

router.get('/privacy', (req, res) => {
    return res.render('./legal/privacy')
  });

  router.get('/cookies', (req, res) => {
    return res.render('./legal/cookies')
  });
  
module.exports = router;