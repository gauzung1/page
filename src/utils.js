
function PadZero(str) {
    //补零
    return new RegExp(/^\d$/g).test(str) ? `0${str}` : str;
}
 
export const formatSeconds = (_seconds) => {
        _seconds = parseInt(_seconds);
        let hours, mins, seconds;
        let result = '';
        seconds = parseInt(_seconds % 60);
        mins = parseInt(_seconds % 3600 / 60)
        hours = parseInt(_seconds / 3600);
 
        if (hours)
            result = `${PadZero(hours)}:${PadZero(mins)}:${PadZero(seconds)}`
        else
            result = `00:${PadZero(mins)}:${PadZero(seconds)}`
        // console.log(result)
        return result;
}

// export const formatSeconds = (value) => {
//     var theTime = parseInt(value);// 秒
//     var theTime1 = 0;// 分
//     var theTime2 = 0;// 小时
//     // alert(theTime);
//     if (theTime > 60) {
//         theTime1 = parseInt(theTime / 60);
//         theTime = parseInt(theTime % 60);
//         // alert(theTime1+"-"+theTime);
//         if (theTime1 > 60) {
//             theTime2 = parseInt(theTime1 / 60);
//             theTime1 = parseInt(theTime1 % 60);
//         }
//     }
//     // var result = "" + parseInt(theTime) + "秒";
//     var result = "" + parseInt(theTime);
//     if (theTime1 > 0) {
//         // result = "" + parseInt(theTime1) + "分" + result;
//         result = "" + parseInt(theTime1) + ":" + result;
//     }
//     if (theTime2 > 0) {
//         // result = "" + parseInt(theTime2) + "小时" + result;
//         result = "" + parseInt(theTime2) + ":" + result;
//     }
//     return result;
// }