# TON Staking repository

This repository is dedicated to the development of code that will facilitate the conduction of an staking on the Telegram Open Network (TON) blockchain. The staking will be conducted for the purpose of launching a new jetton, the TEP-89, which will be fully compatible with the TEP-74 standard. The code contained in this repository will enable the smooth and secure operation of the staking, providing investors with a reliable and transparent platform to participate in the staking of some jetton. Furthermore, the TEP-89 jetton will be designed to offer a range of benefits and functionalities that will make it an attractive investment opportunity for both experienced and novice cryptocurrency investors alike.


# How to use for own staking

1. Clone this repository
2. Install all dependencies ```yarn```
3. Rename `_.env` to `.env`

Fill out the values in `.env`:

```
JETTON_ADMIN="" # adress from which will be managed this Staking
JETTON_CONTENT_URI="" # URI for metadata by standard https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md
JETTON_STATE=0 # 0 - active, 1 - paused
JETTON_PRICE=2000000000 #1 TON = 2 jetton, if set 100000000 {- 1e8 -}, then 1 TON = 0.1 jetton, etc.
JETTON_MINTER="" # address of jetton minter for payment
```


# Deployment

When all tests will be finished, just run

```js
yarn deploy
```

and follow by the instructions

# Smart contract control

1. Changing admin (owner)
2. Changing jetton content
3. Pause/Resume feature to split on several steps

# UI for interaction with the staking

```js
yarn controller
```

Keep in mind that you can use ton:// link to spread your staking. Just choice "Stake" to obtain the link and don't pay. A user will be able to select its own amount if you will remove amount=1000000000 from the link.

For example:

```
ton://transfer/EQAHM3Xc_djTLCCEudIgAknu6ypK0zzdLTpTejhd3sebCzm7?amount=1000000000&bin=te6cckEBAQEADgAAGEAu_wsAAAAAAAAAAPnjyqo
```

And spread [ton://transfer/EQAHM3Xc_djTLCCEudIgAknu6ypK0zzdLTpTejhd3sebCzm7?bin=te6cckEBAQEADgAAGEAu_wsAAAAAAAAAAPnjyqo](ton://transfer/EQAHM3Xc_djTLCCEudIgAknu6ypK0zzdLTpTejhd3sebCzm7?bin=te6cckEBAQEADgAAGEAu_wsAAAAAAAAAAPnjyqo)

# Sources

https://docs.ton.org/develop/func/cookbook

https://github.com/ton-org/blueprint/

https://github.com/EmelyanenkoK/modern_jetton

https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md

https://base64.guru/converter/encode/image

# Licence

MIT