---
title: "En strid Windows driver: Error 1327"
layout:     post
header-img: "img/post-bg-01.jpg"
---
Lydkortet envy24 indsættes i en PC og driveren hentes fra: [viaarena.com](http://www.viaarena.com/Driver/Envy24_Family_DriverV540F.zip)

System drevet ligger på ´´´D:´´´ som er det eneste drev og Windows Installeren giver følgende fejl: ´´´Platform Error 1327. Invalid Drive: C:´´´

En google søgning på ´´´Error: 1327 invalid drive c:´´´ giver en artikel hos [citrix.com](http://support.citrix.com/article/CTX622290)

Denne fortæller der er en fejl opsætningen af installeren som kan rettes med værktøjet ´´´Orca´´´</p>

Windows SDK hentes og værktøjet ´´´Orca´´´ installeres fra ´´´c:\Program Files\Microsoft\Platform SDK\Bin\Orca.exe´´´ som beskrevet i [support.microsoft.com](http://support.microsoft.com/kb/q255905/)

Orca kan nu startes, og Platform.msi åbnes. En søgning med CTRL-F efter ´´´´C:´´´ afslører, Citrix artiklen ikke længere kan bruges, da ´´´C:´´´ referencen ligger i Property.ROOTDRIVE.

´´´C:´´´ rettes til system diskens drev navn, og ændringerne gemmes.

Herefter køre installeren fint igennem.
