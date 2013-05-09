
var express = require("express");
var app = express();

function get_data() {
  var vertices = [
      [0, 0],
      [100, 0],
      [100, 100],
      [0, 100]
  ];

  var buf = new Buffer(vertices.length * 2);

  for(var i = 0; i < vertices.length; ++i) {
    var v = vertices[i];
    buf.writeUInt8(v[0], 2*i + 0);
    buf.writeUInt8(v[1], 2*i + 1);
  }
  return buf
}

app.get('/test', function(req, res) {
  var data = get_data();
  res.send(data);
});

app.get('/', function(req, res) {
  res.sendfile('test.html');
});

app.listen(8080)
