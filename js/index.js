/**
 * Created by Administrator on 2017/9/2.
 */
window.onload= function () {
    var isUnfold=false;//判断是否按下下拉按钮
    var btn_select=document.getElementsByClassName("btn_nav")[0];
    var center=document.getElementById("center_div");

    //下拉按钮事件绑定
    btn_select.addEventListener("click", function () {
        if(isUnfold){
            center.style.top="0";
            isUnfold=false;
        }
        else{
            center.style.top="350px";
            isUnfold=true;
        }
    });

}

