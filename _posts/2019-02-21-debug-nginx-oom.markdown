---
layout:     post
header-img: "img/post-bg-01.jpg"
title: Debug NGINX OOM
---

NGINX used to much memory and the Kernel OOM killed the process

``` log
[Thu Feb 21 02:23:49 2019] Out of memory: Kill process 54201 (nginx) score 900 or sacrifice child
[Thu Feb 21 02:23:49 2019] Killed process 54201 (nginx) total-vm:7430008kB, anon-rss:5617836kB, file-rss:2844kB
```

How do you find root cause? The process is no longer running.

We start by install the GNU debugger and symbol data for nginx

``` bash
sudo apt install gdb nginx-core-dbg
```

Running this script every minute, will core dump the process that uses over $size_limit

``` bash
#!/bin/bash

size_limit=1000000 # which total-vm size (in KB) do we create core dumps for
lock=high-mem-core.lock
cd /path/to/mountpoint/with/plenty/of/space

result=$(ps -A --sort -size --format size,pid  --no-headers|head -1)
pid=${result#* }
rss=${result% *}


if [ "$rss" -gt "$size_limit" -a ! -e "$lock" ]; then
        touch $lock
        gcore $pid
fi
```

Can you recognize strings?

``` bash
strings core.*
```

Start the debugger

``` bash
gdb $(which nginx) core.*
```

Read [nginx admin debugging guide](https://docs.nginx.com/nginx/admin-guide/monitoring/debugging/)
