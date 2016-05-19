---
layout:     post
header-img: "img/post-bg-01.jpg"
title: XenServer tricks
---

For at boote en virtuel maskine fra et CDROM drev, kræve det den skifter fra at være para vitualiseret (PV) til fuldt virtualiseret (HVM)

```bash
xe vm-param-set HVM-boot-policy="BIOS order" uuid=$vm-uuid
```

Bagefter kan man rette tilbage:

```bash
xe vm-param-set HVM-boot-policy="" uuid=$vm-uuid
```

Force paravirtual Ubuntu machine into single user mode:

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

# drop snapshot
```



