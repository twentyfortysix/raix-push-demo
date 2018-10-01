// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'test.jlbjlt',
  version: "0.1",
  name: 'test',
  description: 'test',
  author: '2046@2046.cz',
  email: '2046@2046.cz',
  website: 'https://test.net'
});


// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xFF000000');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/
App.setPreference('SplashScreenDelay', '2000');
App.setPreference('FadeSplashScreenDuration', '1000');

App.accessRule('*');
App.accessRule('*', { type: 'navigation' });
// App.accessRule('*.google.com/*');
// App.accessRule('*.google.com/*', { type: 'navigation' });
// App.accessRule('*/google.com/*');
// App.accessRule('*.google.cz/*');
// App.accessRule('*.google.cz/*', { type: 'navigation' });
// App.accessRule('*/google.cz/*');
// App.accessRule('*.googlevideo.com/*');
// App.accessRule('*.doubleclick.net/*');
// App.accessRule('*.googleapis.com/*');
// App.accessRule('*.ytimg.com/*');
// App.accessRule('*.gstatic.com/*');
// App.accessRule('https://www.youtube.com/*');
// App.accessRule('https://youtu.be/*');
// App.accessRule('https://www.google-analytics.com/*');

// App.accessRule('*.jlbjlt.com/*', { type: 'intent' });
// App.accessRule('*.jlbjlt.com/*', { type: 'network' });
// App.accessRule('*.jlbjlt.com/*', { type: 'navigation' });
// App.accessRule('*/jlbjlt.net/*', { type: 'intent' });
// App.accessRule('*/jlbjlt.net/*', { type: 'network' });
// App.accessRule('*/jlbjlt.net/*', { type: 'navigation' });
// // 
// App.accessRule('*.multiplace.org:*', { type: 'intent' });
// App.accessRule('*.multiplace.org:*', { type: 'network' });
// App.accessRule('*.multiplace.org:*', { type: 'navigation' });


// Pass preferences for a particular PhoneGap/Cordova plugin.
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1234567890',
//   API_KEY: 'supersecretapikey'
// });

// Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// generated config.xml. 'Universal Links' is shown as an example here.
// App.appendToConfig(`
//   <universal-links>
//     <host name="localhost:3000" />
//   </universal-links>
// `);
// App.appendToConfig('<content src="https://jlbjlt.net" />');

// App.configurePlugin('phonegap-plugin-push', {
//   SENDER_ID: "692286414471"
// });
// allow push notifications by default in xcode
// App.appendToConfig('<platform name="ios"><config-file target="*-Debug.plist" parent="aps-environment"><string>development</string></config-file><config-file target="*-Release.plist" parent="aps-environment"><string>production</string></config-file></platform>');
// App.appendToConfig('<feature name="CDVWKWebViewEngine"><param name="ios-package" value="CDVWKWebViewEngine" /></feature><preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />');