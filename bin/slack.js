#!/usr/bin/env node

var Slack = require('slack-node');
var argv = require('minimist')(process.argv.slice(2));

var turnDNDOn = argv.o;
var duration = argv.d;
var slackToken = process.env.SLACK_TOKEN;

if ( slackToken === undefined ) {
  console.log('undefined SLACK_TOKEN as Env Variable');
  process.exit(1);
}

if ( typeof(turnDNDOn) !== 'string' ){
  console.log('undefined turn DND On argv: -o');
  process.exit(1);
}

slack = new Slack(process.env.SLACK_TOKEN);
if ( turnDNDOn === 'true' ) {

  if ( typeof(duration) !== 'number' ){
    console.log('undefined duration argv: -d');
    process.exit(1);
  }
  
  slack.api(
    'dnd.setSnooze', { token:slackToken, num_minutes:duration },
    function(){ }
  );
} else if ( turnDNDOn === 'false' ) {
  slack.api(
    'dnd.endSnooze', { token:slackToken },
    function(){ }
  );
}
