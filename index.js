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
    if(tab==='all'){
        allContainer.classList.remove('hidden')
    }else if(tab==='interview'){
        interviewContainer.classList.remove('hidden');
    }else{
        rejectContainer.classList.remove('hidden')
    }
    current_tab = tab;
}

// State
const totalStat=document.getElementById('state-total')
const interviewStat=document.getElementById('state-interview')
const rejectStat=document.getElementById('state-reject')
totalStat.innerText=allContainer.children.length;
switchTab(current_tab);