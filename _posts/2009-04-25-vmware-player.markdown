---
layout: post
title: VMware Player
header-img: "img/home-bg.jpg"
---
<p>This article is copied from <a href="http://www.ffnn.nl/pages/articles/linux/vmware-player-image-creation.php" target="_blank">ffnn.nl</a>
<h1>VMWare Player Image Creation</h1>
<h2>Introduction</h2>
<h3>Background</h3><br />
<a href="http://www.vmware.com/">VMWare</a> recently introduced their <a title="VMWare Player website" href="http://www.vmware.com/products/player/">VMWare Player</a> and <a title="VMWare Server website" href="http://www.vmware.com/products/server/">VMWare Server</a> products for Windows and Linux. They offer some premade disk images for use with the Player and Server technology, but they do not offer software to create new <em>virtual machines</em> or <em>images</em>. Luckily you can create them on your own without too much hassle.
<p>I'm using VMWare Player under both Ubuntu Linux 5.04 Hoary Hedgehog and Ubuntu Linux 5.10 Breezy Badger. Installing the software is fairly straightforward and there are some <a title="Installation on Ubuntu Linux" href="http://www.ubuntuforums.org/showthread.php?t=84275">great guides over at the Ubuntu forum</a> on how to do this.
<p>The trick to getting more out the VMWare Player and VMWare Server than a few premade images is actually two-fold, let me guide you through the process of almost getting a free VMWare Workstation replacement.
<p>In this article I'll be referring mostly to VMWare Player, but you can also create <em>VMWare Server</em> images using the steps described.
<h2>A Fresh Start</h2>
<h3>Zero entropy</h3><br />
One of the "problems" you could have with the premade images for VMWare Player is that they don't come in the sizes and formatting you'd like. Also, since they are already filled with data you don't really benefit from sparse file support from your filesystem once you format them from within the virtual machine.
<p>The best thing to have would be a clean hard disk image in a reasonable size which you could use to format. If you start off with a nearly empty hard disk image, a filesystem like <em>ext2</em> or <em>ext3</em>, will be able to detect the file as being sparse and optimize its usage accordingly.
<p>There are two ways to get a clean disk image for your virtual machine.
<h3>Using QEMU</h3><br />
<a href="http://fabrice.bellard.free.fr/qemu/">QEMU</a> is an open source virtualization solution written by Fabrice Bellard. It supports a wide array of host operating systems and architectures and is able to virtualize a few different architectures as well. QEMU comes bundled with some tools related to virtualization and emulation.
<p>In one of the more recent versions, a tool called <em>qemu-img</em> is included. Using this tool you can create empty disk images for use with QEMU, but also for use with VMWare products like VMWare Player. This tool can easily be installed on a Linux system.
<p>But if you want to save some time, here's option two.
<h3>Download empty VMWare Player images</h3><br />
I've got some empty VMWare disk images available for download. They're compressed as ZIP files and because they are empty the files are very small. Uncompressing them on your own system will enable sparse files support, so don't worry once you start unpacking the larger disk images.
<p>The empty disk images come in three sizes: 500 megabytes, 10 gigabytes and 20 gigabytes. I reckon these should be large enough for all but the most demanding users.
<p>Download the empty VMWare Player disk images:
<ul>
<li><a title="Empty VMWare Player disk image, 500 megabytes unpacked" href="http://www.ffnn.nl/media/articles/linux/vmware-player-images/500M.zip">VMWare Player disk image, 500 megabytes unpacked</a> (.ZIP, 1 Kb)</li>
<li><a title="Empty VMWare Player disk image, 10 gigabytes unpacked" href="http://www.ffnn.nl/media/articles/linux/vmware-player-images/10G.zip">VMWare Player disk image, 10 gigabytes unpacked</a> (.ZIP, 3 Kb)</li>
<li><a title="Empty VMWare Player disk image, 20 gigabytes unpacked" href="http://www.ffnn.nl/media/articles/linux/vmware-player-images/20G.zip">VMWare Player disk image, 20 gigabytes unpacked</a> (.ZIP, 5 Kb)</li><br />
</ul><br />
The disk images above are freely available on the Internet.
<p>So, with the first barricade out of the way, let's look at the second problem: a so-called <em>VMX</em> file which contains the virtual machines description and properties.
<h2>Configuration Cleaning</h2>
<h3>Boilerplate</h3><br />
As I said earlier, you'll only need a VMWare Disk Image (a <em>VMDK</em> file) and a VMX file which describes the virtual machine. I've already presented you with three disk image downloads, and here is one file you can use as a template for your new virtual machines.
<ul>
<li><a title="Download VMWare Player VMX Template for creating clean new virtual machines" href="http://www.ffnn.nl/media/articles/linux/vmware-player-images/template.vmx">VMWare Player Virtual Machine Template</a> (.VMX, 1 Kb)</li><br />
</ul><br />
If you are getting errors regarding a mismatch between the disk images using <em>LSI Logic</em> formatting and the template using a <em>Bus Logic</em> virtual SCSI device, please download the template again. I've updated it to use the correct LSI Logic SCSI device.
<h3>Customizing the template</h3><br />
Once you've downloaded the configuration file template, rename it to suit your needs and open it up in a text editor like <em>vi</em>, <em>emacs</em> or Notepad if you're using Windows. The first few lines are the ones above "# DEFAULT SETTINGS UNDER THIS LINE" and they look like this:
<p><code> #!/usr/bin/vmware<br />
displayName = "Linux 2.6.x Host"<br />
guestOS = "other26xlinux"</code>
<p>memsize = "512"<br />
scsi0:0.fileName = "10G.vmdk"<br />
ide1:0.fileName = "cdrom.iso"
<p>The first line with the <em>shebang</em> can be ignored safely. The next few lines set a few options for the virtual machine, I'll explain these one by one.
<ul>
<li><em>displayName</em> defines the name of the virtual machine you will see in the titlebar and VMWare Player menu, you can use a long descriptive string if you want.</li>
<li><em>guestOS</em> is a short code for the operating system you will be running in the virtual machine. I have included a <a title="List of Operating System codes" href="../vmware-player.html#oscodes">list of all possible values below</a>.</li>
<li><em>memsize</em> defines the amount memory available to the virtual machine in megabytes. Valid entries are 32, 64, 128, 256, 512 and 1024.</li>
<li><em>scsi0:0.fileName</em> defines the hard disk image for the hard disk in the virtual machine. Use one of the downloads above to get the VMDK files.</li>
<li><em>ide1:0.fileName</em> defines the ISO file to use in the CD-ROM drive of the virtual machine. The filename is relative to the working directory.</li><br />
</ul><br />
Needless to say, you should change the values in the template to suit your needs.
<p><a title="Start of Operating System code list" name="oscodes"></a>
<h2>Supported Virtual Machine Operating Systems</h2>
<h3>One setting to rule them all</h3><br />
VMWare Player can be tweaked to perform better when virtualizing certain operating systems. Here is a list with all supported guest operating systems which you can enter in the <em>guestOS</em> parameter in the VMX configuration file.
<div class="column">
<h3>Microsoft Windows, 32-bit</h3>
<ul>
<li><em>winVista</em> = Windows Vista (experimental)</li>
<li><em>longhorn</em> = Windows Longhorn (experimental)</li>
<li><em>winNetBusiness</em> = Windows 2003 Small Business Server</li>
<li><em>winNetEnterprise</em> = Windows 2003 Enterprise Server</li>
<li><em>winNetStandard</em> = Windows 2003 Server</li>
<li><em>winNetWeb</em> = Windows 2003 Web Server Edition</li>
<li><em>winXPPro</em> = Windows XP Professional Edition</li>
<li><em>winXPHome</em> = Windows XP Home Edition</li>
<li><em>win2000AdvServ</em> = Windows 2000 Advanced Server</li>
<li><em>win2000Serv</em> = Windows 2000 Server</li>
<li><em>win2000Pro</em> = Windows 2000 Professional</li>
<li><em>winNT</em> = Windows NT</li>
<li><em>winMe</em> = Windows Me</li>
<li><em>win98</em> = Windows 98</li>
<li><em>win95</em> = Windows 95</li>
<li><em>win31</em> = Windows 3.1 / Windows 3.11</li>
<li><em>windows</em> = Other Windows</li><br />
</ul><br />
</div>
<div class="column">
<h3>Microsoft Windows, 64-bit</h3>
<ul>
<li><em>winVista-64</em> = Windows Vista x64 Edition (experimental)</li>
<li><em>longhorn-64</em> = Windows Longhorn x64 Edition (experimental)</li>
<li><em>winNetEnterprise-64</em> = Windows 2003 Enterprise Server x64 Edition</li>
<li><em>winNetStandard-64</em> = Windows 2003 Server x64 Edition</li>
<li><em>winXPPro-64</em> = Windows XP Professional x64 Edition</li><br />
</ul><br />
</div>
<div class="column">
<h3>Linux, 32-bit</h3>
<ul>
<li><em>ubuntu</em> = Ubuntu Linux</li>
<li><em>redhat</em> = Red Hat Linux</li>
<li><em>rhel4</em> = Red Hat Enterprise Linux 4</li>
<li><em>rhel3</em> = Red Hat Enterprise Linux 3</li>
<li><em>rhel2</em> = Red Hat Enterprise Linux 2</li>
<li><em>suse</em> = SuSE Linux</li>
<li><em>sles</em> = SuSE Linux Enterprise Server</li>
<li><em>mandrake</em> = Mandrake Linux</li>
<li><em>nld9</em> = Novell Linux Desktop 9</li>
<li><em>sjds</em> = Sun Java Desktop System</li>
<li><em>turbolinux</em> = Turbo Linux</li>
<li><em>other26xlinux</em> = Other Linux on a 2.6.x kernel</li>
<li><em>other24xlinux</em> = Other Linux on a 2.4.x kernel</li>
<li><em>linux</em> = Other Linux</li><br />
</ul><br />
</div>
<div class="column">
<h3>Linux, 64-bit</h3>
<ul>
<li><em>ubuntu-64</em> = Ubuntu Linux 64-bit</li>
<li><em>rhel4-64</em> = Red Hat Enterprise Linux 4 64-bit</li>
<li><em>rhel3-64</em> = Red Hat Enterprise Linux 3 64-bit</li>
<li><em>sles-64</em> = SuSE Linux Enterprise Server 64-bit</li>
<li><em>suse-64</em> = SuSE Linux 64-bit</li>
<li><em>other26xlinux-64</em> = Other Linux 2.6.x 64-bit</li>
<li><em>other24xlinux-64</em> = Other Linux 2.4.x 64-bit</li>
<li><em>otherlinux-64</em> = Other Linux 64-bit</li><br />
</ul><br />
</div>
<div class="column">
<h3>Sun Microsystems Solaris</h3>
<ul>
<li><em>solaris10-64</em> = Solaris 10 64-bit</li>
<li><em>solaris10</em> = Solaris 10</li>
<li><em>solaris9</em> = Solaris 9</li>
<li><em>solaris8</em> = Solaris 8</li>
<li><em>solaris7</em> = Solaris 7</li>
<li><em>solaris6</em> = Solaris 6</li>
<li><em>solaris</em> = Other Solaris</li><br />
</ul><br />
</div>
<div class="column">
<h3>Novell Netware</h3>
<ul>
<li><em>netware6</em> = Netware 6.x</li>
<li><em>netware5</em> = Netware 5.x</li>
<li><em>netware4</em> = Netware 4.x</li>
<li><em>netware</em> = Other Netware</li><br />
</ul><br />
</div>
<div class="column">
<h3>FreeBSD</h3>
<ul>
<li><em>freeBSD-64</em> = FreeBSD 64-bit</li>
<li><em>freeBSD</em> = FreeBSD</li><br />
</ul><br />
</div>
<div class="column">
<h3>Apple Darwin</h3>
<ul>
<li><em>darwin</em> = Apple Darwin (unsupported)</li><br />
</ul><br />
</div>
<h3>Other</h3>
<ul>
<li><em>other</em> = Other OS</li>
<li><em>other-64</em> = Other 64-bit OS</li><br />
</ul>
<h2>Finishing Touches</h2>
<h3>Example VMX</h3><br />
If you wanted to run the Ubuntu Linux 6.04 Dapper Drake Flight 3 preview release in a VMWare Player virtual machine, you should modify the first lines in the VMX file template to something like this:
<p><code> #!/usr/bin/vmware<br />
displayName = "Ubuntu Dapper Drake 6.04 Flight 3"<br />
guestOS = "ubuntu"</code>
<p>memsize = "512"<br />
scsi0:0.fileName = "20G.vmdk"<br />
ide1:0.fileName = "dapper-install-i386.iso"
<p>After saving this file to "dapper.vmx" you should run the VMWare Player:
<p><code> vmplayer ./dapper.vmx </code>
<p>If all goes well, the installation CD ISO image will boot and you will be able to install Dapper Drake to the virtual hard disk. Enjoy!
