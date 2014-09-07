---
layout: post
status: publish
published: true
title: Perl, making IP calculations
author:
  display_name: clysel
  login: clysel
  email: webmaster@spindelnet.dk
  url: ''
author_login: clysel
author_email: webmaster@spindelnet.dk
wordpress_id: 111
wordpress_url: http://spindelnet.dk/?p=111
date: !binary |-
  MjAxNC0wNS0wMSAxNzozMToyMyArMDIwMA==
date_gmt: !binary |-
  MjAxNC0wNS0wMSAxNzozMToyMyArMDIwMA==
categories:
- Uncategorized
tags: []
comments: []
---
{% highlight perl %}
sub dec2ip ($) { join '.', unpack 'C4', pack 'N', shift; }
sub ip2dec ($) { unpack N => pack CCCC => split /\./ => shift; }
my $guest_net=dec2ip( ($site) * ip2dec("0.1.0.0")+ 
	ip2dec("172.0.0.0") + ($rack)*ip2dec("0.0.4.0"))
{% endhighlight %}

