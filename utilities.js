function showCopyIcon(elementId) {
    divId=elementId.id
    copySpanId=(elementId.id+"CopySpan")
    var copySpan = document.getElementById(copySpanId);
    copySpan.hidden=false;
}

function hideCopyIcon(elementId) {
    divId=elementId.id
    copySpanId=(elementId.id+"CopySpan")
    var copySpan = document.getElementById(copySpanId);
    copySpan.hidden=true;
 }

function copyLink(divId) {
    try {
        hrefId=divId+"Href"
        linkURL = document.getElementById(hrefId).href;

        var textArea = document.createElement("textarea");
        textArea.value = linkURL;
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
    
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
    

        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('copyLink: Copying text command was ' + msg);
        document.body.removeChild(textArea);
    }catch (err) {
        console.error('copyLink: Error Copying', err);
      }
}