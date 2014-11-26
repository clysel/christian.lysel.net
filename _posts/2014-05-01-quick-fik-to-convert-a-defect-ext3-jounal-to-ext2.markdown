---
title: "Quick fik, to convert a defect ext3 jounal to ext2"
layout:     post
header-img: "img/post-bg-01.jpg"
---
<pre>#Turning ext3 to ext2 for /u04
<p>debugfs -w /dev/group-a/ums<br />
debugfs: ssv journal_uuid null<br />
debugfs: ssv journal_inum 0<br />
debugfs: feature ^needs_recovery<br />
debugfs: feature ^has_journal<br />
debugfs: quit</pre>
