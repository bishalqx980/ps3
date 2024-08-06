function preload(){
    var user_agent = navigator.userAgent;
    var sys_info_element = document.getElementById("sys_info");
    var sys_name = user_agent.substring(user_agent.indexOf("5.0 (") + 5, user_agent.indexOf(") Apple") - 7);
    sys_info_element.innerHTML = user_agent;
    if (sys_name != "PLAYSTATION") {
        sys_info_element.style.color = "red";
        sys_info_element.innerHTML = "<b>Warning (NOT A PS3 SYSTEM): </b>" + user_agent;
    }
}