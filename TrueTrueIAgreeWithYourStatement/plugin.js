(function(n){"use strict";const{getChannelId:t}=n.findByProps("getChannelId","getVoiceChannelId"),o=n.findAll(e=>e.enqueue)[0],r=async e=>{e.code=="F5"&&(e.preventDefault(),o.enqueue({type:0,message:{channelId:t(),content:"https://tenor.com/view/funny-gif-23169978"}},u=>{})),e.code=="F6"&&(e.preventDefault(),o.enqueue({type:0,message:{channelId:t(),content:"https://cdn.discordapp.com/attachments/903761538568032268/904159350740910150/true.png"}},u=>{}))};var d=e=>({onLoad(){document.addEventListener("keydown",r)},onUnload(){document.removeEventListener("keydown",r)}});return d})(cumcord.modules.webpack);