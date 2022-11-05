function myFunction() {
	 adc =`
    <script type="text/javascript">
	    atOptions = {
		    'key' : '35ff9bfde9c6692e37b4dc39e859a703',
		    'format' : 'iframe',
		    'height' : 250,
		    'width' : 300,
        'align' : 'center'
		    'params' : {}
	    };
	    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://wimpmustsyllabus.com/35ff9bfde9c6692e37b4dc39e859a703/invoke.js"></scr' + 'ipt>');
    </script>
    `;


	info = `<!-- Histats.com  START  (aync)-->
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4710974,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4710974&101" alt="" border="0"></a></noscript>
<!-- Histats.com  END  -->`;

  document.getElementById("footer").innerHTML = adc;
  document.getElementById("footer").innerHTML = info;
}
