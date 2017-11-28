{% extends 'ld:page/layout.tpl' %}
{% block content %}
    <div class="content-wrap">
        <form id="queryBox" class="form-inline">
            <div class="form-group">
                <label for="productName">产品线名</label>
                <input type="text" class="form-control" id="productName" name="productName">
            </div>
            <div class="form-group">
                <label for="master">负责人</label>
            <input type="text" class="form-control" id="master" name="master">
            </div>
            <button type="button" class="btn btn-primary query-btn">查询</button>
            <button type="button" class="btn btn-primary add-btn">新建</button>
            <button type="button" class="btn btn-primary delall-btn">批量删除</button>
        </form>
        <table class="table table-bordered table-striped task-table" id="listBox">
            <thead>
                <tr>
                     <th width="10%">产品线名</th>
                    <th width="30%">负责人</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="listBody">
            </tbody>
        </table>
    </div>
{% require "ld:page/index.tpl" %}{% endblock %}