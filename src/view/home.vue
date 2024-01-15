<template>
  <div class="yhome" ref="scrollcon" @wheel="handleMouseWheel">
    <div
      :class="onebox == '1' ? 'yhomey flex yhomeyshow' : 'yhomey flex'"
      ref="one"
    >
      <div class="yhomey_one">
        <p class="yhomey_two">{{ $store.state.txt.yhome }}</p>
        <h1 class="yhomey_three">
          {{ $store.state.txt.yhometitle }}
        </h1>
        <p class="yhomey_four">
          {{ $store.state.txt.yhomecont }}
        </p>
        <h1 class="yhomey_three">{{ $store.state.txt.yhometitlet }}</h1>
        <p class="yhomey_four">{{ $store.state.txt.yhomecontt }}</p>
        <div class="yhomey_inpbox flex">
          <div class="yhomeyinpy">
            <input
              type="text"
              v-model="yzminpy"
              maxlength="1"
              ref="input1"
              @keydown="yzminp($event, 1, yzminpy)"
              @input="xiqian(1, yzminpy)"
            />
          </div>
          <div class="yhomeyinpy">
            <input
              type="text"
              v-model="yzminpt"
              maxlength="1"
              ref="input2"
              @input="xiqian(2, yzminpt)"
              @keydown="yzminp($event, 2, yzminpt)"
            />
          </div>
          <div class="yhomeyinpy">
            <input
              type="text"
              v-model="yzminpthr"
              maxlength="1"
              ref="input3"
              @input="xiqian(3, yzminpthr)"
              @keydown="yzminp($event, 3, yzminpt)"
            />
          </div>
          <div class="yhomeyinpy">
            <input
              type="text"
              v-model="yzminpf"
              maxlength="1"
              ref="input4"
              @input="xiqian(4, yzminpf)"
              @keydown="yzminp($event, 4, yzminpt)"
              routz
            />
          </div>
          <div class="yhomeyinpy">
            <input
              type="text"
              v-model="yzminpw"
              maxlength="1"
              ref="input5"
              @input="xiqian(5, yzminpw)"
              @keydown="yzminp($event, 5, yzminpt)"
            />
          </div>
        </div>
        <div class="yhomey_but flex">
          <button :class="logari == '1' ? 'shiactive' : ''" @click="routz()">
            {{ anntxt }}
          </button>
        </div>
        <!-- <div class="yhome_five">Register Wallet</div>
        <p class="yhome_six">
          By creating an account, you will be able to earn $GIVE tokens by
          engaging on Twitter starting October 18th. All beta users will receive
          an additional 5,000 ($50) bonus in $GIVE tokens at the end of Epoch 1
          on October 25th, 2023 6PM UTC. Link your Twitter Username to your
          wallet address above. (NOTE: There may be a small gas fee to
          register.)
        </p> -->
      </div>
    </div>
    <div
      :class="twobox == '1' ? 'ytwobox ytwoboxshow' : 'ytwobox'"
      id="xShareBot"
      ref="two"
    >
      <h2>{{ $store.state.txt.thometitle }}</h2>
      <div class="ytwo flex">
        <div class="ytwoleft">
          <img
            class="ytwolimgy"
            src="../assets/edge-example-23b0b818.jpg"
            alt=""
          />
        </div>
        <div class="ytworight">
          <h2>{{ $store.state.txt.thomesamletitle }}</h2>
          <p>
            {{ $store.state.txt.thometxty }}
          </p>
          <p>
            {{ $store.state.txt.thometxtt }}
          </p>
        </div>
      </div>
    </div>
    <div
      :class="threebox == '1' ? 'ytwobox ytwoboxshow' : 'ytwobox'"
      id="MevBot"
      ref="three"
    >
      <h2>{{ $store.state.txt.thrhometitle }}</h2>
      <div class="ytwo flex">
        <div class="ytworight">
          <h2>{{ $store.state.txt.thrhomesamletitle }}</h2>
          <p>
            {{ $store.state.txt.thrhometxty }}
          </p>
          <p>
            {{ $store.state.txt.thrhometxtt }}
          </p>
        </div>
        <div class="ytwoleft">
          <img
            class="ytwolimgy"
            src="../assets/monerujo-example-8b5fe8a3.png"
            alt=""
          />
          <img
            class="ytwolimge"
            src="../assets/monerujo-gunther-8c1ae701.gif"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      :class="fourbox == '1' ? 'ybiao ybiaoshow' : 'ybiao'"
      id="Tokennomics"
      ref="four"
    >
      <h2>{{ $store.state.txt.fhometitle }}</h2>
      <div class="ybiao_one">
        <div class="ybiao_two">
          <h2>{{ $store.state.txt.fhometxttit }}</h2>
          <p class="ybiao_three">
            {{ $store.state.txt.fhometxtsy }}<b> 100M</b>
          </p>
          <p class="ybiao_four">
            {{ $store.state.txt.fhometxtst }}<b>$0,065</b>
          </p>
          <p class="ybiao_four">
            {{ $store.state.txt.fhometxtsthr }}<b>$NERD</b>
          </p>
          <div class="ybiao_five">
            <p>{{ $store.state.txt.fhometxtsbut }}</p>
          </div>
        </div>
        <div class="ybiao_right">
          <div id="chart" class="chart-container">
            <apexchart
              width="100%"
              type="polarArea"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="fivebox == '1' ? 'sju sjushow' : 'sju'"
      id="Roadmap"
      ref="five"
    >
      <h2>{{ $store.state.txt.whometitle }}</h2>
      <div class="sjubox">
        <div class="app_one">
          <div
            id="draggable"
            :style="{ left: positionX + 'px' }"
            @mousedown="onMouseDown"
          >
            <div class="app_two">
              <div class="app_five">
                <p>2023</p>
                <span> {{ $store.state.txt.whomelistdy }}</span>
              </div>
              <div class="app_four">
                <ul class="app_six">
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxy }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxt }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxthr }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxf }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxw }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxs }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxq }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxba }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxjiu }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxten }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxteny }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxtent }}<br />
                      {{ $store.state.txt.whomelistdyboxtenthr }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxtenf }}<br />{{
                        $store.state.txt.whomelistdyboxtenw
                      }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxtens }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdyboxtens }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdyboxtens }}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="app_five" style="padding-left: 35rem">
                <p>2023</p>
                <span>{{ $store.state.txt.whomelistdt }}</span>
              </div>
              <div class="app_four" style="width: 20rem">
                <ul class="app_six1">
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      <ul class="app_12">
                        <li class="app_13">
                          <ul class="app_14">
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                          </ul>
                          <div></div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                      </ul>
                      {{ $store.state.txt.whomelistdtboxthr }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdtboxf }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdtboxw }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      <ul class="app_12">
                        <li class="app_13">
                          <ul class="app_14">
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                          </ul>
                          <div></div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                      </ul>
                      {{ $store.state.txt.whomelistdtboxthr }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      <div>{{ $store.state.txt.whomelistdtboxs }}</div>
                      <ul class="app_19">
                        <li class="app_20">
                          <div class="app_21">
                            {{ $store.state.txt.whomelistdtboxq }}
                          </div>
                        </li>
                        <li class="app_20">
                          <div class="app_21">
                            {{ $store.state.txt.whomelistdtboxq }}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdtboxw }}
                      <br />
                      {{ $store.state.txt.whomelistdtboxw }}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="app_five" style="padding-left: 38rem">
                <p>2023</p>
                <span>{{ $store.state.txt.whomelistdt }}</span>
              </div>
              <div class="app_four" style="width: 20rem">
                <ul class="app_six1">
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      <ul class="app_12">
                        <li class="app_13">
                          <ul class="app_14">
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                          </ul>
                          <div></div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                      </ul>
                      {{ $store.state.txt.whomelistdtboxthr }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      {{ $store.state.txt.whomelistdtboxf }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdtboxw }}
                    </div>
                  </li>
                  <li class="app_11">
                    <span class="roadmap-hexagon1"></span>
                    <div class="app_ten1">
                      <ul class="app_12">
                        <li class="app_13">
                          <ul class="app_14">
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                            <li class="app_15">
                              <div class="app_16">
                                {{ $store.state.txt.whomelistdtboxy }}
                              </div>
                            </li>
                          </ul>
                          <div></div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                        <li class="app_17">
                          <div class="app_18">
                            {{ $store.state.txt.whomelistdtboxt }}
                          </div>
                        </li>
                      </ul>
                      {{ $store.state.txt.whomelistdtboxthr }}
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      <div>{{ $store.state.txt.whomelistdtboxs }}</div>
                      <ul class="app_19">
                        <li class="app_20">
                          <div class="app_21">
                            {{ $store.state.txt.whomelistdtboxq }}
                          </div>
                        </li>
                        <li class="app_20">
                          <div class="app_21">
                            {{ $store.state.txt.whomelistdtboxq }}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="app_seve">
                    <span class="roadmap-hexagon"></span>
                    <div class="app_ten">
                      {{ $store.state.txt.whomelistdtboxw }}
                      <br />
                      {{ $store.state.txt.whomelistdtboxw }}
                    </div>
                  </li>
                </ul>
              </div>
              <div
                class="app_five"
                style="
                  font-size: 30px;
                  padding-left: 38rem;
                  color: rgb(232 90 67);
                "
              >
                <span> // </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="sixybox == '1' ? 'someAi someAishow' : 'someAi'" ref="sixy">
      <div class="some_one">
        <h2>{{ $store.state.txt.sixhometitle }}</h2>
        <p>
          {{ $store.state.txt.sixhometxt }}
        </p>
      </div>
    </div>
    <div
      :class="sixybox == '1' ? 'some_three some_threeshow' : 'some_three'"
      ref="sixt"
    >
      <div class="carousel">
        <div
          class="carousel-container"
          :style="{ transform: 'translateX(' + offset + 'px)' }"
        >
          <div
            v-for="(item, index) in $store.state.txt.sixhomelist"
            :key="index"
            :class="{
              'carousel-card': true,
              highlighted: index === selectedIndex,
            }"
            @click="selectCard(index)"
            :style="getCardStyle(index)"
          >
            <div class="car_top">
              <img
                class="car_img"
                style="margin-right: 1rem"
                src="../assets/toplogo.png"
              />
              <div class="car_txt">
                <p>{{ item.user }}</p>
                <span>{{ item.usertxt }}</span>
              </div>
            </div>
            <p class="car_txtx">{{ item.txt }}</p>
          </div>
        </div>
      </div>
      <div class="some_two">
        <button @click="moveLeft">
          <svg
            style="width: 30px; height: 30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
              fill="rgba(255,255,255,1)"
            ></path>
          </svg>
        </button>
        <button @click="moveRight">
          <svg
            style="width: 30px; height: 30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"
              fill="rgba(255,255,255,1)"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import api from "../common/api";
