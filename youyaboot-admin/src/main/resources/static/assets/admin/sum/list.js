/**
* 代码为自动生成 Created by www.magicalcoder.com
* 软件作者：何栋宇 qq:709876443
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:648595928
*/
//不要被如此多的代码唬住，读懂一个 其他的模块都明白了，之所以写这么多开放出来，主要是为了定制和维护性，您可以随意修改逻辑 适应你的业务场景
;!function(){
        var $ = layui.jquery
        ,layer = parent.layer === undefined ? layui.layer : top.layer
        ,table = layui.table
        ,laydate=layui.laydate
        var mc_children = youyaboot_all.mc_children
        ,mc_constant = youyaboot_all.mc_constant
        ,mc_util = youyaboot_all.mc_util
        ,mc_rmp = youyaboot_all.mc_rmp
        ,mc_layui_component = youyaboot_all.mc_layui_component
    ;



    laydate.render({
        elem: '#inputTimeFirst'
    });


// 子表 排序相关
    var CONFIG = {
        tableNameRest:"sum_rest",
        tableName:"sum",
        moduleName:"sum",//sys_module的moduleName
        form:{
                inputTime:{
                renderConfig:{}//您可以自定义个性配置 遇到相同的则以dom配置为准 大部分属性已推荐设置在元素标签上 这里您可以自定义事件 {"calendar":false,"format":"yyyy-MM-dd","show":false,"range":false,"trigger":"click","type":"date","isInitValue":true,"showBottom":true,"inputType":"date","theme":"default","position":"absolute","lang":"cn","zIndex":66666666}
                }
        },
        event:{
            select2Change:function (elem,name,value) {//外键下拉更新事件
            }
        },
        layTable : {//表格内容 到list.html查找即可明白
            elem : '#newsList',
            id : "newsListTable"
         },
        //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',basePoint:'base_point',companyName:'company_name',finalPoint:'final_point',paiming:'paiming',sumPingJia:'sum_ping_jia',sumPoint:'sum_point',toubiaoPoint:'toubiao_point',zhuanjia:'zhuanjia'
        }
    };
    //后端请求时候的表模块规则url
    var tableNameRest = CONFIG.tableNameRest;
    var tableName = CONFIG.tableName;
    //表格每一列配置
    var COLS = [[]];
    var obj = {
        layTable:function () {//表格
            var tableObj = {
                render:function () {
                  //  this.initCOLS();
                    this.initTable();
                    this.tableOperateEvent();
                },
                initCOLS: function(){
                    var date= $("#inputTimeFirst").val();

                  if(date==""){
                    // date ='2019-09-08';
                  }
                     COLS = [[
                        {type: "checkbox", /*fixed:"left",*/ width:50},
                        {type: 'numbers', title: '编号', minWidth:200, align:"center",sort:true},
                        {field: 'projectName', title: '参选公司', minWidth:200,templet:function (d) {
                                 return '<input type="text" value="'+ mc_util.escapeHTML(d.projectName) +'" class="magicalcoder-table-text layui-input security_list_table_form_companyName" name="companyName" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify="|minLength=0"  placeholder="参选公司"/>'
                             }
                             , sort:true
                        }
                    ]];
                    $.ajaxSettings.async = false;
                    $.post('admin/score_rest/getDayZhangJia',{date:date},function (data) {
                        if(!data.flag){
                            layer.msg("删除失败:"+data.desc);
                        }else {
                            var list=data.data;
                            for(var i=0;i<list.length;i++){
                                var temp= {field: 'scoreSum'+i, title: list[i], minWidth:200}
                                COLS[0].push(temp);
                            }

                        }
                    })
                    $.ajaxSettings.async = true;

                    COLS[0].push({field: 'pj', title: '综合评价得分', minWidth:200,templet:function (d) {
                                return '<input type="text" value="'+ mc_util.escapeHTML(d.pj) +'" class="magicalcoder-table-text layui-input security_list_table_form_sumPingJia" name="sumPingJia" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify="|minLength=0"  placeholder="综合评价得分"/>'
                            }
                            , sort:true
                        }
                    );
                    COLS[0].push(   {field: 'basePoint', title: '基准价', minWidth:200,templet:function (d) {
                            return '<input type="text" value="'+ mc_util.escapeHTML(d.basePoint) +'" class="magicalcoder-table-text layui-input security_list_table_form_basePoint" name="basePoint" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify="|minLength=0"  placeholder="基准价"/>'
                        }
                        , sort:true
                    });
                    COLS[0].push( {field: 'finalPoint', title: '最终价', minWidth:200,templet:function (d) {
                            return '<input type="text" value="'+ mc_util.escapeHTML(d.finalPoint) +'" class="magicalcoder-table-text layui-input security_list_table_form_finalPoint" name="finalPoint" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify="|minLength=0"  placeholder="最终价"/>'
                        }
                        , sort:true
                    });
                    COLS[0].push( {field: 'tbdf', title: '投标报价', minWidth:200,templet:function (d) {
                            return '<input type="text" value="'+ mc_util.escapeHTML(d.tbdf) +'" class="magicalcoder-table-text layui-input security_list_table_form_toubiaoPoint" name="toubiaoPoint" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify="|minLength=0"  placeholder="投标报价"/>'
                        }
                        , sort:true
                    });

                    COLS[0].push({field: 'zh', title: '综合得分', minWidth:200,templet:function (d) {
                            return '<input type="text" value="'+ mc_util.escapeHTML(d.zh) +'" class="magicalcoder-table-text layui-input security_list_table_form_sumPoint" name="sumPoint" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify="|minLength=0"  placeholder="综合得分"/>'
                        }
                        , sort:true
                    });
                    COLS[0].push({type: 'numbers', title: '排名', minWidth:200,templet:function (d) {
                            return '<input type="text" value="'+ mc_util.escapeHTML(d.paiming) +'" class="magicalcoder-table-text layui-input security_list_table_form_paiming" name="paiming" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify="|minLength=0"  placeholder="排名"/>'
                        }
                        , sort:true
                    });


                },
                //初始化一个表格
                initTable : function () {
                    var _this = this;
                    _this.initCOLS();
                    table.render({//这里是layui的table分页写法 具体可参考layui官方文档
                        elem: CONFIG.layTable.elem,
                        url : 'admin/'+tableNameRest+'/page',
                        cellMinWidth : 95,
                        page : true,//是否分页
                        //height : "full-10",//高度样式
                        // height : 500,
                        limit : 20,//每页多少条
                        limits : [10,15,20,25],//下拉
                        id : CONFIG.layTable.id,
                        cols : COLS,//放入列配置
                        loading : true,
                        where : this.buildQueryFormParams(""),//构造查询参数 注意这里layui会缓存你的上一次查询参数 无法清除 只能考虑设置成空字符才能清理
                        done:function (res,curr,count) {//请求成功后处理
                            if(res.flag){
                                mc_rmp.paintBody(CONFIG.moduleName,function () {//权限判断
                                    //禁用一些外键字段 当更多信息场景时才会触发
                                    mc_children.disabledTableParentArea();
        //laytable中有很多控件需要初始化 比如日期等
                                    mc_layui_component.bindMagicalCoderLayUiComponentFromTable(CONFIG,function(){_this.refreshTableFromCurrentPage()})
        //每一行的操作条目事件
                                    _this.tableOperateEvent()
                                })
                            }else {
                                layer.msg(res.desc)//弹窗错误提示
                            }
                        }
                    });
                },
                //表格内的操作事件
                tableOperateEvent : function () {
                    var _t = this;
                    var tableDom = $(CONFIG.layTable.elem);
                    var layFilter = tableDom.attr("lay-filter");
                    //列表操作
                    table.on('tool('+layFilter+')', function(obj){//操作条事件写法 参考layui
                        var primaryFields = tableDom.attr("data-primary-fields");//一般是表主键id 提前隐藏放在表区域 搜索list.html
                        var layEvent = obj.event,
                            data = obj.data;
                        var identify = data[primaryFields]
                        if(layEvent === 'edit'){ //编辑
                            _t.editOrAdd(identify)
                        } else if(layEvent === 'del'){ //删除
                            _t._deleteOneTr(identify)
                        } else if(layEvent === 'children'){ //子表 更多信息
                            _t._childrenOneTr(identify)
                        }
                    });
                    //列表排序
                    table.on('sort('+layFilter+')', function(obj){
                        var safeOrderBy = "";//排序字段组合 例如xxx_id desc
                        if(obj.type && obj.type!=null && obj.type!=''){
                            safeOrderBy = CONFIG.sortMap[obj.field] + " " +obj.type;
                        }
                        _t.refreshTableFromCurrentPage(safeOrderBy);//从当前页重新加载分页数据
                    });
                },
                //编辑或者添加
                editOrAdd : function (identify) {//identify 代表主键值
                    var title = identify ? '编辑':'添加'
                    if(!identify){identify = ''}
                    var index = layui.layer.open({
                        skin:'magicalcoder-layer-admin',
                        title : title,
                        type : 2,//打开iframe页面 很多人不知道原理：从列表页进入详情页是直接打开新iframe,详情页根据iframe的入参主键，获取详情页数据，然后重绘详情页，整个过程都是js处理
                        maxmin: true,
                        area: ['80%', '80%'],
                        content : "admin/page_v2/"+tableName+"/edit?identify="+identify+mc_children.buildForeignParam(),
                        success : function(layero, index){
                            setTimeout(function(){
                                layui.layer.tips('点击此处返回列表', '.layui-layer-setwin .layui-layer-close', {
                                    tips: 3
                                });
                            },500)
                        }
                    })
                    //改变窗口大小时，重置弹窗的宽高，防止超出可视区域（如F12调出debug的操作）
                    //$(window).on("resize",function(){
                    //    layui.layer.full(index);
                    //})
                },
                _deleteOneTr : function (identify) {//删除一行
                    var _this = this;
                    layer.confirm('确定删除此行记录？',{icon:3, title:'提示信息'},function(index){
                        $.post('admin/'+tableNameRest+'/delete/'+identify,{},function (data) {
                            if(!data.flag){
                                layer.msg("删除失败:"+data.desc);
                            }else {
                                _this.refreshTableFromCurrentPage();//从当前页刷新列表
                                layer.close(index);
                            }
                        })
                    });
                },
                _childrenOneTr : function (identify) {//更多信息：查看子表
                    var title = '相关信息'
                    if(!identify){identify = ''}
                    if(!CONFIG.childrenPage || CONFIG.childrenPage==null ||  CONFIG.childrenPage.length<=0){
                        layer.msg("未找到任何子表信息")
                        return;
                    }
                    var content = mc_children.buildTabTemplate(tableName,identify,CONFIG.childrenPage);//自表如果是多个 会绘制多个tab标签
                    var index = layui.layer.open({skin:'magicalcoder-layer-admin',title : title,type : 1,maxmin: true,area: ['80%', '80%'],content : content,
                        success : function(layero, index){
                            setTimeout(function(){
                                layui.layer.tips('点击此处返回列表', '.layui-layer-setwin .layui-layer-close', {
                                    tips: 3
                                });
                            },500)
                        }
                    })
                    mc_children.tabClickEvent();//绑定下更多信息下tab点击事件 分别加载不同子表详情 列表界面
                    //改变窗口大小时，重置弹窗的宽高，防止超出可视区域（如F12调出debug的操作）
                    //$(window).on("resize",function(){
                    //    layui.layer.full(index);
                    //})
                },
                refreshTableFromCurrentPage : function (safeOrderBy) {//当前页 重新加载
                    var whereData = this.buildQueryFormParams(safeOrderBy)
                    this._startReloadTableFromStartPage(null,whereData)
                },
                refreshTableFromPageOne : function () {//从第一页 重新加载 搜索场景使用 清空各种参数
                    var whereData = this.buildQueryFormParams("")
                    this._startReloadTableFromStartPage(1,whereData)
                },
                buildQueryFormParams : function (safeOrderBy) {//自动封装查询区域数据
                    var _this = this;
                    var whereData = {}
                    var queryForm = $(".security_list_query_form")//参考list.html的表单区域样式名称
                    //因为layui 的查询有记忆功能，会缓存老的查询条件，这里把重置的条件给清空 赋值null
                    var radioMemory = {}
                    queryForm.find(".layui-input").each(function (index,item) {
                        var type = $(item).attr("type")
                        var name = $(item).attr("name")
                        if(name){
                            switch (type){
                                case "radio" :
                                    if(!radioMemory[name]){
                                        radioMemory[name] = false;
                                    }
                                    if($(item).is(":checked")){
                                        _this._autoSetWhereData(whereData,name,item);
                                        radioMemory[name] = true;
                                    }
                                    break;
                                default :
                                    _this._autoSetWhereData(whereData,name,item);
                                    break;
                            }
                        }
                    })
                    //
                    for(var radioName in radioMemory){
                        if(!radioMemory[radioName]){//肯定被layui缓存的查询字段 这里设置""可以清理掉此字段
                            whereData[radioName] = ""
                        }
                    }
                    whereData.safeOrderBy = safeOrderBy || ""
                    return whereData;
                },
                _startReloadTableFromStartPage : function (startPage,whereData) {
                    var reloadTableId = CONFIG.layTable.id
                    if(startPage==null || !startPage) {//当前页 聪明的记住多少页
                        table.reload(reloadTableId,{where: whereData })
                    }else {
                        table.reload(reloadTableId,{
                            page: {
                                curr: startPage //重新从第 几 页开始
                            },
                            where: whereData
                        })
                    }
                },
                _autoSetWhereData : function (whereData,name,item) {//name是表单元素名称 item是表单对象
                    var val = $.trim($(item).val())
                    whereData[name] = val
                }
            }
            return tableObj;
        },
        render:function () {//入口
            mc_children.disabledFromQueryParentArea();//尝试下先禁用附表区域 多半关联场景才会触发
            mc_layui_component.bindMagicalCoderLayUiComponentFromQuery(CONFIG);//查询区域绘制一下控件
            this.bindAreaEvents();
            this.layTable().render();//初始化表格数
        },
        bindAreaEvents : function () {
            var _t = this;
            //搜索
            $(".search_btn").click(function(){
                _t.layTable().initCOLS();
                _t.layTable().refreshTableFromPageOne();
            });
            //重置
            $("button[type='reset']").click(function(){
                $("."+mc_constant.MC_LAY_CLASS_NAME.FORM.foreign_select2).val(null).trigger('change');
                $("."+mc_constant.MC_LAY_CLASS_NAME.FORM.foreign_select2).each(function (id, item) {
                    $(this).attr("data-value","")
                });
                return true;
            });
            //添加
            $(".addNews_btn").click(function(){
                _t.layTable().editOrAdd();
            })
            //批量删除
            $(".delAll_btn").click(function(){
                var laytableElem = CONFIG.layTable.elem
                var laytableId = CONFIG.layTable.id
                //主键字段
                var primaryFields = $(laytableElem).attr("data-primary-fields")
                var checkStatus = table.checkStatus(laytableId),
                    data = checkStatus.data,
                    ids = [];
                if(data.length > 0) {
                    for (var i in data) {
                        ids.push(data[i][primaryFields]);
                    }
                    layer.confirm('确定删除选中的记录？', {icon: 3, title: '提示信息'}, function (index) {
                        $.post('admin/'+tableNameRest+'/batch_delete',{ids:ids},function (data) {
                            if(!data.flag){
                                layer.msg("删除失败:"+data.desc);
                            }else {
                                _t.layTable().refreshTableFromCurrentPage();
                                layer.close(index);
                            }
                        })
                    })
                }else{
                    layer.msg("请选择需要删除的记录");
                }
            })
            //excel导出
            $(".exportExcelAll_btn").click(function(){
                var dataMaxExportCount = parseInt($(this).attr("data-max-export-count"))//导出多少行 在界面导出按钮的一个属性配置 如果导出太多就会卡死
                var whereData = _t.layTable().buildQueryFormParams("")
                whereData.queryType = mc_constant.QUERY_TYPE_EXPORT_EXCEL;//代表是导出excel类型 参加controller实现
                whereData.page = 1;
                whereData.limit = dataMaxExportCount;
                var url = 'admin/'+tableNameRest+'/page?'
                var arr = []
                for(var i in whereData){
                    arr.push(i+"="+whereData[i])
                }
                window.location.href=url + arr.join("&")
            });
        }
    }
//入口函数
    obj.render();
}();
