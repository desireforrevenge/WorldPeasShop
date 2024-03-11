function getCookieValues() {
    //Если HeirloomTomato == 0
    if (parseInt(document.getElementById('text1').value) === 0) {
        document.getElementById('text1').value = getCookie("heirloomTomatoCount")
    } 
    //SweetOnion
    if (parseInt(document.getElementById('text2').value) === 0) {
        document.getElementById('text2').value = getCookie("sweetOnionCount")
    } 
    //OrganicGinger
    if (parseInt(document.getElementById('text3').value) === 0) {
        document.getElementById('text3').value = getCookie("organicGingerCount")
    } 
    
}