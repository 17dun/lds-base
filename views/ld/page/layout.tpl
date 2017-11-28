<!doctype html>
{% html lang="en" framework="trans:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        <link rel="stylesheet" type="text/css" href="/static/ld/static/css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="/static/ld/static/css/common.css">
        {% require "ld:static/js/vue.min.js" %}
    {% endhead %}
    {% body %}
<div class="header" id="header">
  <div class="header-inner">
    <p></p>
    <div class="navbar-header">
      <a href="/index" class="navbar-brand"></a>
    </div>
    <nav id="bs-navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li>
          <a href="/product">产品线管理</a>
        </li>
        <li>
          <a href="/temp">模板管理</a>
        </li>
        <li>
          <a href="/add">广告位管理</a>
        </li>
        <li>
          <a href="/variable">变量管理</a>
        </li>
        <li>
          <a href="/user">用户管理</a>
        </li>
      </ul>
      <span style="float:right;font-size:14px;"><a href="/logout">退出</a></span>
    </nav>
    </div>
</div>
        <div id="wrapper">
            <div id="middle" class="container">
                {% block content %}
                {% endblock %}
            </div>
        </div>

<div class="foot">

</div>
    {% script %}
       require('trans:widget/app.js')
    {% endscript %}
    {% require "ld:page/layout.tpl" %}{% endbody %}
{% endhtml %}
