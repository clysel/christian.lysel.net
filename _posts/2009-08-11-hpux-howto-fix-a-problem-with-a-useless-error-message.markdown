---
layout: post
status: publish
published: true
title: HPUX Howto fix a problem with a useless error message.
author:
  display_name: clysel
  login: clysel
  email: webmaster@spindelnet.dk
  url: ''
author_login: clysel
author_email: webmaster@spindelnet.dk
wordpress_id: 88
wordpress_url: http://spindelnet.dk/?p=88
date: !binary |-
  MjAwOS0wOC0xMSAxOToxNzowNiArMDIwMA==
date_gmt: !binary |-
  MjAwOS0wOC0xMSAxNzoxNzowNiArMDIwMA==
categories:
- UNIX
tags: []
comments: []
---
<h1>The problem</h1><br />
rpcd won't start:
<pre>hpux# ./Rpcd start<br />
starting the DCE RPC Daemon<br />
/opt/dce/sbin/rpcd<br />
2009-08-11-16:35:01.723+00:00I----- dced FATAL dhd general main.c 880 0x77f6f5a0<br />
Initialization (working directory) failed, status=0x00000002.<br />
EXIT CODE: 1<br />
</pre>
<h1>Finding a solution</h1><br />
<a href="http://h21007.www2.hp.com/portal/site/dspp/menuitem.863c3e4cbcdc3f3515b49c108973a801/?ciid=61086d6e1de021106d6e1de02110275d6e10RCRD" target="_blank">tusc</a> is tool like strace on linux, and
<pre>hpux# ./tusc /opt/dce/sbin/rpcd<br />
execve("/opt/dce/sbin/rpcd", 0x77ff0498, 0x77ff04a0) ..... = 0 [32-bit]<br />
utssys(0x77ff2580, 0, 0) ................................. = 0<br />
open("/usr/lib/dld.sl", O_RDONLY, 02224) ................. = 3<br />
read(3, "02v010e0512@ ".., 128) ....... = 128<br />
lseek(3, 128, SEEK_SET) .................................. = 128<br />
read(3, "1004( 02ac".., 48) ........ = 48<br />
mmap(NULL, 131244, PROT_READ|PROT_EXEC, MAP_SHARED|MAP_SHLIB, 3, 36864) = 0xc0010000<br />
mmap(NULL, 14696, PROT_READ|PROT_WRITE|PROT_EXEC, MAP_PRIVATE|MAP_SHLIB, 3, 172032) = 0x77fec000<br />
....<br />
open("/opt/dcelocal/var/adm/time/dts_shared_memory_id", O_RDONLY, 0666) ERR#2 ENOENT<br />
open("/opt/dcelocal/var/svc/routing", O_RDONLY, 0666) .... ERR#2 ENOENT<br />
open("/opt/dce/lib/zoneinfo/localtime", O_RDONLY, 0) ..... ERR#2 ENOENT<br />
....<br />
</pre>
<h1>The fix</h1>
<pre>hpux# cd /opt/dcelocal<br />
hpux# ln -s /var/opt/dce var<br />
</pre>
