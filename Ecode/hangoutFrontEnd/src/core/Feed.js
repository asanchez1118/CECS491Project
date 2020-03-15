import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

var foo = require('./Temp')

class Feed extends React.Component {
  render() {
    return(
      <StreamApp
        apiKey = {temp.a}
        appId = {temp.b}
        token = {temp.c}
      >
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
