setTimeout(() =&gt; {

  document.getElementById(&#39;newsletter-container&#39;).style.display = &#39;block&#39;;

  document.getElementById(&#39;fechar&#39;).addEventListener(&#39;click&#39;, function() {

    document.getElementById(&#39;newsletter-container&#39;).style.display = &#39;none&#39;;

  });

}, 2000);

document.getElementById(&#39;form-newsletter&#39;).addEventListener(&#39;submit&#39;, (e) =&gt; {
         
         

  e.preventDefault();

  const email = document.getElementById(&#39;email-input&#39;).value;

  fetch(&#39;https://formspree.io/f/xkggpegz&#39;, {

    method: &#39;POST&#39;,

    body: JSON.stringify({ email }),

    headers: { &#39;Content-Type&#39;: &#39;application/json&#39; }

  })

then((res) =&gt; res.json())

  .then((data) =&gt; console.log(&#39;E-mail enviado:&#39;, data))

  .catch((err) =&gt; console.error(&#39;Erro:&#39;, err));


  document.getElementById(&#39;newsletter-container&#39;).style.display = &#39;none&#39;;

});
         
document.getElementById(&#39;botao-submit&#39;).addEventListener(&#39;click&#39;, function() {

  document.getElementById(&#39;obrigado&#39;).style.display = &#39;block&#39;;

});

