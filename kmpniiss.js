function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
        dom += `<div class="video-box"><div class="video-thumbnail"><img alt="${kw}" rel="noopener" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}"  target="_blank" width="290px" height="240px"><div class="video-detail"><strong><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></strong><p align="justify"><b>${kw}</b> is one of best result for ${postTitle}. Everything in here is for references perpose only. Feel free to save and bookmark ${kw}</p></div><br style="clear: both;"></div></div>`;
    }
}
