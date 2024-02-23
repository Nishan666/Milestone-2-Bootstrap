function openSidebar() {
    document.getElementById("sidebar").style.width = "50%";
    document.getElementById("page").style.opacity = "0.5";
    document.getElementById("overlay").style.display = "block";

}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("page").style.opacity = "1";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("btnOpenSidebarCreate").addEventListener("click", openSidebar);
document.getElementById("btnOpenSidebarViewMore").addEventListener("click", openSidebar);
document.getElementById("btnOpenSidebarEdit").addEventListener("click", openSidebar);
document.getElementById("btnOpenSidebarView").addEventListener("click", openSidebar);
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










