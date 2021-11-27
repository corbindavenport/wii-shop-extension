# publicsuffixlist.js

A javascript utility to make use of [Mozilla Foundation's Public Suffix
List](http://publicsuffix.org) ("PSL").

## Why?

This is just an implementation to deal with domain while taking into account
[Mozilla Foundation's Public Suffix List](http://publicsuffix.org). Follow
the link to understand why such a list is needed.

Now there was an existing javascript library dealing with the
Public Suffix List: <https://github.com/oncletom/tld.js>.

However, glancing at it I could see right away that it would not fullfill my
requirements: minding memory footprint and CPU cycles. Hence this version,
which addresses both concerns.

Benchmark: Randomly picking 20 hostnames from all over the world, and
for each of these extracting the domain name (that would be the hostname for
which it is safe to set cookies, etc.). Typical results (corrected after I
found the results for `tld.js` differs greatly if the browser console is
opened -- weird):

```
20 random hostnames:
tld.js              x  2,885 ops/sec ±0.40% (96 runs sampled)
publicsuffixlist.js x 39,604 ops/sec ±0.77% (96 runs sampled)

Then 50 random hostnames:
tld.js              x  1,042 ops/sec ±0.38% (97 runs sampled)
publicsuffixlist.js x 15,815 ops/sec ±0.33% (95 runs sampled)

Then 10 random hostnames:
tld.js              x  2,527 ops/sec ±0.38% (96 runs sampled)
publicsuffixlist.js x 61,570 ops/sec ±0.32% (94 runs sampled)

Then 100 random hostnames:
tld.js              x    224 ops/sec ±0.79% (89 runs sampled)
publicsuffixlist.js x  7,627 ops/sec ±0.32% (97 runs sampled)
```

Memory footprint-wise, this is what I observe after running the above
benchmarks (using chromium's "Heap Snapshot" / "Retained Size"):

```
tld.js             : 381,400 bytes
publicsuffixlist.js: 172,096 bytes
```

Also, `tld.js` currently fails with the Unicode rules present in the Public
Suffix List (the rules are supposed to be normalized as per PSL documentation).

So that is mainly why `publicsuffixlist.js`, something fast and mindful of
memory was key in that [other project](https://github.com/gorhill/httpswitchboard)
which has to deal in realtime with web requests.

## Usage

```js
<script src="punycode.js"></script>
<script src="publicsuffixlist.js"></script>

// window.publixSuffixList should now be present.

...

// Feed it the list (you choose how you obtain it).
// `list` must be unicode text.
// Need to pass a converter to punycode (punycode.js is
// awesome: https://github.com/bestiejs/punycode.js).
window.publicSuffixList.parse(list, punycode.toASCII);

...

// Caller is responsible to pass in hostnames which are "canonicalized in the
// normal way for hostnames": lower-case, punycode, and only a-z, 0-9, -, .

var domain = window.publicSuffixList.getDomain('haha.whatisthis.global.prod.fastly.net');
// domain = 'whatisthis.global.prod.fastly.net' (yep, who knew)

var domain = window.publicSuffixList.getDomain('police.uk');
// domain = ''

var domain = window.publicSuffixList.getDomain('www.xn--85x722f.xn--55qx5d.cn');
// domain = 'xn--85x722f.xn--55qx5d.cn'

Etc.
```

## Usage with node.js

```
var suffixList = require('./publicsuffixlist');
// For utf-8 conversion - npm install punycode
var punycode = require('punycode'); 
var fs = require('fs');

// Suffix list downloaded from https://publicsuffix.org/list/effective_tld_names.dat
var suffixData = fs.readFileSync('./effective_tld_names.dat', 'utf8');

suffixList.parse(suffixData, punycode.toASCII);

var domain = suffixList.getDomain('haha.whatisthis.global.prod.fastly.net');
// domain = 'whatisthis.global.prod.fastly.net' (yep, who knew)

var domain = suffixList.getDomain('police.uk');
// domain = ''

var domain = suffixList.getDomain('www.xn--85x722f.xn--55qx5d.cn');
// domain = 'xn--85x722f.xn--55qx5d.cn'

```

```

