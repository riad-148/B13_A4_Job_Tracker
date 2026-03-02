let current_tab='all';
function switchTab(tab){
    console.log(tab);
    const tabs=['all','interview','rejected'];
    for(const t of tabs){
        const tab_name=document.getElementById("Tab-" + t);
        console.log(tab_name);
    } 
}