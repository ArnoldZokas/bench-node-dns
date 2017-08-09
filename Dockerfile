FROM docker.otenv.com/ot-node-6:latest
ENTRYPOINT ["/usr/local/bin/node", "bench-node-dns.js"]
