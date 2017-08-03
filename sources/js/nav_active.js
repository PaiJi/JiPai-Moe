$(function() {
 var urlName = window.location.pathname;  //获取地址栏中文件名或路径。
 $('.nav a').each(function() {        //遍历当前网页导航或分类  
     var urlHref = $(this).attr('href');  //获取导航链接地址href值
     if (urlName.indexOf(urlHref)>=0) {   //检测文件名或路径中是否包含当前链接值
         $(this).addClass('active');      //设置高亮css类
     }
 });
});