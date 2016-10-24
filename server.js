const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    const redirectUrl = `http://${req.hostname}${req.url}`
    console.log('Redirecting to', redirectUrl);
    res.redirect(redirectUrl)
  } else {
    next()
  }
})
app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is running on port ' + port);
});
