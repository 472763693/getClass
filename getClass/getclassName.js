/**
 * Created by Administrator on 2017/3/6.
 */
function getclassName(classname){

    //高版本浏览器
    if(document.getElementsByClassName){
        return document.getElementsByClassName(classname);
    };


    //低版本浏览器
    var classArr = [];  //用来存储类名的数组
    var classA = document.getElementsByTagName("*");

    for( var i = 0; i < classA.length; i++ ){

        //元素有单个 或 多个类名 将其分割开
        //并将其转化为数组
        var multipleArr = classA[i].className.split(" ");

        for( var j = 0; j< multipleArr.length; j++ ){

            if( multipleArr[j] = classname ){

                classArr.push(classA);

            };

        };

        return classArr;

    };

};