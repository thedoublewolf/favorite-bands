import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajax_setup';
import Router from './router';

let $app = $('.app');
new Router($app).start();

console.log('Hello, World');
