let Fetch = {

    //successCallback 数据下载成功的回调方法，在组件中实现
    //failureCallback 数据下载失败的回调方法，在组件中实现

    //基于fetch的get方法 只负责下载数据，下载后的处理操作在回调方法中实现
    getRequest(url, params, successCallback, failureCallback) {
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failureCallback(error));
    },

    //基于fetch的post方法 只负责下载数据，下载后的处理操作在回调方法中实现

    postRequest(url, params, successCallback, failureCallback) {
        let opts = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        };
        console.log(params);

        console.log(opts);
        fetch(url, opts)
            .then((response) => response.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failureCallback(error));
    },

    //基于fetch的put方法 只负责下载数据，下载后的处理操作在回调方法中实现
    putRequest(url, params, successCallback, failureCallback) {
        let opts = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        };
        console.log(params);

        console.log(opts);
        fetch(url, opts)
            .then((response) => response.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failureCallback(error));
    },
    //基于fetch的delete方法 只负责下载数据，下载后的处理操作在回调方法中实现
    deleteRequest(url,params, successCallback, failureCallback){
        let opts = {
            method:"DELETE",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(params)
        };
        fetch(url,opts).then((response) => response.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failureCallback(error))
    }


};

export default Fetch;
