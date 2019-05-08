---
title: "UNIX tools"
layout:     post
header-img: "img/post-bg-01.jpg"
---

Print modified dates

```bash
find -printf "%T@ %p\n" | sort
```

Delete 7 days old files

```bash
find . -type f -mtime +7 -print0 | xargs -0 rm
```

Compress 3 days old files

```bash
find . -type f -mtime +3 -print0 | xargs -0 gzip
```

Handle all file names from find

```bash
find . -print0 | while read -d $'\0' filename  ; do some-script "$filename" ; done
```

Emulate ls with find

```bash
find . -printf "%M %u %g %s\t%Ab %Ad %AH:%AM\t%Cb %Cd %CH:%CM\t%P\n"
```

Print modifed files since 30/12 14:00

```bash
touch -t 30121400  /tmp/time find /path -cnewer /tmp/time
```

Adding timestamp to stdout

```bash
gawk '{print strftime("%F %T",systime()),$_}'
```

Log which process makes disk IO over time
```bash
iotop -obqqqd 1 | gawk '{print strftime("%F %T",systime()),$_}'
```

Parallel execute uptime on server1, server2 and server3

```bash
parallel --tag --nonall -S server1,server2,server3 uptime
```

Log everything to syslog

```bash
exec 1> >(logger -s -t $(basename $0)) 2>&1
```

Let wireshark anayse a realtime remote network dump

```bash
ssh user@remote-host sudo tcpdump -U -s0 -w - 'not port 22' | wireshark -k -i -
```

Let tcpdump remote dump locally to 50Mbyte files

```bash
ssh root@remote-host tcpdump -ni remote-interface -w - | tcpdump -r - -w /local/path//file- -C 50
```

Collect network meta data from sflow devices and analyse, for more information http://www.pmacct.net/ 
```bash
$ tee pmacctd.conf <<EOF
daemonize: false
interface: em1
plugins: sfprobe, memory[a]
! networks_file: /tmp/networks.lst
! “aggregate” supports: src_mac,dst_mac,vlan,src_host,dst_host,
! src_net,dst_net,src_as,dst_as,src_port,dst_port,tos,proto,
! sum_mac,sum_host,sum_net,sum_as,sum_port,tag,class,tcpflags
!
aggregate[a]: src_host,dst_host,dst_port,proto
imt_path[a]: /tmp/a
!
plugin_pipe_size': 100000
plugin_buffer_size: 20000
EOF

$ sudo pmacctd -f pmacctd.conf &
[2] 2696
$ sudo pmacct -p /tmp/a -s -T bytes
```

Search/replace a bunch of files

```bash
sed -i 's|search|replace|' *file*pattern*
```

Delete linies in a bunch of files

```bash
sed -i '/text/d' *file*pattern*
```

Generate password

```bash
tr -cd '[:alnum:]' < /dev/urandom | fold -w16 | head -n1
```

IP calculations in Perl

```perl
sub dec2ip ($) { join '.', unpack 'C4', pack 'N', shift; }
sub ip2dec ($) { unpack N => pack CCCC => split /\./ => shift; }
my $guest_net=dec2ip( ($site) * ip2dec("0.1.0.0")+ 
	ip2dec("172.0.0.0") + ($rack)*ip2dec("0.0.4.0"))
```
