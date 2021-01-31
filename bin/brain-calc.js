#!/usr/bin/env node
import { description, answersAndQuestions } from '../src/games/calc.js';
import doGame from '../src/index.js';

doGame(description, answersAndQuestions);
