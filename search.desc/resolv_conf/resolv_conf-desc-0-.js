searchState.loadedDescShard("resolv_conf", 0, "The crate simply parses <code>/etc/resolv.conf</code> file and creates …\nAn error which can be returned when parsing an IP address.\nQuery a domain name server\nRepresent a resolver configuration, as described in …\nAn iterator returned by <code>Config.get_last_search_or_domain</code>\nA database we don’t know yet\nError returned when there is extra data at the end of a …\nThe internet protocol family that is prefered. This option …\nSearch for entries in /etc/hosts\nA A lookup for an ipv4 address\nA AAAA lookup for an ipv6 address\nError returned when a invalid directive is found.\nError returned when a value cannot be parsed an an IP …\nError returned when a invalid option is found.\nError returned when a value for a given option is invalid. …\nError that may be returned when the string to parse …\nError returned a value for a given directive is invalid. …\nThe databases that should be searched during a lookup. …\nA network, that is an IP address and a mask\nError while parsing resolv.conf file\nRepresent an IP address. This type is similar to …\nRepresent an IPv4 network address\nRepresent an IPv4 address\nRepresent an IPv6 network address\nRepresent an IPv6 and its scope identifier, if any\nNumber of attempts to resolve name if server is …\nEnable DNS resolve debugging\nEnable dns extensions described in RFC 2671\nThe order in which internet protocol families should be …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse a string representing an IP address.\nReturn the domain declared in the last “domain” …\nReturn the suffixes declared in the last “domain” or …\nGet nameserver or on the local machine\nReturn the domains declared in the last “search” …\nGet domain from config or fallback to the suffix of a …\nNormalize config according to glibc rulees\nTry AAAA query before A\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUse reverse lookup of ipv6 using bit-label format …\nDo ipv6 reverse lookups in ip6.int zone instead of ip6.arpa\nThe order in which databases should be searched during a …\nList of nameservers\nNumber of dots in name to try absolute resolving first …\nCreate a new <code>Config</code> object with default values.\nDon’t check names for validity (default false)\nDisable the automatic reloading of a changed configuration …\nDon’t resolve unqualified name as top level domain\nParse a buffer and return the corresponding <code>Config</code> object.\nRound-robin selection of servers (default false)\nSet the domain corresponding to the “domain” directive.\nSet the domains corresponding the “search” directive.\nDon’t make ipv4 and ipv6 requests simultaneously\nUse same socket for the A and AAAA requests\nList of preferred addresses\nDns query timeout (default 5 [sec])\nOptionally send the AD (authenticated data) bit in queries\nForce using TCP for DNS resolution")