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
