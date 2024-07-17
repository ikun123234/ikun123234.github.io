var OriginTitile = document.title; 
var titleTime; 
document.addEventListener('visibilitychange', function () { 
    if (document.hidden) { 
        document.title = ' 不要走~'; 
        clearTimeout(titleTime); 
    } else { 
        document.title = ' 欢迎回来～'; 
        titleTime = setTimeout(function () { 
            document.title = OriginTitile; 
        }, 2000); 
    } 
});