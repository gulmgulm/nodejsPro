/**
 * Created by ljg on 2017/6/3.
 */
var mongoose=require('mongoose');
var config=require('./config');

module.exports=function(){
    var db=mongoose.connect(config.mongdb);
   //require('')
    global.dbHandel = require('../database/dbHandel');
    return db;
}