define('trans:widget/app.js', function(require, exports, module) {

  window.trans = new Vue({
      el: '#app',
      components: {
          'fileupload': FileUpload.FileUpload
      },
      delimiters: ['[[', ']]'],
      data: {
          msg: ''
      },
      methods: {
          startUpload(e) {
              console.log(e);
          },
          finishUpload(e) {
              var data = JSON.parse(e.currentTarget.response);
              this.msg = data;
              // if(data.err){
              //     alert(data.msg);
              // }else{
              //      alert('转码并上传成功');
              // }
          },
          progress(e) {
              console.log(e);
          }
    }
  })
  
  
  

});
