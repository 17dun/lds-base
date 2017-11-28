var yog = require('yog2-kernel');
var asc = require('async');
const exec = require('child_process').execSync;
const ffmpegPath = './bin/ffmpeg';
module.exports.transcode = function(app, conf){

    yog.ffmpeg = {
        trans: function(){

        },
        getInfo: function(){

        },
        pack: function(){

        },

        
        //执行调用
        run: function(input){
            return exec(ffmpegPath + ' ' + input)
        }
    }


    
    //支持多种转码格式
    yog.videoTranscode = function(data){
        exec(' -i ./video_temp/src/test.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -hls_time 15 ./video_temp/dist/output.m3u8',function(err,stdout){
            console.log(err);
        });
    };


    //视频大小检测、源格式检测、时长检测
    yog.videoCheck = function(data){
        exec('./bin/ffmpeg -i ./video_temp/src/test.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -hls_time 15 ./video_temp/dist/output.m3u8',function(err,stdout){
            console.log(err);
        });
    };

    //文件打包
    yog.videoPack = function(data){
        
    };

    //视频存储
    yog.videoStore = function(data){
        
    };


    return {
        



    };



}

//把参数相关的东西放到业务端去，这里传进来只做并发和执行