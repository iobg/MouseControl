'use strict'

const robot = require('robotjs')
const keypress = require('keypress')
var stdin = process.stdin;
keypress(stdin)

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );
console.log('listening for keypresses')
// on any data into stdin
stdin.on( 'keypress',( ch,key )=>{
  // ctrl-c ( end of text )
  setMousePosition(key)
  if ( key.sequence === '\u0003' ) {
    process.exit();
  }
});

const setMousePosition = ({name})=>{
	const {x,y} = robot.getMousePos()
	if(name==="w"){
		robot.moveMouseSmooth(x,y-10)
	}
	else if(name==="a"){
		robot.moveMouseSmooth(x-10,y)
	}
	else if(name==="s"){
		robot.moveMouseSmooth(x,y+10)
	}
	else if(name==="d"){
		robot.moveMouseSmooth(x+10,y)
	}
	else if(name==="space"){
		robot.mouseClick()
	}
	
}
