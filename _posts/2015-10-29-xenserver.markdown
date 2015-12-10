---
layout:     post
header-img: "img/post-bg-01.jpg"
title: XenServer triks
---

For at boote en virtuel maskine fra et CDROM drev, kræve det den skifter fra at være para vitualiseret (PV) til fuldt virtualiseret (HVM)

```
xe vm-param-set HVM-boot-policy="BIOS order" uuid=$vm-uuid
```

Bagefter kan man rette tilbage:

```
xe vm-param-set HVM-boot-policy="" uuid=$vm-uuid
```

Force paravirtual Ubuntu machine into single user mode:

```
xe vm-param-set uuid=$vm-uuid PV-args="-- rw quiet console=hvc0  init=/bin/bash"
```

Show virtual machines timeoffset:

```
xe vm-list  params=name-label,platform,uuid|grep timeoffset: -B2
```