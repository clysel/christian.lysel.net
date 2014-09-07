---
layout: post
status: publish
published: true
title: VMware, broadcom and high storage latency
author:
  display_name: clysel
  login: clysel
  email: webmaster@spindelnet.dk
  url: ''
author_login: clysel
author_email: webmaster@spindelnet.dk
wordpress_id: 122
wordpress_url: http://spindelnet.dk/?p=122
date: !binary |-
  MjAxNC0wNS0xNyAwODoyMjoxNCArMDIwMA==
date_gmt: !binary |-
  MjAxNC0wNS0xNyAwODoyMjoxNCArMDIwMA==
categories:
- Uncategorized
tags: []
comments: []
---
<p>We had high storage latency for a long time, and one day I&nbsp;noted a high packet drop, when pinging the vmkernel interface. The physical interface is a broadcom network adapter with multiple interfaces.

<p>So I guessed there was also packet drops for the iSCSI session. But how does one verify this?

<p>The vmkernel has a FreeBSD kernel structure , that can be used to verify there is a high TCP retransmit counters.

<p>
{% highlight sh %}
>~ # date ; vsish -e cat /net/tcpip/stats/tcp | grep rexm

Tue Dec 17 20:48:57 UTC 2013
 rexmttimeo:1840
 sndrexmitpack:785
 sndrexmitbyte:681557
 sndrexmitbad:33
 sack_rexmits:37
 sack_rexmit_bytes:53576
 >~ # date ; vsish -e cat /net/tcpip/stats/tcp | grep rexm
 Tue Dec 17 20:49:06 UTC 2013
  rexmttimeo:1905
  sndrexmitpack:785
  sndrexmitbyte:681557
  sndrexmitbad:33
  sack_rexmits:37
  sack_rexmit_bytes:53576
 >~ #
{% endhighlight %}
<p>In the above we observ 100 retransmit timeouts during 10 seconds.
<p>But after moving the vmnet iSCSI connections to intel interface, I can't reproduce any packet drops, even when going from two broadcom interfaces to only one intel interface, and therefor only the half bandwidth.</span>
