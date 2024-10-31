---
title: "Redning af data fra harddisk"
layout:     post
header-img: "img/post-bg-01.jpg"
---
Helt generelt skal man sørge for ikke at lave flere ændringer på harddisken, så længe dataerne ikke er reddet.

Et godt værktøj til at kopiere en defekt disk er [dd_rescue](http://www.garloff.de/kurt/linux/ddrescue/). 

To helt gratis (under GNU licens) programmer, der kan anbefales til Linux/DOS/Windows/Mac er

 * [TestDisk](http://www.cgsecurity.org/wiki/TestDisk), finder partitioner og genskabe filsystemer fra filsystemets backup. Filer kan genskabes ved at bruge filsystemet:

   * [Genetablering af slettet filer fra Windows NTFS filsystem](http://www.cgsecurity.org/wiki/TestDisk:_undelete_file_for_NTFS).
   * [Genetablering af slettet filer fra DOS filsystem](http://www.cgsecurity.org/wiki/TestDisk:_undelete_file_for_FAT).
   * [Genetablering af slettet filer fra ext2 filsystem](http://www.cgsecurity.org/wiki/TestDisk:_undelete_file_for_ext2).

 * [PhotoRec](http://www.cgsecurity.org/wiki/PhotoRec) genkender og genskaber over 180 forskellige filformater fra Windows/Linux/Mac filsystemer. Filer genskabes ved at scanne hele harddisken igennem og bruger ikke filsystemet. Bør derfor kun bruges når TestDisk ikke slår til.

Dette og flere værktøjer er samlet på [partedmagic](http://partedmagic.com/) distributionen som bla. kan hentes som en live boot cdrom.

Ubuntu bruger kan skrive
```bash
sudo aptitude install testdisk
```

En samling af lyde fra forskellige harddiske, er at finde på [datacent.com](http://datacent.com/hard_drive_sounds.php).

Hvis PhotoRec og TestDisk ikke kan redde data kan man prøve med [R-Linux](https://www.r-studio.com/free-linux-recovery/) til både Linux og Windows

Eksempel på redning af data fra en NTFS parition, hvor vi bygger en ddrescue mapfile udfra NTFS bitmap oversigt over paritions data der bruges:
```bash
# ddru_ntfsbitmap /dev/sdb2 sdb2.mapfile
ddru_ntfsbitmap 1.5 20150111

Reading boot sector...
GNU ddrescue 1.23
Press Ctrl-C to interrupt
     ipos:        0 B, non-trimmed:        0 B,  current rate:     512 B/s
     opos:        0 B, non-scraped:        0 B,  average rate:     512 B/s
non-tried:        0 B,  bad-sector:        0 B,    error rate:       0 B/s
  rescued:      512 B,   bad areas:        0,        run time:          0s
pct rescued:  100.00%, read errors:        0,  remaining time:         n/a
                              time since last successful read:         n/a
Finished                                     

Reading bitmap inode from mft...
GNU ddrescue 1.23
Press Ctrl-C to interrupt
     ipos:    3221 MB, non-trimmed:        0 B,  current rate:   16384 B/s
     opos:        0 B, non-scraped:        0 B,  average rate:   16384 B/s
non-tried:        0 B,  bad-sector:        0 B,    error rate:       0 B/s
  rescued:    16384 B,   bad areas:        0,        run time:          0s
pct rescued:  100.00%, read errors:        0,  remaining time:         n/a
                              time since last successful read:         n/a
Finished                                     

............Reading part 0 of $Bitmap...........
GNU ddrescue 1.23
Press Ctrl-C to interrupt
     ipos:    3221 MB, non-trimmed:        0 B,  current rate:   9375 kB/s
     opos:    9318 kB, non-scraped:        0 B,  average rate:   9375 kB/s
non-tried:        0 B,  bad-sector:        0 B,    error rate:       0 B/s
  rescued:    9375 kB,   bad areas:        0,        run time:          0s
pct rescued:  100.00%, read errors:        0,  remaining time:         n/a
                              time since last successful read:         n/a
Finished                                     

............ Done reading part 0 of $Bitmap...........
# ddrescue -m sdb2.mapfile -f /dev/sdb2 ntfs.backup.img logfile

```

