---
title: "Motorola /  Symbol Wireless Switch WS 2000"
layout:     post
header-img: "img/post-bg-01.jpg"
---
## Default password

```
username: admin
password: symbol
```

## Reset to factory default

```
localhost login: NEW CFG BLOCK 0 : VALID
NEW CFG BLOCK 1 : NOT VALID
WS 2000 Boot Firmware Version 2.2.3.0-020R
Copyright(c) Symbol Technologies Inc. 2003. All rights reserved.
Press escape key to run boot firmware ......
boot> help
boot> passwd default symbol
boot> reset config
boot> reset system
resetting ...
```

## Gain root access

```
WS 2000 Wireless Switch 2.2.3.0-020R
Copyright (c) Symbol Technologies, Inc. 2003, 2004. All rights reserved.
<p>localhost login: admin
Password:
admin>system
admin(system)>exec date | ls -alt /console
drwxr-xr-x 1 root root 512 Jan 1 2003 .
drwxr-xr-x 1 root root 512 Jan 1 2003 ..
lrwxrwxrwx 1 root root 13 Jan 1 2003 arp -> /usr/sbin/arp
lrwxrwxrwx 1 root root 22 Jan 1 2003 ccdiag -> /cellcontroller/ccdiag
lrwxrwxrwx 1 root root 23 Jan 1 2003 ccstats -> /cellcontroller/ccstats
-rwxr-xr-x 1 root root 2062 Jan 1 2003 cformat
-rwxr-xr-x 1 root root 48 Jan 1 2003 cfumount
-r-s--x--x 1 root root 36514 Jan 1 2003 cli
lrwxrwxrwx 1 root root 9 Jan 1 2003 date -> /bin/date
lrwxrwxrwx 1 root root 7 Jan 1 2003 df -> /bin/df
lrwxrwxrwx 1 root root 11 Jan 1 2003 du -> /usr/bin/du
-rwxr-xr-x 1 root root 2788 Jan 1 2003 ftp_cfg.sh
-rwxr-xr-x 1 root root 2361 Jan 1 2003 ftp_core.sh
lrwxrwxrwx 1 root root 14 Jan 1 2003 ifconfig -> /sbin/ifconfig
lrwxrwxrwx 1 root root 12 Jan 1 2003 netstat -> /bin/netstat
lrwxrwxrwx 1 root root 25 Jan 1 2003 peekshmem -> /cellcontroller/peekshmem
lrwxrwxrwx 1 root root 9 Jan 1 2003 ping -> /bin/ping
lrwxrwxrwx 1 root root 17 Jan 1 2003 tcpdump -> /usr/sbin/tcpdump
-rwxr-xr-x 1 root root 2109 Jan 1 2003 tftp_cfg.sh
lrwxrwxrwx 1 root root 20 Jan 1 2003 traceroute -> /usr/sbin/traceroute
admin(system)>exec date | id
uid=0(root) gid=100(users)
```

## Boot log

