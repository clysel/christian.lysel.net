---
title: "UNIX tools"
layout:     post
header-img: "img/post-bg-01.jpg"
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
