---
layout:     post
header-img: "img/post-bg-01.jpg"
title: XenServer tricks
---

Booting from CDROM, requires the host is not running para vitualised (PV), but full virtualised (HVM)

```bash
xe vm-param-set HVM-boot-policy="BIOS order" uuid=$vm-uuid
```

This can be changed back with.

```bash
xe vm-param-set HVM-boot-policy="" uuid=$vm-uuid
```

Force paravirtual Ubuntu machine booting into single user mode:

```bash
xe vm-param-set uuid=$vm-uuid PV-args="-- rw quiet console=hvc0  init=/bin/bash"
```

Show virtual machines timeoffset:

```bash
xe vm-list  params=name-label,platform,uuid|grep timeoffset: -B2
```

Clone a running VM:

```bash
xe vm-snapshot uuid=$vm-uuid new-name-label=$new-template-name

xe vm-install template="$new-template-name" new-name-label="$new-server-name"
```

Backup script for clusters, xenservers or single vm's

See [xen-backup.sh](https://github.com/clysel/scripts/blob/master/xen-backup.sh)