export default {
  data() {
    return {
      offset: -450,
      cardWidth: 450,
      selectedIndex: 1,
      positionX: 0,
      startX: 0,
      allowDragLeft: 0,
      allowDragRight: 0,
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chartOptions: {
        chart: {
          type: "polarArea",
        },
        stroke: {
          colors: ["#fff"],
        },
        fill: {
          opacity: 0.8,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 360,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      yzminpy: "",
      yzminpt: "",
      yzminpthr: "",
      yzminpf: "",
      yzminpw: "",
      anntxt: "ENTER INVITE CODE",
      xhladd: "",
      scrolljl: 0,
      onebox: "0",
      twobox: "0",
      threebox: "0",
      fourbox: "0",
      fivebox: "0",
      sixybox: "0",
      onebjl: 0,
      twobjl: 0,
      threebjl: 0,
      fourbjl: 0,
      fivebjl: 0,
      sixtbjl: 0,
      sixybjl: 0,
      logari: "0",
    };
  },
  methods: {
    moveLeft() {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
        this.updateOffset();
      }
    },
    moveRight() {
      if (this.selectedIndex < this.$store.state.txt.sixhomelist.length - 1) {
        this.selectedIndex++;
        console.log(this.selectedIndex);
        this.updateOffset();
      }
    },
    updateOffset() {
      this.offset = -this.selectedIndex * this.cardWidth;
    },
    selectCard(index) {
      this.selectedIndex = index;
    },
    getCardStyle(index) {
      const offset = index - this.selectedIndex;
      const style = {
        transform: `translateX(${offset}px)`,
      };
      if (index === this.selectedIndex) {
        style.opacity = 1;
        style.transform += " scale(1.1) translateZ(8rem)";
      } else {
        style.opacity = 0.5;
      }
      return style;
    },
    onMouseDown(event) {
      this.startX = event.clientX;
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(event) {
      const offsetX = event.clientX - this.startX;
      this.positionX += offsetX;
      console.log(this.positionX, offsetX);
      this.startX = event.clientX;

      if (this.positionX <= -1400 && offsetX < 0) {
        this.positionX -= offsetX;
      } else if (this.positionX >= 0 && offsetX > 0) {
        this.positionX -= offsetX;
      }
    },
    onMouseUp() {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    },
    yzminp(event, currentInput) {
      const key = event.keyCode || event.which;
      if (key === 8 && event.target.value === "") {
        if (currentInput == 5) {
          this.$refs.input4.focus();
        } else if (currentInput == 4) {
          this.$refs.input3.focus();
        } else if (currentInput == 3) {
          this.$refs.input2.focus();
        } else if (currentInput == 2) {
          this.$refs.input1.focus();
        }
      }
    },
    xiqian(index, val) {
      if (val != "") {
        if (index == 1) {
          this.$refs.input2.focus();
        } else if (index == 2) {
          this.$refs.input3.focus();
        } else if (index == 3) {
          this.$refs.input4.focus();
        } else if (index == 4) {
          this.$refs.input5.focus();
        }
      }
      let values =
        this.yzminpy +
        this.yzminpt +
        this.yzminpthr +
        this.yzminpf +
        this.yzminpw;
      let length = values.length;
      if (length == 5) {
        this.anntxt = "REDEEM INVITE CODE";
      } else {
        this.anntxt = "ENTER INVITE CODE";
      }
    },
    routz() {
      let values =
        this.yzminpy +
        this.yzminpt +
        this.yzminpthr +
        this.yzminpf +
        this.yzminpw;
      this.logari = "1";
      let length = values.length;
      let sign = md5(this.xhladd + "88888888");
      let walletadd = this.xhladd;
      // if (length == 5 && localStorage.getItem("xhladd")) {
      //   api
      //     .login({
      //       appId: "xbot",
      //       sign: sign,
      //       walletAddress: walletadd,
      //     })
      //     .then((res) => {
      //       console.log(res);
      //       localStorage.setItem("user", JSON.stringify(res.data.data));
      //       api
      //         .verifyinvitation({
      //           invitationCode: "ZVKMN",
      //           appId: "xbot",
      //           userId: res.data.data.userId,
      //           token: res.data.data.token,
      //         })
      //         .then((res) => {
      //           console.log("verifyinvitation", res.data.status);
      //           if (res.data.status == "success") {
      //             this.$router.push("/Airdrop");
      //           }
      //         });
      //     });
      // } else if (localStorage.getItem("xhladd") && length != 5) {
      //   alert("Please enter the correct invitation code!!!");
      // } else {
      //   alert("Please link the wallet first!!!");
      // }
      this.$router.push("/Airdrop");
      localStorage.setItem("istrue", "1");
    },
    handleMouseWheel(event) {
      const delta = event.deltaY || event.detail || event.wheelDelta;
      this.scrolljl = this.scrolljl + delta;
      console.log(this.scrolljl);
      if (this.scrolljl <= 0) {
        this.scrolljl = 0;
      } else if (this.scrolljl >= 4667) {
        this.scrolljl = 4667;
      }
      if (this.scrolljl >= 0 && this.twobjl > this.scrolljl) {
        this.onebox = "1";
      } else if (
        this.scrolljl >= this.twobjl &&
        this.threebjl > this.scrolljl
      ) {
        this.twobox = "1";
        this.onebox = "1";
      } else if (
        this.scrolljl >= this.threebjl &&
        this.fourbjl > this.scrolljl
      ) {
        this.threebox = "1";
        this.twobox = "1";
        this.onebox = "1";
      } else if (
        this.scrolljl >= this.fourbjl &&
        this.fivebjl > this.scrolljl
      ) {
        this.fourbox = "1";
        this.threebox = "1";
        this.twobox = "1";
        this.onebox = "1";
      } else if (
        this.scrolljl >= this.fivebjl &&
        this.sixybjl > this.scrolljl
      ) {
        this.fivebox = "1";
        this.fourbox = "1";
        this.threebox = "1";
        this.twobox = "1";
        this.onebox = "1";
      } else if (this.scrolljl >= this.sixybjl) {
        this.sixybox = "1";
        this.fivebox = "1";
        this.fourbox = "1";
        this.threebox = "1";
        this.twobox = "1";
        this.onebox = "1";
      }
    },
  },
  mounted() {
    if (localStorage.getItem("xhladd")) {
      this.xhladd = localStorage.getItem("xhladd");
    }
    setTimeout(() => {
      this.onebox = "1";
    }, 1000);
    const divHeighty = this.$refs.one.getBoundingClientRect();
    const distanceToTopy = divHeighty.top;
    const divHeightt = this.$refs.two.getBoundingClientRect();
    const distanceToTopt = divHeightt.top;
    const divHeightthr = this.$refs.three.getBoundingClientRect();
    const distanceToTopthr = divHeightthr.top;
    const divHeightf = this.$refs.four.getBoundingClientRect();
    const distanceToTopf = divHeightf.top;
    const divHeightw = this.$refs.five.getBoundingClientRect();
    const distanceToTopw = divHeightw.top;
    const divHeightsy = this.$refs.sixy.getBoundingClientRect();
    const distanceToTopsy = divHeightsy.top;
    const divHeightst = this.$refs.sixt.getBoundingClientRect();
    const distanceToTopst = divHeightst.top;
    console.log(window.innerWidth);
    if (window.innerWidth <= 1250) {
      this.onebjl = distanceToTopy - 150;
      this.twobjl = distanceToTopt - 500;
      this.threebjl = distanceToTopthr - 220;
      this.fourbjl = distanceToTopf - 550;
      this.fivebjl = distanceToTopw - 1000;
      this.sixybjl = distanceToTopsy - 1200;
      this.sixtbjl = distanceToTopst - 150;
    } else {
      this.onebjl = distanceToTopy - 150;
      this.twobjl = distanceToTopt - 150;
      this.threebjl = distanceToTopthr - 150;
      this.fourbjl = distanceToTopf - 150;
      this.fivebjl = distanceToTopw - 150;
      this.sixybjl = distanceToTopsy - 150;
      this.sixtbjl = distanceToTopst - 150;
    }

    console.log(
      distanceToTopy,
      distanceToTopt,
      distanceToTopthr,
      distanceToTopf,
      distanceToTopw,
      distanceToTopsy,
      distanceToTopst
    );
  },
};
</script>

<style scoped>
@font-face {
  font-family: "one";
  src: url("../assets/VectrexWeb-Bold.woff2") format("woff");
}

@font-face {
  font-family: "two";
  src: url("../assets/GT-Pressura-Mono-Regular.woff2") format("woff");
}
.ymianbt {
  background-color: rgb(17, 11, 11);
}
.yhomey_but {
  justify-content: center;
}
.yhomey_but button {
  font-family: "GT Pressura Mono";
  border: 2px solid;
  border-radius: 0.375rem;
  height: 3rem;
  padding: 0 1.25rem;
  font-weight: 400;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
}
.ymainhy .yhomey_but button:hover {
  border-color: rgb(17 11 11);
}
.yhomey_but .shiactive {
  cursor: not-allowed;
}
.ymainbt .yhomey_but button {
  border-color: rgb(179 187 202);
  color: rgb(255 255 255);
}
.ymainbt .yhomey_but button:hover {
  border-color: rgb(255 255 255);
}
.ymainhy .car_txt {
  color: #000;
}
.yhomey_inpbox {
  width: 100%;
  justify-content: center;
  column-gap: 0.5rem;
  margin-bottom: 2rem;
}
.yhomeyinpy {
  width: 3.125rem;
  height: 3.875rem;
}
.yhomeyinpy > input {
  font-family: "Vectrex";
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  border: 1px solid rgb(179 187 202);
  transition: all 0.15s;
  color: white;
  box-sizing: border-box;
  background: transparent;
  font-size: 1.5rem;
  line-height: 160%;
  letter-spacing: 1.2px;
  font-weight: 400;
  border-radius: 0.9375rem;
  text-align: center;
}
.ymainhy .yhomeyinpy > input {
  border-color: rgb(105 111 122);
  color: black;
}
.yhomeyinpy > input:focus {
  border-color: white;
}
.ymainhy .yhomeyinpy > input:focus {
  border-color: rgb(56 59 64);
}
.ymainhy .car_txtx {
  color: #000;
}

.ymainhy .car_txt > span {
  color: #000;
}

.ymainhy .some_one > h2 {
  color: #000;
}

.ymainhy .some_one > p {
  color: #000;
}

.ymainhy .some_two > button svg {
  fill: #000 !important;
}

.carousel {
  width: 3500px;
  position: relative;
  /* display: flex; */
  /* overflow: hidden; */
  font-family: one;
  /* margin-top: 3rem; */
  padding-top: 3rem;
  margin: 0 auto;
}

.carousel-container {
  display: flex;
  margin-left: 30rem;
  transition: transform 0.5s;
}
.ymainhy .carousel-card {
  background: transparent;
}
.carousel-card {
  width: 450px;
  height: 300px;
  margin: 0 2rem;
  border-radius: 15px;
  border: 1px solid #323338;
  background: #000;
  /* background-color: #f0f0f0; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  cursor: pointer;
  transition: transform 0.5s;
  /* 添加过渡效果 */
}

.carousel-card:nth-child(2) {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
}

.carousel-card:nth-child(4) {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
}

.car_img {
  width: 50px;
  margin: 0rem 0 0 1.5rem;
}

.car_top {
  display: flex;
  margin-top: 2rem;
}

.car_txt {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.car_txtx {
  color: white;
  margin: 2rem 1.5rem 0 1.5rem;
  line-height: 24px;
  font-size: 16px;
  font-family: two;
}

.car_txt > p {
  font-size: 14px;
}

.car_txt > span {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

.highlighted {
  /* border: 2px solid blue; */
  transform: translateZ(8rem);
  /* transform: translateZ(200px) */
  /* 高光样式 */
}

.someAi {
  width: 63.5%;
  margin: 0 auto;
  padding-top: 5rem;
  color: white;
  opacity: 0.05;
  transition: opacity 0.8s linear;
}
.someAishow {
  opacity: 1;
}
.some_one {
  width: 100%;
  text-align: center;
}

.some_two {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.some_two > button {
  margin-left: 2rem;
  background: transparent;
}

.some_three {
  width: 100%;
  overflow: hidden;
  opacity: 0.05;
  transition: opacity 0.8s linear;
}
.some_threeshow {
  opacity: 1;
}
.some_one > h2 {
  font-size: 42px;
  font-family: "Vectrex";
}

.some_one > p {
  width: 65%;
  font-family: "two";
  font-size: 18px;
  line-height: 24px;
  margin: 1.5rem auto;
  color: rgba(255, 255, 255, 0.5);
}

.ymainhy .yhomey_two {
  color: #000;
}

.ymainhy .yhomey_four {
  color: #000;
}

.yhomey_one {
  width: 100%;
}

.yhomey_two {
  width: 100%;
  text-align: center;
  color: #b3bbca;
  font-family: two;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 22px;
}

.ymainhy .yhomey_three {
  color: #000;
}

.ymainhy .yhome_six {
  color: #000;
}

.ymainhy .yhome_five {
  color: #000;
  border-color: #696f7a;
}

.ymainhy .yhome_five:hover {
  background-color: #000;
  color: white;
}

.yhomey_three {
  font-size: 60px;
  font-family: one;
  text-align: center;
  color: white;
}

.yhomey_four {
  font-size: 22px;
  width: 75%;
  margin: 1rem auto;
  text-align: center;
  color: #b3bbca;
  font-family: two;
}

.yhome_five {
  font-size: 18px;
  text-align: center;
  margin: 1rem auto;
  width: 10rem;
  color: white;
  font-family: two;
  border-radius: 10px;
  padding: 1rem 2.5rem;
  border: 1px white solid;
}

.yhome_five:hover {
  background-color: white;
  color: #000;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
}

.yhome_six {
  margin: 2rem 0 2rem 0;
  color: #b3bbca;
  font-size: 22px;
  text-align: center;
  font-family: two;
}

.app_one {
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  font-family: "Vectrex" !important;
}

.ymainhy .app_five {
  color: black;
}

.ymainhy .app_five > p {
  color: rgb(111 198 81);
}

#draggable {
  width: 160%;
  height: 100%;
  /* background-color: aqua; */
  position: relative;
  left: 0;
  cursor: grab;
  user-select: none;
}

.app_two {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 8rem;
}

.app_four {
  width: 22rem;
  border-top: 3px;
}

.app_five {
  color: white;
  text-align: center;
}

.app_five > p {
  color: aquamarine;
  font-weight: 900;
  font-size: 26px;
}

.app_four {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app_six {
  rotate: -90deg;
  margin: 0;
  padding: 50px 170px 0;
  color: #84d4bc;
  position: relative;
  left: 85%;
}

.app_six::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -100px;
  width: 110%;
  height: 2px;
  background: rgb(232 90 67);
  rotate: 90deg;
  transform-origin: 0 0;
  margin-left: 1px;
}

.app_six1 {
  rotate: -90deg;
  margin: 0;
  padding: 50px 170px 0;
  color: #84d4bc;
  position: relative;
  left: 85%;
}

.app_six1::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0px;
  width: 110%;
  height: 2px;
  background: rgb(232 90 67);
  rotate: 90deg;
  transform-origin: 0 0;
  margin-left: 1px;
}

.app_seve {
  text-align: right;
  padding-right: 40px;
  transform: translate(-50%);
  border-right: 2px solid transparent;
  margin-right: -2px;
  font-size: 18px;
  line-height: 26px;
  font-family: "GT Pressura Mono";
  font-weight: 400;
  text-transform: uppercase;
  width: 450px;
  padding: 5px 0;
  list-style: none;
  position: relative;
  color: rgba(111, 198, 81, 0.75);
}

.app_seve::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 32px;
  background: rgb(232, 90, 67);
  rotate: 90deg;
  z-index: 2;
  top: 15px;
  right: 0;
  transform-origin: 0 0;
}

.roadmap-hexagon {
  width: 18px;
  height: 16px;
  position: absolute;
  rotate: 30deg;
  top: 2px;
  right: -8px;
  transform-origin: 0 100%;
}

.roadmap-hexagon::after {
  width: 100%;
  height: 100%;
  background: rgb(232 90 67);
  top: 0;
  left: 0;
  transform: scale(0.7);
  content: "";
  position: absolute;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}

.roadmap-hexagon::before {
  width: 100%;
  height: 100%;
  background: rgb(232 90 67);
  top: 0;
  left: 0;
  content: "";
  position: absolute;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}

.app_ten {
  position: relative;
  transform-origin: 100% 0;
  rotate: 45deg;
  left: -8%;
}

.app_11 {
  transform: translate(50%);
  padding-left: 40px;
  border-left: 2px solid transparent;
  margin-left: -2px;
  font-size: 18px;
  line-height: 26px;
  font-family: "GT Pressura Mono";
  font-weight: 400;
  text-transform: uppercase;
  width: 450px;
  padding: 5px 0;
  list-style: none;
  position: relative;
  color: rgba(111, 198, 81, 0.75);
}

.app_11::before {
  bottom: 13px;
  left: 0;
  transform-origin: 0 100%;
  content: "";
  position: absolute;
  width: 1px;
  height: 32px;
  background: rgb(232, 90, 67);
  rotate: 90deg;
  z-index: 2;
}

.roadmap-hexagon1 {
  bottom: 10px;
  left: -13px;
  transform-origin: 0 100%;
  width: 18px;
  height: 16px;
  position: absolute;
  rotate: 30deg;
}

.roadmap-hexagon1::after {
  width: 100%;
  height: 100%;
  background: rgba(232, 90, 67);
  top: 0;
  left: 0;
  transform: scale(0.7);
  content: "";
  position: absolute;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}

.roadmap-hexagon1::before {
  width: 100%;
  height: 100%;
  background: rgba(232, 90, 67);
  top: 0;
  left: 0;
  content: "";
  position: absolute;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}

.app_ten1 {
  position: relative;
  transform-origin: 0 100%;
  rotate: 45deg;
  left: 8%;
}

.app_12 {
  margin-left: 55px;
  padding-left: 24px;
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.app_13 {
  font-size: 14px;
  line-height: 21px;
  font-family: "ApercuMonoProRegular";
  font-weight: 400;
  list-style: none;
  text-transform: none;
}

.app_14 {
  margin-left: 15px;
  padding-left: 24px;
  padding-bottom: 1rem;
}

.app_15 {
  font-size: 14px;
  line-height: 21px;
  font-family: "ApercuMonoProRegular";
  font-weight: 400;
  list-style: none;
  text-transform: none;
}

.app_16 {
  position: relative;
  padding-left: 45px;
}

.app_16::before {
  content: "";
  position: absolute;
  width: 28px;
  height: 1px;
  background: rgb(232 90 67);
  left: 0;
  top: 11px;
}

.app_16::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  background: rgb(232 90 67);
  left: 0;
  top: 11px;
}

.app_17 {
  position: relative;
  font-size: 14px;
  line-height: 21px;
  font-family: "ApercuMonoProRegular";
  font-weight: 400;
  list-style: none;
  text-transform: none;
}

.app_18 {
  position: relative;
  padding-left: 45px;
}

.app_18::before {
  content: "";
  position: absolute;
  width: 28px;
  height: 1px;
  background: rgb(232 90 67);
  left: 0;
  top: 11px;
  text-decoration: inherit;
  vertical-align: inherit;
}

.app_18::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  background: rgb(232 90 67);
  left: 0;
  top: 11px;
  text-decoration: inherit;
  vertical-align: inherit;
}

.app_19 {
  padding-right: 60px;
  margin-bottom: 60px;
  margin-top: 15px;
  padding-left: 24px;
}

.app_20 {
  position: relative;
  font-size: 14px;
  line-height: 21px;
  font-family: "ApercuMonoProRegular";
  font-weight: 400;
  list-style: none;
  text-transform: none;
}

.app_21 {
  position: relative;
  padding-right: 45px;
}

.app_21::before {
  content: "";
  position: absolute;
  width: 28px;
  height: 1px;
  background: rgb(232 90 67);
  right: 0;
  top: 11px;
  text-decoration: inherit;
  vertical-align: inherit;
}

.app_21::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  background: rgb(232 90 67);
  right: 0;
  bottom: calc(100% - 11px);
  text-decoration: inherit;
  vertical-align: inherit;
}

