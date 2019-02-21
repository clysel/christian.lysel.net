---
layout:     post
header-img: "img/post-bg-01.jpg"
title: MySQL performance
---
Download from [www.percona.com](https://www.percona.com/downloads/percona-toolkit/LATEST/) and [MAN page](https://www.percona.com/doc/percona-toolkit/LATEST/pt-query-digest.html)

Example
```bash
tcpdump -s0 -x -nn -q -tttt -i any port 3306 > mysql.tcp.txt
pt-query-digest --type tcpdump mysql.tcp.txt > mysql.report.txt
```


