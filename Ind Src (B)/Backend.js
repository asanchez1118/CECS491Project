/* Following Stream API Tutorial */
/* Generate client tokens. */
/* In case it cannot be seen on the app, some demo clips were included. */

let client = stream.connect('YOUR_API_KEY', 'API_KEY_SECRET');
let userToken = client.createUserToken("user-one");

/* Server relations. */
let feed = client.feed('timeline', 'user-one');
feed.addActivity({ /* A picture post. */
    'actor': client.user('user-one').ref(),
    'verb': 'post',
    'object': 'Caption',
    'attachments': {
        'og': {
            'title': '',
            'description': '',
            'url': '',
            'images': [
                {
                    'image': ''
                }
            ]
        }
    }
})

/* User methods. */
const client = stream.connect('YOUR_API_KEY', 'API_KEY_SECRET', 'APP_ID');
const oneFeed = client.feed('user', 'user-one', 'TOKEN');

/* Activities! */
oneFeed.addActivity({
  actor: 'user-one', 
  tweet: 'Hello!', 
  verb: 'post', 
  object: 1
});

oneFeed.addActivity({
	actor: 'user-one',
	verb: 'watch',
	object: 1,
	youtube_id: '',
	video_title: '',
});

/* User to user interactions: follow and callback. */
const twoFeed = client.feed('timeline', 'user-two', 'TOKEN');
/* 'timeline' | 'timeline_aggregated' */
twoFeed.follow('user', 'user-one');
twoFeed.get({'limit': 5})
	.then(callback);
	
/* Notifications */
const notify = oneFeed.subscribe(function(data) {
	alert("An update!");
	console.log("Updated!", data);
});
subscription.then(function() {
	oneFeed.addActivity(
	{actor:'user-one', verb: 'post', object: 2, caption: 'Wow!'});
});
