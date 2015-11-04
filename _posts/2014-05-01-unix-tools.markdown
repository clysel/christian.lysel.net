---
title: "UNIX tools"
layout:     post
header-img: "img/post-bg-01.jpg"
---
<p>
Print modified dates
  <pre>find -printf "%T@ %p\n" | sort</pre>

Delete 7 days old files
 <pre>find . -type f -mtime +7 -print0 | xargs -0 rm</pre>

Compress 3 days old files
 <pre>find . -type f -mtime +3 -print0 | xargs -0 gzip</pre>
 
Handle all file names from find
 <pre>find . -print0 | while read -d $'\0' filename  ; do some-script "$filename" ; done</pre>

Emulate ls with find
 <pre>find . -printf "%M %u %g %s\t%Ab %Ad %AH:%AM\t%Cb %Cd %CH:%CM\t%P\n"</pre>
 
Print modifed files since 30/12 14:00
 <pre>touch -t 30121400  /tmp/time find /path -cnewer /tmp/time</pre>
 
Adding timestamp to stdout
 <pre>awk '{print strftime("%F %T",systime()),$_}'</pre>
 
Parallel execute uptime on server1, server2 and server3
 <pre>parallel --tag --nonall -S server1,server2,server3 uptime</pre>

Log everything to syslog
 <pre>exec 1> >(logger -s -t $(basename $0)) 2>&1 </pre>
 
Let wireshark anayse a realtime remote network dump
 <pre>ssh <remote-host> sudo tcpdump -U -s0 -w - 'not port 22' | wireshark -k -i -</pre>
