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

{% highlight bash %}
xe vm-param-set HVM-boot-policy="" uuid=$vm-uuid
{% endhighlight %}

Force paravirtual Ubuntu machine into single user mode:

{% highlight bash %}
xe vm-param-set uuid=$vm-uuid PV-args="-- rw quiet console=hvc0  init=/bin/bash"
{% endhighlight %}

Show virtual machines timeoffset:

{% highlight bash %}
xe vm-list  params=name-label,platform,uuid|grep timeoffset: -B2
{% endhighlight %}
