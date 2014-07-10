---
layout: post
status: publish
published: true
title: Redning af data fra harddisk
author:
  display_name: clysel
  login: clysel
  email: webmaster@spindelnet.dk
  url: ''
author_login: clysel
author_email: webmaster@spindelnet.dk
wordpress_id: 452
wordpress_url: http://christian.lysel.net/?p=452
date: !binary |-
  MjAwOS0wOS0wOSAyMjozMTowNCArMDIwMA==
date_gmt: !binary |-
  MjAwOS0wOS0wOSAyMDozMTowNCArMDIwMA==
categories:
- Software
tags:
- it
comments: []
---
<p>Helt generelt skal man s&oslash;rge for ikke at lave flere &aelig;ndringer p&aring; harddisken, s&aring; l&aelig;nge dataerne ikke er reddet.</p>
<p>Et godt v&aelig;rkt&oslash;j til at kopiere en defekt disk er <a href="http://www.garloff.de/kurt/linux/ddrescue/" target="_blank">dd_rescue</a>.</p>
<p>To helt gratis (under GNU licens) programmer, der kan anbefales til Linux/DOS/Windows/Mac er</p>
<ol>
<li><a href="http://www.cgsecurity.org/wiki/TestDisk" target="_blank">TestDisk</a>, finder partitioner og genskabe filsystemer fra filsystemets backup. Filer kan genskabes ved at bruge filsystemet:
<ol>
<li><a href="http://www.cgsecurity.org/wiki/TestDisk:_undelete_file_for_NTFS" target="_blank">Genetablering af slettet filer fra NTFS filsystem (Windows).</a></li>
<li><a href="http://www.cgsecurity.org/wiki/TestDisk:_undelete_file_for_FAT" target="_blank">Genetablering af slettet filer fra DOS filsystem.</a></li>
<li><a href="http://www.cgsecurity.org/wiki/TestDisk:_undelete_file_for_ext2" target="_blank">Genetablering af slettet filer fra ext2 filsystem.</a></li><br />
</ol><br />
</li></p>
<li><a href="http://www.cgsecurity.org/wiki/PhotoRec" target="_blank">PhotoRec</a> genkender og genskaber over 180 forskellige filformater fra Windows/Linux/Mac filsystemer. Filer genskabes ved at scanne hele harddisken igennem og bruger ikke filsystemet. B&oslash;r derfor kun bruges n&aring;r TestDisk ikke sl&aring;r til.</li><br />
</ol><br />
Dette og flere v&aelig;rkt&oslash;jer er samlet p&aring; <a href="http://partedmagic.com/" target="_blank">partedmagic</a> distributionen som bla. kan hentes som en live boot cdrom.</p>
<p>Ubuntu bruger kan skrive</p>
<pre>sudo aptitude install testdisk</pre><br />
En samling af lyde fra forskellige harddiske, er at finde p&aring; <a href="http://datacent.com/hard_drive_sounds.php" target="_blank">datacent.com</a></p>
