let current_tab = 'all';

const tabActive = ["bg-navy", "border-navy","text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200","text-black"];

const allContainer=document.getElementById('all-container');
const interviewContainer=document.getElementById('interview-container')
const rejectContainer=document.getElementById('reject-container')

function switchTab(tab) {
     const tabs = ['all', 'interview', 'rejected'];
    
    for (const t of tabs) {
        const tab_name = document.getElementById("Tab-" + t);
        
        if (!tab_name) continue;
        if (t === tab) {
            tab_name.classList.remove(...tabInactive);
            tab_name.classList.add(...tabActive);
        } else {
            tab_name.classList.remove(...tabActive);
            tab_name.classList.add(...tabInactive);
        }
    }
    const pages=[allContainer,interviewContainer,rejectContainer];
    for(const section of pages){
        section.classList.add('hidden');
    }
     emptyStat.classList.add("hidden");
    if(tab==='all'){
           allContainer.classList.remove('hidden');
        if(allContainer.children.length<1){
            emptyStat.classList.remove("hidden");
        }
    }else if(tab==='interview'){
        interviewContainer.classList.remove('hidden');
           if(interviewContainer.children.length<1){
            emptyStat.classList.remove("hidden");
        }
    }else{
            rejectContainer.classList.remove('hidden');
        if(rejectContainer.children.length<1){
            emptyStat.classList.remove("hidden");
        }
    }
    current_tab = tab;
}

// State
const totalStat=document.getElementById('state-total')
const interviewStat=document.getElementById('state-interview')
const rejectStat=document.getElementById('state-reject')
const emptyStat=document.getElementById('empty');

switchTab(current_tab);

document.getElementById("jobs-container").addEventListener('click',function(event){
    const clickedElement=event.target;
    const card=clickedElement.closest(".card");
    const status=card.querySelector(".status");
    const parent=card.parentNode;

    if(clickedElement.classList.contains('interview')){
        status.innerText='Interviewed';
        interviewContainer.append(card);
        updateStat();
    }
    if(clickedElement.classList.contains('rejected')){
         status.innerText='Rejected';
        rejectContainer.append(card);
         updateStat();
    }
    if(clickedElement.classList.contains('delete')){
       parent.removeChild(card);
        updateStat();
    }
})

// Update status
function updateStat(){
    // totalStat.innerText=allContainer.children.length;
    // interviewStat.innerText=interviewContainer.children.length;
    // rejectStat.innerText=rejectContainer.children.length;
    const counts={
        all :allContainer.children.length,
        interview :interviewContainer.children.length,
        rejected :rejectContainer.children.length
    };
    totalStat.innerText=counts['all']
    interviewStat.innerText=counts['interview']
    rejectStat.innerText=counts['rejected']
}
updateStat();