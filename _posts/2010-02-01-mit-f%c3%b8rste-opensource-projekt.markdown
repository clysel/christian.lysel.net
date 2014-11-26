---
title: "Mit første opensource projekt"
layout:     post
header-img: "img/post-bg-01.jpg"
---
<p>S&aring; er mit <a href="http://code.google.com/p/cisco7925g-eap-tls-deployment/" target="_blank">f&oslash;rste opensource projekt</a> skudt igang.</p>
<p>Jeg manglede et udruldningsv&aelig;rkt&oslash;j til at installere ca 1000 tr&aring;dl&oslash;se Cisco telefoner.</p>
<p>Konsulent huset, der havde lavet telefon installationen, havde ingen kompetencer til at hj&aelig;lpe, udover "brug WPA shared secret, og konfigurer det manuelt".</p>
<p>Derfor kikkede jeg p&aring; de forskellige standarder for Wireless sikkerhed og valget faldt p&aring; EAP-TLS, der har to svagheder:</p>
<ul>
<li>Bruger Id'et sendes i klar tekst.</li>
<li>Certifikater skal udrulles.</li><br />
</ul><br />
Bruger ID'et er basalt telefonens MAC adresse, denne sendes i forvejen i klar tekst, og udg&oslash;rer ikke noget problem. Certifikater kan udrulles automatisk med dette projekt.</p>
<p>Fordelene er derimod mange:</p>
<ul>
<li>EAP-TLS kan ogs&aring; bruges til kablet netv&aelig;rk.</li>
<li>Klienten validere AP'ets server certifikat via rod certifikatet.</li>
<li>AP'et validere Klientens klient certifikat via rod certifikatet.</li>
<li>En klient kan hurtigt black listes, ved at f&oslash;je den til den sorte liste.</li>
<li>Standarden er beskrevet i&nbsp; <a href="http://tools.ietf.org/html/rfc5216" target="_blank">RFC 5216</a> og er derfor nem tilg&aelig;ndelig, hvis man skulle fejlmelde en producents udstyr (hvilket allerede er tilf&aelig;ldet).</li>
<li>Standarden er underst&oslash;ttet af mange producenter.</li>
<li>Standarden er gammel.</li><br />
</ul><br />
Da hverken Cisco eller konsulent huset havde et udrulnings v&aelig;rkt&oslash;j, kikkede jeg i stedet p&aring; telefonens HTML formularer og byggede noget tilsvarende i Perl.</p>
<p>Derefter bliv der ogs&aring; lavet et lille script til at kikke efter nye telefoner i DHCP serverens logfil.</p>
<p>Udruldningen er meget simpel:</p>
<ul>
<li>T&aelig;nd s&aring; mange telefoner som muligt.</li>
<li>Sluk dem n&aring;r de virker.</li><br />
</ul><br />
Dog har Cisco flere irriterende "egenskaber":</p>
<ul>
<li>L&oslash;ber battteriet fladt, er telefonen tilbage til 2000-01-01 og certifikater bygget i 2010 er&nbsp; udgyldige.</li>
<li>Datoer efter 2030 starter forfra fra 1970.</li><br />
</ul><br />
Derfor s&aelig;ttes datoen som det f&oslash;rste til 1999-12-31 og certifikater bygges fra denne dato og 29 &aring;r frem.</p>
