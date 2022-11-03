function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
        dom += `<div class="col-lg-4 col-md-6 mb-4"><div class="card"><div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light"><img alt=\'${kw}' src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" class="img-fluid" /><a href="#!">  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div></a></div><div class="card-body"><h5 class="card-title">${kw}</h5><p class="card-text">  <b>${kw}</b> is one of best result for ${postTitle}. Everything in here is for references perpose only. Feel free to save and bookmark ${kw}</p><a href="${baseUrl}search/q=${encodeURIComponent(kw)}" class="btn btn-primary">Read</a></div></div></div`;
    }
}
