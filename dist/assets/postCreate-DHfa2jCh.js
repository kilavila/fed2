import{b as m,h as p}from"./headers-B4k_fb22.js";import{a as h}from"./authGuard-C2GFzsuy.js";async function w(r){try{const e=await fetch(m,{method:"POST",headers:p(),body:JSON.stringify(r)});if(console.log(e),!e.ok)throw new Error(`Response Status: ${e.status}`);return(await e.json()).data}catch(e){console.error(e.message)}}async function y(r){r.preventDefault();const e=r.target,o=e?e[0].value:"",n=e?e[1].value:"",i=e?e[2].value:"",s=e?e[3].value:"",c=e?e[4].value:"",a=i.split(" "),l=["jpg","jpeg","png","gif","webp"],d=t=>{if(!t)return!1;try{const g=new URL(t).pathname.split(".").pop().toLowerCase();return l.includes(g)}catch{return console.error("Invalid image URL"),!1}};if(media.length>0&&!d(media)){alert("Please enter a valid image URL");return}const u={title:o,body:n||void 0,tags:a.length>0?a:void 0,media:s?{url:s,alt:c||void 0}:void 0};try{const t=await w(u);if(t&&t.id)alert("Post created successfully!"),window.location.href=`/post/single-post/?id=${t.id}`;else throw new Error("Post ID not returned")}catch(t){console.error("Error creating post:",t),alert("There was an error creating the post. Please try again.")}}h();const P=document.forms.createPost;P.addEventListener("submit",y);