.ymainhy .yhome {
  background: rgb(235 235 235);
  background: url("../assets/homebgw.png");
  overflow: auto;
}

.yhome {
  width: 100%;
  overflow: auto;
  padding-top: 6rem;
  background: rgb(17, 11, 11);
  background-image: url("../assets/homebg.png");
}

.yhomey {
  width: 63.5%;
  height: auto;
  margin: 0 auto;
  padding-top: 5rem;
  position: relative;
  opacity: 0.05;
  transition: opacity 0.8s linear;
}
.yhomeyshow {
  opacity: 1;
}
.yhomeyleft {
  width: 34.25rem;
  height: 100%;
}

.yhomeyright {
  position: absolute;
  top: 10.5rem;
  right: 0;
}

.yhomeyright > p {
  font-family: "Vectrex";
  font-size: 2.5rem;
  font-weight: 400;
  font-style: normal;
  text-align: right;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  text-shadow: rgb(237, 77, 19) 0px 0px 25px, rgb(237, 77, 19) 0px 0px 50px;
}

.ymainhy .yhomeyright > p {
  color: rgb(17, 11, 11);
}

.yhomeytxtc {
  font-family: "Vectrex";
  font-size: 1.375rem;
  font-weight: 400;
  font-style: normal;
  text-align: right;
  line-height: 1.75rem;
  color: rgb(255, 255, 255);
  margin-top: 0.75rem;
}

