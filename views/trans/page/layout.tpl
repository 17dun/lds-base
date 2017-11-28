<!doctype html>
{% html lang="en" framework="trans:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        {% require "trans:static/js/vue.min.js" %}
        {% require "trans:static/js/vue.upload.js" %}
    {% endhead %}
    {% body %}
        <div id="wrapper">
            <div id="middle" class="container">
                {% block content %}
                {% endblock %}
            </div>
        </div>
    {% script %}
       require('trans:widget/app.js')
    {% endscript %}
    {% require "trans:page/layout.tpl" %}{% endbody %}
{% endhtml %}
