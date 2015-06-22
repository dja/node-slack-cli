# node-slack-cli

[![npm version](https://badge.fury.io/js/node-slack-cli.svg)](http://badge.fury.io/js/node-slack-cli)

Send messages to [slack.com](https://slack.com/) from command line with nodejs.

## Install

    npm install node-slack-cli -g

## Environment variables

To send to [slack.com](https://slack.com/) you need set the SLACK TOKEN as environment variable

    export SLACK_TOKEN="slack-token"

You can get the Slack token from [https://api.slack.com/web#auth](https://api.slack.com/web#auth)

You can also set a default username by setting the `SLACK_USERNAME` environment variable

   export SLACK_USERNAME="Your Name On Slack"

## Usage

    slack -c slackChannelName -m "message to send"
    
The slackChannelName must include a hash symbol if it is a group or channel (ex: `"#general"`). To DM someone you must use 
the room ID for the DM conversation. You can find the room ID in the archive URL for a conversation.
 

Set a username (overrides `SLACK_USERNAME`)

    slack -c slackChannelName -m "message to send" -u myUsername
    
To direct message a user set the slackChannelName to 
