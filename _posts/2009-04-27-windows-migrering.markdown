---
layout:     post
title:      "Windows migrering"
header-img: "img/post-bg-01.jpg"
---
<p>Virtualbox har en udm&aelig;rket guide til hvordan man migrere en Windows server:</p>
<p><a href="http://www.virtualbox.org/wiki/Migrate_Windows" target="_blank">virutalbox.org</a></p>
<p>En lokal kopi af <a href="http://christian.lysel.net/wp-content/uploads/2009/04/mergeide.zip">MergeIDE</a>.</p>
<p>Mirror:</p>
<div class="wikipage">
<div id="searchable">
<h1 id="HowtomigrateexistingWindowsinstallationstoVirtualBox">How to migrate existing Windows installations to VirtualBox</h1><br />
Windows installations, unlike Linux, cannot easily be moved from one hardware to another. This is not just due to Microsoft's activation mechanism but the fact that the installed kernel and drivers depend on the actual hardware.</p>
<p>This document explains the common pitfalls and how to workaround these. We assume that either a physical Windows installation or a VMware image is the source of migration. It is also assumed that a suitable virtual disk image (either VDI or VMDK for VirtualBox >= 1.4) is already present.</p>
<h2 id="HAL">HAL</h2><br />
The hardware dependent portion of the Windows kernel is dubbed "Hardware Abstraction Layer" (HAL). While hardware vendor specific HALs have become very rare, there are still a number of HALs shipped by Microsoft. Here are the most common HALs (for more information, refer to this article: <a class="ext-link" href="http://support.microsoft.com/kb/309283"><span class="icon">http://support.microsoft.com/kb/309283</span></a>):</p>
<ul>
<li><tt>Hal.dll</tt> (Standard PC)</li>
<li><tt>Halacpi.dll</tt> (ACPI HAL)</li>
<li><tt>Halaacpi.dll</tt> (ACPI HAL with IO APIC)</li><br />
</ul><br />
If you perform a Windows installation with default settings in VirtualBox, <tt>Halacpi.dll</tt> will be chosen as VirtualBox enables ACPI by default but disables the IO APIC by default. A standard installation on a modern physical PC or VMware will usually result in <tt>Halaacpi.dll</tt> being chosen as most systems nowadays have an IO APIC and VMware chose to virtualize it by default (VirtualBox disables the IO APIC because it is more expensive to virtualize than a standard PIC). So as a first step, you either have to enable IO APIC support in VirtualBox or replace the HAL. Replacing the HAL can be done by booting the VM from the Windows CD and performing a repair installation.</p>
<h2 id="HardDiskSupport">Hard Disk Support</h2><br />
For reasons we don't understand, Windows memorizes which IDE/ATA controller it was installed on and fails to boot in case the controller changes. This is very annoying because you will run into this problem with basically all migrated images. The solution here is to perform several modifications to the Windows registry. This can be done while the installation is still running on the original system because all it does is relax the IDE checks. Therefore the installation will continue to work on the original system after the modification. The easiest way is to use the excellent <a class="attachment" title="Attachment Migrate_Windows: MergeIDE.zip" href="http://www.virtualbox.org/attachment/wiki/Migrate_Windows/MergeIDE.zip">MergeIDE</a> utility from the German c't computer magazine.</p>
<h2 id="agp440.sysintelppm.sys">agp440.sys / intelppm.sys</h2><br />
There are a few Windows device drivers that does not play nice on VirtualBox' hardware. Many physical PC systems (and VMware) have a AGP graphics bus which will cause <tt>agp440.sys</tt> to be installed. VirtualBox' virtual graphics card is on the PCI bus and the driver will cause a system crash. The most correct approach is to boot the recovery console from the Windows installation CD and disable this service. However, it is also possible to just rename/delete <tt>agp440.sys</tt> the <tt>C:WindowsSYSTEM32drivers</tt> directory. Here is a knowledge base article containing more information: <a class="ext-link" href="http://support.microsoft.com/kb/324764"><span class="icon">http://support.microsoft.com/kb/324764</span></a></p>
<p>A similar problem may exist with <tt>intelppm.sys</tt>, which can also cause a hang of the guest OS.</p>
<p>After the above steps, your Windows installation should work fine in VirtualBox.</div><br />
</div></p>
