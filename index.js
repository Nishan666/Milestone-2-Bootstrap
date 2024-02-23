function openSidebar() {
    document.getElementById("sidebar").style.width = "40%";
    document.getElementById("page").style.opacity = ".99";
    document.getElementById("overlay").style.display = "block";

}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("page").style.opacity = "1";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("btnOpenSidebarCreate").addEventListener("click", openSidebar);
document.getElementById("btnOpenSidebarCreateEmpty").addEventListener("click", openSidebar);    


function filledOffers() {
    document.getElementById("withOffer").style.display = "block"
    document.getElementById("withoutOffer").style.display = "none"
}

function emptyOffers() {
    document.getElementById("withOffer").style.display = "none"
    document.getElementById("withoutOffer").style.display = "block"
    document.getElementById("sideBar").style.height = "100vh"
}



////////////////

function setupSidebarButtons() {
    for (let i = 1; i <= 4; i++) {
        setupSidebarButtonListeners(`btnOpenSidebarViewMore${i}`);
        setupSidebarButtonListeners(`btnOpenSidebarEdit${i}`);
        setupSidebarButtonListeners(`btnOpenSidebarView${i}`);
    }
}

function setupSidebarButtonListeners(buttonId) {
    document.getElementById(buttonId).addEventListener("click", openSidebar);
}

setupSidebarButtons();

// or

// document.getElementById("btnOpenSidebarViewMore1").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarEdit1").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarView1").addEventListener("click", openSidebar);

// document.getElementById("btnOpenSidebarViewMore2").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarEdit2").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarView2").addEventListener("click", openSidebar);

// document.getElementById("btnOpenSidebarViewMore3").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarEdit3").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarView3").addEventListener("click", openSidebar);

// document.getElementById("btnOpenSidebarViewMore4").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarEdit4").addEventListener("click", openSidebar);
// document.getElementById("btnOpenSidebarView4").addEventListener("click", openSidebar);








