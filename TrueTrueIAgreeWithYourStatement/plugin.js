(function(n){"use strict";const{getChannelId:t}=n.findByProps("getChannelId","getVoiceChannelId"),o=n.findAll(e=>e.enqueue)[0],r=async e=>{e.code=="F5"&&(e.preventDefault(),o.enqueue({type:0,message:{channelId:t(),content:"https://tenor.com/view/funny-gif-23169978"}},d=>{})),e.code=="F6"&&(e.preventDefault(),o.enqueue({type:0,message:{channelId:t(),content:"https://i.imgur.com/kJonTcq.png"}},d=>{}))};var u=e=>({onLoad(){document.addEventListener("keydown",r)},onUnload(){document.removeEventListener("keydown",r)}});return u})(cumcord.modules.webpack);
