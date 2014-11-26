---
title: "Perl, making IP calculations"
layout:     post
header-img: "img/post-bg-01.jpg"
---
{% highlight perl %}
sub dec2ip ($) { join '.', unpack 'C4', pack 'N', shift; }
sub ip2dec ($) { unpack N => pack CCCC => split /\./ => shift; }
my $guest_net=dec2ip( ($site) * ip2dec("0.1.0.0")+ 
	ip2dec("172.0.0.0") + ($rack)*ip2dec("0.0.4.0"))
{% endhighlight %}

