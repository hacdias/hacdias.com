var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');

var httpsRequest = (url, callback) => {
    https.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            callback(body);
        });
    }).on('error', function(e) {
        return false;
    });
}


/* GET INSTAGRAM PICTURES */
var token = process.env.INSTAGRAM_ACCESS_TOKEN;
var url = "https://api.instagram.com/v1/users/self/media/recent?access_token=";

httpsRequest(url + token, function(json) {
  json = JSON.parse(json);
  var data = [];

  for (info of json.data) {
    data.push({
      url : info.images.standard_resolution.url,
      link : info.link,
      caption : (info.caption != null) ? info.caption.text : ""
    });
  }

 fs.writeFile("data/instagram.json", JSON.stringify(data));
});

/* Github Calendar */
var username = "hacdias";
var url = "https://github.com/" + username;

var fetchCalendar = () => httpsRequest(url, (body) => {
  var $ = cheerio.load(body);
  var cal = $("#contributions-calendar");
  $("#contributions-calendar .left.text-muted").html(`Summary of pull requests, issues opened, and commits made by <a href="https://github.com/${username}" target="blank">@${username}</a>`);

  if (cal.find("include-fragment").length) {
    setTimeout(fetchCalendar, 500);
  } else {
    var h = $('.js-calendar-graph-svg').attr('height');
    var w = $('.js-calendar-graph-svg').attr('width');
    $('.js-calendar-graph-svg').attr('viewBox', '0 0 ' + w + ' ' + h);
    fs.writeFile("layouts/partials/github.html", $("#contributions-calendar").html());
  }
});

fetchCalendar();
