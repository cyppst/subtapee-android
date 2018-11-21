#!/usr/bin/env node

// This hook will do alot of things, you can take what you want and delete un necessary things.
// It pushes code to git, with version name as branch.
// It adds i and a in branch name to define android and ios.
// It renames the final IPA file with version code.
// It renames the final signed apk file with version code. 
// Hook to increment build number before making build. (https://gist.github.com/yawarsohail/b8d7762e4617a20b6f66fcffe6599920)
// You can see this link, on how I signed my apk using hooks. (https://gist.github.com/yawarsohail/1b2998d5cd860e01193cec86f6329223)
// Added below lines in script part of package.json to make build easy. (I think its prety easy, no need for description).
//    "release": "TARGET=ii ionic build ios --device --release && TARGET=aa ionic build --release android",
//    "release-a": "TARGET=a ionic build --release android",
//    "release-i": "TARGET=i ionic build ios --device --release"
//
// Save hook under `project-root/scripts`
//
// Don't forget to install xml2js using npm if it is not already installed.
// `$ npm install xml2js`
//
// Then add below line in config.xml inside widget.
//ve
//
// Rest I'll be describing in code comments. I'll be changing my project name with imaginary name and might miss in some part.
//
// I am adding this for my self so that I can remember. And it may help others who wants to do same.
//


var fs = require('fs');
var xml2js = require('xml2js');
var exec = require('child_process').exec;
var sys = require('sys');

// Read config.xml, to read version code
fs.readFile('config.xml', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  // Get XML
  var xml = data;

  // XML to Java Script Obj
  xml2js.parseString(xml, function (err, result) {
    if (err) {
      return console.log(err);
    }
    var target = "";

    // Getting target to know below things.
    // 1. If it is executed from release command that I have defined in package,json.
    // 2. To know it it is executed for IOS.
    // 3. To know it it is executed for ANDROID.
    if (process.env.TARGET) {
      target = process.env.TARGET;
    }

    if (target == "a" || target == "aa") {
      // Get JS Obj
      var obj = result;

      if (typeof obj['widget']['$']['version'] === 'undefined') {
        obj['widget']['$']['version'] = "0.0.1";
      }

      var fullVerAND = obj['widget']['$']['version'];

      // Build XML from JS Obj
      var builder = new xml2js.Builder();
      var xml = builder.buildObject(obj);

      fs.rename('platforms/android/build/outputs/apk/android-release.apk', 'platforms/android/build/outputs/apk/Hooks-' + fullVerAND + '.apk', function (err) {
        if (err) console.log('ERROR: ' + err);
        console.log("Build Number Added In APK Name");
      });
      if (target == "a") {
        // create branch with ios name.
        exec('git add --all', puts);
        exec('git commit -m "Commiting release version ' + fullVerAND + ' for Android"', puts);
        exec('git branch rc-a-' + fullVerAND, puts);
        exec('git push origin rc-a-' + fullVerAND, puts);
      }
      else if (target == "aa") {
        // create branch with name of ios and android.
        exec('git add --all', puts);
        exec('git commit -m "Commiting release version ' + fullVerAND + ' for IOS and Android both"', puts);
        exec('git branch rc-i-a-' + fullVerAND, puts);
        exec('git push origin rc-i-a-' + fullVerAND, puts);
      }
    }
    else if (target == "i" || target == "ii") {
      var obj = result;

      if (typeof obj['widget']['$']['version'] === 'undefined') {
        obj['widget']['$']['version'] = "0.0.1";
      }

      var fullVerIOS = obj['widget']['$']['version'];

      // Build XML from JS Obj
      var builder = new xml2js.Builder();
      var xml = builder.buildObject(obj);

      fs.rename('platforms/ios/build/device/Early Bird.ipa', 'platforms/ios/build/device/Hooks-' + fullVerIOS + '.ipa', function (err) {
        if (err) console.log('ERROR: ' + err);
        console.log("Build Number Added In IPA Name");
      });
      if (target == "i") {
        // create branch with ios name.
        exec('git add --all', puts);
        exec('git commit -m "Commiting release version ' + fullVerIOS + ' for IOS"', puts);
        exec('git branch rc-i-' + fullVerIOS, puts);
        exec('git push origin rc-i-' + fullVerIOS, puts);
      }
    }

  });
});

function puts(error, stdout, stderr) {
  console.log(stdout);
}
