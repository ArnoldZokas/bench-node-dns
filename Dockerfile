FROM docker.otenv.com/ot-node-4.2
ENTRYPOINT ["/usr/local/bin/node", "bench-node-dns.js"]