.ymainhy .yhomeytxtc {
  color: rgb(17, 11, 11);
}

.yhomeytxtc span {
  color: rgb(237 77 19);
}

.yhomeyright a {
  display: flex;
  margin-top: 2rem;
  flex-direction: row-reverse;
}

.yhomeyright a svg {
  width: 23.375rem;
  height: 6.5rem;
  transition: all 0.3s;
}

.yhomeyright a svg:hover {
  transform: scale(1.05);
}

.yhomeer {
  width: 63.5%;
  margin: 3rem auto 0;
}

.ytwobox {
  width: 100%;
  opacity: 0.05;
  transition: opacity 0.8s linear;
}
.ytwoboxshow {
  opacity: 1;
}
.ytwobox > h2 {
  padding-top: 10rem;
  font-family: "Vectrex";
  text-align: center;
  font-size: 4.25rem;
  margin-bottom: 4.5rem;
  color: #fff;
}

.ymainhy .ytwobox > h2 {
  color: #000;
}

.ybiao > h2 {
  padding-top: 12.5rem;
  font-family: "Vectrex";
  text-align: center;
  font-size: 4.25rem;
  margin-bottom: 4.5rem;
  color: #fff;
}

.ymainhy .ybiao > h2 {
  color: #000;
}

.sju > h2 {
  padding-top: 10rem;
  font-family: "Vectrex";
  text-align: center;
  font-size: 4.25rem;
  color: #fff;
}

