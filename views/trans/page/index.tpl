{% extends 'trans:page/layout.tpl' %}
{% block content %}
    <div id="app">
        <h4>上传视频</h4>
        <fileupload target="/trans/putVideo" action="POST" v-on:progress="progress" v-on:start="startUpload" v-on:finish="finishUpload"></fileupload>
        <div class="info">
        [[msg]]
    </div>
    </div>
{% require "trans:page/index.tpl" %}{% endblock %}