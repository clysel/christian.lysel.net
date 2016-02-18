---
title: "UNIX tools"
layout:     post
header-img: "img/post-bg-01.jpg"
---

Print modified dates
{% highlight bash %}
find -printf "%T@ %p\n" | sort
{% endhighlight %}

Delete 7 days old files
{% highlight bash %}
find . -type f -mtime +7 -print0 | xargs -0 rm
{% endhighlight %}

Compress 3 days old files
{% highlight bash %}
find . -type f -mtime +3 -print0 | xargs -0 gzip
{% endhighlight %}

Handle all file names from find
{% highlight bash %}
find . -print0 | while read -d $'\0' filename  ; do some-script "$filename" ; done
{% endhighlight %}

Emulate ls with find
{% highlight bash %}
find . -printf "%M %u %g %s\t%Ab %Ad %AH:%AM\t%Cb %Cd %CH:%CM\t%P\n"
{% endhighlight %}

Print modifed files since 30/12 14:00
{% highlight bash %}
touch -t 30121400  /tmp/time find /path -cnewer /tmp/time
{% endhighlight %}

Adding timestamp to stdout
{% highlight bash %}
awk '{print strftime("%F %T",systime()),$_}'
{% endhighlight %}

Parallel execute uptime on server1, server2 and server3
{% highlight bash %}
parallel --tag --nonall -S server1,server2,server3 uptime
{% endhighlight %}

Log everything to syslog
{% highlight bash %}
exec 1> >(logger -s -t $(basename $0)) 2>&1
{% endhighlight %}

Let wireshark anayse a realtime remote network dump
{% highlight bash %}
ssh user@remote-host sudo tcpdump -U -s0 -w - 'not port 22' | wireshark -k -i -
{% endhighlight %}

Search/replace a bunch of files
{% highlight bash %}
sed -i 's|search|replace|' *file*pattern*
{% endhighlight %}

Delete linies in a bunch of files
{% highlight bash %}
sed -i '/text/d' *file*pattern*
{% endhighlight %}

Generate password
{% highlight bash %}
tr -cd '[:alnum:]' < /dev/urandom | fold -w16 | head -n1
{% endhighlight %}

IP calculations in Perl
{% highlight perl %}
sub dec2ip ($) { join '.', unpack 'C4', pack 'N', shift; }
sub ip2dec ($) { unpack N => pack CCCC => split /\./ => shift; }
my $guest_net=dec2ip( ($site) * ip2dec("0.1.0.0")+ 
	ip2dec("172.0.0.0") + ($rack)*ip2dec("0.0.4.0"))
{% endhighlight %}
