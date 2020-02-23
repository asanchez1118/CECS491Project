import React from 'react';
import { StreamApp } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class Feed extends React.Component {
  render() {
    return(
      <StreamApp
        apiKey = ""
        appId = ""
        token = "">
        (/*)
        let client = stream.connect('apiKey', 'apiKeySecret');
        let userToken = client.createUserToken("user-one");
        (*/)
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup = "timeline"
          userId = "user-one" />
        <FlatFeed
          options = { {reactions: { recent: true } } }
          notify
          Activity = { (props) =>
            <Activity {...props}
              Footer = {() => (
                <div style = { {padding: '8px 16px'} }>
                  <LikeButton {...props} />
                  <CommentField
                    activity = {props.activity}
                    onAddReaction = {props.onAddReaction} />
                  <CommentList activityId = {props.activity.id} />
                </div>
              )}
            />
          }
        />
      </StreamApp>
    );
  }
}

export default Feed;

(/*)
let client = stream.connect('apiKey', 'token');
let feed = client.feed('timeline', 'user-one');
feed.addActivity({
  'actor': client.user('user-one').ref(),
  'verb': 'post',
  'object': 'A great picture!',
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
(*/)
