fetch('./time-news.json')
.then((res)=>{
    return res.json();
})
.then((data)=>{
  let data1 = '';
  let data2= '';
 data.map((values)=>{
     data1+=`<div class='sub-container'>
     <p class='title'>${values.title}</p>
     <a href="${values.link}" class='link'>${values.title} read more...</a>
 </div>`
 data2+=`<div class='right-sub-container'>
 <a href="${values.link}" class='right-link'>${values.title} read more...</a>

        </div>`
 });
 document.getElementById('news').innerHTML=data1;
 document.getElementById('con').innerHTML=data2;
})
.catch((err)=>{
    console.log(err);
});