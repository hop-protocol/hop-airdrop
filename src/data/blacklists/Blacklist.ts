const blacklist: Record<string, boolean> = {
  // Chris added
  '0x84382d03704217ef89ade1c73f852dbcd1328ecc': true, // GSN Relayer
  '0xf19cd7021ce409fcade2a29caebb86741db7955a': true, // GSN Relayer
  '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640': true, // Uniswap USDC/ETH
  '0x397ff1542f962076d0bfe58ea045ffa2d347aca0': true, // Sushi USDC/ETH
  '0x74de5d4fcbf63e00296fd95d33236b9794016631': true, // MetaMask Swap Router
  '0xdb6f1920a889355780af7570773609bd8cb1f498': true, // 0x Exchange Proxy
  '0x0000000000000000000000000000000000000000': true, // Zero Address
  '0xf2e4209afa4c3c9eaa3fb8e12eed25d8f328171c': true, // USDC Exchange
  '0xc590175e458b83680867afd273527ff58f74c02b': true, // Exchange
  '0xd01e3549160c62acabc4d0eb89f67aafa3de8eed': true, // ClipperDirectExchange
  '0x8dfdea6a4818d2aa7463edb9a8841cb0c04255af': true, // Zapper
  '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827': true, // Uniswap USDC/MATIC
  '0xf3f3433c3a97f70349c138ada81da4d3554982db': true, // USDC/USDT
  '0x85149247691df622eaf1a8bd0cafd40bc45154a9': true, // USDC/WETH
  '0x100bdc1431a9b09c61c0efc5776814285f8fb248': true, // USDC/DAI
  '0x6d608c51c198c728c0a00bfdfa8fef5d57ff4424': true, // Zapper
  '0xcd353f79d9fade311fc3119b841e1f456b54e858': true, // Sushi MATIC/USDC
  '0x4c008261215087bd22d6a983399ae659d816bb50': true, // Uniswap V3: oneFOX-USDC
  '0xd63005e1d0bd8029b656dd43ad8eb66f27b15e07': true, // Uniswap V3: oneWING-USDC
  '0xd83f98b5e4a0de208725990ae216d072302f450d': true, // EOA with many connections but none that used Hop
  '0x38aa4c34a3f79c9436dc5166beb53899105844e8': true, // KuCoin
  '0xfefec7d3eb14a004029d278393e6ab8b46fb4fca': true, // Hop Utility wallet
  '0xc57135a8fe614bf3954666c64433cf41c012605e': true, // Connects to valid accounts,
  '0xe5171b2cf67bb1a8556ed8a51b7275a421905c3f': true, // Connects to valid accounts,
  '0x8810bf9ad94c9b9ecf70b489bbed91239a1fc877': true, // Connects to valid accounts,
  '0x76cb80202b2c31e9d7f595a31fd071ce7f75bb93': true, // Connects to valid accounts,
  '0x19999c224aa48d7911702c03b5029d6d333d01bd': true, // Connects to valid accounts,
  '0xae1e59402a3f483f0bbb663800ff21a0f2b1701d': true, // Connext router
  '0xf63724c70bf94b7ceefa0bc8e2de5948eded0800': true, // Exchange behavior
  '0x0d9b9b275218a5666711af33f1b5f90c6b7623d0': true, // Exchange behavior
  '0x46ce2da01290ea2d1bced39bba149d017df34cb9': true, // Exchange behavior
  '0x4c9df57276dc17dee5635ded208c07b0be32afd0': true, // Exchange behavior
  '0x85e6269e5f976aaadb4c7ee58cdd2f449463540a': true, // Exchange behavior
  '0xeb1fbc0442c06910b3be16d57e8918e194c9a07a': true, // Exchange behavior
  '0xa9bff538a906154c80a8dbccd229f3deddfa52d6': true, // Exchange behavior
  '0xc45273590ffaefeacd956389f60e3619ca43e43f': true, // Exchange behavior
  '0x2009a752a50d3cde486d7b5921944377b729e747': true, // Meebits DAO polygon faucet
  '0x7db69ec6e74890fac3f296bed85fcf8b64902874': true, // Exchange address
  '0xd5c08681719445a5fdce2bda98b341a49050d821': true, // Exchange address
  '0xe3a586247f0e9ea9fd580955d1b195ebda13fdab': true, // Exchange address,
  '0x8595dd9e0438640b5e1254f9df579ac12a86865f': true, // Ezil       Ezil Mining pool distributor
  '0xc3348b43d3881151224b490e4aa39e03d2b1cdea': true, // Ezil       Ezil Mining pool distributor
  '0x2819c144d5946404c0516b6f817a960db37d4929': true, // Remitano   P2P trading app
  '0x7ed1e469fcb3ee19c0366d829e291451be638e59': true, // Freewallet App distributor
  '0x4e80744fa23cec76e1621ce0dfaceb4b1d532e12': true, // Duelbits   App distributor
  '0x00cdc153aa8894d08207719fe921fff964f28ba3': true, // Bitzlato   P2P trading app
  '0x167a9333bf582556f35bd4d16a7e80e191aa6476': true, // Coinone    Exchange
  '0xfe44daeb65166846fccb3f4aa7186e36247b1c1e': true, // Unknown exchange
  '0xb1480c3a77ae27fe7d0179b0ecd76f786838caf1': true, // Unknown exchange
  '0xc7ff87f75d23cda8f346c88fbba7b1eb9453a441': true, // Unknown exchange
  '0xab2b05428d30a20f0165959cda2d6839e9490f1b': true, // Unknown exchange
  '0x4ac879827327d38508324315fc7f478ab6f88c1a': true, // Unknown exchange
  '0x97122ddca38c29b7653d52b07998d06a7128fa0b': true, // Bithumb Exchange
  '0xb8ba36e591facee901ffd3d5d82df491551ad7ef': true, // Unknown exchange
  '0x42eba0072d557dcfe19d8b3b59a93a62e02d5156': true, // Mainnet Unknown Mining Pool
  '0x3e9afaa4a062a49d64b8ab057b3cb51892e17ecb': true, // Unknown exchange
  '0xd5fbda4c79f38920159fe5f22df9655fde292d47': true, // Unknown exchange
  '0x26352d20e6a05e04a1ecc75d4a43ae9989272621': true, // Unknown exchange
  '0x95b564f3b3bae3f206aa418667ba000afafacc8a': true, // Binance Exchange
  '0x9239df3e9996c776d539eb9f01a8ae8e7957b3c3': true, // Unknown exchange
  '0x29fd24dad196010e726703a8fdcd8b9aa281a378': true, // Unknown exchange
  '0xeec0ed9e41c209c1c53a35900a06bf5dca927405': true, // Unknown exchange
  '0xe5a8b35eaa3c14e0a6514f800825e1e6687bf23e': true, // Unknown exchange
  '0x3d1d8a1d418220fd53c18744d44c182c46f47468': true, // Bitkub Exchange
  '0xc4d300019f587145cfd9b42875073b3ad4bb0296': true, // Unknown exchange
  '0x9ce44fad9466b6e0cdcccf2147351a453789590b': true, // Unknown exchange
  '0xee61f5fb0db81d3a09392375ee96f723c0620e07': true, // Unknown exchange
  '0x051acf8d69a18d6a6e4dd063b39501e69704ac50': true, // Unknown exchange
  '0x6eff3372fa352b239bb24ff91b423a572347000d': true, // Biki Exchange
  '0xd4dcd2459bb78d7a645aa7e196857d421b10d93f': true, // Peatio Dex App
  '0x8578ebedb49c18231ccaa41610ac5eda0a5d00ee': true, // Unknown exchange
  '0xdb2cad4f306b47c9b35541988c7656f1bb092e15': true, // Liquid Exchange
  '0x0f51a310a4dd79d373eb8be1c0ddd54570235443': true, // Unknown exchange,
  '0xd7a103ed7aca8673d275cd044d22afc8b6eb8e6b': true, // Pie land NFT
  '0xb93ac5ae1b6ea6ab9a5fefc453076fcc445f696d': true, // BabyQuick Faucet Faucet Polygon BabyQuick Faucet
  '0xcae113bc7e0a01584290e97d41291378ff2a0167': true, // PearZap Faucet Faucet Polygon PearZap Faucet
  '0xe1fabf4b99e92a6a896d06919bb6ceb66aedb87c': true, // Unknown Exchange Polygon Unknown exchange
  '0x0d72be94867d8e83819dbb955662197893e6af14': true, // Unknown Exchange Polygon Unknown exchange
  '0xe3031c1bfaa7825813c562cbdcc69d96fcad2087': true, // GoPax App Mainnet P2P Merchant Deposit Address
  '0x43c3382a5514d798e658f4019ba4d8e47f51ab65': true, // Unknown Exchange Mainnet Unknown exchange
  '0x5237eb109c66125c63907b91ac1473df8a4768b6': true, // Unknown Exchange Mainnet Unknown exchange
  '0x9d96b0561be0440ebe93e79fe06a23bbe8270f90': true, // Unknown Exchange Mainnet Unknown exchange
  '0xe3743d1bf4bdc86bf1faac0ffe325a23cf495ad7': true, // Unknown Exchange Mainnet Unknown exchange
  '0x9864e8b36edaf9fd6f63ef28a83e251b7ad11ec0': true, // Binance Exchange Mainnet Binance Exchange
  '0x356f029fb2f673ca083ea223d5835f4ac00539dd': true, // Unknown Exchange Mainnet Unknown exchange
  '0x57d4e9b4a191d2bba64abd6c9250a500e29eea74': true, // Unknown Exchange Mainnet Unknown exchange
  '0x05b5e1d9b278cee00a469104716f741be21261a6': true, // Unknown Exchange Mainnet Unknown exchange
  '0x498d99d4f6b30db757baebce6ca740ffae329c40': true, // Unknown Exchange Mainnet Unknown exchange
  '0x1c29731b09d39864a0d7e68df114e97a764eb290': true, // Unknown Exchange Mainnet Unknown exchange
  '0x737023d996d787d58d02fe74a7ab7df7e5571998': true, // Anycoin App Mainnet Anycoin App
  '0xf5bec430576ff1b82e44ddb5a1c93f6f9d0884f3': true, // Yobi App Mainnet Yobi Exchange
  '0x1d14995484498933615052d065d608d8739334f4': true, // Unknown Exchange Mainnet Unknown exchange
  '0x8d056d457a52c4daf71cef45f540a040c143ea05': true, // Unknown Exchange Mainnet Unknown exchange
  '0x9d8b036702bf7b75d0c5a1b2aa0f9bb93de3cc90': true, // Unknown Exchange Mainnet Unknown exchange
  '0x072f3252d0eb025fbd30ec43181ae6cea8566004': true, // Unknown Exchange Mainnet Unknown exchange
  '0x404460039499c774c48248552f802ce5dd482e32': true, // Unknown Exchange Mainnet Unknown exchange
  '0x6bddbd1d6bbe36aff9a1dff1e4067148425a76d9': true, // Unknown Exchange Mainnet Unknown exchange
  '0x7d8eec47d19bf4ad805cca67a6701611a06ed151': true, // Unknown Exchange Mainnet Unknown exchange
  '0x777f415324d56e1d54fa832902d8797db7a4c57c': true, // 1xbet App Mainnet 1xbet app
  '0x9e09b640f5354039db97627f308d1845d9769c9f': true, // Unknown Exchange Mainnet Unknown exchange
  '0x741e1eb29cee041dd19c052c0578379b8e78dd1d': true, // Unknown Exchange Mainnet Unknown exchange
  '0x3337c5d0648bda250970f968d2071925e655ceed': true, // Unknown Exchange Mainnet Unknown exchange
  '0x6813137d93fe476a429b9b82d8e2e3ad95a5a64a': true, // Dark Forest Address
  '0x73061306975ea05ceec02e5955af45b8367c4616': true, // Paragons DAO fundraise EOA
  '0x6519c333e43de2212c3979219c009f2a77d9a4dd': true, // Maybe exchange - only ETH transfers
  '0x087a7afb6975a2837453be685eb6272576c0bc06': true, // Polygon relayer address
  '0xabba7370046619c98580716c8ebde04fa7a64576': true, // thealchemists.eth collects ETH from NFT collectors
  '0xd18e205b41eee3d208d3b10445db95ff02ba4aca': true, // gmdao.eth - raised funds from multiple address
  '0xb871dd5e5672d9eb13097350d9074200e30bd3d4': true, // closely connected to gmdao.eth
  '0x7a5C76Fc62e03d5542249892d6d44970A127738E': true, // MATIC faucet
  '0x80fffd9b53fbe2d3ac4bd3c8235dee1734e44604': true, // Funding accounts that may not be related
  '0x63b770bd6ec4ef5b592c7e30e8d30c8d4e7844b8': true, // Address collects ETH and sometimes sends it back

  // '0x0000000000000000000000000000000000000000': true, //

  // Other Bridges
  '0x6090de2ec76eb1dc3b5d632734415c93c44fd113': true, // Connext
  '0x115909bdcbab21954beb4ab65fc2abee9866fa93': true, // Connext

  // Hop Bonders
  '0x710bda329b2a6224e4b44833de30f38e7f81d564': true,
  '0xa6a688f107851131f0e1dce493ebbebfaf99203e': true,
  '0x15ec4512516d980090050fe101de21832c8edfee': true,
  '0xd8781ca9163e9f132a4d8392332e64115688013a': true,
  '0x9137a628546e2b1bc26f60a5d1262fb6d58ea44a': true,
  '0x305933e09871d4043b5036e09af794facb3f6170': true,

  // Hop Addresses
  '0x2a6303e6b99d451df3566068ebb110708335658f': true,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': true,
  '0x3666f603cc164936c1b87e207f36beba4ac5f18a': true,
  '0x88ad09518695c6c3712ac10a214be5109a655671': true,
  '0x12e59c59d282d2c00f3166915bed6dc2f5e2b5c7': true,
  '0xf6a78083ca3e2a662d6dd1703c939c8ace2e268d': true,
  '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83': true,
  '0x25d8039bb044dc227f741a9e381ca4ceae2e6ae8': true,
  '0x9ec9551d4a1a1593b0ee8124d98590cc71b3b09d': true,
  '0x76b22b8c1079a44f1211d867d68b1eda76a635a7': true,
  '0x5c32143c8b198f392d01f8446b754c181224ac26': true,
  '0x9d373d22fd091d7f9a6649eb067557cc12fb1a0a': true,
  '0x4c36d2919e407f0cc2ee3c993ccf8ac26d9ce64e': true,
  '0x75df5af045d91108662d8080fd1fefad6aa0bb59': true,
  '0xa0c68c638235ee32657e8f720a23cec1bfc77c77': true,
  '0x4e9840f3c1ff368a10731d15c11516b9fe7e1898': true,
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174': true,
  '0x40ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf': true,
  '0x1ba1f1368eceb7bfcbde20e1f803771b7b401f7d': true,
  '0x4200000000000000000000000000000000000010': true,
  '0x7f5c764cbc14f9669b88837ca1490cca17c31607': true,
  '0xa81d244a1814468c734e5b4101f7b9c0c577a8fc': true,
  '0x2ad09850b0ca4c7c1b33f5acd6cbabcab5d6e796': true,
  '0x3c0ffaca566fccfd9cc95139fef6cba143795963': true,
  '0x2e17b8193566345a2dd467183526dedc42d2d5a8': true,
  '0xac9babf20ef2338d7f4a152af43beddc80c6ae2a': true,
  '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8': true,
  '0x0e0e3d2c5c292161999474247956ef542cabf8dd': true,
  '0x0ce6c85cf43553de10fc56ceca0aef6ff0dd444d': true,
  '0xe22d2bedb3eca35e6397e0c6d62857094aa26f52': true,
  '0x10541b07d8ad2647dc6cd67abd4c03575dade261': true,
  '0xb67c014fa700e69681a673876eb8bafaa36bff71': true,
  '0xdac17f958d2ee523a2206206994597c13d831ec7': true,
  '0x3e4a3a4796d16c0cd582c382691998f7c06420b6': true,
  '0xc08055b634d43f2176d721e26a3428d3b7e7ddb5': true,
  '0x4ecaba5870353805a9f068101a40e0f32ed605c6': true,
  '0xfd5a186a7e8453eb867a360526c5d987a00acac2': true,
  '0x91f8490ec27cbb1b2faedd29c2ec23011d7355fb': true,
  '0x49094a1b3463c4e2e82ca41b8e6a023bdd6e222f': true,
  '0x3aa637d6853f1d9a9354fe4301ab852a88b237e7': true,
  '0x5b10222f2ada260aaf6c6fc274bd5810af9d33c0': true,
  '0x2d8b884f7aaea1dd13a805071530ba9ee9a7e035': true,
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f': true,
  '0x6c9a1acf73bd85463a46b0afc076fbdf602b690b': true,
  '0x9f93aca246f457916e49ec923b8ed099e313f763': true,
  '0x8741ba6225a6bf91f9d73531a98a89807857a2b3': true,
  '0xb2f7d27b21a69a033f85c42d5eb079043baadc81': true,
  '0x3ca3218d6c52b640b0857cc19b69aa9427bc842c': true,
  '0xc78c53102e161094d848ee167145e5d45eaa6853': true,
  '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58': true,
  '0x46ae9bab8cea96610807a275ebd36f8e916b5c61': true,
  '0x2057c8ecb70afd7bee667d76b4cd373a325b1a20': true,
  '0x7d269d3e0d61a05a0ba976b7dbf8805bf844af3f': true,
  '0xec4b41af04cf917b54aeb6df58c0f8d78895b5ef': true,
  '0xf753a50fc755c6622bbcaa0f59f0522f264f006e': true,
  '0x70a772ddc3413e3456e5a3b2c30cb749c9577d1f': true,
  '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9': true,
  '0x72209fe68386b37a40d6bca04f78356fd342491f': true,
  '0xcb0a4177e0a60247c0ad18be87f8edff6dd30283': true,
  '0x18f7402b673ba6fb5ea4b95768aabb8aad7ef18a': true,
  '0xce3b19d820cb8b9ae370e423b0a329c4314335fe': true,
  '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0': true,
  '0x22b1cbb8d98a01a3b71d034bb899775a76eb1cc2': true,
  '0x46fc3af3a47792ca3ed06fdf3d657145a675a8d8': true,
  '0x7122d7661c4564b7c6cd4878b06766489a6028a2': true,
  '0x7ac71c29fedf94bac5a5c9ab76e1dd12ea885ccc': true,
  '0xe38faf9040c7f09958c638bbdb977083722c5156': true,
  '0x86ca30bef97fb651b8d866d45503684b90cb3312': true,
  '0xaa30d6bba6285d0585722e2440ff89e23ef68864': true,
  '0x5c2048094baade483d0b1da85c3da6200a88a849': true,
  '0xad33daa2bcdf3e52d30fcca3c7066762df657657': true,
  '0x0000000000000000000000000000000000001010': true,
  '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270': true,
  '0x553bc791d746767166fa3888432038193ceed5e2': true,
  '0x712f0cf37bdb8299d0666727f73a5caba7c1c24c': true,
  '0x884d1aa15f9957e1aeaa86a82a72e49bc2bfcbe3': true,
  '0x3d4cc8a61c7528fd86c55cfe061a78dcba48edd1': true,
  '0xbc4fb4ed825c65ff48163af7e59d49e32edb5269': true,
  '0x6b175474e89094c44da98b954eedeac495271d0f': true,
  '0x723194c6cfed24883b598931ee802ab80952c001': true,
  '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d': true,
  '0x0460352b91d7cf42b0e1c1c30f06b602d9ef2238': true,
  '0xb1ea9fed58a317f81eeefc18715dd323fdef45c4': true,
  '0x6c928f435d1f3329babb42d69ccf043e3900ecf1': true,
  '0x24afdca4653042c6d08fb1a754b2535dacf6eb24': true,
  '0x5300648b1cfaa951bbc1d56a4457083d92cfa33f': true,
  '0xb8a49c3137f27b04ee9e68727147b3131764b8a0': true,
  '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063': true,
  '0xecf268be00308980b5b3fcd0975d47c4c8e1382a': true,
  '0xb8901acb165ed027e32754e0ffe830802919727f': true,
  '0x28529fec439cff6d7d1d5917e956dee62cd3be5c': true,
  '0x25fb92e505f752f730cad0bd4fa17ece4a384266': true,
  '0x8b7aa8f5cc9996216a88d900df8b8a0a3905939a': true,
  '0x4285caab762f2e405cd256069d0d47d13bf05b00': true,
  '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1': true,
  '0x7191061d5d4c60f598214cc6913502184baddf18': true,
  '0x56900d66d74cb14e3c86895789901c9135c95b16': true,
  '0xb3c68a491608952cb1257fc9909a537a0173b63b': true,
  '0xf181ed90d6cfac84b8073fdea6d34aa744b41810': true,
  '0x22d63a26c730d49e5eab461e4f5de1d8bdf89c92': true,
  '0x25a5a48c35e75bd2eff53d94f0bb60d5a00e36ea': true,
  '0x7ac115536fe3a185100b2c4de4cb328bf3a58ba6': true,
  '0xe7f40bf16ab09f4a6906ac2caa4094ad2da48cc2': true,
  '0xa5a33ab9063395a90ccbea2d86a62eccf27b5742': true,
  '0x68f5d998f00bb2460511021741d098c05721d8ff': true,
  '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1': true,
  '0xd8926c12c0b2e5cd40cfda49ecaff40252af491b': true,
  '0xc46f2004006d4c770346f60a7baa3f1cc67dfd1c': true,
  '0x03d7f750777ec48d39d080b020d83eb2cb4e3547': true,
  '0x4014dc015641c08788f15bd6eb20da4c47d936d8': true,
  '0xb9cca4ed3f082a459c0851058d9fba0b78dd6c7d': true,
  '0x69d10828233d7a656104455445d289bbfd50ef6d': true,
  '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619': true,
  '0xb98454270065a31d71bf635f6f7ee6a518dfb849': true,
  '0x1fdeaf938267ca43388ed1fdb879eaf91e920c7a': true,
  '0xc315239cfb05f1e130e7e28e603cea4c014c57f0': true,
  '0x266e2dc3c4c59e42aa07afee5b09e964cffe6778': true,
  '0x971039bf0a49c8d8a675f839739ee7a42511ec91': true,
  '0x8484ef722627bf18ca5ae6bcf031c23e6e922b30': true,
  '0x64e5a143a3775a500bf19e609e1a74a5cbc3bb2a': true,
  '0x4200000000000000000000000000000000000006': true,
  '0x83f6244bd87662118d96d9a6d44f09dfff14b30e': true,
  '0x82af49447d8a07e3bd95bd0d56f35241523fbab1': true,
  '0x3749c4f034022c39ecaffaba182555d4508caccc': true,
  '0xda7c0de432a9346bb6e96ac74e3b61a36d8a77eb': true,
  '0x33ceb27b39d2bb7d2e61f7564d3df29344020417': true,
  '0x652d27c0f72771ce5c76fd400edd61b406ac6d97': true,
  '0x59745774ed5eff903e615f5a2282cae03484985a': true,
  '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': true,
  '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252': true,
  '0x07c592684ee9f71d58853f9387579332d471b6ca': true,
  '0x16284c7323c35f4960540583998c98b1cfc581a7': true,
  '0x70af36240ec5040f6f9501e8e2d9db8703ec3d45': true,
  '0xb07c6505e1e41112494123e40330c5ac09817cfb': true,
  '0x300aa02c86bdcefb9b7af85b736823c56a302512': true,
  '0x1ddec1131ecf33cb59c5611db607b8c3ac285513': true,
  '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6': true,
  '0x91bd9ccec64fc22475323a0e55d58f7786587905': true,
  '0xcd1d7aefa8055e020db0d0e98bbf3fed1a16aad6': true,
  '0xd72c6f464f28f9a89b5206d5e73c491092d34042': true,
  '0x08706c95f86305fe76e9ea1be7a2474eb5cefb3b': true,
  '0x68f180fcce6836688e9084f035309e29bf0a2095': true,
  '0xa492d3596e8391e376d4f5a5cba5c077b890b094': true,
  '0x2a11a98e2fcf4674f30934b5166645fe6ca35f56': true,
  '0x07ce97eb3f375901d26ec1e32144292318839802': true,
  '0x117f2f67cd7570e0e8fd30264f96ca39eebc1a5e': true,
  '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f': true,
  '0xa49600627d913b61714ff2a205fb1096f1bceab2': true,
  '0xa16768f69667e2ec8ebacdd4c9a9092ae2ffe2ca': true,
  '0xad103c0928acfde91dfd4e9e21225bcf9c7cbe62': true,

  // Top funders list
  '0xe592427a0aece92de3edee1f18e0157c05861564': true, // univ3
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': true, // weth
  '0x7a250d5630b4cf539739df2c5dacb4c659f2488d': true, // uni v2
  '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b': true, // opensea
  '0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f': true, // sushi
  '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5': true, // ens
  '0xdef1c0ded9bec7f1a1670819833240f027b25eff': true, // 0x
  '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45': true, // uni v3
  '0x3cd751e6b0078be393132286c442345e5dc49699': true, // coinbase
  '0x9008d19f58aabd9ed0d60971565aa8510560ab41': true, // cow protocol
  '0xdef171fe48cf0115b1d80b88dc8eab59176fee57': true, // paraswap
  '0xc36442b4a4522e871399cd717abdd847ab11fe88': true, // uni v3
  '0xd152f549545093347a162dce210e7293f1452150': true, // disperse
  '0x1111111254fb6c44bac0bed2854e76f90643097d': true, // 1inch
  '0x11111112542d85b3ef69ae05771c2dccff4faa26': true, // 1inch
  '0x0d0707963952f2fba59dd06f2b425ace40b492fe': true, // gate.io
  '0x1bd435f3c054b6e901b7b108a0ab7617c808677b': true, // paraswap
  '0x46340b20830761efd32832a74d7169b29feb9758': true, // crypto com
  '0xe82906b6b1b04f631d126c974af57a3a7b6a99d9': true, // clipper pool token
  '0x27239549dd40e1d60f5b80b0c4196923745b1fd2': true, // 1inch
  '0x75e89d5979e4f6fba9f97c104c2f0afb3f1dcb88': true, // mxc
  '0xcda72070e455bb31c7690a170224ce43623d0b6f': true, // foundation
  '0xa68dd8cb83097765263adad881af6eed479c4a33': true, // fees.wtf
  '0xf60c2ea62edbfe808163751dd0d8693dcb30019c': true, // binance
  '0xcc9a0b7c43dc2a5f023bb9b738e45b0ef6b06e04': true, // aave
  '0xba12222222228d8ba445958a75a0704d566bf2c8': true, // balancer
  '0x0a267cf51ef038fc00e71801f5a524aec06e4f07': true, // genie
  '0x9757f2d2b135150bbeb65308d4a91804107cd8d6': true, // rarible
  '0xd569d3cce55b71a8a3f3c418c329a66e5f714431': true, // juicebox
  '0xdc24316b9ae028f1497c275eb9192a3ea0f67022': true, // lido
  '0xa58f22e0766b3764376c92915ba545d583c19dbc': true, // alchemist
  '0x03f7724180aa6b939894b5ca4314783b0b36b329': true, // shiba
  '0x0fabaf48bbf864a3947bdd0ba9d764791a60467a': true, // ribbon
  '0xfcadf926669e7cad0e50287ea7d563020289ed2c': true, // alchemist
  '0xd6b88257e91e4e4d4e990b3a858c849ef2dfde8c': true, // zapper
  '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5': true, // compound
  '0xa5025faba6e70b84f74e9b1113e5f7f4e7f4859f': true, // multisender
  '0x25eaff5b179f209cf186b1cdcbfa463a69df4c45': true, // blockfolio
  '0xcec8f07014d889442d7cf3b477b8f72f8179ea09': true, // cointool
  '0x4422610f73f4143a3936f8fa300329bba8833b54': true, // zapper
  '0x4f9fbb3f1e99b56e0fe2892e623ed36a76fc605d': true, // LQTY staking
  '0xbf3e3e6c558102f52057b87d385e03ea064c904b': true, // WETH gateway
  '0xd1917932a7db6af687b523d5db5d7f5c2734763f': true, // bulk sender
  '0x3098cfaaba3795ab98dc2d5066ec4d2584ae7c68': true, // zapper
  '0xc1339cf4c27d29b5bd1faa90739ad1e2d4a8b9cb': true, // merkle distributor
  '0xe0a450b095266e97a2fe1f3a22259600ce6b5210': true, // tge
  '0xd19fa1565564f552200ab656c3003d5868555539': true, // urs store
  '0xe468ce99444174bd3bbbed09209577d25d1ad673': true, // zora
  '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98': true, // bittrex
  '0xa8b39829ce2246f89b31c013b8cde15506fb9a76': true, // dydx
  '0x4c9a2bd661d640da3634a4988a9bd2bc0f18e5a9': true, // bancor
  '0xef970a111dd6c281c40eee6c40b43f24435833c2': true, // allpairvault
  '0x3693aba8f2d90b40ba5c975967a665ac30f67746': true, // NFTXMarketplaceZap
  '0xd3d13a578a53685b4ac36a1bab31912d2b2a2f36': true, // tokemak
  '0x986a2fca9eda0e06fbf7839b89bfc006ee2a23dd': true, // ascend
  '0x60e4d786628fea6478f785a6d7e704777c86a7c6': true, // mayc
  '0xe03a338d5c305613afc3877389dd3b0617233387': true, // zapper
  '0xdf9eb223bafbe5c5271415c75aecd68c21fe3d7f': true, // liquity
  '0x4be3223f8708ca6b30d1e8b8926cf281ec83e770': true, // PARTY
  '0xd291328a6c202c5b18dcb24f279f69de1e065f70': true, // zerion
  '0xea674fdde714fd979de3edf0f56aa9716b898ec8': true, // ethermine
  '0xff252725f6122a92551a5fa9a6b6bf10eb0be035': true, // ens
  '0x6a86442a9df14051ea9e2f7230a70fb2b1809f2a': true, // CryptoCorgisRescuer
  '0x66017d22b0f8556afdd19fc67041899eb65a21bb': true, // stability pool
  '0x3328f5f2cecaf00a2443082b657cedeaf70bfaef': true, // GPv2Settlement
  '0x3e66b66fd1d0b02fda6c811da9e0547970db2f21': true, // balancer
  '0x068af1ec336344cd122b9811ef90d2384519005f': true, // BetaRunnerLending
  '0xb9ee1e551f538a464e8f8c41e9904498505b49b0': true, // coinex
  '0xc5424b857f758e906013f3555dad202e4bdb4567': true, // curve
  '0xa356867fdcea8e71aeaf87805808803806231fdc': true, // dodoex
  '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb': true, // cryptopunks
  '0x47e312d99c09ce61a866c83cbbbbed5a4b9d33e7': true, // artblocks
  '0x340d693ed55d7ba167d184ea76ea2fd092a35bdc': true, // uphold
  '0x47ce0c6ed5b0ce3d3a51fdb1c52dc66a7c3c2936': true, // tornado cash
  '0x93a796b1e846567fe3577af7b7bb89f71680173a': true, // Chain Faces
  '0xa3af00a4ca8a11b840b1cb190d1c1d66da1546fc': true, // DeGate
  '0xc253cbc67556e797fdb750a031d5e6208c423ad5': true, // guild of guardians presale
  '0xf8317bd5f48b6fe608a52b48c856d3367540b73b': true, // alchemix
  '0x1522900b6dafac587d499a862861c0869be6e428': true, // bitstamp
  '0xe6e90bc9f3b95cdb69f48c7bfdd0ede1386b135a': true, // UnicSwapV2Router02
  '0x1c87257f5e8609940bc751a07bb085bb7f8cdbe6': true, // kyber
  '0x910cbd523d972eb0a6f4cae4618ad62622b39dbf': true, // tornado cash
  '0xdf4bce0cb5623e0084c334a18da401fdd2f01861': true, // Harvest Art
  '0x2c88aa0956bc9813505d73575f653f69ada60923': true, // LAND
  '0x09eab21c40743b2364b94345419138ef80f39e30': true, // rarible
  '0x5542abc7dc05fa2c8142804bdbcc0da8a0dc98ad': true, // NFTXMarketplaceZap
  '0x6e16394cbf840fc599fa3d9e5d1e90949c32a4f5': true, // VaultETHDAI
  '0xf4b00c937b4ec4bb5ac051c3c719036c668a31ec': true, // secret network
  '0x25751853eab4d0eb3652b5eb6ecb102a2789644b': true, // ribbon
  '0xb1690c08e213a35ed9bab7b318de14420fb57d8c': true, // cryptokitties
  '0x0c7060bf06a78aaaab3fac76941318a52a3f4613': true, // DEAD
  '0xe7a90ea4e0a161916db0a217f76ac1ddc3676005': true, // ev pool
  '0xc1e088fc1323b20bcbee9bd1b9fc9546db5624c5': true, // beanstalk
  '0xc5e9ddebb09cd64dfacab4011a0d5cedaf7c9bdb': true, // proof of humanity
  '0x830bd73e4184cef73443c15111a1df14e495c706': true, // nouns dao
  '0x454cbc099079dc38b145e37e982e524af3279c44': true, // YCS
  '0x671d97f97632f183a4e693a57a3c9a9577d0b879': true, // KolectivExchange
  '0xa5644e29708357803b5a882d272c41cc0df92b34': true, // uni v3
  '0x12d66f87a04a9e220743712ce6d9bb1b5616b8fc': true, // tornado cash
  '0x829bd824b016326a401d083b33d092293333a830': true, // f2pool
  '0x853c2d147a1bd7eda8fe0f58fb3c5294db07220e': true, // bancor
  '0x4f89cd0cae1e54d98db6a80150a824a533502eea': true, // GROUPIE
  '0xf859a1ad94bcf445a406b892ef0d3082f4174088': true, // compound
  '0x59a5208b32e627891c389ebafc644145224006e8': true, // hitbtc
  '0x697b4acaa24430f254224eb794d2a85ba1fa1fb8': true, // inverse
  '0xa2398842f37465f89540430bdc00219fa9e4d28a': true, // DODORouteProxy
  '0xc4c319e2d4d66cca4464c0c2b32c9bd23ebe784e': true, // curve
  '0xdaca87395f3b1bbc46f3fa187e996e03a5dcc985': true, // mandala
  '0xf4128b00afda933428056d0f0d1d7652af7e2b35': true, // shegic
  '0xfa1057d02a0c1a4885851e3f4fd496ee7d38f56e': true, // olympus
  '0x33ddd548fe3a082d753e5fe721a26e1ab43e3598': true, // coinex
  '0x781cdc81cc8a315433bdc1c581a649c4c0d61ee7': true, // fixed float
  '0xc0cb81c1f89ab0873653f67eea42652f13cd8416': true, // LOBSTER
  '0xd4bddf5e3d0435d7a6214a0b949c7bb58621f37c': true, // coinhako
  '0x0ef1b8a0e726fc3948e15b23993015eb1627f210': true, // 1inch
  '0x6b566554378477490ab040f6f757171c967d03ab': true, // alchemist
  '0xd06527d5e56a3495252a528c4987003b712860ee': true, // cream
  '0xe0005fd4252d30ac24d1b6e86940d44915e2ca1b': true, // refi
  '0xe5e8506a590766d738d80affc6b5e538c4b92f82': true, // zpper
  '0xe66b31678d6c16e9ebf358268a790b763c133750': true, // zeroex
  '0xeea3311250fe4c3268f8e684f7c87a82ff183ec1': true, // interest bearing eth
  '0x9acbb72cf67103a30333a32cd203459c6a9c3311': true, // paribu
  '0x19d683cea643a8e5f2384bd48716b5399baa3616': true, // UNIT
  '0xd754ffb697cd276ad6b0f0273521775c1a11b175': true, // Curve_ZapOut_General_V4_1
  '0x1ee05530f2beb59e7d6f2838fcc7d9c9464c253d': true, // GreatestLARP
  '0x67b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a': true, // iBeth
  '0x7d655c57f71464b6f83811c55d84009cd9f5221c': true, // gitcoin
  '0x878f15ffc8b894a1ba7647c7176e4c01f74e140b': true, // hegic
  '0x8fd00f170fdf3772c5ebdcd90bf257316c69ba45': true, // sparkpool
  '0xb9a94be803ec1197a234406ef5c0113f503d3178': true, // SwapContract
  '0xc9f5296eb3ac266c94568d790b6e91eba7d76a11': true, // cex.io
  '0x595063172c85b1e8ac2fe74fcb6b7dc26844cc2d': true, // paribu
  '0x6b5cd7c574b5c8804e6a9b2a5a9fa98f87f007bd': true, // unin v1
  '0x820f92c1b3ad8e962e6c6d9d7caf2a550aec46fb': true, // tip cc
  '0x2fc617e933a52713247ce25730f6695920b3befe': true, // Funds many accounts with USDT on Arbitrum
  '0x259165a400864105ba27124b3308d6ca327c7145': true, // Fundraising address
  '0xeeeca1449a75c96d2b34722ae7ee64121be42111': true, // earnifi.eth
  '0x0f571d2625b503bb7c1d2b5655b483a2fa696fef': true, // pickle harvester address that got funded by unrelated individual
  '0xf791da446d04282f921f38fbf954ad5caee899a3': true, // Maybe Kraken
  '0x58cc9b63463c370d6df16a43b838077ad446f34d': true, // Unknown
  '0x33a28d7a0c94599edb670fcce5dfa9d4c072314e': true, // kucoin
  '0x21dd5c13925407e5bcec3f27ab11a355a9dafbe3': true, // unknown exchange

  // transmitter / oracles
  '0x7537cb7b7e8083ff8e68cb5c0ca18553ab54946f': true, // transmit only
  '0x52add4435c81a4e0fb2ec494966863e48bf9302e': true, // transmit only
  '0xe0ed2a6cad84df5191fe337e7dc9685d03ba3ed0': true, // transmit only
  '0x8ed47843e5030b6f06e6f204fcf2725378bb837a': true, // transmit only
  '0xd0a8cb58efcee1caee48f3c357074862ca8210dc': true, // transmit only
  '0x7bf377f69da0e46da1502d5f2bcf9fb00c3b610b': true, // transmit only
  '0xb976d01275b809333e3efd76d1d31fe9264466d0': true, // transmit only
  '0xcf4be57aa078dc7568c631be7a73adc1cda992f8': true, // transmit only
  '0xe6c27255fbb9d3a9718fb5e2dc313cd6eba10b78': true, // transmit only
  '0x0f7a201b91597dee92f3e445fd241ee35223d4ea': true, // oracle
  '0xa8a6607859d751e2d690f12feed88156cfac01dd': true, // oracle
  '0x9164e59e8860c4aba2816b7d39cef181eee7e1b1': true, // oracle
  '0x5a0aaf39c78939eda540f8d50c2f5ef5a087e7aa': true, // oracle
  '0x8867ca28d5dd0e3ed9bc86f889322395715b5a27': true, // oracle
  '0x4562845f37813a201b9ddb52e57a902659b7ae6a': true, // oracle
  '0xfc7c442154c04c31203e2b94b96fd57c44ac003d': true, // oracle

  // kucoin
  '0x2b5634c42055806a59e9107ed44d43c426e58258': true, // kucoin
  '0x689c56aef474df92d44a1b70850f808488f9769c': true, // kucoin 2
  '0xa1d8d972560c2f8144af871db508f0b0b10a3fbf': true, // kucoin 3
  '0x4ad64983349c49defe8d7a4686202d24b25d0ce8': true, // kucoin 4
  '0x1692e170361cefd1eb7240ec13d048fd9af6d667': true, // kucoin 5
  '0xd6216fc19db775df9774a6e33526131da7d19a2c': true, // kucoin 6
  '0xe59cd29be3be4461d79c0881d238cbe87d64595a': true, // kucoin 7
  '0x899b5d52671830f567bf43a14684eb14e1f945fe': true, // kucoin 8
  '0xf16e9b0d03470827a95cdfd0cb8a8a3b46969b91': true, // kucoin 9
  '0xf2b16510270a214130c6b17ff0e9bf87585126bd': true, // kucoin: deployer
  '0xec30d02f10353f8efc9601371f56e808751f396f': true, // kucoin: main wallet

  // binance
  '0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be': true, // binance
  '0xd551234ae421e3bcba99a0da6d736074f22192ff': true, // binance 2
  '0x564286362092d8e7936f0549571a803b203aaced': true, // binance 3
  '0x0681d8db095565fe8a346fa0277bffde9c0edbbf': true, // binance 4
  '0xfe9e8709d3215310075d67e3ed32a380ccf451c8': true, // binance 5
  '0x4e9ce36e442e55ecd9025b9a6e0d88485d628a67': true, // binance 6
  '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8': true, // binance 7
  '0xf977814e90da44bfa03b6295a0616a897441acec': true, // binance 8
  '0x001866ae5b3de6caa5a51543fd9fb64f524f5478': true, // binance 9
  '0x85b931a32a0725be14285b66f1a22178c672d69b': true, // binance 10
  '0x708396f17127c42383e3b9014072679b2f60b82f': true, // binance 11
  '0xe0f0cfde7ee664943906f17f7f14342e76a5cec7': true, // binance 12
  '0x8f22f2063d253846b53609231ed80fa571bc0c8f': true, // binance 13
  '0x28c6c06298d514db089934071355e5743bf21d60': true, // binance 14
  '0x21a31ee1afc51d94c2efccaa2092ad1028285549': true, // binance 15
  '0xdfd5293d8e347dfe59e90efd55b2956a1343963d': true, // binance 16
  '0x56eddb7aa87536c09ccc2793473599fd21a8b17f': true, // binance 17
  '0x9696f59e4d72e237be84ffd425dcad154bf96976': true, // binance 18
  '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b': true, // binance 19
  '0x4976a4a02f38326660d17bf34b431dc6e2eb2327': true, // binance 20
  '0xd88b55467f58af508dbfdc597e8ebd2ad2de49b3': true, // binance 21
  '0x7dfe9a368b6cf0c0309b763bb8d16da326e8f46e': true, // binance 22
  '0x345d8e3a1f62ee6b1d483890976fd66168e390f2': true, // binance 23
  '0xc3c8e0a39769e2308869f7461364ca48155d1d9e': true, // binance 24
  '0x2e581a5ae722207aa59acd3939771e7c7052dd3d': true, // binance 25
  '0x44592b81c05b4c35efb8424eb9d62538b949ebbf': true, // binance 26
  '0xd5fd1bc99d5801278345e9d29be2225d06c26e93': true, // binance 27
  '0x06a0048079ec6571cd1b537418869cde6191d42d': true, // binance 29
  '0x892e9e24aea3f27f4c6e9360e312cce93cc98ebe': true, // binance 30
  '0x00799bbc833d5b168f0410312d2a8fd9e0e3079c': true, // binance 31
  '0x141fef8cd8397a390afe94846c8bd6f4ab981c48': true, // binance 32
  '0x50d669f43b484166680ecc3670e4766cdb0945ce': true, // binance 33
  '0x2f7e209e0f5f645c7612d7610193fe268f118b28': true, // binance 34
  '0x8b99f3660622e21f2910ecca7fbe51d654a1517d': true, // binance charity
  '0xab83d182f3485cf1d6ccdd34c7cfef95b4c08da4': true, // binance jex
  '0xc365c3315cf926351ccaf13fa7d19c8c4058c8e1': true, // binance pool
  '0x61189da79177950a7272c88c6058b96d4bcd6be2': true, // binance us
  '0x4fabb145d64652a948d72533023f6e7a623c7c53': true, // binance usd
  '0xc9a2c4868f0f96faaa739b59934dc9cb304112ec': true, // binance: bgbp token
  '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503': true, // binance: binance-peg tokens
  '0xb8c77482e45f1f44de1745f52c74426c631bdd52': true, // binance: bnb token
  '0x0b95993a39a363d99280ac950f5e4536ab5c5566': true, // binance: contract
  '0x2f47a1c2db4a3b78cda44eade915c3b19107ddcc': true, // binance: eth2 depositor
  '0xb3f923eabaf178fc1bd8e13902fc5c61d3ddef5b': true, // wintermute: binance deposit

  // coinbase
  '0x71660c4005ba85c37ccec55d0c4493e66fe775d3': true, // coinbase 1
  '0x503828976d22510aad0201ac7ec88293211d23da': true, // coinbase 2
  '0xddfabcdc4d8ffc6d5beaf154f18b778f892a0740': true, // coinbase 3
  '0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511': true, // coinbase 5
  '0xeb2629a2734e272bcc07bda959863f316f4bd4cf': true, // coinbase 6
  '0xf6874c88757721a02f47592140905c4336dfbc61': true, // coinbase: coinbase commerce
  '0x881d4032abe4188e2237efcd27ab435e81fc6bb1': true, // coinbase: commerce
  '0xa090e606e30bd747d4e6245a1517ebe430f0057e': true, // coinbase: miscellaneous

  // ftx
  '0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2': true, // ftx exchange
  '0xc098b2a3aa256d2140208c3de6543aaef5cd3a94': true, // ftx exchange 2

  // huobi
  '0xab5c66752a9e8167967685f1450532fb96d5d24f': true, // huobi 1
  '0x6748f50f686bfbca6fe8ad62b22228b87f31ff2b': true, // huobi 2
  '0xfdb16996831753d5331ff813c29a93c76834a0ad': true, // huobi 3
  '0xeee28d484628d41a82d01e21d12e2e78d69920da': true, // huobi 4
  '0x5c985e89dde482efe97ea9f1950ad149eb73829b': true, // huobi 5
  '0xdc76cd25977e0a5ae17155770273ad58648900d3': true, // huobi 6
  '0xadb2b42f6bd96f5c65920b9ac88619dce4166f94': true, // huobi 7
  '0xa8660c8ffd6d578f657b72c0c811284aef0b735e': true, // huobi 8
  '0x1062a747393198f70f71ec65a582423dba7e5ab3': true, // huobi 9
  '0xe93381fb4c4f14bda253907b18fad305d799241a': true, // huobi 10
  '0xfa4b5be3f2f84f56703c42eb22142744e95a2c58': true, // huobi 11
  '0x46705dfff24256421a05d056c29e81bdc09723b8': true, // huobi 12
  '0x32598293906b5b17c27d657db3ad2c9b3f3e4265': true, // huobi 13
  '0x5861b8446a2f6e19a067874c133f04c578928727': true, // huobi 14
  '0x926fc576b7facf6ae2d08ee2d4734c134a743988': true, // huobi 15
  '0xeec606a66edb6f497662ea31b5eb1610da87ab5f': true, // huobi 16
  '0x7ef35bb398e0416b81b019fea395219b65c52164': true, // huobi 17
  '0x229b5c097f9b35009ca1321ad2034d4b3d5070f6': true, // huobi 18
  '0xd8a83b72377476d0a66683cde20a8aad0b628713': true, // huobi 19
  '0x90e9ddd9d8d5ae4e3763d0cf856c97594dea7325': true, // huobi 20
  '0x18916e1a2933cb349145a280473a5de8eb6630cb': true, // huobi 21
  '0x6f48a3e70f0251d1e83a989e62aaa2281a6d5380': true, // huobi 22
  '0xf056f435ba0cc4fcd2f1b17e3766549ffc404b94': true, // huobi 23
  '0x137ad9c4777e1d36e4b605e745e8f37b2b62e9c5': true, // huobi 24
  '0x5401dbf7da53e1c9dbf484e3d69505815f2f5e6e': true, // huobi 25
  '0x034f854b44d28e26386c1bc37ff9b20c6380b00d': true, // huobi 26
  '0x0577a79cfc63bbc0df38833ff4c4a3bf2095b404': true, // huobi 27
  '0x0c6c34cdd915845376fb5407e0895196c9dd4eec': true, // huobi 28
  '0x794d28ac31bcb136294761a556b68d2634094153': true, // huobi 29
  '0xfd54078badd5653571726c3370afb127351a6f26': true, // huobi 30
  '0xb4cd0386d2db86f30c1a11c2b8c4f4185c1dade9': true, // huobi 31
  '0x4d77a1144dc74f26838b69391a6d3b1e403d0990': true, // huobi 32
  '0x28ffe35688ffffd0659aee2e34778b0ae4e193ad': true, // huobi 33
  '0xcac725bef4f114f728cbcfd744a731c2a463c3fc': true, // huobi 34
  '0x73f8fc2e74302eb2efda125a326655acf0dc2d1b': true, // huobi 35
  '0x0a98fb70939162725ae66e626fe4b52cff62c2e5': true, // huobi 36
  '0xf66852bc122fd40bfecc63cd48217e88bda12109': true, // huobi 37
  '0x49517ca7b7a50f592886d4c74175f4c07d460a70': true, // huobi 38
  '0x58c2cb4a6bee98c309215d0d2a38d7f8aa71211c': true, // huobi 39
  '0x9d6d492bd500da5b33cf95a5d610a73360fcaaa0': true, // huobi mining pool
  '0xa66daa57432024023db65477ba87d4e7f5f95213': true, // huobi pool token
  '0x6f259637dcd74c767781e37bc6133cd6a68aa161': true, // huobi token
  '0x0316eb71485b0ab14103307bf65a021042c6d380': true, // huobi: hbtc token
  '0x1d1e10e8c66b67692f4c002c0cb334de5d485e41': true, // huobi: old address 1
  '0x1b93129f05cc2e840135aab154223c75097b69bf': true, // huobi: old address 2
  '0xeb6d43fe241fb2320b5a3c9be9cdfd4dd8226451': true, // huobi: old address 3
  '0x956e0dbecc0e873d34a5e39b25f364b2ca036730': true, // huobi: old address 4
  '0x6f50c6bff08ec925232937b204b0ae23c488402a': true, // huobi: old address 5
  '0xdf95de30cdff4381b69f9e4fa8dddce31a0128df': true, // huobi: old address 6
  '0x25c6459e5c5b01694f6453e8961420ccd1edf3b1': true, // huobi: old address 7
  '0x04645af26b54bd85dc02ac65054e87362a72cb22': true, // huobi: old address 8
  '0xb2a48f542dc56b89b24c04076cbe565b3dc58e7b': true, // huobi: old address 9
  '0xea0cfef143182d7b9208fbfeda9d172c2aced972': true, // huobi: old address 10
  '0x0c92efa186074ba716d0e2156a6ffabd579f8035': true, // huobi: old address 11
  '0x91dfa9d9e062a50d2f351bfba0d35a9604993dac': true, // huobi: old address 12
  '0x8e8bc99b79488c276d6f3ca11901e9abd77efea4': true, // huobi: old address 13
  '0xb9a4873d8d2c22e56b8574e8605644d08e047549': true, // huobi: old address 14
  '0x170af0a02339743687afd3dc8d48cffd1f660728': true, // huobi: old address 15
  '0xf775a9a0ad44807bc15936df0ee68902af1a0eee': true, // huobi: old address 16
  '0x75a83599de596cbc91a1821ffa618c40e22ac8ca': true, // huobi: old address 17
  '0x48ab9f29795dfb44b36587c50da4b30c0e84d3ed': true, // huobi: old address 18
  '0x90f49e24a9554126f591d28174e157ca267194ba': true, // huobi: old address 19
  '0xe3314bbf3334228b257779e28228cfb86fa4261b': true, // huobi: old address 20
  '0x6edb9d6547befc3397801c94bb8c97d2e8087e2f': true, // huobi: old address 21
  '0x8aabba0077f1565df73e9d15dd3784a2b0033dad': true, // huobi: old address 22
  '0xd3a2f775e973c1671f2047e620448b8662dcd3ca': true, // huobi: old address 23
  '0x1c515eaa87568c850043a89c2d2c2e8187adb056': true, // huobi: old address 24
  '0x60b45f993223dcb8bdf05e3391f7630e5a51d787': true, // huobi: old address 25
  '0xa23d7dd4b8a1060344caf18a29b42350852af481': true, // huobi: old address 26
  '0x9eebb2815dba2166d8287afa9a2c89336ba9deaa': true, // huobi: old address 27
  '0xd10e08325c0e95d59c607a693483680fe5b755b3': true, // huobi: old address 28
  '0xc837f51a0efa33f8eca03570e3d01a4b2cf97ffd': true, // huobi: old address 29
  '0xf7a8af16acb302351d7ea26ffc380575b741724c': true, // huobi: old address 30
  '0x636b76ae213358b9867591299e5c62b8d014e372': true, // huobi: old address 31
  '0x9a755332d874c893111207b0b220ce2615cd036f': true, // huobi: old address 32
  '0xecd8b3877d8e7cd0739de18a5b545bc0b3538566': true, // huobi: old address 33
  '0xef54f559b5e3b55b783c7bc59850f83514b6149c': true, // huobi: old address 34

  // hotbit
  '0x274f3c32c90517975e29dfc209a23f315c1e5fc7': true, // hotbit
  '0x8533a0bd9310eb63e7cc8e1116c18a3d67b1976a': true, // hotbit 2
  '0x562680a4dc50ed2f14d75bf31f494cfe0b8d10a1': true, // hotbit 3

  // coinlist
  '0xd1669ac6044269b59fa12c5822439f609ca54f41': true, // coinlist 1
  '0x8d1f2ebfaccf1136db76fdd1b86f1dede2d23852': true, // coinlist 2
  '0xd2c82f2e5fa236e114a81173e375a73664610998': true, // coinlist 3

  // gemini
  '0xd24400ae8bfebb18ca49be86258a3c749cf46853': true, // gemini
  '0x6fc82a5fe25a5cdb58bc74600a40a69c065263f8': true, // gemini 2
  '0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea': true, // gemini 3
  '0x5f65f7b609678448494de4c87521cdf6cef1e932': true, // gemini 4
  '0xb302bfe9c246c6e150af70b1caaa5e3df60dac05': true, // gemini 5
  '0x8d6f396d210d385033b348bcae9e4f9ea4e045bd': true, // gemini 6
  '0xd69b0089d9ca950640f5dc9931a41a5965f00303': true, // gemini 7
  '0x07ee55aa48bb72dcc6e9d78256648910de513eca': true, // gemini: contract 1
  '0xdd51f01d9fc0fd084c1a4737bbfa5becb6ced9bc': true, // gemini: deployer 1
  '0x4c2f150fc90fed3d8281114c2349f1906cde5346': true, // gemini: deployer 2
  '0x4b7ee45f30767f36f06f79b32bf1fca6f726deda': true, // gemini: efil token
  '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd': true, // gemini: gusd token
  '0xdec042a90de005b22754e94a8a979c4b8c67fde5': true, // gemini: old contract 1

  // blockfi
  '0x04046027549f739edfd5b2a78efdbaf0f0bf4514': true, // blockfi 1
  '0xa26a8e242a7470476df1dc11ded5dbc9fca610fa': true, // blockfi 2
  '0x2a549b4af9ec39b03142da6dc32221fc390b5533': true, // blockfi 3
  '0x3fda25f27211a138adf211f4c060f2149674be6d': true, // blockfi 4
  '0x808b4da0be6c9512e948521452227efc619bea52': true, // blockfi 5

  // celsius
  '0x5089afdb4328c2e90d4bbeb2b62421f51a687430': true, // celsius network: cel partners
  '0xb2d9fecc991a81eb237028262517f61dd8177b4f': true, // celsius network: cel team
  '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d': true, // celsius network: cel token
  '0xce606c7028a0702de6ef30c69c9dca4e3d46ffbd': true, // celsius network: cel treasury
  '0x81b5ce15aa64e1dcefc18f810de7d18115230586': true, // celsius network: cel treasury reserve
  '0x32a3256a4b15badd4a6e072a03d23404d925a5cf': true, // celsius network: contract
  '0x2abf9f753d0af02cca358f98d633bad81cc555ed': true, // celsius network: deployer
  '0x7de3e919d1d7e5f1b1b27bdb3575b65c5874a5f6': true, // celsius network: wallet
  '0x917334942eee7c32dcccfbde975f3e0ac30efac4': true, // celsius network: wallet 10
  '0x75db8b92937f8f86213e523788ab9f066efde3fe': true, // celsius network: wallet 2
  '0x721e3d8aa92d1f26936f6945f176415f66a88588': true, // celsius network: wallet 3
  '0xb26314635252b4ee8b454423e5299a092dea8a4a': true, // celsius network: wallet 4
  '0x4f6742badb049791cd9a37ea913f2bac38d01279': true, // celsius network: wallet 5
  '0x8b47ed08fd5f134c57b826fbd33e1de121de880d': true, // celsius network: wallet 6
  '0x84e1f49a6b65882c7365b6a775999cfcb481f22f': true, // celsius network: wallet 7
  '0x3be6d80fdce385358f5762998882efc282df7b9a': true, // celsius network: wallet 8
  '0x91e9a131446ab538d30746c79d43908faef3f289': true, // celsius network: wallet 9
  '0x9b436168dd080f1f95d1919258c64590263c0dae': true, // celsiusx 1
  '0x520da65f3b9b93a5bb6a1db911de40ae197aa639': true, // celsiusx 2
  '0x4859df02d1c7cd85c2a283708958aaa7728bad67': true, // celsiusx 3
  '0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9': true, // celsiusx 4
  '0x64875aaa68d1d5521666c67d692ee0b926b08b2f': true, // celsiusx: cxada token
  '0xf9e293d5d793ddc1ae4f778761e0b3e4aa7cf2dd': true, // celsiusx: cxdoge token

  // poloniex
  '0x32be343b94f860124dc4fee278fdcbd38c102d88': true, // poloniex
  '0x209c4784ab1e8183cf58ca33cb740efbf3fc18ef': true, // poloniex 2
  '0xb794f5ea0ba39494ce839613fffba74279579268': true, // poloniex 3
  '0xa910f92acdaf488fa6ef02174fb86208ad7722ba': true, // poloniex 4
  '0x6f803466bcd17f44fa18975bf7c509ba64bf3825': true, // poloniex USDC

  // donation wallets
  '0xa7b4d5cbfd5e96704f758c98f1248b6a6ff09071': true, // affogato: donate
  '0xf8843981e7846945960f53243ca2fd42a579f719': true, // 0xsplits: donate
  '0x635599b0ab4b5c6b1392e0a2d1d69cf7d1dddf02': true, // archive.org: donate
  '0xc59c1f61208b14ac1b5d9dcc91a795dc078d9d13': true, // bitcoinpaperwallet.com: donate
  '0xcda562d0aaa06c5ce09203e09eb827b638875500': true, // bitscreener: donate
  '0x0e7e676328921e8a0f871bb87a9258be0e047055': true, // bloxy.info: donate
  '0x66a836664adc7c525c0cc4527dee8619d4faf669': true, // boxswap: donate
  '0x0c60c6ab49dc7a0ec91b6bc856b753afa072b375': true, // chainsafe: donate
  '0xa8cc2b4bd58c778a45dee62bb0714e2da37ca95c': true, // check my nft: donate
  '0xf1d402c0175a9fa80dd770e82fa0bd50fdab0ebd': true, // chico crypto: donate
  '0xf30b6efd7b77ad91c2a9d12fdb4dfe38dbc506f8': true, // code to inspire: donate
  '0x9acfb1c50da185b96d8534cab05cb017185d85dd': true, // coinbooks: donate
  '0x4cdc86fa95ec2704f0849825f1f8b077deed8d39': true, // coingecko: donate
  '0xaf5cdbbabdeaa5f79eb7dbac4c2884a54ba5bc05': true, // coinspectator: donate
  '0xe280293b398e42be0a384959aa449f05fdbabcf4': true, // cointargets.io: donate
  '0x23ed7bf9234699fbf44ea0f397a036bc762f7ad2': true, // commeth: donation
  '0x549fffb83ac67ca1ae47668ac3caae3e0c77a9bd': true, // coronavirusapi.com: donate
  '0x28b88cfd875c883cdb61938c97b8d1baabf31c88': true, // curve.fi: donate
  '0x8ce1ef31ee55326cb4a8234a1bd9df3562644520': true, // dappradar: donate
  '0x22450f585c1dc857c201e820b0e355a7d9d7793c': true, // dappstats: donate
  '0xaf8fbf59e221d27b55dc3adc2366f9230bcf5096': true, // donate: ethmerge.com
  '0x6f8333ecc3e6eeb2008d56503db1cf4b3bafa695': true, // duino-coin: donate
  '0xea7263feb7d8a8ab0a11eedd8f1ce04412ab0820': true, // dwarfpool: donate
  '0xf9196f9f176fd2ef9243e8960817d5fbe63d79aa': true, // erc721validator.org: donate
  '0x661b5dc032bedb210f225df4b1aa2bdd669b38bc': true, // etheraddresslookup: donate
  '0x35115a19f77816ab262c7cfa3ac7c0b6b87e7049': true, // ethernodes: donate
  '0xdb0387a01592c6a5cb4efc368c1acc0081de86e0': true, // etherscamdb: donate
  '0x71c7656ec7ab88b098defb751b7401b5f6d8976f': true, // etherscan: donate
  '0xb3f04f0c276fa1177c1779f6e1e156b2738ea392': true, // ethervm: donate
  '0xa19fcdad77c1f0fd184689aca88babcf68010347': true, // ethhub: donate
  '0x4fb873af41387b211045cf235b33c6ad53954612': true, // ethminingpools.tk: donate
  '0x0de0bcb0703ff8f1aeb8c892edbe692683bd8030': true, // ethplorer: donate
  '0x466ef24d68ac9b61670eee7fc2e001b951abf482': true, // ethtps.info: donate
  '0xde419e1ae03364473cb050765553790a009bfbdf': true, // evelyn harison-denby: donate
  '0x949d37bc99a1ed3b6851ddb3d9d003154e00f617': true, // fees.wtf
  '0x4489f77fb33e194995142a872ecd85cbd6f0f193': true, // forkdelta: donate
  '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359': true, // foundationtipjar
  '0x9c3f644c6ac48b34b908aa8f4142a3fe8cccfea7': true, // gas tears donation
  '0xc183aa3924ceed27a182f3ede001bb7ef843d4bb': true, // generatepaperwallet.com: donate
  '0xcafe09e2340760d8aa1a9a64bb6d6b5e87ae2d70': true, // heliowallet: donate
  '0x4183c5f2ff12ef8d98c635f07f10dae20c9ccd6b': true, // icoalert: donate
  '0xc48e23c5f6e1ea0baef6530734edc3968f79af2e': true, // infura.io: donate
  '0xa9fa4454cc3ec0ff521926bb5f8d4389ba0e665a': true, // kamil galeev
  '0xcf07042ad1d220f4d0018c7a92f56fcea2c416ee': true, // kinexplorer: donate
  '0x1fb999f8921d6d16bafce98d6c847656b4e91f6a': true, // kitajaga: donate
  '0x7765e3e6f5f6ee9f77e0c50564362da3b5479580': true, // koraybicer: donate
  '0x501d8e0e5e146ca0af35ae2a3be8fd5661bf7db5': true, // libratics.com: donate
  '0x25c4a76e7d118705e7ea2e9b7d8c59930d8acd3b': true, // lighthouse: donate
  '0x78b801cc0fbd8d732722474fafe1feb52f2db5f6': true, // loanscan: donate
  '0x7e3dc9f40e7ff9db80c3c7a1847cb95f861b3aef': true, // makerburn: donation
  '0xc041154d39f54fdeb90ac5d64b2414c5024080aa': true, // mintable.app: donate
  '0x4bbeeb066ed09b7aed07bf39eee0460dfa261520': true, // mycrypto: donate
  '0xdecaf9cd2367cdbb726e904cd6397edfcae6068d': true, // myetherwallet: donate
  '0x19ed10db2960b9b21283fdfde464e7bf3a87d05d': true, // myzenwallet.io: donate
  '0x8c67c3b27f027985ee9cc29ab0f8630358f125c4': true, // progressive international: donate
  '0x9b984d5a03980d8dc0a24506c968465424c81dbe': true, // prysmatic labs: multisig
  '0x3c5c2f4bcec51a36494682f91dbc6ca7c63b514c': true, // rekt dao: donate
  '0x1357ba1b8327f3c38dc7408b3cc0a9ce7c87e958': true, // rugdoc: donate
  '0x017e99ae6cd397746178f191c4510077412f624e': true, // scmonit: donate
  '0xc351155c80acd043bd5f8fe7ffc8536af1ff9375': true, // shiba inu: donate
  '0x68065ca481bfb5e84c0d0e1ceae3021786f9aec6': true, // solve.care / huobi : coronavirus donation
  '0x13cf9a5ec23ae29cc06d36b3766de6a096508bc5': true, // sweeposaurus: donate
  '0x2d809bd977470bdc9b256000fcd10ca2d658b95d': true, // the giving block: care donation
  '0x6d1c8434b3dc46e273aa33714aba33cec059975c': true, // the giving block: committee to protect journalists
  '0x49e694276bae988066016dfca989875b6cca6ef6': true, // the giving block: direct relief donation
  '0x9a262425d73f542ebf81ff30cb7d7a0ff18500f5': true, // the giving block: international medical corps
  '0x73ea9107272526c4624a528dd770bd686a4bc760': true, // the giving block: mercy cops donation
  '0xd1343c4231235918b2863827643723b602c7eedd': true, // the giving block: project hope donation
  '0x8953a9b92b72995e9b5502c4c6a86f1b3db48c4f': true, // the giving block: save the children donation
  '0x8589427373d6d84e98730d7795d8f6f8731fda16': true, // tornado.cash: donate
  '0x165cd37b4c644c2921454429e7f9358d18a45e14': true, // ukraine crypto donation
  '0x10e1439455bd2624878b243819e31cfee9eb721c': true, // unchain fund donation wallet
  '0x8e6fb8f04c6b517b9313dac2495bff0787ad54a4': true, // unicef: donate
  '0xd556caf704e39fc728058557a113b226207d2212': true, // white hat donation token
  '0xe96e2181f6166a37ea4c04f6e6e2bd672d72acc1': true, // wikileaks: donate
  '0x476bb28bc6d0e9de04db5e19912c392f9a76535d': true, // woocommerce payment gateway: deployer

  // kraken
  '0x2910543af39aba0cd09dbb2d50200b3e800a63d2': true, // kraken
  '0x0a869d79a7052c7f1b55a8ebabbea3420f0d1e13': true, // kraken 2
  '0xe853c56864a2ebe4576a807d26fdc4a0ada51919': true, // kraken 3
  '0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0': true, // kraken 4
  '0xfa52274dd61e1643d2205169732f29114bc240b3': true, // kraken 5
  '0x53d284357ec70ce289d6d64134dfac8e511c8a3d': true, // kraken 6
  '0x89e51fa8ca5d66cd220baed62ed01e8951aa7c40': true, // kraken 7
  '0xc6bed363b30df7f35b601a5547fe56cd31ec63da': true, // kraken 8
  '0x29728d0efd284d85187362faa2d4d76c2cfc2612': true, // kraken 9
  '0xae2d4617c862309a3d75a0ffb358c7a5009c673f': true, // kraken 10
  '0x43984d578803891dfa9706bdeee6078d80cfc79e': true, // kraken 11
  '0x66c57bf505a85a74609d2c83e94aabb26d691e1f': true, // kraken 12
  '0xda9dfa130df4de4673b89022ee50ff26f6ea73cf': true, // kraken 13
  '0x2e7542ec36df6429d8c397f88c4cf0c925948f44': true, // kraken: deployer 1
  '0xa24787320ede4cc19d800bf87b41ab9539c4da9d': true, // kraken: deployer 2
  '0xe9f7ecae3a53d2a67105292894676b00d1fab785': true, // kraken: hot wallet

  // okex
  '0x6cc5f688a315f3dc28a7781717a9a798a59fda7b': true, // okex
  '0x236f9f97e0e62388479bf9e5ba4889e46b0273c3': true, // okex 2
  '0xa7efae728d2936e78bda97dc267687568dd593f3': true, // okex 3
  '0x2c8fbb630289363ac80705a1a61273f76fd5a161': true, // okex 4
  '0x59fae149a8f8ec74d5bc038f8b76d25b136b9573': true, // okex 5
  '0x98ec059dc3adfbdd63429454aeb0c990fba4a128': true, // okex 6
  '0x5041ed759dd4afc3a72b8192c143f72f4724081a': true, // okex 7

  // bitfinex
  '0x1151314c646ce4e0efd76d1af4760ae66a9fe30f': true, // bitfinex 1
  '0x742d35cc6634c0532925a3b844bc454e4438f44e': true, // bitfinex 2
  '0x876eabf441b2ee5b5b0554fd502a8e0600950cfa': true, // bitfinex 3
  '0xdcd0272462140d0a3ced6c4bf970c7641f08cd2c': true, // bitfinex 4
  '0x4fdd5eb2fb260149a3903859043e962ab89d8ed4': true, // bitfinex 5
  '0x1b29dd8ff0eb3240238bf97cafd6edea05d5ba82': true, // bitfinex 6
  '0x30a2ebf10f34c6c4874b0bdd5740690fd2f3b70c': true, // bitfinex 7
  '0x3f7e77b627676763997344a1ad71acb765fc8ac5': true, // bitfinex 8
  '0x59448fe20378357f206880c58068f095ae63d5a5': true, // bitfinex 9
  '0x36a85757645e8e8aec062a1dee289c7d615901ca': true, // bitfinex 10
  '0xc56fefd1028b0534bfadcdb580d3519b5586246e': true, // bitfinex 11
  '0x0b73f67a49273fc4b9a65dbd25d7d0918e734e63': true, // bitfinex 12
  '0x482f02e8bc15b5eabc52c6497b425b3ca3c821e8': true, // bitfinex 13
  '0x7727e5113d1d161373623e5f49fd568b4f543a9e': true, // bitfinex: contract 1
  '0x0e55c54249f25f70d519b7fb1c20e3331e7ba76d': true, // bitfinex: contract 2
  '0x5dbdebcae07cc958ba5290ff9deaae554e29e7b4': true, // bitfinex: deployer 1
  '0x2ee3b2df6534abc759ffe994f7b8dcdfaa02cd31': true, // bitfinex: deployer 2
  '0xe1f3c653248de6894d683cb2f10de7ca2253046f': true, // bitfinex: deployer 3
  '0x2903cadbe271e057edef157340b52a5898d7424f': true, // bitfinex: deployer 4
  '0x36928500bc1dcd7af6a2b4008875cc336b927d57': true, // bitfinex: deployer 5
  '0x14d06788090769f669427b6aea1c0240d2321f34': true, // bitfinex: deployer 6
  '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3': true, // bitfinex: leo token
  '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e': true, // bitfinex: multisig 1
  '0xc6cde7c39eb2f0f0095f41570af89efc2c1ea828': true, // bitfinex: multisig 2
  '0xc61b9bb3a7a0767e3179713f3a5c7a9aedce193c': true, // bitfinex: multisig 3
  '0xcafb10ee663f465f9d10588ac44ed20ed608c11e': true, // bitfinex: old address 1
  '0x7180eb39a6264938fdb3effd7341c4727c382153': true, // bitfinex: old address 2
  '0x69c6dcc8f83b196605fa1076897af0e7e2b6b044': true, // bitfinex: old contract 1
  '0x8d5a41e85f4ce2433beef476305d307b9205d98d': true, // bitfinex: old contract 2
  '0x5754284f345afc66a98fbb0a0afe71e0f007b949': true, // tether: treasury

  // bithumb
  '0x88d34944cf554e9cccf4a24292d891f620e9c94f': true, // bithumb 1
  '0x3052cd6bf951449a984fe4b5a38b46aef9455c8e': true, // bithumb 2
  '0x2140efd7ba31169c69dfff6cdc66c542f0211825': true, // bithumb 3
  '0xa0ff1e0f30b5dda2dc01e7e828290bc72b71e57d': true, // bithumb 4
  '0xc1da8f69e4881efe341600620268934ef01a3e63': true, // bithumb 5
  '0xb4460b75254ce0563bb68ec219208344c7ea838c': true, // bithumb 6
  '0x15878e87c685f866edfaf454be6dc06fa517b35b': true, // bithumb 7
  '0x31d03f07178bcd74f9099afebd23b0ae30184ab5': true, // bithumb 8
  '0xed48dc0628789c2956b1e41726d062a86ec45bff': true, // bithumb 9
  '0x186549a4ae594fc1f70ba4cffdac714b405be3f9': true, // bithumb 10
  '0xd273bd546b11bd60214a2f9d71f22a088aafe31b': true, // bithumb 11
  '0x558553d54183a8542f7832742e7b4ba9c33aa1e6': true, // bithumb 12
  '0x3fbe1f8fc5ddb27d428aa60f661eaaab0d2000ce': true, // bithumb: contract 1
  '0xbb5a0408fa54287b9074a2f47ab54c855e95ef82': true, // bithumb: old address 1
  '0x5521a68d4f8253fc44bfb1490249369b3e299a4a': true, // bithumb: old address 2
  '0x8fa8af91c675452200e49b4683a33ca2e1a34e42': true, // bithumb: old address 3
  '0x3b83cd1a8e516b6eb9f1af992e9354b15a6f9672': true, // bithumb: old address 4

  // shapeshift
  '0x120a270bbc009644e35f0bb6ab13f95b8199c4ad': true, // shapeshift 1
  '0x9e6316f44baeeee5d41a1070516cc5fa47baf227': true, // shapeshift 2
  '0x70faa28a6b8d6829a4b1e649d26ec9a2a39ba413': true, // shapeshift 3
  '0x563b377a956c80d77a7c613a9343699ad6123911': true, // shapeshift 4
  '0xd3273eba07248020bf98a8b560ec1576a612102f': true, // shapeshift 5
  '0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736': true, // shapeshift 6
  '0xeed16856d551569d134530ee3967ec79995e2051': true, // shapeshift 7
  '0xb36efd48c9912bd9fd58b67b65f7438f6364a256': true, // shapeshift: binance deposit
  '0xda1e5d4cc9873963f788562354b55a772253b92f': true, // shapeshift: bitfinex deposit
  '0xe9319eba87af7c2fc1f55ccde9d10ea8efbd592d': true, // shapeshift: bittrex deposit

  // bridges
  '0x8ed95d1746bf1e4dab58d8ed4724f1ef95b20db0': true, // 0x: erc20 bridge proxy
  '0x0ac2d6f5f5afc669d3ca38f830dad2b4f238ad3f': true, // 0x: eth2dai bridge
  '0xa6baaed2053058a3c8f11e0c7a9716304454b09e': true, // 0x: uniswap bridge
  '0x96e471b5945373de238963b4e032d3574be4d195': true, // 0xhabitat: rollup bridge
  '0x43298f9f91a4545df64748e78a2c777c580573d6': true, // across protocol: badger bridge pool
  '0x30b44c676a05f1264d1de9cc31db5f2a945186b6': true, // across protocol: bridge admin
  '0xdfe0ec39291e3b60aca122908f86809c9ee64e90': true, // across protocol: uma bridge pool
  '0x256c8919ce1ab0e33974cf6aa9c71561ef3017b6': true, // across protocol: usdc bridge pool
  '0x02fbb64517e1c6ed69a6faa3abf37db0482f1152': true, // across protocol: wbtc bridge pool
  '0x7355efc63ae731f584380a9838292c7046c1e433': true, // across protocol: weth bridge pool
  '0xbbbd1bbb4f9b936c3604906d7592a644071de884': true, // allbridge: bridge
  '0x011b6e24ffb0b5f5fcc564cf4183c5bbbc96d515': true, // arbitrum: bridge
  '0x4dbd4fc535ac27206064b68ffcf827b0a60bab3f': true, // arbitrum: inbox
  '0xcee284f754e854890e311e3280b767f80797180d': true, // arbitrum: l1 custom gateway
  '0xd3b5b60020504bc3489d6949d545893982ba3011': true, // arbitrum: l1 dai gateway
  '0xa3a7b6f88361f48403514059f1f16c8e78d60eec': true, // arbitrum: l1 erc20 gateway
  '0x72ce9c846789fdb6fc1f34ac4ad25dd9ef7031ef': true, // arbitrum: l1 gateway router
  '0x667e23abd27e623c11d4cc00ca3ec4d0bd63337a': true, // arbitrum: outbox
  '0x14797f5432f699cb4d4db04df599b74952d78d7b': true, // arbitrum: outbox entry
  '0x4c6f947ae67f572afa4ae0730947de7c874f95ef': true, // arbitrum: sequencer inbox
  '0xdac7bb7ce4ff441a235f08408e632fa1d799a147': true, // avalanche: avalanche-ethereum bridge
  '0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0': true, // avalanche: bridge
  '0x1a2a1c938ce3ec39b6d47113c7955baa9dd454f2': true, // axie infinity: ronin bridge
  '0x737901bea3eeb88459df9ef1be8ff3ae1b42a2ba': true, // aztec: private rollup bridge
  '0xf78765bd14b4e8527d9e4e5c5a5c11a44ad12f47': true, // biconomy: hyphen bridge
  '0x841ce48f9446c8e281d3f1444cb859b4a6d0738c': true, // celer network: cbridge
  '0xc578cbaf5a411dfa9f0d227f97dadaa4074ad062': true, // celer network: cbridge 2.0
  '0x5427fefa711eff984124bfbb1ab6fbf5e3da1820': true, // celer network: cbridge v2
  '0xf1c1413096ff2278c3df198a28f8d54e0369cf3a': true, // celo: eth helper
  '0x5d22045daceab03b158031ecb7d9d06fad24609b': true, // deversifi: bridge
  '0xd54f502e184b6b739d7d27a6410a67dc462d69c8': true, // dydx: l2 perpetual smart contract
  '0x9280e0ffdfae4ec895fdf4d4978c9e1b869eb774': true, // evo defi: bridge
  '0x9a8c4bdcd75cfa1059a6e453ac5ce9d3f5c82a35': true, // fantom: bridge
  '0x6880f6fd960d1581c2730a451a22eed1081cfd72': true, // fuel: bridge
  '0xf301d525da003e874df574bcdd309a6bf0535bb6': true, // fuse: erc-20 tokens bridge
  '0x3014ca10b91cb3d0ad85fef7a3cb95bcac9c0f79': true, // fuse: native bridge
  '0x30f938fed5de6e06a9a7cd2ac3517131c317b1e7': true, // giveth: trace bridge
  '0x75ace7a086ea0fb1a79e43cc6331ad053d8c67cb': true, // gluon network
  '0x4aa42145aa6ebf72e164c9bbc74fbd3788045016': true, // gnosis chain: xdai bridge
  '0xfd53b1b4af84d59b20bf2c20ca89a6beeaa2c628': true, // harmony: busd bridge
  '0x2dccdb493827e15a5dc8f8b72147e6c4a5620857': true, // harmony: erc20 bridge
  '0x426a61a2127fdd1318ec0edce02474f382fdad30': true, // harmony: erc721 bridge
  '0xf9fb1c508ff49f78b60d3a96dea99fa5d7f3a8a6': true, // harmony: eth bridge
  '0xfe601de9d4295274b9904d5a9ad7069f23ee2b32': true, // harmony: link bridge
  '0x4d34e61caf7a3622759d69e48ccdeb8dee5021e8': true, // harmony: one bridge
  '0x1bd0029385f95ad2584cdfaf5c19f3f20651def6': true, // harmony: token bridge
  '0xa929022c9107643515f5c777ce9a910f0d1e490c': true, // heco chain: bridge
  '0x5fdcca53617f4d2b9134b29090c87d01058e27e9': true, // immutable x: bridge
  '0x37acfef331e6063c8507c2a69c97b4f78c770a5a': true, // instadapp: maker compound bridge
  '0x3307c46a1e9633025d2e89658c7502a683585450': true, // iswap: ethereum bridge
  '0x5a1d63d3e1303e89503f2a1ecb553328f148909d': true, // jointer: jntr/e <> jntr bridge
  '0xf86fd6735f88d5b6aa709b357ad5be22cedf1a05': true, // layer2finance: rollup chain
  '0x014f808b7d4b6f58be5fef88002d5028cd0ed14b': true, // lition: token bridge
  '0x0baba1ad5be3a5c0a66e7ac838a129bf948f1ea4': true, // loopring: exchange v2
  '0x674bdf20a0f284d710bc40872100128e2d66bd3f': true, // loopring: exchange v2 deposit
  '0xec3cc6cf0252565b56fc7ac396017df5b9b78a31': true, // loopring: exchange v2 fast withdrawal
  '0x3980c9ed79d2c191a89e02fa3529c60ed6e9c04b': true, // metis andromeda: bridge
  '0xfc7cc7c7e7985316d23104b9689c511134f59bc8': true, // multichain: astar bridge
  '0x13b432914a996b0a48695df9b2d701eda45ff264': true, // multichain: bsc bridge
  '0xc564ee9f21ed8a2d8e7e76c085740d5e4c5fafbe': true, // multichain: fantom bridge
  '0x87bcb3038988ca2a89605ffa8f237fb78df1c3ae': true, // multichain: fuse bridge
  '0x46290b0c3a234e3d538050d8f34421797532a827': true, // multichain: fusion bridge
  '0xd779967f8b511c5edf39115341b310022900efed': true, // multichain: huobi bridge
  '0x923e0a17f49fb03d936f2af2d59d379c615f5447': true, // multichain: kcc bridge
  '0xec4486a90371c9b66f499ff3936f29f0d5af8b7e': true, // multichain: moonbeam bridge
  '0x10c6b61dbf44a083aec3780acf769c77be747e23': true, // multichain: moonriver bridge
  '0xe4cf417081a0ab3f964b44d904bc2b534351a9a7': true, // multichain: oasis network bridge
  '0x533e3c0e6b48010873b947bddc4721b1bdff9648': true, // multichain: old bsc bridge
  '0xe95fd76cf16008c12ff3b3a937cb16cd9cc20284': true, // multichain: router v3
  '0x6b7a87899490ece95443e979ca9485cbe7e71522': true, // multichain: router v4
  '0x765277eebeca2e31912c9946eae1021199b39c61': true, // multichain: router v4 2
  '0xba8da9dcf11b50b03fd5284f164ef5cdef910705': true, // multichain: router v6
  '0x4e67df0f232c3bc985f8a63326d80ce3d9a40400': true, // multichain: shiden network bridge
  '0x8cc49fe67a4bd7a15674c4ffd4e969d94304bbbf': true, // multichain: syscoin bridge
  '0x57ed6bd35a6ce815079855cd0b21331d1d5d0a0e': true, // multichain: telos bridge
  '0xcdd83050f045ab31b884f0dc49581bc7b3e0b84c': true, // multichain: velas bridge
  '0x23ddd3e3692d1861ed57ede224608875809e127f': true, // near: rainbow bridge
  '0x88a69b4e698a4b090df6cf5bd7b2d47325ad30a3': true, // nomad bridge
  '0x070cb1270a4b2ba53c81cef89d0fd584ed4f430b': true, // omg network v1: erc-20 vault
  '0x3eed23ea148d356a72ca695dbce2fceb40a32ce0': true, // omg network v1: eth vault
  '0x48d7a6bbc428bca019a560cf3e8ea5364395aad3': true, // omg network v1: exit game
  '0xdc1664458d2f0b6090bea60a8793a4e66c2f1c00': true, // omg: boba gateway
  '0x6a39909e805a3eadd2b61fff61147796ca6abb47': true, // optics: bridge
  '0x4fc16de11deac71e8b2db539d82d93be4b486892': true, // optics: erc-20 bridge
  '0x2784a755690453035f32ac5e28c52524d127afe2': true, // optics: eth helper
  '0x10e6593cdda8c58a1d0f14c5164b376352a55f2f': true, // optimism: dai bridge
  '0x99c9fc46f92e8a1c0dec1b1747d010903e884be1': true, // optimism: gateway
  '0x467194771dae2967aef3ecbedd3bf9a310c76c65': true, // optimism: l1 escrow
  '0x1bf68a9d1eaee7826b3593c20a0ca93293cb489a': true, // orbit chain: bridge
  '0x2140ecdc45c89ca112523637824513bae72c8671': true, // poa network: amb-eth-poa
  '0x401f6c983ea34274ec46f84d70b31c151321188b': true, // polygon (matic): plasma bridge
  '0xa68d85df56e733a06443306a095646317b5fa633': true, // polygon: hermez
  '0xf687e1481d85f8b9f4d1f4d4c15348cef8e5a762': true, // relay chain: bridge
  '0xe4b679400f0f267212d5d812b95f58c83243ee71': true, // ren: btc gateway
  '0x32666b64e9fd0f44916e1378efb2cfa3b3b96e80': true, // ren: renbridge
  '0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d': true, // rsk: token bridge
  '0xd8b19613723215ef8cc80fc35a1428f8e8826940': true, // rubic exchange
  '0xeae57ce9cc1984f202e15e038b964bb8bdf7229a': true, // sollet: solana bridge
  '0xf5c9f957705bea56a7e806943f98f7777b995826': true, // sorare: l2 bridge
  '0x2796317b0ff8538f253012862c06787adfb8ceb6': true, // synapse: bridge
  '0xa2569370a9d4841c9a62fc51269110f2eb7e0171': true, // synapse: bridge zap 1
  '0x6571d6be3d8460cf5f7d6711cd9961860029d85f': true, // synapse: bridge zap 3
  '0x045e507925d2e05d114534d0810a1abd94aca8d6': true, // synthetix: l2 bridge
  '0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f': true, // synthetix: l2 deposit escrow
  '0xc145990e84155416144c532e31f89b840ca8c2ce': true, // thorswap: routerv2
  '0x4103c267fba03a1df4fe84bc28092d629fa3f422': true, // umbria: narni bridge
  '0x98f3c9e6e3face36baad05fe09d375ef1464288b': true, // wormhole: ethereum core bridge
  '0xf92cd566ea4864356c5491c177a430c222d7e678': true, // wormhole: solana bridge
  '0x3ee18b2214aff97000d974cf647e7c347e8fa585': true, // wormhole: token bridge
  '0x31efc4aeaa7c39e54a33fdc3c46ee2bd70ae0a09': true, // xpollinate: transaction manager
  '0xe34b087bf3c99e664316a15b01e5295eb3512760': true, // zapper.fi: ethereum to polygon bridge
  '0x104b9b1c41c6764e88edf1207f498902d840fe2a': true, // zeroswap: bsc bridge
  '0x0dd1f24cf4ff96f197a795d02d0ba1eb53448bcc': true, // zeroswap: polygon bridge
  '0x8eca806aecc86ce90da803b080ca4e3a9b8097ad': true, // zkswap
  '0x6de5bdc580f55bc9dacafcb67b91674040a247e3': true, // zkswap: v2 bridge
  '0xabea9132b05a70803a4e85094fd0e1800777fbef': true, // zksync
  '0xcc9557f04633d82fb6a1741dcec96986cd8689ae': true, // zigzag

  // polygon bridges
  '0xcaa6b09c646705ca29e6ac2ec98afa3682771f53': true, // orbit bridge deployer
  '0x88dcdc47d2f83a99cf0000fdf667a468bb958a78': true, // Celer Network: cBridge
  '0xa251c4691c1ffd7d9b128874c023427513d8ac5c': true, // Celer Network: cBridge 2.0
  '0xdef78a28c78a461598d948bc0c689ce88f812ad8': true, // Cerby: Bridge Fees Wallet
  '0xef038429e3baaf784e1de93075070df2a43d4278': true, // Cerby: Cross-Chain Bridge
  '0x29494c1673903e608352020cf8f545af70111ad4': true, // DeFi Basket: AaveV2 Deposit Bridge
  '0x4789499ed6d3c9e9b874e7e02ab8139779a51704': true, // DeFi Basket: Autofarm Deposit Bridge
  '0x89db516b50819593f058040f781bff9880ca81a8': true, // DeFi Basket: Quickswap Liquidity Bridge
  '0xfa299c3f1ee9dea789b1d94243ab7aeea8bd7c77': true, // DeFi Basket: Quickswap Swap Bridge
  '0x9ba04edb13e129c19823a084c7e9988fa5e20647': true, // DeFi Basket: WMatic Wrap Bridge
  '0x840ea78f667b73853f4baece4a5ebe212c4039c1': true, // Evodefi: Bridge
  '0x82a079de7d2a8b59bc932df079ef5aa31b01aeb6': true, // iSwap: Polygon Bridge
  '0x99783b38ec79ff29234748b42c82dc27a434a096': true, // Less Network: Bridge
  '0xac0cb30cfb91dd2cbb7c12fbfc069b3f2332ad16': true, // MacaronSwap: Bridge
  '0x4f3aff3a747fcade12598081e80c6605a8be192f': true, // Multichain: Router V4
  '0x3a5846882c0d5f8b0fa4bb04dc90c013104d125d': true, // Optics: ERC-20 Bridge
  '0xa489b8981ae5652c9dd6515848cb8dbecae5e1b0': true, // Optics: ETH Helper
  '0xec52a30e4bfe2d6b0ba1d0dbf78f265c0a119286': true, // Rubic Exchange
  '0x8f5bbb2bb8c2ee94639e55d5f41de9b4839c1280': true, // Synapse: Bridge
  '0x1c6ae197ff4bf7ba96c66c5fd64cb22450af9cc8': true, // Synapse: Bridge Zap 1
  '0x90bbd86a6fe93d3bc3ed6335935447e75fab7fcf': true, // Wormhole: NFT Bridge
  '0x7a4b5a56256163f07b2c80a7ca55abe66c4ec4d7': true, // Wormhole: Polygon Core Bridge
  '0x5a58505a96d1dbf8df91cb21b54419fc36e93fde': true, // Wormhole: Token Bridge
  '0xbb256f544b8087596e8e6cdd7fe9726cc98cb400': true, // ZigZag Exchange

  // polygon exploiters
  '0x74487eed1e67f4787e8c0570e8d5d168a05254d4': true, // bZx PrivKey Exploiter
  '0x0acc0e5faa09cb1976237c3a9af3d3d4b2f35fa5': true, // bZx PrivKey Exploiter 2
  '0x967bb571f0fc9ee79c892abf9f99233aa1737e31': true, // bZx PrivKey Exploiter 3
  '0x6551fb9be444987f7482012cbf7ea95a1ee8dd0e': true, // bZx PrivKey Exploiter 4
  '0xafad9352eb6bcd085dd68268d353d0ed2571af89': true, // bZx PrivKey Exploiter 5
  '0x5dc3603c9d42ff184153a8a9094a73d461663214': true, // PolyNetwork Exploiter
  '0x685b121bbb80e89c232f0ea1755794f14cfc9822': true, // Siren Protocol Exploit
  '0x07ba7e8947f8fb4d33f3c7e25c2cb35b858f02eb': true, // Siren Protocol Exploit 2
  '0x6004ba8d5fb50b611344e29c19641e734c5f0759': true, // Siren Protocol Exploit Deployer
  '0x1574f7f4c9d3aca2ebce918e5d19d18ae853c090': true, // Superfluid Exploiter
  '0xcc06dd348169d95b1693b9185ca561b28f5b2165': true, // Unlock Protocol Exploiter 1
  '0x8c769a59f93dac14b7a416294124c01d3ec4daac': true, // Unlock Protocol Exploiter 2
  '0x65621fc7d87dacde7bef56170d8ac1078eb7d29a': true, // Wallet Hacker

  // hoo.com
  '0x980a4732c8855ffc8112e6746bd62095b4c2228f': true, // hoo
  '0xd0ec209ad2134899148bec8aef905a6e9997456a': true, // hoo 2
  '0x993b7fcba51d8f75c2dfaec0d17b6649ee0c9068': true, // hoo 3
  '0xec293b9c56f06c8f71392269313d7e2da681d9ac': true, // hoo 4
  '0x0093e5f2a850268c0ca3093c7ea53731296487eb': true, // hoo 5
  '0x008932be50098089c6a075d35f4b5182ee549f8a': true, // hoo 6

  // funds
  '0x0f4ee9631f4be0a63756515141281a3e2b293bbe': true, // Fund: 0x0F4...Bbe
  '0x11577a8a5baf1e25b9a2d89f39670f447d75c3cd': true, // Fund: 0x115...3cD
  '0x4deb3edd991cfd2fcdaa6dcfe5f1743f6e7d16a6': true, // Fund: 0x4de...6A6
  '0x84d34f4f83a87596cd3fb6887cff8f17bf5a7b83': true, // Fund: 0x84D...B83
  '0x9799b475dec92bd99bbdd943013325c36157f383': true, // Fund: 0x979...383
  '0xe5d0ef77aed07c302634dc370537126a2cd26590': true, // Fund: 0xe5D...590
  '0xfa9b5f7fdc8ab34aaf3099889475d47febf830d7': true, // Fund: 0xfa9...0d7
  '0x4862733b5fddfd35f35ea8ccf08f5045e57388b3': true, // Three Arrows Capital

  // company funds
  '0x534ea640f829f542ee439e76833b5002db4eda80': true, // Geeq: Founders
  '0xdfb0353d79cd338e294dec709e76dc4894c51572': true, // Geeq: Marketing
  '0x4cc427be94c8df62b1f3a2a3cbff904fa80284e8': true, // Geeq: Team
  '0xd884aca1897ac45515cee6d5fd48f341b4023ace': true, // Hegic: Development Fund
  '0x38ca50c6e3391a5bf73c2504bd9cd9c0b9d89053': true, // MCDEX: Foundation
  '0x1a34e5b97d684b124e32bd3b7dc82736c216976b': true, // Origin: Distribution Staging
  '0x2d00c3c132a0567bbbb45ffcfd8c6543e08ff626': true, // Origin: Ecosystem Growth
  '0xe011fa2a6df98c69383457d87a056ed0103aa352': true, // Origin: Multisig
  '0xbc0722eb6e8ba0217aeea5694fe4f214d2e53017': true, // Origin: Partnerships
  '0xcaa5ef7abc36d5e5a3e4d7930dcff3226617a167': true, // Origin: Team Distribution
  '0xbea52413e26c38b51cbcb0d3661a25f2097f8574': true, // Sparkle Loyalty: Development Treasury
  '0xa90c682f511b384706e592a8cad9121f1c17de86': true, // Sparkle Loyalty: Treasury
  '0x842f8f6fb524996d0b660621da895166e1cea691': true, // XIO Labs: Foundation Fund

  // argent relayers
  '0xdd5a1c148ca114af2f4ebc639ce21fed4730a608': true, // argent relayer 1
  '0x0385b3f162a0e001b60ecb84d3cb06199d78f666': true, // argent relayer 2
  '0xf27696c8bca7d54d696189085ae1283f59342fa6': true, // argent relayer 3
  '0x2070dcc95589f7d74525c1158fc91b64152f2997': true, // argent relayer 4
  '0x5564ac438eb845cf0607cf26c78c241907a00e83': true, // argent relayer 5
  '0xf2b7bb875675536dbd23f42a57193fccd04d8d33': true, // argent relayer 6
  '0xce1a056461836e3f4eefb0a59da46bbd98502a17': true, // argent relayer 7
  '0x1ced2cef30d40bb3617f8d455071b69f3b12d06f': true, // argent relayer 8

  // polymarket relayers
  '0xab45c5a4b0c941a2f231c04c3f49182e1a254052': true, // polymarket relayer
  '0xae700edfd9ab986395f3999fe11177b9903a52f1': true, // polymarket relayer
  '0x31cd1777a93046ede07a5bef370e633469da71c0': true, // polymarket relayer
  '0x0a16ff4c4e2ecd65e178e5a793f3297312844a62': true, // polymarket relayer
  '0x64ff2d76fe3095fb9f0a18c088b345ffd2bf8e85': true, // polymarket relayer

  // luno
  '0xaf1931c20ee0c11bea17a41bfbbad299b2763bc0': true, // luno
  '0x416299aade6443e6f6e8ab67126e65a7f606eef5': true, // luno 2

  // other
  '0x51e3d44172868acc60d68ca99591ce4230bc75e0': true, // mexc
  '0x98db3a41bf8bf4ded2c92a84ec0705689ddeef8b': true, // ramp
  '0x6e49e60f7228b6cc9883c89811266d212092a8aa': true, // xdai faucet
  '0x0e79065b5f11b5bd1e62b935a600976fff3754b9': true, // stakely faucet on many chains
  '0x00000000092769687eeb04fdc990c363eddefec2': true, // gimlu faucet
  '0xb34ed85bc0b9da2fa3c5e5d2f4b24f8ee96ce4e9': true, // unidentified, but obvious exchange
  '0x7cea675598da73f859696b483c05a4f135b2092e': true, // polygon faucet
  '0x4718964ab638787283f14a0ef4a2b0d61298e6b5': true, // unknown faucet or duster
  '0x06959153b974d0d5fdfd87d561db6d8d4fa0bb0b': true, // unknown exchange
  '0x9bd376bfce4b97c6fae3f438d516ae1582168596': true, // unknown exchange
  '0x01aefac4a308fbaed977648361fbaecfbcd380c7': true, // unknown exchange
  '0x80c67432656d59144ceff962e8faf8926599bcf8': true, // unknown bridge
  '0xd70250731a72c33bfb93016e3d1f0ca160df7e42': true, // huobi
  '0x942c49276b6c3f45a5571c4c1a19b1a7ef3bb3cc': true, // unkown exchange
  '0x4d846da8257bb0ebd164eff513dff0f0c2c3c0ba': true, // unkown exchange
  '0xcb062de41bb3410c1071d4f38d7e885844d77ffd': true, // unkown exchange
  '0x000000000000000000000000000000000000dead': true, // dead address
  '0xf625a373b7a79a3c9e1723ee02b196eda75147c1': true, // unknown exchange
  '0x0047878b7d01481ea0b48ceed14980fe83db7199': true, // unknown exchange
  '0x9f82801f8ff015e675bc4fcd9e9810339d3080ad': true, // unknown exchange
  '0x5fa4f33329522af9f32bf4cc74508e540c91a5db': true, // nft minter and account seeder
  '0xa74c734070fa4c5409af1880f866d1e99d443046': true, // funding address
  '0x4c8cfe078a5b989cea4b330197246ced82764c63': true, // alameda research
  '0x6871eacd33fbcfe585009ab64f0795d7152dc5a0': true, // unknown exchange
  '0x515281812fdf5b0d7be5fb25b823a2ab79e0a621': true, // unknown exchange
  '0x5d509a25f25190e77a1e46e72333788b1f069ce1': true, // Counter Network
  '0xd924bdd6fa7fd3d0eb1337853a814a4263dcbfe8': true, // DeversiFi: OTC
  '0xe17ee7b3c676701c66b395a35f0df4c2276a344e': true, // DigiFinex
  '0x204b937feaec333e9e6d72d35f1d131f187ecea1': true, // HEXOTC
  '0x867ffb5a3871b500f65bdfafe0136f9667deae06': true, // LocalEthereum 1
  '0x0548f59fee79f8832c299e01dca5c76f034f558e': true, // OTC: 0x054...58e
  '0x73957709695e73fd175582105c44743cf0fb6f2f': true, // bw.com
  '0xf0d9fcb4fefdbd3e7929374b4632f8ad511bd7e3': true, // bw.com funder
  '0x750ef1d7a0b4ab1c97b7a623d7917cceb5ea779c': true, // GiveDirectly
  '0x55fe002aeff02f77364de339a1292923a15844b8': true, // circle
  '0x02507b703206b862e867e56bee903ec1c0bf55f9': true, // anyswap relayer
  '0x477b8d5ef7c2c42db84deb555419cd817c336b6f': true, // mai coin
  '0x3a9e6cf4e3157670a3b991c25d6f4fcbd9419c03': true, // unknown exchange
  '0xd30b438df65f4f788563b2b3611bd6059bff4ad9': true, // unknown exchange
  '0xb02f1329d6a6acef07a763258f8509c2847a0a3e': true, // unknown exchange
  '0x39f6a6c85d39d5abad8a398310c52e7c374f2ba3': true, // whitebit
  '0x72e5263ff33d2494692d7f94a758aa9f82062f73': true, // probit
  '0x6cc8dcbca746a6e4fdefb98e1d0df903b107fd21': true, // bitrue
  '0x24ba1542f8a0a20e8251d096213384cfb0ee3dbc': true, // unknown exchange
  '0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5': true, // nano pool
  '0x3ecef08d0e2dad803847e052249bb4f8bff2d5bb': true, // mining pool hub
  '0xb01cb49fe0d6d6e47edf3a072d15dfe73155331c': true, // bitflyer
  '0x691e3cbb2a8f504fc650f21c9af6226051340559': true, // swiss borg 1
  '0xa03d3611b34c3c49dbcb8206ed08fe6467f684a5': true, // swiss borg 2
  '0x912fd21d7a69678227fe6d08c64222db41477ba0': true, // shakepay
  '0xe79eef9b9388a4ff70ed7ec5bccd5b928ebb8bd1': true, // bitmart
  '0x68b22215ff74e3606bd5e6c1de8c2d68180c85f7': true, // bitmart 2
  '0x00ee047a66d5cff27587a61559138c26b62f7ceb': true, // nexo 1
  '0xffec0067f5a79cff07527f63d83dd5462ccf8ba4': true, // nexo 2
  '0x7abe0ce388281d2acf297cb089caef3819b13448': true, // ftx us
  '0xf7793d27a1b76cdf14db7c83e82c772cf7c92910': true, // bilaxy 1
  '0xcce8d59affdd93be338fc77fa0a298c2cb65da59': true, // bilaxy 2
  '0x4e5b2e1dc63f6b91cb6cd759936495434c7e972f': true, // fixed float
  '0x6dfc34609a05bC22319fA4Cce1d1E2929548c0D7': true, // unknown exchange
  '0x1ad91ee08f21be3de0ba2ba6918e714da6b45836': true, // hiveon
  '0x4c549990a7ef3fea8784406c1eecc98bf4211fa5': true, // hiveon old pool
  '0xe7e6c88ad1bab6508a251b7995f44fb1c5e3dcf7': true, // hiveon spreader 1
  '0x3c16183c1c0e28f1a0cb9f8ee4b21d0db208ca46': true, // hiveon spreader 2
  '0x6d1d84363e342a099005423a1bc7e25a5b5ffbeb': true, // hiveon spreader 3
  '0xc45b8a5cc6b2f0583dae0197b5cc3b99de4eff9f': true, // hiveon spreader 4
  '0xac56a9e051ef1821cb4f3a0427fc941286c4e9e8': true, // hiveon spreader 5
  '0xa11ae3a981d50bcd4c9ff6732c1f815483475ff8': true, // hiveon spreader 6
  '0xc33997fd8b9251b49151911def437bca7a78ba00': true, // hiveon spreader 7
  '0x95ca6baf212be85b238413d461d20a2aa8354dd5': true, // hiveon spreader 8
  '0xc94ebb328ac25b95db0e0aa968371885fa516215': true, // unknown exchange
  '0x832f166799a407275500430b61b622f0058f15d6': true, // unknown exchange
  '0xf598b81ef8c7b52a7f2a89253436e72ec6dc871f': true, // unknown exchange
  '0x00d29bfdf5f8d2d0466da4b948f37692ca50867a': true, // 2miners 1
  '0x00a86233f4d65f4018ca7f8626b96ce72af05a7c': true, // 2miners 2
  '0x00192fb10df37c9fb26829eb2cc623cd1bf599e8': true, // 2miners pplns
  '0x002e08000acbbae2155fab7ac01929564949070d': true, // 2miners solo
  '0x6d5c355ea0bef659d3598401a327521f51e9d4eb': true, // 2miners pplns exchange
  '0x000f422887ea7d370ff31173fd3b46c8f66a5b1c': true, // unknown exchange
  '0x3b794929566e3ba0f25e4263e1987828b5c87161': true, // unknown exchange
  '0xe206e3dca498258f1b7eec1c640b5aee7bb88fd0': true, // miner
  '0x4ff9100efe68d54ceecf2a57c88c4a70b566628c': true, // bobcat miner: coinbase commerce
  '0x7fb610713c8404e21676c01c271bb662df6eb63c': true, // unknown exchange
  '0x1eC4dE886d40d487366Cde7664767Db1DF6a02e7': true, // pulsechain
  '0x9997da3de3ec197c853bcc96caecf08a81de9d69': true, // utility
  '0xa8866c94ab7a09a50bfc18370d86f66f4079de18': true, // utility
  '0x16562e41112bf3f574a82cf17ad04ef3afdcd1de': true, // metisdao
  '0x225e9b54f41f44f42150b6aaa730da5f2d23faf2': true, // non-bot user
  '0x56329acd726a373177f8bf2f94ca601c0bb3c4fa': true, // non-bot user
  '0x6c71fd9e69630ee25cdf7adfeee59476c830d02f': true, // non-bot user
  '0x53ba5604c1fb31f2d9108889d78d1c681d7f7ac0': true, // non-bot user
  '0x01a9a6279854eff17169e3936296291296a62292': true, // non-bot user
  '0xd3b1582c1f8df3f3c054ce18393fd68df5e2d756': true, // non-bot user
  '0xa563af28d54d8f2a81c33d5a3e4f8a76ceb1fdc9': true, // non-bot user
  '0x742348abbab0d3abb8884082db0e86c74ec854db': true, // non-bot user
  '0x1dbc89f5b032f0426dae050aa17a9c05d4c2f4dc': true, // non-bot user
  '0x21a135dbe868a9a147d02f8617d63cd1d0d97dc8': true, // non-bot user
  '0x66227181455f5ee6ba4cc270b0dd82d402829ae8': true, // non-bot user
  '0x6dd6e20a0969782468718d5d8f35defd3d2f1db3': true, // non-bot user
  '0x7d53911a5545f392e9029ed23efd786e8cf9e9f0': true, // non-bot user
  '0x866f12cee448fef8769c6b58876fdcd382b4f18a': true, // non-bot user
  '0x1bfc5d3d41e78ed1f761876a00c596c40c481e03': true, // non-bot user
  '0x0f46540678c7e6d2ef983b382cc07fa815ab148c': true, // non-bot user
  '0xa5b41e75941c2addd039d8c7d186072731393e89': true, // non-bot user
  '0x7854163b1b0d24e77dca702b97b5cc33e0f83dcb': true, // non-bot user
  '0x89e03e7980c92fd81ed3a9b72f5c73fdf57e5e6d': true, // non-bot user
  '0x1846a01de69da70bfb3d32cd14e8a2cd414b42af': true, // non-bot user
  '0xad8db6191fd404d798ee9d12e4cc37f4501a7ed1': true, // non-bot user
  '0xdf627f524a24212acb573e8b1ae5f47e6ab83f69': true, // non-bot user
  '0xecd7c4c41d32915b233cf44786be7a7612af7d69': true, // non-bot user
  '0xfb15339d187a76af62698f73d700e1f8536f03bd': true, // non-bot user
  '0x60d4dd03fca377816c959ff89033ffc8af4efad2': true, // non-bot user
  '0x240df0da944c11428eb9f8ad197cc211fd8d82ef': true, // non-bot user
  '0xd4fc1974bfb6721785ca25828711d76a0fc2fea3': true, // non-bot user
  '0xb6ca7a7c6034a8219af7ddb49739bd70ac62b20a': true, // non-bot user
  '0xab12253171a0d73df64b115cd43fe0a32feb9daa': true, // non-bot user
  '0x102c13752113c8d60000bf3fbf9205a80ca245e7': true, // non-bot user
  '0x8314125c8b68af2afd0d151eb4a551e88128a2ae': true, // thales
  '0x7e4a8391c728fed9069b2962699ab416628b19fa': true, // dharma deployer
  '0x4b5922abf25858d012d12bb1184e5d3d0b6d6be4': true, // verify nifty deployer
  '0x94b1fc7695b9d596e5b65b2b4f3d05d0069bc012': true, // x token deployer
  '0x4c0c29539c463af348f8cba8c02d644a8d68c320': true, // x token deployer
  '0xcc0ecd808ce4fed81f0552b3889656b28aa2bae9': true, // akutar deployer
  '0xc6406f3b023e59bde7df11982eed7ffe21c9ad99': true, // nft creator and distributor
  '0x9d8d7220d060fd12ca33336b7239688e366327de': true, // nft power user
  '0x588720ae8b715ab6b1125bcf3ae44079f82b3f88': true, // gnosis safe executor
  '0x5f464da70f02a498cd525e950bccb323b9989d90': true, // mallowsxyz
  '0x35faedece484e6a6d37e07b949e2abe036b52bb3': true, // nft power user
}

export default blacklist
