Meteor.methods({
	serverNotification: function () {
		var last = NotificationHistory.findOne({}, {sort: {addedAt: -1}});
		var badge = 1;
		if (last != null) {
			badge = last.badge + 1;
		}

		NotificationHistory.insert({
			badge: badge,
			addedAt: new Date()
		}, function (error, result) {
			if (!error) {
				Push.send({
					from: 'push',
					title: 'Hello World',
					text: 'This notification has been sent from the SERVER',
					badge: badge,
					payload: {
						title: 'Hello World',
						historyId: result
					},
					query: {}
				});
			}
		});
	},
	removeHistory: function () {
		NotificationHistory.remove({}, function (error) {
			if (!error) {
				console.log("All history removed");
			}
		});
	}
});
Meteor.startup(() =>{
	
	Push.debug=true;

	Push.Configure({
	  // "apn": {
	  //   "passphrase": "",
	  //   "certData"  : Assets.getText("ios/apn-production/PushChatCert.pem"),
	  //   "certKey"   : Assets.getText("ios/apn-production/PushChatKey.pem"),
	  //   "gateway"   : 'gateway.push.apple.com',
	  // },
	  "apn-dev": {
	    "passphrase": "",
	    "certData"  : Assets.getText("ios/apn-development/meteorApp-cert-dev.pem"),
	    "certKey"   : Assets.getText("ios/apn-development/meteorApp-key-dev.pem"),
	    "gateway"   : "gateway.sandbox.push.apple.com"
	  },
	  // "gcm": {
	  //   "apiKey": "Your long Google API key",
	  //   "projectNumber": 
	  // },
	  "production": false,
	  "badge": true,
	  "sound": true,
	  "alert": true,
	  "vibrate": true
	});
});