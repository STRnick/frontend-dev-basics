const fetch = function(params, callback) {
    // 
    // 비동기 코드: 파일 시스템 접근, 네트워크, SQL to DB, setTimeout
    // 
    setTimeout(function(){
        if(params === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error(`fail`), null);
        }
        callback(null, 'ok');
    }, 2000);
    }
    
    // readFile(a, b, function(error, data){});
    
    // Test01: success
    fetch('param-data', function(error, data){
        if(error) {
            console.error(error);
            return;
        } else {
            console.log(data);
        }
    });
    
    // Test02: fail
    fetch('param-error', function(error, data){
        if(error) {
            console.error(error);
            return;
        }
            console.log(data);
    });
    
    console.log("wait......");