const live2d_path="https://cdn.jsdelivr.net/gh/hsl-eternity/live2d-widget/";function loadExternalResource(e,t){return new Promise(((n,i)=>{let s;"css"===t?(s=document.createElement("link"),s.rel="stylesheet",s.href=e):"js"===t&&(s=document.createElement("script"),s.src=e),s&&(s.onload=()=>n(e),s.onerror=()=>i(e),document.head.appendChild(s))}))}screen.width>=768&&Promise.all([loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js")]).then((()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",cdnPath:"https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",tools:["hitokoto","asteroids","switch-model","switch-texture","photo","info","quit"]})})),console.log("\n  く__,.ヘヽ.        /  ,ー､ 〉\n           ＼ ', !-─‐-i  /  /´\n           ／｀ｰ'       L/／｀ヽ､\n         /   ／,   /|   ,   ,       ',\n       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i\n        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |\n          !,/7 '0'     ´0iソ|    |\n          |.从\"    _     ,,,, / |./    |\n          ﾚ'| i＞.､,,__  _,.イ /   .i   |\n            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |\n              | |/i 〈|/   i  ,.ﾍ |  i  |\n             .|/ /  ｉ：    ﾍ!    ＼  |\n              kヽ>､ﾊ    _,.ﾍ､    /､!\n              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n              ﾚ'ヽL__|___i,___,ンﾚ|ノ\n                  ﾄ-,/  |___./\n                  'ｰ'    !_,.:\n");