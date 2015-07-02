---
title: "UNIX tools"
layout:     post
header-img: "img/post-bg-01.jpg"
---
<p>
Print modified dates <pre>find -printf "%T@ %p\n"|sort</pre>
Delete 7 days old files <pre>find . -type f -mtime +7 |xargs rm</pre>
Compress 3 days old files <pre>find . -type f -mtime +3 |xargs gzip</pre>
Emulate ls with find <pre>find . -printf "%M %u %g %s\t%Ab %Ad %AH:%AM\t%Cb %Cd %CH:%CM\t%P\n"</pre><br />
Print modifed files since 30/12 14:00: <pre>touch -t 30121400  /tmp/time
find /path -cnewer /tmp/time</pre>
Adding timestamp to stdout <pre>awk &lsquo;{print strftime("%F %T",systime()),$_}&rsquo;</pre>
Parallel execute uptime on server1, server2 and server3<pre>parallel --tag --nonall -S server1,server2,server3 uptime</pre>
Log everything to syslog <pre>exec 1> >(logger -s -t $(basename $0)) 2>&1 </pre>
