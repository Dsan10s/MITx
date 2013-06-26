var url = require('url'),
    sys = require("sys"),
    my_http = require("http");




    var getXML = function(path) {
        sys.puts("getXML called")
        console.log("getXML called");
        var http = require('http');

        var options = {
            host: 'www.dictionaryapi.com',
            path: '/api/v1/references/learners/xml/test?key=588b5e3b-251e-40e8-bdff-f465db5331c3',
            method: 'GET'
        };

        callback = function(response) {
            console.log("callBack called");
            var str = ''
            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                console.log(str);
            });
        }

        var req = http.request(options, callback);
        //This is the data we are posting, it needs to be a string or a buffer
        req.write("hello world!");
        req.end();
    }

my_http.createServer(function(request,response){
  sys.puts("I got kicked");

  response.writeHeader(200, {"Content-Type": "text/plain",
            'Access-Control-Allow-Origin':'*'
      });

  response.write("Hello World");
  getXML();
  response.end();
    }).listen(8080);
sys.puts("Server Running on 8080");