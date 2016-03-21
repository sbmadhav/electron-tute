const crashReporter = require('crash-reporter');

crashReporter.start({submitURL: 'http://127.0.0.1:9999', companyName:'electron-tute'});

const showCrashReporter = (report) => {
  return "<tr><td>" + report.date + "</td>" +
    "<td>" + report.id + "</td>";
};

window.onload = () => {
    const reporters = crashReporter.getUploadedReports()
        , table = "<table width=50% border=\"1\">\n" +
                "<tr><td><b>Uploaded Date</b></td>" +
                "<td><b>ID</b></td>" +
                "</tr>\n"
        , div = document.getElementById("crash_reporters");
    for (var i = 0; i < reporters.length; ++i) {
      table += showCrashReporter(reporters[i]);
    }
    div.innerHTML = table;
    document.getElementById('crash').onclick = () => {
      process.crash();
    }
};