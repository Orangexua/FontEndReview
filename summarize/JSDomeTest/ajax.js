function ajaxrequest (url) {
    if (window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else if(window.ActiveXObject) {
        var httpRequest = new ActiveXObject();
    }
    httpRequest.open(POST,'url',true);
    httpRequest.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function response1()  {
        if (httpRequest.readyState === 4)
        {
            if(status === 200){
                var text = httpRequest.responseText;
            }
        }
    };
    httpRequest.send(message);
}


// 同源策略  保证浏览器的安全，只允许当前的源中的资源只能在当前源中使用

// 1. jsonp
// 2. 服务端配置
// 3. negix配置
// 4. cors跨域