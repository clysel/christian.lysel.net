---
layout:     post
header-img: "img/post-bg-01.jpg"
title: DDoS Linux Protection
---

When hitten by a DDoS attack generating 50.000 pps and your old firewall/webserver can't handle it, it's easy to create a linux firewall, that can easy handle
500.000 pps with minimal CPU usage.

The following examples are for Ubuntu 16.

If it's a synflood, we can use Linux SYNPROXY to protect agains that, and haproxy the trafic to the protected servers, in this example it's a simple TCP forward for port 80 and 443 to 192.168.1.2:

(HAProxy can also proxy http and https requests)

``` bash
sudo apt install haproxy hatop haproxyctl vim-haproxy ipset -y
#ubuntu haproxy bug fix
sudo touch /var/loghaproxy.log
sudo chown syslog.adm /var/log/haproxy.log
#configure the TCP stack to SYNPROXY and many connections
sudo tee /etc/sysctl.conf \<\<EOF
net.ipv4.tcp_syncookies=1
net.ipv4.tcp_timestamps=1
net.ipv4.tcp_mem = 786432 1697152 1945728
net.ipv4.tcp_rmem = 4096 4096 16777216
net.ipv4.tcp_wmem = 4096 4096 16777216
net.ipv4.tcp_timestamps = 0
net.ipv4.ip_local_port_range = 1000 65535
fs.file-max = 10000000 
fs.nr_open = 10000000
EOF

sudo tee /etc/haproxy/haproxy.cfg \<\<EOF
global
    log /dev/log    local0
    log /dev/log    local1 notice
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy
    daemon

defaults
    log      global
    mode     tcp
    option   tcplog
    option   dontlognull
    timeout  connect 5000
    timeout  client  50000
    timeout  server  50000
    maxconn  1000
    balance  roundrobin

frontend local80
    log     global
    bind    *:80
    default_backend backendserver80


frontend local443
    log    global
    bind   *:443
    default_backend backendserver443


backend backendserver80
        server server80 192.168.1.2:80

backend skolearena443
        server server443 192.168.1.2:443
EOF
```


If we need Geoblocking, allowing only Sweden, Norway and Denmark, this can be implemted in a bridge scenario ... the protected host is 192.168.1.2:

``` bash
#create bridge between eth0 and eth1
sudo brctl addbr br0
sudo brctl addif br0 eth0
sudo brctl addif br0 eth1

#enable geo blocking
ipset create geoblock hash:net
sudo iptables -A FORWARD -m set --set !geoblock src -d 192.168.1.2 -j DROP

#download geo list every night
countries="{se,no,dk}"
sudo ipset flush geoblock
#get se,no,dk ip networks
wget -q http://www.ipdeny.com/ipblocks/data/countries/${countries}.zone -O - | awk '{print "add geoblock " $1 }' | sudo ipset restore
```

And rate limits is not really a solution to this problem, but can be a help in some attacks.

An example of ratelimit trafic to port 80:

``` bash
#create bridge between eth0 and eth1
sudo brctl addbr br0
sudo brctl addif br0 eth0
sudo brctl addif br0 eth1

iptable bridge ... limit rates for tcp syn port 80 and icmp request:
# Handling TCP port 80
iptables -A FORWARD -d $web-ip/32 -i br0 -p tcp -m physdev --physdev-is-bridged -m tcp --dport 80 -m state --state NEW -m limit --limit 60/sec --limit-burst 200 -j ACCEPT
iptables -A FORWARD -d $web-ip/32 -i br0 -p tcp -m physdev --physdev-is-bridged -m tcp --dport 80 -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A FORWARD -d $web-ip/32 -i br0 -p tcp -m physdev --physdev-is-bridged -m tcp --dport 80 -j DROP
# Handling ICMP
iptables -A FORWARD -d $web-ip/32 -i br0 -p icmp -m physdev --physdev-is-bridged -m icmp --icmp-type 8 -m limit --limit 60/sec -j ACCEPT
iptables -A FORWARD -d $web-ip/32 -i br0 -p icmp -m physdev --physdev-is-bridged -j DROP
```