```
NEW CFG BLOCK 0 : VALID
NEW CFG BLOCK 1 : NOT VALID
WS 2000 Boot Firmware Version 2.2.3.0-020R
Copyright(c) Symbol Technologies Inc. 2003. All rights reserved.
Press escape key to run boot firmware .............
Power On Self Test
testing ram : pass
testing nor flash : pass
testing nand flash : pass
testing ethernet : pass
Loading Linux Kernel
Booting From 0x1160-0000 ...
Uncompressing Linux............................................done.
booting the kernel.
Linux version 2.4.20_mvl31-ixdp4xx (root@mobion) (gcc version 3.3.1 (release/MontaVista 3.1)) #1 Mon June 7 10:00:00 PDT 2004
CPU: XScale-IXP4xx/IXC11xx [690541c1] revision 1 (ARMv5TE)
CPU: D undefined 5 cache
CPU: I cache: 32768 bytes, associativity 32, 32 byte lines, 32 sets
CPU: D cache: 32768 bytes, associativity 32, 32 byte lines, 32 sets
Machine: Intel IXDP425 Development Platform
On node 0 totalpages: 15360
zone(0): 15360 pages.
zone(1): 0 pages.
zone(2): 0 pages.
Kernel command line: mem=61440K console=ttyS1,19200 noinitrd rootflags=0 rootfstype=yaffs root=/dev/mtdblock0
Calibrating delay loop... 532.48 BogoMIPS
Memory: 59284KB available (1160K code, 237K data, 60K init)
XScale cache_lock_init called
Calling consistent alloc
low_level_page initialized
low_level_page @ 0xc4000000
icache_lock_fn @ 0xc4000080
dcache_lock_fn @ 0xc40000a0
icache_unlock_fn @ 0xc4000098
dcache_unlock_fn @ 0xc40000f0
Initializing TLB locking
TLB locking initialized
Mount-cache hash table entries: 1024 (order: 1, 8192 bytes)
Buffer-cache hash table entries: 1024 (order: 0, 4096 bytes)
Page-cache hash table entries: 16384 (order: 4, 65536 bytes)
POSIX conformance testing by UNIFIX
Initializing RT netlink socket
Starting kswapd
Disabling the Out Of Memory Killer
pty: 256 Unix98 ptys configured
Creating 3 MTD partitions on "NAND 64MiB 3,3V":
0x00000000-0x03c00000 : "SPIA flash partition 1"
0x03c00000-0x03fe0000 : "SPIA flash partition 2"
0x03fe0000-0x04000000 : "SPIA flash partition 3"
NetWinder Floating Point Emulator V0.95 (c) 1998-1999 Rebel.com
VFS: Mounted root (yaffs filesystem) readonly.
serial console detected. Disabling virtual terminals.
console=/dev/console
init started: BusyBox v0.60.3 (2004.5.6-12:00 +0000) multi-call binary
Starting pid 9, console /dev/console: '/etc/init.d/rcS'
Activating swap...
Mounting local filesystems...
/dev/shm on /var/log type tmpfs (rw,size=512k)
/dev/mtdblock1 on /save type yaffs (rw)
Initializing random number generator... done.
rm: cannot remove `/var/run/*.pid': No such file or directory
Using cf.o
Starting automount:[ OK ]
Using cfgstat.o
Testing Shadow Flash...passed
Shadow Flash Init Test Passed
Using lnkstat.o
Using /lib/modules/2.4.20_mvl31-ixdp4xx/kernel/drivers/ixp400/ixp400.o
Using throttle.o
Using /lib/modules/2.4.20_mvl31-ixdp4xx/kernel/drivers/net/mobion_eth.o
Initializing IXP425 NPE Ethernet driver software v. 1.1
CPU clock speed (approx) = 532 MHz
<p>Using /lib/modules/2.4.20_mvl31-ixdp4xx/kernel/net/bridge/bridge.o
Using shmemdev.o
Using pktdrvr.o
<p>Starting Apache....
start /apache/httpd
Starting portmap....
Starting inetd....
Loading drivers ...
Using igateway.o
Using dhpktdrv.o
Using drvpppoe.o
Using l2tpdrv.o
Using pptpdrv.o
Using tcpmssmangler.o
Starting iGateway Apps(1)....
Starting iGateway Apps(2)....
Using switch.o
Starting Wireless Switch....
Configuring iGateway....
Creating config files....
Starting SSHD....
Starting snmpd:
<p>Starting keepalived....
Starting Message Handler daemon
Using led.o
Starting pid 366, console /dev/console: '/sbin/agetty'
Starting pid 367, console /dev/console: '/sbin/agetty'
WS 2000 Wireless Switch 2.2.3.0-020R
Copyright (c) Symbol Technologies, Inc. 2003, 2004. All rights reserved.
localhost login: admin
Password:
Password is same as default password, please change the password
Enter new password:
Verify new password:
Authentication tokens updated successfully
Welcome to Symbol Technologies' WS 2000 Wireless Switch
admin>
```
