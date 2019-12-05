/*
Stream learning and testing code (feed).
*/
import React from 'react';
import { StreamApp, NotificationDropdown } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class App extends React.Component {
  render () {
	return (
	  <StreamApp
		apiKey=//sensitive information
		appId=//sensitive information
		token=//sensitive information
	  >
		<NotificationDropdown notify />
		<StatusUpdateForm
		  feedGroup="timeline"
		  userId="user-one" />
		<FlatFeed
		  options={ {reactions: { recent: true } } }
		  notify
		  Activity={(props) =>
			  <Activity {...props}
				Footer={() => (
				  <div style={ {padding: '8px 16px'} }>
					<LikeButton {...props} />
					<CommentField
					  activity={props.activity}
					  onAddReaction={props.onAddReaction} />
					<CommentList activityId={props.activity.id} />
				  </div>
				)}
			  />
			}
		  />
	  </StreamApp>
	);
  }
}

export default App;