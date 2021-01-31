#!/usr/bin/env node

import { description, answersAndQuestions } from '../src/games/even.js';
import doGame from '../src/index.js';

doGame(description, answersAndQuestions);
