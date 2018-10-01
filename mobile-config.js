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
