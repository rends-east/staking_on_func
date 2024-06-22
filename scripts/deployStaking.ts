import 'dotenv/config';
import { address, toNano, } from '@ton/core';
import { JettonMinterStaking, jettonContentToCell } from '../wrappers/JettonMinterStaking';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const admin = address(process.env.JETTON_ADMIN ? process.env.JETTON_ADMIN : "");
    const content = jettonContentToCell({ type: 1, uri: process.env.JETTON_CONTENT_URI ? process.env.JETTON_CONTENT_URI : "" });
    const wallet_code = await compile('JettonWallet');
    const state = process.env.JETTON_STATE ? Number(process.env.JETTON_STATE).valueOf() : 0;
    const price = process.env.JETTON_PRICE ? BigInt(process.env.JETTON_PRICE).valueOf() : BigInt(1000000000);
    const jetton_minter = address(process.env.JETTON_MINTER ? process.env.JETTON_MINTER : "");

    const minter = provider.open(
        JettonMinterStaking.createFromConfig(
            {
                admin,
                content,
                wallet_code,
                state,
                price,
            },
            await compile('JettonMinterStaking')
        )
    );

    await minter.sendDeploy(provider.sender(), toNano('0.2'), jetton_minter);

    await provider.waitForDeploy(minter.address);

    console.log('getTotalSupply', await minter.getTotalSupply());
}