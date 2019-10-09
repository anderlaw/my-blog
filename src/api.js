const baseUrl = 'https://www.tech-share.cn/api';
const xhr = new XMLHttpRequest();
export default function ajax({url,params,callback}) {  
    let queryStr = '?';
    for(let key in params){
        queryStr += `${key}=${params[key]}&`;
    }
    queryStr = queryStr.substring(0,queryStr.length-1);
    xhr.open('get',baseUrl+url+queryStr);
    xhr.onload = ()=>{
        callback(JSON.parse(xhr.responseText));
    }
    xhr.send();
}
