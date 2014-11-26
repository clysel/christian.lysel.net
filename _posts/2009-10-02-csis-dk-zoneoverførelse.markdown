---
layout: post
title: csis.dk zoneoverførelse
header-img: "img/home-bg.jpg"
---
<p>CSIS har efter version2.dk artiklen "<a href="http://www.version2.dk/artikel/12298-efter-ddos-angreb-dansk-webhotel-beskyldes-for-elendig-sikkerhed" target="_blank">Efter Ddos-angreb: Dansk webhotel beskyldes for elendig sikkerhed</a>" sl&aring;et zone overf&oslash;relsen af deres domain fra.</p>
<p>For en god ordensskyld er her en kopi af zonen som den s&aring; ud den 30. September 2009 via <a href="https://www.dk-hostmaster.dk/index.php?input=csis.dk&amp;ns=&amp;axfr=on&amp;id=94&amp;lang=da" target="_blank">www.dk-hostmaster.dk</a>:</p>
<pre>; Candidate name server: ns5.gratisdns.dk<br />
; Candidate name server: ns1.csis.dk<br />
; Candidate name server: ns2.gratisdns.dk<br />
; Candidate name server: ns4.gratisdns.dk<br />
; Candidate name server: ns3.gratisdns.dk<br />
; Candidate name server: ns1.gratisdns.dk<br />
; Candidate name server: ns2.csis.dk<br />
; Asked for csis.dk, type AXFR<br />
; No response from ns5.gratisdns.dk<br />
csis.dk. SOA ns1.csis.dk. dns.csis.dk. 2009091400 10800 3600 604800 3600<br />
csis.dk. NS ns1.csis.dk.<br />
csis.dk. NS ns2.csis.dk.<br />
csis.dk. NS ns1.gratisdns.dk.<br />
csis.dk. NS ns2.gratisdns.dk.<br />
csis.dk. NS ns3.gratisdns.dk.<br />
csis.dk. NS ns4.gratisdns.dk.<br />
csis.dk. NS ns5.gratisdns.dk.<br />
csis.dk. A 194.255.85.34<br />
csis.dk. MX 5 spamwall1.csis.dk.<br />
csis.dk. MX 10 spamwall2.csis.dk.<br />
csis.dk. TXT "v=spf1 include:spf.mailfirewall.dk ip4:93.163.67.230 ip4:80.62.216.19 -all"<br />
bannerscanner.csis.dk. A 192.168.103.230<br />
bs.csis.dk. A 194.255.85.164<br />
bugzilla.csis.dk. A 194.255.85.134<br />
cbind.csis.dk. A 194.255.85.184<br />
cbind.csis.dk. A 194.255.85.183<br />
cbind01.csis.dk. A 194.255.85.184<br />
cbind02.csis.dk. A 194.255.85.183<br />
certserv.csis.dk. CNAME knabro.csis.dk.<br />
crm.csis.dk. A 192.168.106.37<br />
csislog.csis.dk. A 194.255.85.131<br />
csistest.csis.dk. A 194.255.85.96<br />
cvsweb.csis.dk. A 194.255.85.134<br />
db01.csis.dk. A 194.255.85.131<br />
db02.csis.dk. A 194.255.85.130<br />
demo.csis.dk. A 80.166.57.205<br />
dev.csis.dk. A 194.255.85.134<br />
ecrime.csis.dk. A 192.168.199.130<br />
gevno.csis.dk. A 80.166.57.202<br />
heimdal.csis.dk. A 192.168.103.73<br />
heimdal-mu.csis.dk. A 192.168.230.139<br />
jwi.csis.dk. A 80.62.115.214<br />
knabro.csis.dk. A 83.89.217.82<br />
ks.csis.dk. CNAME tdglite.csis.dk.<br />
ks2.csis.dk. A 194.255.85.136<br />
kvm.csis.dk. A 192.168.106.2<br />
log1.csis.dk. A 194.255.85.131<br />
logcollector.csis.dk. A 194.255.85.130<br />
logger.csis.dk. CNAME logcollector.csis.dk.<br />
logging.csis.dk. CNAME tdglite.csis.dk.<br />
logging01.csis.dk. A 192.168.103.13<br />
logging02.csis.dk. A 192.168.103.14<br />
mail.csis.dk. A 194.255.85.12<br />
mailfirewall1.csis.dk. A 194.255.85.132<br />
mailfirewall2.csis.dk. A 194.255.85.133<br />
mailhotel1.csis.dk. A 194.255.85.37<br />
mailstats.csis.dk. A 194.255.85.36<br />
mfw1.csis.dk. A 194.255.85.40<br />
mfw2.csis.dk. A 194.255.85.41<br />
mfw3.csis.dk. A 194.255.85.42<br />
mfw4.csis.dk. A 194.255.85.43<br />
mfw5.csis.dk. A 194.255.85.44<br />
mfw6.csis.dk. A 194.255.85.45<br />
mfw7.csis.dk. A 194.255.85.46<br />
mfw8.csis.dk. A 194.255.85.47<br />
mfw9.csis.dk. A 194.255.85.48<br />
mfwtest.csis.dk. A 192.168.106.9<br />
mfwtest.csis.dk. MX 10 mfwtest.csis.dk.<br />
mstats.csis.dk. A 194.255.85.134<br />
nagios.csis.dk. A 194.255.85.134<br />
ns1.csis.dk. A 194.255.85.5<br />
ns2.csis.dk. A 194.255.85.6<br />
office.csis.dk. CNAME knabro.csis.dk.<br />
pos.csis.dk. CNAME svn.tdg.csis.dk.<br />
proxytest.csis.dk. A 194.255.85.134<br />
rrd.csis.dk. A 194.255.85.134<br />
sch.csis.dk. A 194.255.85.134<br />
secns01.csis.dk. A 194.255.85.60<br />
secns02.csis.dk. A 194.255.85.61<br />
sftp.csis.dk. A 194.255.85.25<br />
sms.csis.dk. A 192.168.106.9<br />
sms.csis.dk. MX 10 sms.csis.dk.<br />
spamwall1.csis.dk. A 194.255.85.3<br />
spamwall2.csis.dk. A 194.255.85.2<br />
st.csis.dk. A 194.255.85.134<br />
statistics.csis.dk. A 194.255.85.134<br />
tdg.csis.dk. NS ns1.csis.dk.<br />
tdg.csis.dk. NS ns2.csis.dk.<br />
tdglite.csis.dk. A 194.255.85.70<br />
trac.csis.dk. A 192.168.106.61<br />
ts.csis.dk. A 194.255.85.11<br />
tsg.csis.dk. A 194.255.85.10<br />
twiki.csis.dk. CNAME httpd.csis.internal.<br />
update.csis.dk. A 194.255.85.36<br />
updbb.csis.dk. CNAME update.csis.dk.<br />
vcbind01.csis.dk. A 92.43.123.157<br />
vcbind02.csis.dk. A 92.43.123.158<br />
vmware1.csis.dk. A 192.168.107.11<br />
vmware2.csis.dk. A 192.168.107.21<br />
vpn.csis.dk. A 194.255.85.17<br />
weball.csis.dk. A 194.255.85.34<br />
weball.csis.dk. MX 10 mailfirewall2.csis.dk.<br />
weball.csis.dk. MX 20 mailfirewall1.csis.dk.<br />
weball.csis.dk. MX 30 weball.csis.dk.<br />
weball.csis.dk. TXT "v=spf1 ip4:194.255.85.2 ip4:194.255.85.3 ip4:194.255.85.132 ip4:194.255.85.133 ip4:194.255.85.34 -all"<br />
webbank.csis.dk. A 192.168.103.72<br />
webbank-mu.csis.dk. A 192.168.230.149<br />
webhotel1.csis.dk. A 194.255.85.152<br />
webscan01.csis.dk. A 192.168.103.130<br />
webscan02.csis.dk. A 192.168.103.131<br />
webscan03.csis.dk. A 194.255.85.173<br />
webscan04.csis.dk. A 194.255.85.174<br />
webscan05.csis.dk. A 194.255.85.175<br />
webvanvader.csis.dk. A 194.255.85.187<br />
ws03.csis.dk. CNAME webscan03.csis.dk.<br />
ws04.csis.dk. CNAME webscan04.csis.dk.<br />
ws05.csis.dk. CNAME webscan05.csis.dk.<br />
www.csis.dk. CNAME weball.csis.dk.</pre></p>
