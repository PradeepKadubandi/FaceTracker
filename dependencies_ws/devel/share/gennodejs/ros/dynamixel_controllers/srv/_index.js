
"use strict";

let RestartController = require('./RestartController.js')
let StopController = require('./StopController.js')
let SetComplianceMargin = require('./SetComplianceMargin.js')
let StartController = require('./StartController.js')
let SetCompliancePunch = require('./SetCompliancePunch.js')
let TorqueEnable = require('./TorqueEnable.js')
let SetSpeed = require('./SetSpeed.js')
let SetTorqueLimit = require('./SetTorqueLimit.js')
let SetComplianceSlope = require('./SetComplianceSlope.js')

module.exports = {
  RestartController: RestartController,
  StopController: StopController,
  SetComplianceMargin: SetComplianceMargin,
  StartController: StartController,
  SetCompliancePunch: SetCompliancePunch,
  TorqueEnable: TorqueEnable,
  SetSpeed: SetSpeed,
  SetTorqueLimit: SetTorqueLimit,
  SetComplianceSlope: SetComplianceSlope,
};
