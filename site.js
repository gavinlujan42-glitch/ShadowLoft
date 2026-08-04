const $=s=>document.querySelector(s);const frame=$("#youtubeFrame"),empty=$("#videoEmpty"),channelLink=$("#channelLink");
const config=JSON.parse(localStorage.getItem("shadowloftConfig")||"{}");
function embedUrl(c){if(!c||!c.value)return "";const v=c.value.trim();if(c.type==="video")return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v)}`;if(c.type==="playlist")return `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(v)}`;if(c.type==="channel"&&v.startsWith("UC"))return `https://www.youtube-nocookie.com/embed/videoseries?list=UU${encodeURIComponent(v.slice(2))}`;return ""}
const src=embedUrl(config.youtube);if(src){frame.src=src;frame.style.display="block";empty.style.display="none";channelLink.href=config.channelUrl||"https://youtube.com"}
$("#inviteForm").addEventListener("submit",e=>{e.preventDefault();$("#formNote").textContent="The door has heard you. Transmission pending.";e.target.reset()});
$("#soundToggle").addEventListener("click",e=>{const on=e.currentTarget.getAttribute("aria-pressed")==="true";e.currentTarget.setAttribute("aria-pressed",String(!on));e.currentTarget.lastChild.textContent=!on?" Signal live":" Signal off"});
