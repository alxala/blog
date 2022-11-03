function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
        dom += `<img alt=\'${kw}' class=\'img-fluid img-thumbnail\' src=\'https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}\'/>'+
'          <div class=\'card-body\'>  '+
'            <h2 class=\'card-text\' style=\'font-size: 1rem;\'>${kw}</h2>  '+
''+
'            ${kw}'+
'              <p class=\'card-text small\'>  '+
'                <i class=\'icon-map-marker\'/>  '+
'                ${kw}'+
'               </p>${kw}</a></h3><p align="justify"><b>${kw}</b> is one of best result for ${postTitle}. Everything in here is for references perpose only. Feel free to save and bookmark ${kw}</p>  '+
'            '+
'             <a class=\'btn btn-sm btn-secondary\' href=\'${baseUrl}search/q=${encodeURIComponent(kw)}\'>  '+
'               <i class=\'icon-info-sign\'/> More Details  '+
'             </a>  '+
'          </div>';
    }
}
