This is a test of Raix:push implementation (https://github.com/raix/push) a modified old version of obsolete https://github.com/elvismercado/meteor-raix-push-demo

The app runs on local and runs on remote ios device.
The app asks for notification permission.
Server is able to send send notification but it is never delivered to ios device (even to unfocused app).

=Basic setup=

Compiled on/with:
Mac OSX
Meteor 1.7.1-beta.14
Xcode Version 9.2 (9C40b)

the config is done via Push.Configure (not in config.push.json)


cordova plugins:
cordova-plugin-device@1.1.6
phonegap-plugin-push@2.1.0
(I know the latest raix:push uses 2.2.3 installed as npm package but it never worked for me)

Certificates are not part of the test package
(mine worked and tested based on :https://medium.com/@acarabott/meteor-native-ios-push-notifications-heroku-raix-push-cordova-213f486c4e6d)

server log after notification push:
Push: Sent message "Hello World" to 1 ios apps 0 android apps
I20181001-20:53:58.129(2)? Push, GUIDE: The "Push.appCollection" - No GCM clients have registred on the server yet...
I20181001-20:54:58.147(2)? Push: Send message "Hello World" via query {}
I20181001-20:54:58.148(2)? send to token { apn: 'c78c10dcffd1830872002f08a8b1988648b5fa8148428bc941c32895b68ad48e' }
I20181001-20:54:58.148(2)? Push: Sent message "Hello World" to 1 ios apps 0 android apps
I20181001-20:54:58.149(2)? Push, GUIDE: The "Push.appCollection" - No GCM clients have registred on the server yet...

=the problem=
The push notifications are not delivered on iso device (I have not tested the Android in this test version)
