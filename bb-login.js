// ==UserScript==
// @name         Remove the fxxking purple
// @namespace    https://bb.cuhk.edu.cn/
// @version      0.1
// @description  Please, don't use purple and full screen image.
// @author       Xiaoxing Ye
// @match        https://bb.cuhk.edu.cn/
// @match        https://bb.cuhk.edu.cn/webapps/login/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let addGlobalStyle = (css) => {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    };
    window.onload = () => {
        addGlobalStyle('.login-page { background: #f3f3f4; }');
        addGlobalStyle('.submit { color: #fff; background: #007bff !important; border-color: #007bff !important; }');
        addGlobalStyle('#login > div:nth-child(2)  {color: #000 !important; font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif !important; }');
        addGlobalStyle('div.loginBody { background: none !important; padding: 30px; max-width: 500px; margin: 40px auto; border-radius: 4px; box-shadow: 0 4px 10px 4px rgba(19,35,47,.3);}');
        document.querySelector('#login > hr').remove();
        let title = document.querySelector('#login > div:nth-child(1)');
        title.innerHTML = '在线教学平台（E-Learning）';
        let parent = document.getElementById('login');
        let img = document.createElement('img');
        img.src = 'https://i.loli.net/2018/08/20/5b7ad4c18e19a.png';
        img.width = 500;
        parent.insertBefore(img, title);
    }

})();
