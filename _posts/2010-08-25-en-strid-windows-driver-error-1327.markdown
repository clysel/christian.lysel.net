---
layout: post
status: publish
published: true
title: ! 'En strid Windows driver: Error 1327. '
author:
  display_name: clysel
  login: clysel
  email: webmaster@spindelnet.dk
  url: ''
author_login: clysel
author_email: webmaster@spindelnet.dk
wordpress_id: 545
wordpress_url: http://christian.lysel.net/?p=545
date: !binary |-
  MjAxMC0wOC0yNSAyMzoxNzo0OCArMDIwMA==
date_gmt: !binary |-
  MjAxMC0wOC0yNSAyMToxNzo0OCArMDIwMA==
categories:
- Software
tags: []
comments: []
---
<p>Lydkortet envy24 inds&aelig;ttes i en PC og driveren hentes fra&nbsp;<a href="http://www.viaarena.com/Driver/Envy24_Family_DriverV540F.zip" target="_blank">VIA</a>.</p>
<p>Windows Installeren giver f&oslash;lgende fejl: &ldquo;Platform Error 1327. Invalid Drive: C:&rdquo;</p>
<p>En google s&oslash;gning p&aring; &ldquo;Error: 1327 invalid drive c:&rdquo; giver en artikel hos&nbsp;<a href="http://support.citrix.com/article/CTX622290" target="_blank">citrix.com</a></p>
<p>Denne fort&aelig;ller der er en fejl ops&aelig;tningen af installeren som kan rettes med v&aelig;rkt&oslash;jet &ldquo;Orca&rdquo;.</p>
<p>Windows SDK hentes og v&aelig;rkt&oslash;jet Orca installeres fra &ldquo;Program FilesMicrosoft Platform SDKBinOrca.exe&rdquo; som beskrevet i&nbsp;<a href="http://support.microsoft.com/kb/q255905/" target="_blank">q255905</a>.</p>
<p>Orca kan nu startes, og Platform.msi &aring;bnes. En s&oslash;gning med CTRL-F efter &ldquo;C:&rdquo; afsl&oslash;rer Citrix artiklen ikke l&aelig;ngere kan bruges, da &ldquo;C:&rdquo; referencen ligger i Property.ROOTDRIVE.</p>
<p>&ldquo;C:&rdquo; rettes til system diskens drev navn, og &aelig;ndringerne gemmes.</p>
<p>Herefter k&oslash;rer installeren fint igennem.</p>
