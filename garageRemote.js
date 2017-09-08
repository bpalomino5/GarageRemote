#!/usr/bin/env node
//Author: Brandon Palomino
//Date: 9/7/17
//Description: 


// Setup Pins
var PIN_SWITCH = 21

// Helper Settings
var RELAY_ON = 0        // GPIO.LOW 0
var RELAY_OFF = 1    // GPIO.HIGH 1

// Blynk Cloud Token
var blynkToken = '9a5060fcbcc0434481fb75eb8cbc036a';    // BLYNK TOKEN

var Gpio = require('pigpio').Gpio,
  SWITCH = new Gpio(PIN_SWITCH, {mode: Gpio.OUTPUT});

//Setup blynk
var Blynk = require('blynk-library');
var blynk = new Blynk.Blynk(blynkToken);

//Setup Virtual Pins
var v0 = new blynk.VirtualPin(0);   // garage switch

blynk.on('connect', function() { console.log("Blynk ready.\n\nSettings Log:"); });
blynk.on('disconnect', function() { console.log("DISCONNECT"); });

v0.on('write', function(param) {
	if (param[0] === '1'){
		OpenGarage()
	} else {
		CloseGarage()
	}
})

