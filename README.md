# node-slack-dnd-cli

Enable or disable Do Not Disturb mode on Slack [slack.com](https://slack.com/) from command line with nodejs.

## Install

    npm install node-slack-dnd-cli -g

## Environment variables

To send to [slack.com](https://slack.com/) you need set the SLACK TOKEN as environment variable

    export SLACK_TOKEN="slack-token"

You can get the Slack token from [https://api.slack.com/web#auth](https://api.slack.com/web#auth)

## Usage

Turn DND On, with 30 min duration

    slack -o true -d 30
    
Turn DND Off

    slack -o false
