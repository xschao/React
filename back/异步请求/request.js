function ajax(url){
    return new Promise(((resolve, reject) => {
        //步骤一:创建异步对象
        var xhr = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        xhr.open('get', url);
        //步骤三:发送请求
        xhr.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的　　
                resolve(this.response);//输入相应的内容
            }else {
                reject("加载失败");
            }
        }
        ajax.onerror = function (){
            reject(this)
        }
    }))

}