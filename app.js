const express = require('express');
const app = express();
const port = 3000;

var fs = require("fs");

app.get('/listUsers', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     console.log( data );
     res.end( data );
  });
})

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

// app.get('/', (req, res) => {
//   res.send(`
//     <html>
//       <head>
//         <style>
//           @font-face {
//             font-family: "Sora";
//             src: url("https://example.com/fonts/sora/Sora-SemiBold.ttf");
//             font-style: normal;
//             font-weight: 600;
//             font-display: swap;
//           }
//           /* The rest of your @font-face rules... */

//           .btn-primary {
//             background-color: green;
//             color: white;
//             border-radius: 0.25rem;
//             height: 2.25rem;
//           }
//           /* The rest of your CSS rules... */

//           body {
//             background-color: #10203A;
//             color: #fff;
//             font-family: Sora, Arial, sans-serif;
//             text-align: center;
//             height: 100vh;
//             margin: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//           }
//         </style>
//       </head>
//       <body>
//         <h1>Welcome to Back4app Containers</h1>
//       </body>
//     </html>
//   `);
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });
