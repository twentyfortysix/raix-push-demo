
// allow send push form client side
Push.allow({
  send: function(userId, notification) {
    return true; // Allow all users to send
  }
});
Push.Configure({
  ios: {
    alert: true,
    badge: true,
    sound: true,
    clearBadge: true
  }
});

Template.row.helpers({
	notificationHistory: function () {
		var query = {};
		if (Session.get("checked")) {
			query = {recievedAt: {$exists: !Session.get("checked")}};
		}
		return NotificationHistory.find(query);
	}
});

Template.list.events({
	"click #push": function () {
		Meteor.call("serverNotification");
	},
	"click #removeHistory": function () {
		Meteor.call("removeHistory");
	},
	"click input[type=checkbox]": function () {
		Session.set("checked", $("input[type=checkbox]").is(":checked"));
	}
});

Meteor.startup(function () {
	Meteor.defer(function () {
		Session.setDefault("checked", $("input[type=checkbox]").is(":checked"));
	});

	if (Meteor.isCordova) {
		window.alert = navigator.notification.alert;
	}

	Push.addListener('message', function(notification) {
		// Called on every message
		console.log(JSON.stringify(notification));

		function alertDismissed() {
			NotificationHistory.update({_id: notification.payload.historyId}, {
				$set: {
					"recievedAt": new Date()
				}
			});
		}
		alert(notification.message, alertDismissed, notification.payload.title, "Ok");
	});
});