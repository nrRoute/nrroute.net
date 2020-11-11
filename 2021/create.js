var check = function() {
    var get = document.getElementById('plain').value;
    var ret = ""
    if(get == "あああ") ret = "aaa";
    else if(get == "newyear") ret = "Happy New Year!";
    else ret = "Invalid";
    document.getElementById('brain').value = ret;
}
