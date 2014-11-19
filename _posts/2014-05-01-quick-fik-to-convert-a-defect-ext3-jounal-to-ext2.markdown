---
layout: post
status: publish
published: true
title: Quick fik, to convert a defect ext3 jounal to ext2
author:
  display_name: clysel
  login: clysel
  email: webmaster@spindelnet.dk
  url: ''
author_login: clysel
author_email: webmaster@spindelnet.dk
wordpress_id: 109
wordpress_url: http://spindelnet.dk/?p=109
date: !binary |-
  MjAxNC0wNS0wMSAxNzoyODo1NyArMDIwMA==
date_gmt: !binary |-
  MjAxNC0wNS0wMSAxNzoyODo1NyArMDIwMA==
categories:
- Uncategorized
tags: []
comments: []
---
<pre>#Turning ext3 to ext2 for /u04
<p>debugfs -w /dev/group-a/ums<br />
debugfs: ssv journal_uuid null<br />
debugfs: ssv journal_inum 0<br />
debugfs: feature ^needs_recovery<br />
debugfs: feature ^has_journal<br />
debugfs: quit</pre>
