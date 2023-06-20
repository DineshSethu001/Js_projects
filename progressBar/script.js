const container = document.querySelector(".container");


const programming_lang = [
  { lang: "HTML", percent: 99, color: "#f9ca24" },
  { lang: "CSS", percent: 65, color: "#78e08f" },
  { lang: "JavaScript", percent: 35, color: "#c56cf0" },
  { lang: "Bootstrap", percent: 85, color: "#badc58" },
];

programming_lang.forEach((lang)=>{
    container.innerHTML +=`
    <div class="progress-group">
    <div class="circular-progress">
           <span class="course-value" style="color:${lang.color}">0%</span>
    </div>
           <label class="text" style="color:${lang.color}">${lang.lang}</label>
</div>`
});
// style="background: 
const progressGroups=document.querySelectorAll(".progress-group");
progressGroups.forEach((progress,index)=>{
    let progressStartValue=0;
    let progressStartEnd=programming_lang[index].percent;
    let speed=50;
    let progressTimer=setInterval(()=>{
        progressStartValue++;
        if(progressStartValue ==progressStartEnd){
            clearInterval(progressTimer);
        }
        progress.querySelector
        (".circular-progress")
        .style.background=`conic-gradient(${programming_lang[index].color} 
        ${3.6*progressStartValue}deg,#ccc 0deg`;
        progress.querySelector(".course-value").innerHTML=progressStartValue+ "%";

    },speed);
})