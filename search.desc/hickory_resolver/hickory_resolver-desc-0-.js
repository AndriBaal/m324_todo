searchState.loadedDescShard("hickory_resolver", 0, "The Resolver is responsible for performing recursive …\nAn asynchronous resolver for DNS generic over async …\nConfiguration for the local hosts file\nConversion into a Name\nA domain name\nThe Resolver is used for performing DNS queries.\nThis is an alias for <code>AsyncResolver</code>, which replaced the …\nAn AsyncResolver used with Tokio\nTypes of this trait will can be attempted for conversion …\nAppends the <code>domain</code> to <code>self</code>, making the new <code>Name</code> an FQDN\nAppends the label to the end of this name\nAppends <code>other</code> to <code>self</code>, returning a new <code>Name</code>\nTrims off the first part of the name, to help with …\nCaching related functionality for the Resolver.\nFlushes/Removes all entries from the cache\nFlushes/Removes all entries from the cache\nCase insensitive comparison, see <code>Name::cmp_case</code> for case …\nCase sensitive comparison\nConfiguration for a resolver\nConstructs a new Resolver with default config and default …\nAn LRU cache designed for work with DNS lookups\nEmits the canonical version of the name to the encoder.\nWrites the labels, as lower case, to the encoder\nCompares the Names, in a case sensitive manner\nError types for the crate\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nWill convert the string to a name only allowing ascii as …\nCreates a new Name from the specified labels\nUses the Name::from_utf8 conversion on this string, see …\nFirst attempts to decode via <code>from_utf8</code>, if that fails IDNA …\nConstructs a new Resolver with the system configuration.\nConstructs a new Resolver with the system configuration.\nConstructs a new Resolver with the system configuration.\nWill convert the string to a name using IDNA, punycode, to …\nInsert a new Lookup for the associated <code>Name</code> and <code>RecordType</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this into Name\nConverts a name to a wildcard, by replacing the first …\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nReturns whether the length of the labels, in bytes is 0. …\nReturns true if the name is a fully qualified domain name.\nReturns true if the <code>Name</code> is either localhost or in the …\nReturns true if there are no labels, i.e. it’s empty.\nTrue if the first label of this name is the wildcard, i.e. …\nReturns an iterator over the labels\nreturns the length in bytes of the labels. ‘.’ counts …\nLookup result from a resolution of ipv4 and ipv6 records …\nGeneric lookup for any RecordType\nGeneric lookup for any RecordType\nLookupIp result from a resolution of ipv4 and ipv6 records …\nPerforms a dual-stack DNS lookup for the IP for the given …\nPerforms a dual-stack DNS lookup for the IP for the given …\nLook up the addresses for the given host from the system …\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nA module with associated items for working with nameservers\nConstructs a new Resolver with the specified configuration.\nConstruct a new generic <code>AsyncResolver</code> with the provided …\nCreates a new configuration from the system hosts file, …\nCreate a new domain::Name, i.e. label\nConstruct a new <code>AsyncResolver</code> with the provided …\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nReturns the number of labels in the name, discounting <code>*</code>.\nattempts to parse a name such as <code>&quot;example.com.&quot;</code> or …\nConverts a *.arpa Name in a PTR record back into an IpNet …\nparses the chain of labels this has a max of 255 octets, …\nparse configuration from <code>src</code>\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nReturns the root label, i.e. no labels, can probably make …\nSpecifies this name is a fully qualified domain name\nCustomizes the static hosts used in this resolver.\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nSystem configuration loading\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nConverts this name into an ascii safe string.\nCreates a new Name with all labels lowercased\nConverts the Name labels to the utf8 String form.\nConstruct a new Tokio based <code>AsyncResolver</code> with the …\nConstruct a new Tokio based <code>AsyncResolver</code> with the …\nConstructs a new Tokio based Resolver with the system …\nConstructs a new Tokio based Resolver with the system …\nTrims to the number of labels specified\nAttempts to parse self into an RData::A or RData::AAAA, …\nAlways returns none for Name, it assumes something that is …\nPerforms a lookup for the associated type.\nPerforms a lookup for the associated type.\nreturns a version as specified in Cargo.toml\nreturns true if the name components of self are all …\nsame as <code>zone_of</code> allows for case sensitive call\nIP addresses for Cloudflare’s 1.1.1.1 DNS service\nIP addresses for Google Public DNS\nQuery for A and AAAA in parallel\nOnly query for A (Ipv4) records\nQuery for Ipv4 if that fails, query for Ipv6 (default)\nOnly query for AAAA (Ipv6) records\nQuery for Ipv6 if that fails, query for Ipv4\nThe lookup ip strategy\nConfiguration for the NameServer\nA set of name_servers to associate with a <code>ResolverConfig</code>.\nThe protocol on which a NameServer should be communicated …\nIP address for the Quad9 DNS service\nServers are ordered based on collected query statistics. …\nConfiguration for the upstream nameservers to use for …\nConfiguration for the Resolver\nThe strategy for establishing the query order of name …\nTCP can be used for large queries, but not all NameServers …\nUDP is the traditional DNS port, this is generally the …\nThe order provided to the resolver is used. The ordering …\nAdd the configuration for a name server\nAdd a search domain\nNumber of retries after lookup failure before giving up. …\nThis is true by default, disabling this is useful for …\nThe client address (IP and port) to use for connecting to …\nCache size is in number of records (some records can be …\nValidate the names in the response, not implemented don’…\nCreates a default configuration, using <code>1.1.1.1</code>, <code>1.0.0.1</code> …\nCreates a default configuration, using <code>1.1.1.1</code>, <code>1.0.0.1</code> …\nCreates a default configuration, using <code>8.8.8.8</code>, <code>8.8.4.4</code> …\nDefault protocol should be UDP, which is supported by all …\nReturns <code>LookupIpStrategy::Ipv4thenIpv6</code> as the default.\nReturns <code>ServerOrderingStrategy::QueryStatistics</code> as the …\nDefault values for the Resolver configuration.\nReturns the local domain\nEnable edns, for larger records\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConfigure a NameServer address and port\nCreate a ResolverConfig with all parts specified\nCreates a default configuration, using <code>8.8.8.8</code>, <code>8.8.4.4</code> …\nCreates a default configuration, using <code>8.8.8.8</code>, <code>8.8.4.4</code> …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the inner vec of configs\nThe ip_strategy for the Resolver to use when lookup Ipv4 …\nReturns true if this is a datagram oriented protocol, e.g. …\nIs this an encrypted protocol, i.e. TLS or HTTPS\nReturns true if this is a stream oriented protocol, e.g. …\nMerges this set of <code>NameServerConfig</code>s with the other\nReturns a reference to the name servers\nSets the number of dots that must appear (unless it’s a …\nOptional maximum TTL for negative (<code>NXDOMAIN</code>) responses.\nOptional minimum TTL for negative (<code>NXDOMAIN</code>) responses.\nCreates a new empty configuration\nConstructs a Nameserver configuration with some basic …\nCreates a new <code>NameServerConfigGroup</code> with a default size of …\nNumber of concurrent requests per query\nOptional maximum TTL for positive responses.\nOptional minimum TTL for positive responses.\nPreserve all intermediate records in the lookup response, …\nThe protocol to use when communicating with the NameServer.\nCreates a configuration, using <code>9.9.9.9</code>, <code>149.112.112.112</code> …\nCreates a configuration, using <code>9.9.9.9</code>, <code>149.112.112.112</code> …\nRequest upstream recursive resolvers to not perform any …\nRotate through the resource records in the response (if …\nReturns the search domains\nThe server ordering strategy that the resolver should use.\nSet the domain of the entity querying results.\nShuffle DNS servers before each query.\nThe address which the DNS NameServer is registered at.\nSpecify the timeout for a request. Defaults to 5 seconds\nSPKI name, only relevant for TLS connections\nWhether to trust <code>NXDOMAIN</code> responses from upstream …\nTry queries over TCP if they fail over UDP.\nCheck /ect/hosts file before dns requery (only works for …\nUse DNSSEC to validate the request\nSets the client address (IP and port) to connect from on …\nCreates a new <code>NameServiceConfigGroup</code> with the specified …\nAnd LRU eviction cache specifically for storing DNS records\nThe time-to-live, TTL, configuration for use by the cache.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct the LRU based on the ResolverOpts configuration\nBased on the query, see if there are any records available\ninserts a record based on the name and type.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new cache\nContains the error value\nAn error got returned from IO\nAn error with an arbitrary message, referenced as &amp;’…\nAn error with an arbitrary message, stored as String\nNo resolvers available\nNo records were found for a query\nContains the success value\nAn error got returned by the hickory-proto crate\nThe error type for errors that get returned in the crate\nThe error kind for errors that get returned in the crate\nAn alias for results returned by functions of this crate\nA request timed out\nReturns the argument unchanged.\nReturns the argument unchanged.\nA conversion to determine if the response is an error\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the kind of the error\nnegative ttl, as determined from DnsResponse::negative_ttl …\nThe query for which no records were found.\nResponseCode, if <code>NXDOMAIN</code>, the domain does not exist (and …\nIf an SOA is present, then this is an authoritative …\nIf we trust <code>NXDOMAIN</code> errors from this server\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nResult of a DNS query when querying for any record type …\nBorrowed view of set of <code>RData</code>s returned from a <code>Lookup</code>.\nBorrowed view of set of <code>RData</code>s returned from a Lookup\nBorrowed view of set of <code>Record</code>s returned from a Lookup\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nThe result of an SRV lookup\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nContains the results of a lookup for the associated …\nBorrowed view of set of RDatas returned from a Lookup\nAn iterator over the Lookup type\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturn a reference to the inner lookup\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn new instance with given rdata and the maximum TTL.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis is most likely not a free conversion, the <code>RData</code>s will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nThis is most likely not a free conversion, the RDatas will …\nReturns the list of IPs associated with the SRV record.\nReturns a borrowed iterator of the returned IPs\nReturns an iterator over the SRV RData\nReturns an iterator over the RData\nReturns an iterator over the RData\nReturns an iterator over the RData\nReturns an iterator over the RData\nReturns an iterator over the RData\nReturns an iterator over the RData\nReturns an iterator over the RData\nReturns an iterator over the RData\nReturn a new instance with the given records and deadline.\nReturn new instance with given records and the maximum TTL.\nReturns a reference to the <code>Query</code> that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a reference to the Query that was used to produce …\nReturns a borrowed iterator of the returned IPs\nReturns the records list\nReturns the <code>Instant</code> at which this <code>Lookup</code> is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nReturns the <code>Instant</code> at which this result is no longer …\nResult of a DNS query when querying for A or AAAA records.\nThe Future returned from crate::AsyncResolver when …\nBorrowed view of set of RDatas returned from a Lookup\nBorrowed view of set of IPs returned from a LookupIp\nReturn a reference to the inner lookup\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis is most likely not a free conversion, the RDatas will …\nReturns a borrowed iterator of the returned IPs\nPerform a lookup from a hostname to a set of IPs\nReturns a reference to the <code>Query</code> that was used to produce …\nReturns the <code>Instant</code> at which this lookup is no longer …\nThe handle to the connect for sending DNS requests.\nCreate <code>DnsHandle</code> with the help of <code>RuntimeProvider</code>. This …\nThs future is responsible for spawning any background …\nA connected DNS handle\nDefault connector for <code>GenericConnection</code>\nSpecifies the details of a remote NameServer used for …\nA pool of NameServers\nHandle to the executor;\nThis struct is used to create <code>DnsHandle</code> with the help of <code>P</code>.\nAbstract interface for mocking purpose\nRuntimeProvider defines which async runtime that handles …\nProvider that handles the underlying I/O and timing.\nA type defines the Handle which can spawn future.\nTcpStream\nTimer\nDefault ConnectionProvider with <code>GenericConnection</code>.\nA handle to the Tokio runtime\nThe Tokio Runtime for async execution\nUdpSocket\nCreate a UDP socket bound to <code>local_addr</code>. The returned …\nCustom implementation of Ord for NameServer which …\nCreate a TCP connection with custom configuration.\nCreate a runtime handle\nNameServers are equal if the config (connection …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a NameServerPool from a set of name server …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new instance.\nCreate a Tokio runtime\nConstruct a new Nameserver with the configuration and …\nCreate a new connection.\nSpawn a future in the background\nSpecifies that this NameServer will treat negative …")