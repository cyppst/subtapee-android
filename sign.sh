#keytool -genkey -v -keystore subtapee.keystore -alias subtapee -keyalg RSA -keysize 2048 -validity 20000
rm subtap*.apk -f
jarsigner -verbose  -tsa http://timestamp.comodoca.com  -sigalg SHA1withRSA -digestalg SHA1 -keystore src-cordova/platforms/android/app/build/outputs/apk/release/subtapee.keystore src-cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk subtapee

zipalign -v 4 src-cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk subtapee.apk