.ymainhy .sju > h2 {
  color: #000;
}

.ytwo {
  width: 63.5%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  column-gap: 6rem;
  align-items: center;
}

.ytwoleft {
  width: 43.75%;
  position: relative;
}

.ytwolimgy {
  display: block;
  width: 20rem;
  margin: 0 auto;
  border-radius: 3.125rem;
}

.ytwolimge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ytworight {
  width: 43.75%;
  color: #fff;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 400;
  font-family: "Vectrex";
}

.ymainhy .ytworight {
  color: #000;
}

.ytworight p {
  color: #b3bbca;
  font-family: "GT Pressura Mono";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  margin: 1rem 0;
}

.ymainhy .ytworight p {
  color: #000;
}

.ybiao {
  width: 100%;
  opacity: 0.05;
  transition: opacity 0.8s linear;
}
.ybiaoshow {
  opacity: 1;
}
.ybiao_one {
  width: 60.5%;
  display: flex;
  padding: 3rem 4rem;
  margin: 0 auto;
  border-radius: 10px;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #000, rgba(40, 40, 40));
}

.ymainhy .ybiao_one {
  border: rgba(255, 255, 255, 1);
  background-image: linear-gradient(to bottom, rgba(235, 235, 235), #fff);
}

.ymainhy .ybiao_two > h2 {
  color: #000;
}

.ymainhy .ybiao_two > p {
  color: #000;
}

.ymainhy .ybiao_two .ybiao_five {
  color: #000;
}

.ybiao_two {
  width: 50%;
  display: flex;
  flex-direction: column;
  color: white;
}

.ybiao_two > h2 {
  padding: 1rem 0;
  font-family: one;
  font-weight: 900;
  font-size: 35px;
}

.ybiao_three {
  margin-top: 3rem;
  font-family: two;
  padding-bottom: 1rem;
  font-size: 26px;
}

.ybiao_three > b {
  color: rgba(232, 90, 67, 0.8);
}

.ybiao_four > b {
  color: rgba(232, 90, 67, 0.8);
}

.ybiao_four {
  font-family: two;
  padding: 1rem 0;
  font-size: 26px;
}

.ybiao_five {
  width: 60%;
  font-family: two;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  text-align: center;
  padding: 1rem 2rem;
  background-color: rgb(235 235 235);
  color: black;
  cursor: pointer;
}

.ymainhy .ybiao_five {
  background: rgb(17, 11, 11);
  color: rgb(235, 235, 235) !important;
}

.ybiao_right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-container {
  width: 500px;
  height: 350px;
}

.sju {
  width: 100%;
  opacity: 0.05;
  transition: opacity 0.8s linear;
}
.sjushow {
  opacity: 1;
}
.draggable {
  width: 63.5%;
}

@media screen and (max-width: 1200px) {
  .someAi {
    width: 100%;
  }

  .some_one > h2 {
    font-size: 2.75rem;
  }

  .some_one > p {
    width: 100%;
  }

  .carousel-container {
    margin-left: 0rem;
  }

  .carousel-card {
    width: 330px;
    height: 350px;
    /* width: 100%; */
  }

  .carousel-card:nth-child(1) {
    margin-left: 1.4rem;
  }
  .carousel-card:nth-child(2) {
    margin-left: 5.3rem;
  }

  .carousel-card:nth-child(3) {
    margin-left: 5.5rem;
  }

  .carousel-card:nth-child(4) {
    margin-left: 5.4rem;
  }

  .some_two {
    margin-top: 8rem;
  }

  .car_txtx {
    text-align: center;
  }

  .yhomey_two {
    font-size: 1.125rem !important;
  }

  .yhomey_three {
    font-size: 2.75rem;
  }

  .yhomey_four {
    width: 100%;
    font-size: 1.125rem !important;
    /* margin: 1rem 0; */
  }

  .yhome_five {
    width: 8rem;
    font-size: 14px;
    padding: 1rem;
  }

  .yhome_six {
    font-size: 0.75rem;
  }

  .ybiao_one {
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }

  .ybiao_one {
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }

  .ytwobox > h2 {
    font-size: 2.75rem;
    padding-top: 4.5rem;
    margin-bottom: 2.5rem;
  }

  .ybiao > h2 {
    font-size: 2.75rem;
    padding-top: 4.5rem;
    margin-bottom: 2.5rem;
  }

  .sju > h2 {
    font-size: 2.75rem;
    padding-top: 4.5rem;
    margin-bottom: 2.5rem;
  }

  .ytwo {
    width: 100%;
    display: block;
    padding: 0 1rem;
  }

  .ybiao_two {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 2rem 0;
  }

  .ybiao_two > p {
    font-size: 1.15rem;
    text-align: center;
    padding: 0.5rem 0;
    margin: 0;
  }

  .ybiao_five {
    margin-top: 1rem;
  }

  .ybiao_right {
    width: 100%;
    height: auto;
  }

  #chart {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
/* @media screen and (max-width: 1300px) {
  .ytwo {
    width: 70% !important;
  }
  .ybiao_one {
    width: 80%;
  }
  .yfootboxer {
    width: 72.5%;
  }
  .ybiao_three {
    margin-top: 1.5rem;
  }
} */
@media screen and (min-width: 1801px) {
  .ytwo {
    column-gap: 2rem;
    width: 58%;
  }

  .ytworight {
    width: 50%;
  }

  .ybiao_one {
    width: 55%;
  }
}
</style>
