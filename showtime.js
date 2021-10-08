// 放一个显示时间的小模块
var t = null;
t = setTimeout(time, 1000);
function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    document.getElementById("showTime").innerHTML = "时间：" + y + "年" + mt + "月" + day + "日" + "-" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}
//17行到42行完全没用
function acc() {
    var XMLHttpRequest;
    createXMLHttpRequest();
    cid = document.getElementById("cityid").value
    alert(cid)
    function createXMLHttpRequest() {
        if (window.ActiveXObject) {
            XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP")
        } else if (window.XMLHttpRequest) {
            XMLHttpRequest = new XMLHttpRequest();
        }
    }

    alert(cid)
    finalurl = 'http://www.weather.com.cn/data/sk/' + toString(cid) + '.html'//拼接得到finalurl
    alert(finalurl)
    XMLHttpRequest.open("get", finalurl, true)
    XMLHttpRequest.onreadtstatechange = getData;
    function getData() {
        if (XMLHttpRequest.readyState == 4 && (XMLHttpRequest.status == 200 || XMLHttpRequest.status == 0)) {
            document.getElementById.innerHTML("myDiv") = Response
        } else {
            alert("error.HTTP状态码为" + XMLHttpRequest.status)
        }
    }
    XMLHttpRequest.send(null)
}
//45行到64行基本没用，显示的都是undefined
function acc1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayData(this);
        }
    };

    xhttp.open("GET", 'http://www.tianqiapi.com/api?version=v6&appid=65473718&appsecret=U0pn3qsB&city=杭州', true);
    xhttp.send();
}
function displayData(xhttp) {
    jsonData = JSON.parse(xhttp.responseText);
    var newContent = ""
    for (index in jsonData) {
        newContent += "<p>" + jsonData[index].body + "</p>";
    }
    document.getElementById("hangzhou").innerHTML = newContent
}

//66行以后还是有一些用的
window.onload=function hz() {
    let xmlHttpRequest;
    if (window.ActiveXObject) {
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttpRequest = new XMLHttpRequest();
    }
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {
                var result = JSON.parse(xmlHttpRequest.responseText);
                console.log(result);
                document.getElementById("weizhi").innerText = result.city
                document.getElementById("hangzhou").innerText = "天气：" + result.wea;
                document.getElementById("qita").innerText = "风力：" + result.win + " " + result.win_speed;
                document.getElementById("wendu").innerText="最低温度:"+result.tem2+"   "+"最高温度："+result.tem1
                document.getElementById("littletip").innerText=result.air_tips
            } else {
                alert("error:HTTP状态码为:" + xmlHttpRequest.status);
            }
        }
    }
    xmlHttpRequest.open("GET", "http://www.tianqiapi.com/api?version=v6&appid=65473718&appsecret=U0pn3qsB&city=杭州", true);
    xmlHttpRequest.send(null);
}