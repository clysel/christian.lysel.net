---
layout: post
status: publish
published: true
title: UNIX tools
author:
  display_name: clysel
  login: clysel
  email: webmaster@spindelnet.dk
  url: ''
author_login: clysel
author_email: webmaster@spindelnet.dk
wordpress_id: 101
wordpress_url: http://spindelnet.dk/?p=101
date: !binary |-
  MjAxNC0wNS0wMSAxNjo1OTo0OSArMDIwMA==
date_gmt: !binary |-
  MjAxNC0wNS0wMSAxNjo1OTo0OSArMDIwMA==
categories:
- UNIX
tags: []
comments: []
---
<p>Print modified dates
<pre>find -printf "%T@ %p\n"|sort</pre><br />
Delete 7 days old files
<pre>find . -type f -mtime +7 |xargs rm</pre><br />
Compress 3 days old files
<pre>find . -type f -mtime +3 |xargs gzip</pre><br />
Emulate ls&nbsp;with find
<pre>find . -printf "%M %u %g %s\t%Ab %Ad %AH:%AM\t%Cb %Cd %CH:%CM\t%P\n"</pre><br />
Adding timestamp to stdout
<pre>awk &lsquo;{print strftime("%F %T",systime()),$_}&rsquo;</pre>
