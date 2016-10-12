'use strict'
const EventEmitter = require('events')
const express = require('express')
const app = express()
const emitter = new EventEmitter()
const robot = require('robot-js')
var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

// on any data into stdin
stdin.on( 'data', function( key ){
  // ctrl-c ( end of text )
  setMousePosition(key)
  if ( key === '\u0003' ) {
    process.exit();
  }
  // write the key to stdout all normal like
});
const setMousePosition = (key)=>{
	const {x,y} = robot.Mouse.getPos()
	if(key==="w"){
		robot.Mouse.setPos(x,y-10)
	}
	else if(key==="a"){
		robot.Mouse.setPos(x-10,y)
	}
	else if(key==="s"){
		robot.Mouse.setPos(x,y+10)
	}
	else if(key==="d"){
		robot.Mouse.setPos(x+10,y)
	}
	
}
