var globalVar = {
    dataUrl:''
};

$.get(globalVar.dataUrl,function(resp){
    console.log(resp.data)
})