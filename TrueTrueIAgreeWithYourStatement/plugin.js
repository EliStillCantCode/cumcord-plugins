(function(n){"use strict";const{getChannelId:u}=n.findByProps("getChannelId","getVoiceChannelId"),o=n.findAll(e=>e.enqueue)[0];function t(e){return o.enqueue({type:0,message:{channelId:u(),content:e}},a=>{})}function r(e){return e.altKey==!0&&e.keyCode==70?(e.preventDefault(),t("https://tenor.com/view/funny-gif-23169978")):e.altKey==!0&&e.keyCode==72?(e.preventDefault(),t("https://i.imgur.com/kJonTcq.png")):e}var d=e=>({onLoad(){document.addEventListener("keydown",r)},onUnload(){document.removeEventListener("keydown",r)}});return d})(cumcord.modules.webpack);