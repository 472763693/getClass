function getClass(obj, Sclass){

    var aResult = [];  //用来存储类名的数组
    var aEle = obj.getElementsByTagName("*");  //存储元素标签名

    for( var i = 0; i < aEle.length; i++ ){

        if( aEle[i].className == Sclass  ){
            aResult.push( aEle[i] );
        };
    };
    return aResult;
};
