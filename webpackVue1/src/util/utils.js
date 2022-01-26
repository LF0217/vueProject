
/**
 * 二进制与操作进行对比
 * 判断是否等于y值
 * @param x 二进制字符串
 * @param y 二进制字符串
 */
export default function binaryCompare(x,y) {
    var xten = parseInt(x,2);
    var yten = parseInt(y,2);
    return yten==(xten&yten);
}
/**
 * RGBA转HEX
 * RGBA转HEX
 * @param color RGBA颜色值：rgba(255,0,0,0.5)
 */
export function rgbaToHex(color) {
    var values = color.replace(/rgba?\(/, '').replace(/\)/, '').replace(/[\s+]/g, '').split(',');
    var a = ("0"+parseInt(parseFloat(values[3] || 1)*255).toString(16)).slice(-2),
        r = ("0"+parseInt(values[0]).toString(16)).slice(-2),
        g = ("0"+parseInt(values[1]).toString(16)).slice(-2),
        b = ("0"+parseInt(values[2]).toString(16)).slice(-2);
    return  (r + g + b + a).toUpperCase();
}
/**
 * RGB转CMYK
 * RGB转CMYK
 * @param color RGB值 : rgb(255,0,0)
 */
export function rgbToCMYK(color) {
    if(color === "" || color === null){
        return "";
    }
    var values = color.replace(/rgba?\(/, '').replace(/\)/, '').replace(/[\s+]/g, '').split(',');

    var r = parseInt(values[0]) ;
    var g = parseInt(values[1]) ;
    var b = parseInt(values[2]);
    var r_t = (r/255);
    var g_t = (g/255);
    var b_t = (b/255);
    var k = (1 - Math.max(r_t,g_t,b_t));
    if(k === 1){
        return "000000FF";
    }
    var c = parseInt(parseFloat(( 1 - r_t - k)/(1 - k)).toFixed(2)*255);
    var m = parseInt(parseFloat(( 1 - g_t - k)/(1 - k)).toFixed(2)*255);
    var y = parseInt(parseFloat(( 1 - b_t - k)/(1 - k)).toFixed(2)*255);

    return  ( ("0"+c.toString(16)).slice(-2) + ("0"+m.toString(16)).slice(-2) + ("0"+y.toString(16)).slice(-2) + ("0" + parseInt(k*255).toString(16)).slice(-2) ).toUpperCase();
}
/**
 * CMYK转RGB
 * CMYK转RGB
 * @param color RGB值 : 870909FF
 */
export function cmykToRgb(color){

    if(color === null || color.length !== 8){
        return "";
    }
    var C = parseFloat(parseInt(color.substr(0,2),16)/255);
    var M = parseFloat(parseInt(color.substr(2,2),16)/255);
    var Y = parseFloat(parseInt(color.substr(4,2),16)/255);
    var K = parseFloat(parseInt(color.substr(6,2),16)/255);
    //console.log("cmyk",C+" "+" "+M+" "+Y+" "+K);
    var R = 255*(1-C)*(1-K);
    var G = 255*(1-M)*(1-K);
    var B = 255*(1-Y)*(1-K);
    //console.log("rgb("+parseInt(R)+","+parseInt(G)+","+parseInt(B)+")")
    return ("rgb("+parseInt(R)+","+parseInt(G)+","+parseInt(B)+")");
}


