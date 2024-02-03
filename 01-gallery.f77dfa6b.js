const t=document.querySelector(".gallery");t.addEventListener("click",(function(t){if(t.preventDefault(),"IMG"!==t.target.nodeName)return;if(!t.target.classList.contains("gallery__image"))return;const e=t.target.dataset.source,o=basicLightbox.create(`\n\t\t<img src="${e}" width="1280" height="auto"/>\n        `,{onShow:t=>{window.addEventListener("keydown",i)},onClose:t=>{window.removeEventListener("keydown",i)}});function i(t){"Escape"===t.code&&o.close()}o.show()}));const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}].map((({preview:t,original:e,description:o})=>{const i=document.createElement("li");i.classList.add("gallery__item");const a=document.createElement("a");a.classList.add("gallery__link"),a.setAttribute("href",`${e}`);const n=document.createElement("img");return n.classList.add("gallery__image"),n.setAttribute("src",`${t}`),n.setAttribute("data-source",`${e}`),n.setAttribute("alt",`${o}`),i.append(a,n),i}));t.append(...e);basicLightbox.create('\n<img width="1280" height="auto" src="">',{onShow:t=>{window.addEventListener("keydown",onEscKeyPress)},onClose:t=>{window.removeEventListener("keydown",onEscKeyPress)}});
//# sourceMappingURL=01-gallery.f77dfa6b.js.map
