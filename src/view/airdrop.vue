<template>
  <div class="yair">
    <div class="aroro">
      <h1>{{ $store.state.txt.yaridroptitle }}</h1>
      <p>
        {{ $store.state.txt.yaridroptxt }}
      </p>
    </div>
    <div class="yairbox">
      <div class="yairbcon">
        <h2>{{ $store.state.txt.yaridropsamletitle }}</h2>
        <div class="yairls flex">
          <div class="yairlsy">
            <div class="yairlsyty flex">
              <div class="yairsyle"></div>
              <div
                @click="logtcbgshow('1')"
                :class="isgy == '0' ? 'yairlsytysvg' : 'yairlsytysvgnone'"
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>1</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div
                style="cursor: not-allowed"
                :class="
                  isgy == '1'
                    ? 'yairlsytysvg yairlsytysvghover'
                    : 'yairlsytysvgnone'
                "
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>✓</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="yairsyri"></div>
            </div>
            <p>{{ $store.state.txt.yaridroplisty }}</p>
          </div>
          <div class="yairlsy">
            <div class="yairlsytt yairlsyty flex">
              <div class="yairsyle"></div>
              <div
                :class="isgt == '0' ? 'yairlsytysvg' : 'yairlsytysvgnone'"
                @click="twpltxt()"
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>2</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div
                style="cursor: not-allowed"
                :class="
                  isgt == '1'
                    ? 'yairlsytysvg yairlsytysvghover'
                    : 'yairlsytysvgnone'
                "
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>✓</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="yairsyri"></div>
            </div>
            <p>{{ $store.state.txt.yaridroplistt }}</p>
          </div>
          <div class="yairlsy">
            <div class="yairlsytt yairlsyty flex">
              <div class="yairsyle"></div>
              <div
                :class="isgthr == '0' ? 'yairlsytysvg' : 'yairlsytysvgnone'"
                @click="followyh()"
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>3</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div
                style="cursor: not-allowed"
                :class="
                  isgthr == '1'
                    ? 'yairlsytysvg yairlsytysvghover'
                    : 'yairlsytysvgnone'
                "
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>✓</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="yairsyri"></div>
            </div>
            <p>{{ $store.state.txt.yaridroplistthr }}</p>
          </div>
          <div class="yairlsy">
            <div class="yairlsytt yairlsyty flex">
              <div class="yairsyle"></div>
              <div
                @click="jydaib('1')"
                :class="isgf == '0' ? 'yairlsytysvg' : 'yairlsytysvgnone'"
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>4</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div
                :class="
                  isgf == '1'
                    ? 'yairlsytysvg yairlsytysvghover'
                    : 'yairlsytysvgnone'
                "
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>✓</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="yairsyri"></div>
            </div>
            <p>{{ $store.state.txt.yaridroplistf }}</p>
          </div>
          <div class="yairlsy">
            <div class="yairlsyts yairlsytt yairlsyty flex">
              <div class="yairsyle"></div>
              <div
                @click="tcbgshow('1')"
                :class="isgw == '0' ? 'yairlsytysvg' : 'yairlsytysvgnone'"
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>5</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div
                style="cursor: not-allowed"
                :class="
                  isgw == '1'
                    ? 'yairlsytysvg yairlsytysvghover'
                    : 'yairlsytysvgnone'
                "
              >
                <svg
                  viewBox="0 0 114 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden h-28 w-28 sm:block"
                >
                  <path
                    d="M3.052 59.997a15.5 15.5 0 0 1 0-15.5L23.414 9.23a15.5 15.5 0 0 1 13.424-7.75h40.724a15.5 15.5 0 0 1 13.424 7.75l20.362 35.268a15.5 15.5 0 0 1 0 15.5l-20.362 35.27a15.5 15.5 0 0 1-13.424 7.749H36.838a15.5 15.5 0 0 1-13.424-7.75L3.052 59.997Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>✓</span>
                <svg
                  class="yairrjt"
                  viewBox="0 0 19 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.2 3.647 10.312 17.367a16 16 0 0 1-.057 16.433l-10.255 17"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="yairsyri"></div>
            </div>
            <p>{{ $store.state.txt.yaridroplistw }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="yaribot">
      <h4>{{ $store.state.txt.yaridroptitlet }}</h4>
      <div class="yariboter flex">
        <button
          @click="changearitab('0')"
          :class="yaritab == '0' ? 'yaritabactive' : ''"
        >
          {{ $store.state.txt.yaridroptabytit }}
        </button>
        <button
          @click="changearitab('1')"
          :class="yaritab == '1' ? 'yaritabactive' : ''"
        >
          {{ $store.state.txt.yaridroptabttit }}
        </button>
        <button
          @click="changearitab('2')"
          :class="yaritab == '2' ? 'yaritabactive' : ''"
        >
          {{ $store.state.txt.yaridroptabthrtit }}
        </button>
      </div>
      <div :class="yaritab == '0' ? 'yaritabcon jus' : 'yaritabconnone'">
        <div class="yaritableft">
          <h3>{{ $store.state.txt.yaridroptabytit }}</h3>
          <p>
            {{ $store.state.txt.yaridroptabytxty }}
            <br />
            <br />
            {{ $store.state.txt.yaridroptabytxtt }}
          </p>
        </div>
        <div class="yaritabright">
          <h3>Post Calculator</h3>
          <div class="yaritabry flex jus">
            <div class="flex" style="gap: 0.75rem; align-items: flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.122 9.87999C15.293 11.051 15.293 12.952 14.122 14.125C12.951 15.296 11.05 15.296 9.877 14.125C8.706 12.954 8.706 11.053 9.877 9.87999C11.05 8.70699 12.95 8.70699 14.122 9.87999"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 12C3 11.341 3.152 10.689 3.446 10.088V10.088C4.961 6.991 8.309 5 12 5C15.691 5 19.039 6.991 20.554 10.088V10.088C20.848 10.689 21 11.341 21 12C21 12.659 20.848 13.311 20.554 13.912V13.912C19.039 17.009 15.691 19 12 19C8.309 19 4.961 17.009 3.446 13.912V13.912C3.152 13.311 3 12.659 3 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div>
                <p class="yarirany">Views</p>
                <p class="yarirant">10 point = 1 view</p>
              </div>
            </div>
            <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ views }} views</p>
              <div class="yarigundcon flex jus">
                <div
                  class="yarijdt"
                  @mousedown="startDrag"
                  @touchstart="startDrag"
                  @mousemove="onDragging"
                  @touchmove="onDragging"
                  @mouseup="stopDrag"
                  @touchend="stopDrag"
                >
                  <div class="yarijdtbox">
                    <div
                      class="progress"
                      :style="{ width: progress + '%' }"
                    ></div>
                    <div
                      class="handle"
                      :style="{ left: progress + '%' }"
                      ref="handle"
                    ></div>
                  </div>
                </div>
                <p>{{ views * 10 }} points</p>
              </div>
            </div>
          </div>
          <div class="yaritabry flex jus">
            <div class="flex" style="gap: 0.75rem; align-items: flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 5.70836C12.9139 4.61055 14.2732 3.982 15.7015 3.99665C18.8729 3.99665 21.0038 6.97789 21.0038 9.75405C21.0038 15.5575 13.7787 20.0033 12 20.0033C10.2213 20.0033 2.99625 15.5575 2.99625 9.75405C2.99625 6.97789 5.12714 3.99665 8.29846 3.99665C9.72684 3.982 11.0861 4.61055 12 5.70836Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div>
                <p class="yarirany">likes</p>
                <p class="yarirant">10 point = 1 view</p>
              </div>
            </div>
            <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewsy }} views</p>
              <div class="yarigundcon flex jus">
                <div
                  class="yarijdt"
                  @mousedown="startDragy"
                  @touchstart="startDragy"
                  @mousemove="onDraggingy"
                  @touchmove="onDraggingy"
                  @mouseup="stopDragy"
                  @touchend="stopDragy"
                >
                  <div class="yarijdtbox">
                    <div
                      class="progress"
                      :style="{ width: progressy + '%' }"
                    ></div>
                    <div
                      class="handle"
                      :style="{ left: progressy + '%' }"
                      ref="handley"
                    ></div>
                  </div>
                </div>
                <p>{{ viewsy * 10 }} points</p>
              </div>
            </div>
          </div>
          <div class="yaritabry flex jus">
            <div class="flex" style="gap: 0.75rem; align-items: flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5409 3.5H14.0364C17.8823 3.50001 21 6.61773 21 10.4636V10.5359C21 12.3828 20.2663 14.154 18.9604 15.4599C17.6545 16.7659 15.8832 17.4995 14.0364 17.4995H13.0131C13.0059 17.4995 13 17.5054 13 17.5126V19.775C13 20.031 12.8648 20.2679 12.6445 20.3982C12.4242 20.5285 12.1514 20.5327 11.9271 20.4094L6.90686 17.6483C4.49715 16.323 3 13.791 3 11.0409V11.0409C2.99999 9.0409 3.79447 7.12285 5.20866 5.70866C6.62284 4.29448 8.54089 3.5 10.5409 3.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 9.5H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 12.5H11.4"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div>
                <p class="yarirany">Comments</p>
                <p class="yarirant">10 point = 1 view</p>
              </div>
            </div>
            <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewst }} views</p>
              <div class="yarigundcon flex jus">
                <div
                  class="yarijdt"
                  @mousedown="startDragt"
                  @touchstart="startDragt"
                  @mousemove="onDraggingt"
                  @touchmove="onDraggingt"
                  @mouseup="stopDragt"
                  @touchend="stopDragt"
                >
                  <div class="yarijdtbox">
                    <div
                      class="progress"
                      :style="{ width: progresst + '%' }"
                    ></div>
                    <div
                      class="handle"
                      :style="{ left: progresst + '%' }"
                      ref="handlet"
                    ></div>
                  </div>
                </div>
                <p>{{ viewst * 10 }} points</p>
              </div>
            </div>
          </div>
          <div class="yaritabry flex jus">
            <div class="flex" style="gap: 0.75rem; align-items: flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 19H7C5.895 19 5 18.105 5 17V5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 5H17C18.105 5 19 5.895 19 7V19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7.5 7.5L5 5L2.5 7.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 16L19 19L22 16"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div>
                <p class="yarirany">Reposts</p>
                <p class="yarirant">10 point = 1 view</p>
              </div>
            </div>
            <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewsthr }} views</p>
              <div class="yarigundcon flex jus">
                <div
                  class="yarijdt"
                  @mousedown="startDragthr"
                  @touchstart="startDragthr"
                  @mousemove="onDraggingthr"
                  @touchmove="onDraggingthr"
                  @mouseup="stopDragthr"
                  @touchend="stopDragthr"
                >
                  <div class="yarijdtbox">
                    <div
                      class="progress"
                      :style="{ width: `${progressthr}%` }"
                    ></div>
                    <div
                      class="handle"
                      :style="{ left: `${progressthr}%` }"
                      ref="handlethr"
                    ></div>
                  </div>
                </div>
                <p>{{ viewsthr * 10 }} points</p>
              </div>
            </div>
            <!-- <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewsf }} views</p>
              <div class="yarigundcon flex jus">
                <div class="yarijdt" @mousedown="startDragf" @touchstart="startDragf" @mousemove="onDraggingf"
                  @touchmove="onDraggingf" @mouseup="stopDragf" @touchend="stopDragf">
                  <div class="yarijdtbox">
                    <div class="progress" :style="{ width: `${progressf}%` }"></div>
                    <div class="handle" :style="{ left: `${progressf}%` }" ref="handlef"></div>
                  </div>
                </div>
                <p>{{ viewsf * 10 }} points</p>
              </div>
            </div> -->
          </div>
          <div class="yaritabry flex jus">
            <div class="flex" style="gap: 0.75rem; align-items: flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 13.5H19C19.552 13.5 20 13.948 20 14.5V18.5C20 19.052 19.552 19.5 19 19.5H15C14.448 19.5 14 19.052 14 18.5V13.5C14 7.5 15 6.5 18 4.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4 13.5H9C9.552 13.5 10 13.948 10 14.5V18.5C10 19.052 9.552 19.5 9 19.5H5C4.448 19.5 4 19.052 4 18.5V13.5C4 7.5 5 6.5 8 4.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div>
                <p class="yarirany">Quote Reposts</p>
                <p class="yarirant">10 point = 1 view</p>
              </div>
            </div>
            <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewsf }} views</p>
              <div class="yarigundcon flex jus">
                <div
                  class="yarijdt"
                  @mousedown="startDragf"
                  @touchstart="startDragf"
                  @mousemove="onDraggingf"
                  @touchmove="onDraggingf"
                  @mouseup="stopDragf"
                  @touchend="stopDragf"
                >
                  <div class="yarijdtbox">
                    <div
                      class="progress"
                      :style="{ width: `${progressf}%` }"
                    ></div>
                    <div
                      class="handle"
                      :style="{ left: `${progressf}%` }"
                      ref="handlef"
                    ></div>
                  </div>
                </div>
                <p>{{ viewsf * 10 }} points</p>
              </div>
            </div>
            <!-- <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewsw }} views</p>
              <div class="yarigundcon flex jus">
                <div class="yarijdt" @mousedown="startDragw" @touchstart="startDragw" @mousemove="onDraggingw"
                  @touchmove="onDraggingw" @mouseup="stopDragw" @touchend="stopDragw">
                  <div class="yarijdtbox">
                    <div class="progress" :style="{ width: `${progressw}%` }"></div>
                    <div class="handle" :style="{ left: `${progressw}%` }" ref="handlew"></div>
                  </div>
                </div>
                <p>{{ viewsw * 10 }} points</p> 
              </div>
            </div> -->
          </div>
          <div class="yarixian"></div>
          <div class="yaritabrend flex jus">
            <div class="yaritabendleft flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.5 9h19M10 3L8 9l4 11.5L16 9l-2-6m-1.386 17.262l8.959-10.75c.152-.182.227-.273.256-.375a.5.5 0 000-.274c-.029-.102-.104-.193-.256-.375l-4.334-5.2c-.088-.106-.132-.159-.186-.197a.5.5 0 00-.158-.074C16.831 3 16.763 3 16.625 3h-9.25c-.138 0-.207 0-.271.017a.5.5 0 00-.158.074 1.08 1.08 0 00-.186.197l-4.334 5.2c-.151.182-.227.273-.256.375a.5.5 0 000 .274c.029.102.105.193.256.375l8.959 10.75c.211.254.316.38.443.427a.5.5 0 00.343 0c.127-.047.232-.173.443-.427z"
                ></path>
              </svg>
              <h4>Total Points :</h4>
            </div>
            <h4>{{ addpoints }} points</h4>
          </div>
        </div>
      </div>
      <div :class="yaritab == '1' ? 'yaritabcon jus' : 'yaritabconnone'">
        <div class="yaritableft">
          <h3>{{ $store.state.txt.yaridroptabttit }}</h3>
          <p>
            {{ $store.state.txt.yaridroptabttxty }}
            <br />
            <br />
            {{ $store.state.txt.yaridroptabttxtt }}
          </p>
        </div>
        <div class="yaritabright">
          <h3>Comment Calculator</h3>
          <div class="yaritabry flex jus">
            <div class="flex" style="gap: 0.75rem; align-items: flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.122 9.87999C15.293 11.051 15.293 12.952 14.122 14.125C12.951 15.296 11.05 15.296 9.877 14.125C8.706 12.954 8.706 11.053 9.877 9.87999C11.05 8.70699 12.95 8.70699 14.122 9.87999"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 12C3 11.341 3.152 10.689 3.446 10.088V10.088C4.961 6.991 8.309 5 12 5C15.691 5 19.039 6.991 20.554 10.088V10.088C20.848 10.689 21 11.341 21 12C21 12.659 20.848 13.311 20.554 13.912V13.912C19.039 17.009 15.691 19 12 19C8.309 19 4.961 17.009 3.446 13.912V13.912C3.152 13.311 3 12.659 3 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div>
                <p class="yarirany">Views</p>
                <p class="yarirant">10 point = 1 view</p>
              </div>
            </div>
            <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewsw }} views</p>
              <div class="yarigundcon flex jus">
                <div
                  class="yarijdt"
                  @mousedown="startDragw"
                  @touchstart="startDragw"
                  @mousemove="onDraggingw"
                  @touchmove="onDraggingw"
                  @mouseup="stopDragw"
                  @touchend="stopDragw"
                >
                  <div class="yarijdtbox">
                    <div
                      class="progress"
                      :style="{ width: `${progressw}%` }"
                    ></div>
                    <div
                      class="handle"
                      :style="{ left: `${progressw}%` }"
                      ref="handlew"
                    ></div>
                  </div>
                </div>
                <p>{{ viewsw * 10 }} points</p>
              </div>
            </div>
            <!-- <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewssix }} views</p>
              <div class="yarigundcon flex jus">
                <div class="yarijdt" @mousedown="startDragsix" @touchstart="startDragsix" @mousemove="onDraggingsix"
                  @touchmove="onDraggingsix" @mouseup="stopDragsix" @touchend="stopDragsix">
                  <div class="yarijdtbox">
                    <div class="progress" :style="{ width: `${progresssix}%` }"></div>
                    <div class="handle" :style="{ left: `${progresssix}%` }" ref="handlesix"></div>
                  </div>
                </div>
                <p>{{ viewssix * 10 }} points</p>
              </div>
            </div> -->
          </div>
          <div class="yarixian"></div>
          <div class="yaritabrend flex jus">
            <div class="yaritabendleft flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.5 9h19M10 3L8 9l4 11.5L16 9l-2-6m-1.386 17.262l8.959-10.75c.152-.182.227-.273.256-.375a.5.5 0 000-.274c-.029-.102-.104-.193-.256-.375l-4.334-5.2c-.088-.106-.132-.159-.186-.197a.5.5 0 00-.158-.074C16.831 3 16.763 3 16.625 3h-9.25c-.138 0-.207 0-.271.017a.5.5 0 00-.158.074 1.08 1.08 0 00-.186.197l-4.334 5.2c-.151.182-.227.273-.256.375a.5.5 0 000 .274c.029.102.105.193.256.375l8.959 10.75c.211.254.316.38.443.427a.5.5 0 00.343 0c.127-.047.232-.173.443-.427z"
                ></path>
              </svg>
              <h4>Total Points :</h4>
            </div>
            <h4>{{ addpoints }} points</h4>
          </div>
        </div>
      </div>
      <div :class="yaritab == '2' ? 'yaritabcon jus' : 'yaritabconnone'">
        <div class="yaritableft">
          <h3>{{ $store.state.txt.yaridroptabthrtit }}</h3>
          <p>
            {{ $store.state.txt.yaridroptabthrtxty }}
            <br />
            <br />
            {{ $store.state.txt.yaridroptabthrtxtt }}
          </p>
        </div>
        <div class="yaritabright">
          <h3>Engager Calculator</h3>
          <div class="yaritabry flex jus">
            <div class="flex" style="gap: 0.75rem; align-items: flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.122 9.87999C15.293 11.051 15.293 12.952 14.122 14.125C12.951 15.296 11.05 15.296 9.877 14.125C8.706 12.954 8.706 11.053 9.877 9.87999C11.05 8.70699 12.95 8.70699 14.122 9.87999"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 12C3 11.341 3.152 10.689 3.446 10.088V10.088C4.961 6.991 8.309 5 12 5C15.691 5 19.039 6.991 20.554 10.088V10.088C20.848 10.689 21 11.341 21 12C21 12.659 20.848 13.311 20.554 13.912V13.912C19.039 17.009 15.691 19 12 19C8.309 19 4.961 17.009 3.446 13.912V13.912C3.152 13.311 3 12.659 3 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div>
                <p class="yarirany">Views</p>
                <p class="yarirant">10 point = 1 view</p>
              </div>
            </div>
            <div class="yarigund" style="border: 1px solid rgb(68, 67, 70)">
              <p>{{ viewssix }} views</p>
              <div class="yarigundcon flex jus">
                <div
                  class="yarijdt"
                  @mousedown="startDragsix"
                  @touchstart="startDragsix"
                  @mousemove="onDraggingsix"
                  @touchmove="onDraggingsix"
                  @mouseup="stopDragsix"
                  @touchend="stopDragsix"
                >
                  <div class="yarijdtbox">
                    <div
                      class="progress"
                      :style="{ width: `${progresssix}%` }"
                    ></div>
                    <div
                      class="handle"
                      :style="{ left: `${progresssix}%` }"
                      ref="handlesix"
                    ></div>
                  </div>
                </div>
                <p>{{ viewssix * 10 }} points</p>
              </div>
            </div>
          </div>
          <div class="yarixian"></div>
          <div class="yaritabrend flex jus">
            <div class="yaritabendleft flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.5 9h19M10 3L8 9l4 11.5L16 9l-2-6m-1.386 17.262l8.959-10.75c.152-.182.227-.273.256-.375a.5.5 0 000-.274c-.029-.102-.104-.193-.256-.375l-4.334-5.2c-.088-.106-.132-.159-.186-.197a.5.5 0 00-.158-.074C16.831 3 16.763 3 16.625 3h-9.25c-.138 0-.207 0-.271.017a.5.5 0 00-.158.074 1.08 1.08 0 00-.186.197l-4.334 5.2c-.151.182-.227.273-.256.375a.5.5 0 000 .274c.029.102.105.193.256.375l8.959 10.75c.211.254.316.38.443.427a.5.5 0 00.343 0c.127-.047.232-.173.443-.427z"
                ></path>
              </svg>
              <h4>Total Points :</h4>
            </div>
            <h4>{{ addpoints }} points</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    @click="tcbgshow('0')"
    :class="yaritcbg == '1' ? 'yairtcbg flex' : 'yaritcbgnone'"
  >
    <div @click.stop="wtccon()" class="yaritctjmbox">
      <img @click="tcbgshow('0', '1')" src="../assets/close-line.svg" alt="" />
      <div class="yaritctjmbcon">
        <h1>{{ $store.state.txt.yaridropcopyy }}</h1>
        <p>
          You currently have <span>10</span> invite links. Unlock more after
          completing Squad tasks. After each successful squad tasks. After each
          successful squad member invitation, you will receive 300 points.
        </p>
        <div
          v-for="(item, index) in invitationcode"
          :key="index"
          class="yariinvs flex jus"
        >
          <div class="yariinvl flex">
            <img src="../assets/smalllogo.png" alt="" />
            <span>Available Invite Code</span>
          </div>
          <div class="yaritctinpb flex">
            <h2>{{ item }}</h2>
            <div class="yaritctbcopy flex">
              <button
                @click="qriscopy('1', item, index)"
                :class="iscopy != index ? 'yaricopy flex' : 'yaricopynone'"
              >
                {{ $store.state.txt.yaridropcopyt }}
              </button>
              <button
                :class="iscopy == index ? 'yaricopyed flex' : 'yaricopynone'"
              >
                {{ $store.state.txt.yaridropcopythr }}
              </button>
            </div>
          </div>
        </div>

        <h1>
          {{ $store.state.txt.yaridropcopyf }}
        </h1>
      </div>
    </div>
  </div>
  <div
    @click="logtcbgshow('0')"
    :class="yarilog == '1' ? 'yairtcbglog flex' : 'yaritcbglognone'"
  >
    <div @click.stop="cgicon()" class="yaritclogbox">
      <img @click="logtcbgshow('0')" src="../assets/close-line.svg" alt="" />
      <div class="yariclty flex jus">
        <span>{{ $store.state.txt.yaridropregtitle }}</span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="11"
          fill="none"
        >
          <path
            fill="url(#frame_svg__a)"
            fill-opacity="0.3"
            d="m70.264 0 5.17 11h-5.575l-5.17-11h5.575ZM55.566 0l5.17 11h5.575l-5.17-11h-5.575Zm-9.123 0 5.17 11h5.575l-5.17-11h-5.575Zm-9.122 0 5.17 11h5.574l-5.17-11h-5.574Zm-9.123 0 5.17 11h5.574l-5.17-11h-5.574Zm-9.123 0 5.17 11h5.575L24.65 0h-5.575ZM9.952 0l5.17 11h5.575l-5.17-11H9.952ZM.829 0 6 11h5.575L6.404 0H.83Z"
          ></path>
          <defs>
            <linearGradient
              id="frame_svg__a"
              x1="75.481"
              x2="0.829"
              y1="5.5"
              y2="5.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#fff"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p>
        {{ $store.state.txt.yaridropregtxt }}
      </p>
      <div class="yarierlogbox flex">
        <div class="yarierlby flex jus">
          <div class="yarierbyxhll flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              class="h-8 w-10"
            >
              <g stroke-linecap="round" stroke-linejoin="round">
                <path
                  fill="#E2761B"
                  stroke="#E2761B"
                  d="m27.53 3.566-9.993 7.422 1.848-4.379 8.145-3.043Z"
                ></path>
                <path
                  fill="#E4761B"
                  stroke="#E4761B"
                  d="m4.46 3.566 9.913 7.493-1.758-4.45L4.46 3.566ZM23.935 20.77l-2.662 4.078 5.695 1.567 1.637-5.555-4.67-.09Zm-20.53.09 1.627 5.555 5.695-1.567-2.662-4.078-4.66.09Z"
                ></path>
                <path
                  fill="#E4761B"
                  stroke="#E4761B"
                  d="M10.405 13.88 8.82 16.282l5.654.251-.2-6.076-3.867 3.425Zm11.18 0-3.918-3.495-.13 6.147 5.644-.25-1.597-2.401ZM10.726 24.85l3.395-1.657-2.933-2.29-.462 3.947Zm7.141-1.657 3.405 1.657-.472-3.948-2.933 2.29Z"
                ></path>
                <path
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  d="m21.273 24.849-3.405-1.658.271 2.22-.03.934 3.164-1.496Zm-10.546 0 3.164 1.496-.02-.934.25-2.22-3.394 1.658Z"
                ></path>
                <path
                  fill="#233447"
                  stroke="#233447"
                  d="m13.941 19.435-2.832-.833 1.998-.915.834 1.748Zm4.108 0 .834-1.747 2.008.914-2.842.833Z"
                ></path>
                <path
                  fill="#CD6116"
                  stroke="#CD6116"
                  d="m10.727 24.849.482-4.078-3.144.09 2.662 3.988ZM20.79 20.77l.482 4.078 2.662-3.988-3.144-.09Zm2.39-4.49-5.644.251.522 2.903.834-1.748 2.008.914 2.28-2.32Zm-12.072 2.32 2.008-.914.824 1.748.532-2.903-5.654-.25 2.29 2.32Z"
                ></path>
                <path
                  fill="#E4751F"
                  stroke="#E4751F"
                  d="m8.819 16.281 2.37 4.62-.08-2.3-2.29-2.32Zm12.082 2.32-.1 2.3 2.38-4.62-2.28 2.32Zm-6.428-2.069-.532 2.903.663 3.425.15-4.51-.28-1.818Zm3.064 0-.271 1.808.12 4.52.673-3.425-.522-2.903Z"
                ></path>
                <path
                  fill="#F6851B"
                  stroke="#F6851B"
                  d="m18.059 19.435-.673 3.425.482.331 2.933-2.29.1-2.3-2.842.834Zm-6.95-.834.08 2.3 2.933 2.29.482-.331-.663-3.425-2.832-.834Z"
                ></path>
                <path
                  fill="#C0AD9E"
                  stroke="#C0AD9E"
                  d="m18.11 26.345.03-.934-.252-.22h-3.786l-.231.22.02.934-3.164-1.496 1.105.904 2.24 1.556h3.846l2.25-1.556 1.105-.904-3.164 1.496Z"
                ></path>
                <path
                  fill="#161616"
                  stroke="#161616"
                  d="m17.868 23.192-.482-.332h-2.782l-.482.332-.251 2.22.23-.222h3.787l.251.221-.27-2.22Z"
                ></path>
                <path
                  fill="#763D16"
                  stroke="#763D16"
                  d="m27.952 11.47.854-4.098-1.276-3.806-9.662 7.171 3.716 3.144 5.253 1.537 1.166-1.356-.503-.362.804-.733-.623-.482.804-.613-.533-.402ZM3.194 7.372l.854 4.098-.543.402.804.613-.613.482.804.733-.503.362 1.156 1.356 5.253-1.537 3.716-3.144L4.46 3.566 3.194 7.372Z"
                ></path>
                <path
                  fill="#F6851B"
                  stroke="#F6851B"
                  d="m26.837 15.417-5.253-1.536 1.597 2.4-2.38 4.62 3.134-.04h4.67l-1.768-5.444Zm-16.431-1.536-5.253 1.536-1.748 5.444h4.66l3.124.04-2.37-4.62 1.586-2.4Zm7.13 2.651.332-5.795 1.527-4.128h-6.78l1.507 4.128.351 5.795.12 1.828.01 4.5h2.783l.02-4.5.13-1.828Z"
                ></path>
              </g>
            </svg>
            <div class="yarierbyxhtxt">CONNECT WALLET</div>
          </div>
          <div class="yarierbyxhlr flex">
            <button :class="xhllogin == '0' ? 'yarijzcl' : 'yaributsjnone'">
              {{ xhlloginzt }}
            </button>
            <button
              @click="sgin()"
              :class="xhllogin == '1' ? 'yarierbut' : 'yaributsjnone'"
            >
              CONNECT
            </button>
          </div>
        </div>
        <div class="yarierlby flex jus">
          <div class="yarierbyxhll flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="25"
              fill="none"
              class="h-6 w-10"
            >
              <g clip-path="url(#x_svg__a)">
                <path
                  fill="#fff"
                  d="m.592 0 10.404 13.374L.526 24.243h2.357l9.166-9.518 7.408 9.519h8.016L16.483 10.12 26.23 0h-2.357l-8.441 8.764L8.61 0H.592Zm3.465 1.669h3.684l16.265 20.905h-3.682L4.057 1.67Z"
                ></path>
              </g>
              <defs>
                <clipPath id="x_svg__a">
                  <path fill="#fff" d="M.526 0h26.947v24.242H.526z"></path>
                </clipPath>
              </defs>
            </svg>
            <div class="yarierbyxhtxt">TWITTER</div>
          </div>
          <div class="yarierbyxhlr flex">
            <button :class="xlogin == '0' ? 'yarijzcl' : 'yaributsjnone'">
              {{ xloginzt }}
            </button>
            <button
              @click="twitterlog()"
              :class="xlogin == '1' ? 'yarierbut' : 'yaributsjnone'"
            >
              CONNECT
            </button>
          </div>
        </div>
        <div class="yaridbut flex">
          <span>{{ $store.state.txt.yaridropregtxtt }}</span
          ><a target="_blank" href="https://quantstamp.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1298 245"
              class="h-8 ml-3"
            >
              <path
                fill="#4bbcfc"
                d="M221.05 122.6c0-19.1-5.5-37.9-16-53.9l38.7-38.9-29-29.2-38.7 38.9c-32.6-21.4-74.8-21.4-107.4 0L29.85.6.75 29.8l38.7 38.9c-21.3 32.8-21.3 75.1 0 107.9L.75 215.4l29.1 29.2 38.7-38.9c32.6 21.4 74.8 21.4 107.4 0l38.7 38.9 29.1-29.2-38.7-38.9c10.5-16 16.1-34.7 16-53.9zm-156.4 0c0-23.6 14.2-44.9 36-53.7s46.8-3.5 63.1 13.5 20.7 42.3 11 63.8l-38-38.2-29 29.2 38 38.2c-17.8 8-38.5 6.5-54.9-4.2-16.3-10.7-26.2-29-26.2-48.6z"
              ></path>
              <path
                fill="#fff"
                d="M430.35 123.8c0 23.9-12 45.4-33.5 55.3l11.4 14.9-23.5 11.9-15.7-20.9h-.5c-38.8 0-61.7-28.3-61.7-61.3s22.9-61.3 61.7-61.3 61.8 28.4 61.8 61.4zm-61.7 37.2c21.9 0 33.8-17.1 33.8-37.3s-11.9-37.3-33.8-37.3c-22.1 0-34 17.1-33.8 37.3-.2 20.3 11.7 37.3 33.8 37.3zm104.9 22.9c-19.1 0-29.4-11.9-29.4-32.6v-49.4h25.6v43.7c0 10.9 3.6 16.9 13.2 16.9 10.7 0 15.3-7 15.3-17.7v-42.9h25.1v79.8h-25.1v-11.4c-4.4 8.5-12.6 13.6-24.7 13.6zm102.5 0c-23.8 0-37.5-18.1-37.5-42.1 0-23.9 14.7-42.1 37.8-42.1 11.6 0 20.6 5.5 24.9 13.6v-11.4h25.1v79.8h-25.1v-11.3c-4.2 8-14.1 13.5-25.2 13.5zm7.3-21c12.5 0 19-9.4 19-21 0-11.4-6.4-20.9-19-20.9-11.7 0-19 8.8-19 20.9 0 12 7.3 21 19 21zm64-61h25.3v11.6c4.6-8.9 13.7-13.7 25.7-13.7 19.3 0 29 10.9 29 32.6v49.4h-25.4v-41.1c0-13.4-3.8-19.5-14-19.5-10.1 0-15.3 6.6-15.3 18.9v41.7h-25.3zm141.9 60.1c3.1 0 6.4-.2 8.7-.5v20.2c-3.6.7-9.6 1.3-16.8 1.3-11.9 0-28.2-2.7-28.2-29.3v-31.8h-12.5v-20h12.5V78.2h25.3v23.7h18v20h-18v26.5c0 11.8 4.8 13.6 11 13.6zm55.2 22.2c-23.3 0-37.6-11.4-37.6-26.5h25.1c0 5.5 5.3 9.4 13 9.4 5.4 0 9.2-2.8 9.2-7.5 0-3.1-1.5-5.8-5.8-6.8l-19.5-5c-13.2-3.3-20-11.6-20-23 0-14.9 13-25.3 34-25.3 23.3 0 35.5 9.8 35.5 24.8h-24.9c0-5.6-4.1-8.8-10.9-8.8-5.4 0-9.1 2.7-9.1 6.6 0 3.6 2.5 6 6.8 7.1l18.8 5.1c12.2 3.3 20.1 10.8 20.1 22.2.1 16.6-13 27.7-34.7 27.7zm92.2-22.2c3.1 0 6.4-.2 8.7-.5v20.2c-3.6.7-9.6 1.3-16.8 1.3-11.9 0-28.2-2.7-28.2-29.3v-31.8h-12.5v-20h12.5V78.2h25.3v23.7h18v20h-18v26.5c0 11.8 4.7 13.6 11 13.6zm55 21.9c-23.8 0-37.5-18.1-37.5-42.1 0-23.9 14.7-42.1 37.8-42.1 11.6 0 20.6 5.5 24.9 13.6v-11.4h25.1v79.8h-25.1v-11.3c-4.3 8-14.2 13.5-25.2 13.5zm7.2-21c12.5 0 19-9.4 19-21 0-11.4-6.4-20.9-19-20.9-11.7 0-19 8.8-19 20.9 0 12 7.3 21 19 21zm64.1-61h25.3v11.6c3.5-8 11.7-13.7 22.8-13.7 14.2 0 21.5 6.3 24.9 14.7 4.3-8.6 13.7-14.7 25.4-14.7 22.8 0 28.2 15.7 28.2 32.5v49.5h-25.4v-44.9c0-11.1-4.1-15.7-11.9-15.7-7.9 0-13.4 4.5-13.4 19.5v41.1h-25.4v-45.1c0-11.1-4-15.6-11.7-15.6-8.1 0-13.5 4.5-13.5 19.5v41.1h-25.3zm146.5 0h25.3v11.4c4.1-7.6 14-13.6 25.9-13.6 21.8 0 36.6 16.9 36.6 42.1 0 25-15.3 42.1-37.3 42.1-11.7 0-21.3-6-25.2-13.4v44.4h-25.3zm43.2 61c11.1 0 18.8-8.6 18.8-21 0-12.3-7.8-20.9-18.8-20.9-11.4 0-19.1 8.4-19.1 20.9s7.9 21 19.1 21z"
              ></path></svg
          ></a>
        </div>
        <div class="yarienda flex">
          <button :class="alllogin == '0' ? 'yariendbut' : 'yaributsjnone'">
            {{ $store.state.txt.yaridropsubmit }}
          </button>
          <button
            @click="logtcbgshow('0')"
            :class="alllogin == '1' ? 'yarierbut' : 'yaributsjnone'"
          >
            {{ $store.state.txt.yaridropsubmit }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    @click="jydaib('0')"
    style="justify-content: center"
    :class="yarijyb == '1' ? 'yairtcbglog flex yaritcbgtb' : 'yaritcbglognone'"
  >
    <div @click.stop="jhbjz()" class="ynewstabox flex jus">
      <div class="ynewstableft">
        <h2>MEV Powered <br />Staking Rewards.</h2>
        <p>Choose how much you want to stake and earn rewards.</p>
        <div class="ynewstaketxtb flex flexcol">
          <div class="ynewstakex"></div>
          <div class="ynewstaket">Earn MEV Enhanced Rewards</div>
          <span class="ynewstakethr">Connect your wallet to start earning</span>
          <div class="ynewstakebut">
            <button
              :class="butshow == '0' ? 'ynewstakebutshow' : 'ynewstakebutnone'"
              @click="render()"
            >
              Connect Wallet
            </button>
            <button
              @click="qxdl()"
              :class="butshow == '1' ? 'ynewstakebutshow' : 'ynewstakebutnone'"
            >
              Connected
            </button>
          </div>
        </div>
      </div>
      <div class="ynewstabright">
        <img @click="jydaib('0')" src="../assets/close-line.svg" alt="" />
        <div class="ynewstabrbox flex flexcol">
          <h1>Stake Solana</h1>
          <p>Choose how much you want to stake and earn rewards</p>
          <div class="ynewstabtabflex flex">
            <button
              @click="changetab('0')"
              :class="staktab == '0' ? 'ynewstabtabfshow' : ''"
            >
              <div class="flex ynewstathry">
                Stake
                <div class="ynewstayr">≈ 6.96% APY</div>
              </div>
            </button>
            <button
              @click="changetab('1')"
              :class="staktab == '1' ? 'ynewstabtabfshow' : ''"
            >
              <div class="flex ynewstathry">Unstake</div>
            </button>
          </div>
          <div :class="staktab == '0' ? 'ynewstaybox' : 'ynewstayboxnone'">
            <div class="ynewstayboxc">
              <div class="ynewstayboxcy flex jus">
                <div class="ynewstayboxcyl">You're staking</div>
                <div class="ynewstayboxcyr flex jus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                    ></path>
                  </svg>
                  <span>0</span>
                </div>
              </div>
              <div class="ynewstayboxct flex jus">
                <div class="ynewstayboxctl">
                  <button class="ynewstayboxctlbox flex jus">
                    <img src="../assets/SOL.png" alt="" />
                    <div>SOL</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="hover:text-gray-400 dark:hover:text-zinc-300 mr-2 h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div class="ynewstayboxctlshow">
                    <div class="ynewstayboxctlshowy flex jus">
                      <button
                        @click="changetctab('0')"
                        :class="tctab == '0' ? 'ynewstayboxctlshowactive' : ''"
                      >
                        Tokens
                      </button>
                      <button
                        @click="changetctab('1')"
                        :class="tctab == '1' ? 'ynewstayboxctlshowactive' : ''"
                      >
                        Stake
                      </button>
                    </div>
                    <div
                      :class="
                        tctab == '0'
                          ? 'ynewstayboxctlshowt flex jus'
                          : 'ynewstayboxctlshowtnone'
                      "
                      style="margin-top: 1rem"
                    >
                      <img src="../assets/SOL.png" alt="" />
                      <div class="ynewstayboxctlshowtbox">
                        <div class="ynewstayboxctlshowty flex jus">
                          <p>SOL</p>
                          <span>0.00</span>
                        </div>
                        <div class="ynewstayboxctlshowtt flex">So11...1112</div>
                      </div>
                    </div>
                    <div
                      :class="
                        tctab == '1'
                          ? 'ynewstayboxctlshowcont'
                          : 'ynewstayboxctlshowtnone'
                      "
                    >
                      (No stake accounts found)
                    </div>
                  </div>
                </div>
                <div class="ynewstayboxctr">
                  <input
                    @input="inpshu()"
                    v-model="inpval"
                    type="text"
                    placeholder="0.0"
                  />
                  <span>{{ balance }}</span>
                </div>
              </div>
              <div class="ynewstayboxcy flex jus" style="margin: 1.5rem 0 0">
                <div class="ynewstayboxcyl">To receive</div>
                <div class="ynewstayboxcyr flex jus">
                  <span>0% Slippage</span>
                </div>
              </div>
              <div class="ynewstayboxct flex jus" style="margin: 0 0 0.75rem">
                <div class="ynewstayboxctl">
                  <button
                    class="ynewstayboxctlbox flex jus"
                    style="padding: 0.75rem"
                  >
                    <img src="../assets/jito_sol.svg" alt="" />
                    <div>jitoSOL</div>
                  </button>
                </div>
                <div class="ynewstayboxctr">
                  <div>{{ inpbalance }}</div>
                  <span>{{ balance }}</span>
                </div>
              </div>
              <div class="ynewstayboxcthr">
                <button
                  :class="
                    butshow == '0' ? 'ynewstakebutshow' : 'ynewstakebutnone'
                  "
                  @click="render()"
                >
                  Connect Wallet
                </button>
                <button
                  @click="qxdl()"
                  :class="
                    butshow == '1' ? 'ynewstakebutshow' : 'ynewstakebutnone'
                  "
                >
                  Connected
                </button>
              </div>
              <div class="ynewstayboxfour">
                <div class="ynewstayboxfoury flex jus" style="margin: 1rem 0">
                  <span>1 JitoSOL</span>
                  <span>≈1.0751518284911992 SOL</span>
                </div>
                <div class="ynewstayboxfoury flex jus">
                  <span>Network fee</span> <span>0.000015 SOL</span>
                </div>
              </div>
            </div>
          </div>
          <div :class="staktab == '1' ? 'ynewstayboxt' : 'ynewstayboxnone'">
            <div class="ynewstayboxty flex">
              <img src="../assets/jito_sol.svg" alt="" />
              <div>JitoSOL</div>
            </div>
            <div class="ynewstayboxtt">
              <input
                @input="inpsshu()"
                v-model="inpvval"
                type="text"
                placeholder="0.0"
                name=""
                id=""
              />
            </div>
            <div class="ynewstayboxtthr flex">
              <span>Balance: 0 JitoSOL</span>
            </div>
            <div class="ynewstayboxtfour flex flexcol">
              <div
                @click="changetxt('0')"
                :class="
                  qhtxt == '0'
                    ? 'ynewstayboxtfoury ynewstayboxtfourshow'
                    : 'ynewstayboxtfoury'
                "
              >
                <div class="ynewstayboxtfourytop flex jus">
                  <span>Sell JitoSOL for SOL via Jupiter</span>
                  <div>0.1% Slippage</div>
                </div>
                <div class="ynewstayboxtfourybot">{{ solbalance }} SOL</div>
              </div>
              <div
                @click="changetxt('1')"
                :class="
                  qhtxt == '1'
                    ? 'ynewstayboxtfoury ynewstayboxtfourshow'
                    : 'ynewstayboxtfoury'
                "
              >
                <div class="ynewstayboxtfourytop flex jus">
                  <span>Unstake in 2 Days</span>
                </div>
                <div class="ynewstayboxtfourybot">{{ solbalancet }} SOL</div>
              </div>
            </div>
            <div class="ynewstayboxtfive">
              <button>Unstake SOL</button>
            </div>
            <div class="ynewstayboxfour">
              <div class="ynewstayboxfoury flex jus" style="margin: 1rem 0px">
                <span>1 JitoSOL</span><span>≈1.075 SOL</span>
              </div>
              <div class="ynewstayboxfoury flex jus" style="margin: 1rem 0px">
                <span>Network fee</span>
                <span>0.000015 SOL</span>
              </div>
              <div class="ynewstayboxfoury flex jus">
                <span>Enough SOL for unstake fees</span>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Web3Modal from "web3modal";
import hello from "hellojs/dist/hello.all";
import { ethers } from "ethers";
import { Buffer } from "buffer";
import api from "../common/api";
import md5 from "blueimp-md5";
import bus from "../utils/bus";
let textvalue = ref(
  "Hi, my name is @IHunt100x_Gems, and I’m a $MEME (@Memecoin) farmer at @Memeland.%0a%0a"
);
let textver = ref(
  "On my honor, I promise that I will do my best to do my duty to my own bag, and to farm $MEMEPOINTS at all times.%0a%0a"
);
let textsan = ref("It ain’t much, but it’s honest work. 🧑‍🌾");
let yaritab = ref("0");
let yaritcbg = ref("0");
let yarilog = ref("0");
let yarijyb = ref("0");
let xlogin = ref("0");
let alllogin = ref("0");
let xhllogin = ref("1");
let showb = ref("ETH");
let dqyue = ref("0.00"); //dangqianyue
let inpval = ref("");
let butshow = ref("0");
let staktab = ref("0");
let tctab = ref("0");
let tcshow = ref("0");
let balance = ref("");
let inpvalsta = ref("");
let inpvval = ref("");
let solbalance = ref("0.0");
let solbalancet = ref("0.0");
let qhtxt = ref("0");
let inpbalance = ref("0");
let showbimg = ref("/img/eth-color.f9154fe1.svg");
let showbslist = ref([
  {
    img: "/img/eth-color.f9154fe1.svg",
    daibname: "ETH",
    price: "0.0",
  },
  {
    img: "/img/usdc-color.670613f4.svg",
    daibname: "USDC",
    price: "0.0",
  },
  {
    img: "/img/tether-color.b97b8145.svg",
    daibname: "teTHER",
    price: "0.0",
  },
  {
    img: "/img/steth-color.d495d0b9.svg",
    daibname: "steth",
    price: "0.0",
  },
]);
let dblistshow = ref("0");
const isDragging = ref(false);
const isDraggingt = ref(false);
const isDraggingthr = ref(false);
const isDraggingf = ref(false);
const isDraggingy = ref(false);
const isDraggingw = ref(false);
const isDraggingsix = ref(false);
let handle = ref(null);
let handley = ref(null);
let handlet = ref(null);
let handlethr = ref(null);
let handlef = ref(null);
let handlew = ref(null);
let handlesix = ref(null);
let views = ref(0);
let points = ref(0);
let viewsy = ref(0);
let pointsy = ref(0);
let viewst = ref(0);
let pointst = ref(0);
let viewsthr = ref(0);
let pointsthr = ref(0);
let viewsf = ref(0);
let viewsw = ref(0);
let viewssix = ref(0);
let iscopy = ref("10");
let pointsf = ref(0);
let addpoints = ref(0);
const xhladdress = ref("");
const xxhladdress = ref("");
const xethbalance = ref("");
let invitationcode = ref([]);
let Twname = ref("");
let xloginzt = ref("CONNECT  ");
let xhlloginzt = ref("CONNECT  ");
let isgy = ref("0");
let isgt = ref("0");
let isgthr = ref("0");
let isgw = ref("0");
let isgf = ref("0");
let userlog = ref({});
let signature = ref("");
let message = ref("");
// let airtc = ref(0);
// let airtcshow = (str) => {
//   airtc.value = str;
// };
onMounted(() => {
  if (localStorage.getItem("xhlbalance")) {
    console.log(111);
    xethbalance.value = localStorage.getItem("xhlbalance");
    dqyue.value = localStorage.getItem("xhlbalance");
    butshow.value = "1";
  }
  if (localStorage.getItem("Twname")) {
    alllogin.value = "1";
    xlogin.value = "0";
    xloginzt = "CONNECTED";
  }
  bus.$on("qbbalance", (val) => {
    if (val != "" && val != "0.00") {
      butshow.value = "1";
    } else if (val == "0.00") {
      butshow.value = "0";
    }
  });
  console.log("MD5", md5(localStorage.getItem("xhladd")));
  userlog.value = JSON.parse(localStorage.getItem("user"));

  // api
  //   .task({
  //     userId: userlog.value.userId,
  //     token: userlog.value.token,
  //     appId: "xbot",
  //   })
  //   .then((res) => {
  //     console.log(res.data.data.userTaskList);
  //     res.data.data.userTaskList.map((res) => {
  //       if (res.taskName == "register" && res.completed == true) {
  //         isgy.value = "1";
  //       } else if (res.taskName == "tell" && res.completed == true) {
  //         isgt.value = "1";
  //       } else if (res.taskName == "follow" && res.completed == true) {
  //         isgthr.value = "1";
  //       } else if (res.taskName == "swap" && res.completed == true) {
  //         isgf.value = "1";
  //       }
  //     });
  //   });
  // console.log(window);
  // console.log(handle.value);
  // console.log(handley.value);
  // console.log(handlethr.value);
  // console.log(handlet.value);
  // console.log(handlef.value);
  // console.log(handlew.value);
  // console.log(handlesix.value);
});

let changetctab = (str) => {
  tctab.value = str;
};

let changetxt = (str) => {
  qhtxt.value = str;
};
let changetab = (str) => {
  staktab.value = str;
};
let inpshu = () => {
  inpvalsta.value = inpvalsta.value.replace(/[^\d.]/g, "");
  if (inpvalsta.value == "") {
    balance.value = ``;
    inpbalance.value = "0";
  } else {
    balance.value = `US$${parseFloat(inpvalsta.value) * 73.47}`;
    inpbalance.value = `${parseFloat(inpvalsta.value) * 0.9301}`;
  }
};
let inpsshu = () => {
  inpvval.value = inpvval.value.replace(/[^\d.]/g, "");
  if (inpvval.value == "") {
    solbalance.value = "0.0";
    solbalancet.value = "0.0";
  } else {
    solbalance.value = `${parseFloat(inpvval.value) * 1.073738939}`;
    solbalancet.value = `${parseFloat(inpvval.value) * 1.074076677}`;
  }
};
let sgin = async () => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  const from = accounts[0];
  const msg = `wallet connect`;
  const signatures = await ethereum.request({
    method: "personal_sign",
    params: [msg, from],
  });
  signature.value = signatures;
  if (signature.value != "") {
    xlogin.value = "1";
    xhllogin.value = "0";
    xhlloginzt.value = "CONNECTED";
  }
};
const progresssix = ref(0);
let cgicon = () => {
  console.log(1);
};
let twitterlog = () => {
  hello.init(
    {
      twitter: "RdEkZiLP19IBAeMKgYjA4iQVK",
    },
    {
      redirect_uri: "https://xbot.jaredfromsubway-mevbot.tech/",
    }
  );
  hello("twitter")
    .login()
    .then(
      function (res) {
        Twname.value = res.authResponse.screen_name;
        localStorage.setItem("Twname", Twname.value);
        alllogin.value = "1";
        xlogin.value = "0";
        xloginzt = "CONNECTED";
        api
          .link({
            userId: userlog.value.userId,
            token: userlog.value.token,
            uid: res.authResponse.user_id,
            userName: res.authResponse.screen_name,
            imgUrl: "tfsa",
            appId: "xbot",
            invitationCode: "",
          })
          .then((res) => {
            console.log("link", res);
          });
      },
      function (err) {
        console.log("err", err);
      }
    );
  hello.on("auth.login", (result) => {
    hello(result.network)
      .api("/me")
      .then(
        function (p) {
          console.log(result, "result");
        },
        function (err) {
          console.log("err", err);
        }
      );
  });
};
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
  localStorage.setItem("xhladd", xhladdress.value);
  butshow.value = "1";
  const rawBalance = await provider.getBalance(xhladdress.value);
  xethbalance.value = ethers.utils.formatEther(rawBalance);
  dqyue.value = xethbalance.value;
  localStorage.setItem("xhlbalance", xethbalance.value);
  bus.$emit("qbbalance", xethbalance.value);
};
let qxdl = async () => {
  if (xhladdress.value != "") {
    web3Modal.clearCachedProvider();
  }
  butshow.value = "0";
  xxhladdress.value = "";
  localStorage.clear();
  bus.$emit("qbbalance", "0.00");
};
const startDragsix = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;
  isDraggingsix.value = true;
};

const onDraggingsix = (event) => {
  if (isDraggingsix.value) {
    const progressBar = handlesix.value.parentElement;
    const rect = progressBar.getBoundingClientRect();
    let x;
    if (event.type.startsWith("mouse")) {
      x = event.clientX - rect.left;
    } else if (event.type.startsWith("touch")) {
      x = event.touches[0].clientX - rect.left;
    }
    let width = progressBar.clientWidth;
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    progresssix.value = (x / width) * 100;
    viewssix.value = Math.round(progresssix.value * 10);
    addpoints.value = viewssix.value * 10;
  }
};

const stopDragsix = () => {
  isDraggingsix.value = false;
};

const progressw = ref(0);

const startDragw = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;
  isDraggingw.value = true;
};

const onDraggingw = (event) => {
  if (isDraggingw.value) {
    const progressBar = handlew.value.parentElement;
    const rect = progressBar.getBoundingClientRect();
    let x;
    if (event.type.startsWith("mouse")) {
      x = event.clientX - rect.left;
    } else if (event.type.startsWith("touch")) {
      x = event.touches[0].clientX - rect.left;
    }
    let width = progressBar.clientWidth;
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    progressw.value = (x / width) * 100;
    viewsw.value = Math.round(progressw.value * 10);
    addpoints.value = viewsw.value * 10;
  }
};

const stopDragw = () => {
  isDraggingw.value = false;
};

const progressf = ref(0);
const startDragf = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;
  isDraggingf.value = true;
};

const onDraggingf = (event) => {
  if (isDraggingf.value) {
    const progressBar = handlef.value.parentElement;
    const rect = progressBar.getBoundingClientRect();
    let x;
    if (event.type.startsWith("mouse")) {
      x = event.clientX - rect.left;
    } else if (event.type.startsWith("touch")) {
      x = event.touches[0].clientX - rect.left;
    }
    let width = progressBar.clientWidth;
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    progressf.value = (x / width) * 100;
    viewsf.value = Math.round(progressf.value * 10);
    addpoints.value = viewsf.value * 10;
  }
};

const stopDragf = () => {
  isDraggingf.value = false;
};

const progressthr = ref(0);

const startDragthr = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;
  isDraggingthr.value = true;
};

const onDraggingthr = (event) => {
  if (isDraggingthr.value) {
    const progressBar = handlethr.value.parentElement;
    const rect = progressBar.getBoundingClientRect();
    let x;
    if (event.type.startsWith("mouse")) {
      x = event.clientX - rect.left;
    } else if (event.type.startsWith("touch")) {
      x = event.touches[0].clientX - rect.left;
    }
    let width = progressBar.clientWidth;
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    progressthr.value = (x / width) * 100;
    viewsthr.value = Math.round(progressthr.value * 10);
    addpoints.value =
      views.value * 10 +
      viewsy.value * 10 +
      viewst.value * 10 +
      viewsthr.value * 10 +
      viewsf.value * 10;
  }
};

const stopDragthr = () => {
  isDraggingthr.value = false;
};

const progresst = ref(0);

// const startDragt = (event) => {
//   isDraggingt.value = true;
// };

// const onDraggingt = (event) => {
//   if (isDraggingt.value) {
//     const progressBar = handlet.value.parentElement;
//     const rect = progressBar.getBoundingClientRect();
//     let x = event.clientX - rect.left;
//     let width = progressBar.clientWidth;
//     if (x < 0) {
//       x = 0;
//     } else if (x > width) {
//       x = width;
//     }
//     progresst.value = (x / width) * 100;
//     viewst.value = Math.round(progresst.value * 100);
//     addpoints.value =
//       views.value * 10 +
//       viewsy.value * 10 +
//       viewst.value * 10 +
//       viewsthr.value * 10 +
//       viewsf.value * 10;
//   }
// };

// const stopDragt = () => {
//   isDraggingt.value = false;
// };

const startDragt = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;
  isDraggingt.value = true;
};

const onDraggingt = (event) => {
  if (isDraggingt.value) {
    const progressBar = handlet.value.parentElement;
    const rect = progressBar.getBoundingClientRect();
    let x;
    if (event.type.startsWith("mouse")) {
      x = event.clientX - rect.left;
    } else if (event.type.startsWith("touch")) {
      x = event.touches[0].clientX - rect.left;
    }
    let width = progressBar.clientWidth;
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    progresst.value = (x / width) * 100;
    viewst.value = Math.round(progresst.value * 10);
    addpoints.value =
      views.value * 10 +
      viewsy.value * 10 +
      viewst.value * 10 +
      viewsthr.value * 10 +
      viewsf.value * 10;
  }
};

const stopDragt = () => {
  isDraggingt.value = false;
};

const progressy = ref(0);

// const startDragy = (event) => {
//   isDraggingy.value = true;
// };

// const onDraggingy = (event) => {
//   if (isDraggingy.value) {
//     const progressBar = handley.value.parentElement;
//     const rect = progressBar.getBoundingClientRect();
//     let x = event.clientX - rect.left;
//     let width = progressBar.clientWidth;
//     if (x < 0) {
//       x = 0;
//     } else if (x > width) {
//       x = width;
//     }
//     progressy.value = (x / width) * 100;
//     viewsy.value = Math.round(progressy.value * 100);
//     addpoints.value =
//       views.value * 10 +
//       viewsy.value * 10 +
//       viewst.value * 10 +
//       viewsthr.value * 10 +
//       viewsf.value * 10;
//   }
// };

// const stopDragy = () => {
//   isDraggingy.value = false;
// };

const startDragy = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;
  isDraggingy.value = true;
};

const onDraggingy = (event) => {
  if (isDraggingy.value) {
    const progressBar = handley.value.parentElement;
    const rect = progressBar.getBoundingClientRect();
    let x;
    if (event.type.startsWith("mouse")) {
      x = event.clientX - rect.left;
    } else if (event.type.startsWith("touch")) {
      x = event.touches[0].clientX - rect.left;
    }
    let width = progressBar.clientWidth;
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    progressy.value = (x / width) * 100;
    viewsy.value = Math.round(progressy.value * 10);
    addpoints.value =
      views.value * 10 +
      viewsy.value * 10 +
      viewst.value * 10 +
      viewsthr.value * 10 +
      viewsf.value * 10;
  }
};

const stopDragy = () => {
  isDraggingy.value = false;
};

const progress = ref(0);

// const startDrag = (event) => {
//   isDragging.value = true;
// };

// const onDragging = (event) => {
//   if (isDragging.value) {
//     const progressBar = handle.value.parentElement;
//     const rect = progressBar.getBoundingClientRect();
//     let x = event.clientX - rect.left;
//     let width = progressBar.clientWidth;
//     if (x < 0) {
//       x = 0;
//     } else if (x > width) {
//       x = width;
//     }
//     progress.value = (x / width) * 100;
//     views.value = Math.round(progress.value * 100);
//     addpoints.value =
//       views.value * 10 +
//       viewsy.value * 10 +
//       viewst.value * 10 +
//       viewsthr.value * 10 +
//       viewsf.value * 10;
//   }
// };

// const stopDrag = () => {
//   isDragging.value = false;
// };
const startDrag = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;
  isDragging.value = true;
};

const onDragging = (event) => {
  if (isDragging.value) {
    const progressBar = handle.value.parentElement;
    const rect = progressBar.getBoundingClientRect();
    let x;
    if (event.type.startsWith("mouse")) {
      x = event.clientX - rect.left;
    } else if (event.type.startsWith("touch")) {
      x = event.touches[0].clientX - rect.left;
    }
    let width = progressBar.clientWidth;
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    progress.value = (x / width) * 100;
    views.value = Math.round(progress.value * 10);
    addpoints.value =
      views.value * 10 +
      viewsy.value * 10 +
      viewst.value * 10 +
      viewsthr.value * 10 +
      viewsf.value * 10;
  }
};

const stopDrag = () => {
  isDragging.value = false;
};

let changearitab = (str) => {
  yaritab.value = str;
};
let twpltxt = () => {
  window.open(
    "https://twitter.com/intent/tweet?&text=\n" +
      textvalue.value +
      textver.value +
      textsan.value
  );
  api
    .submit({
      userId: userlog.value.userId,
      token: userlog.value.token,
      appId: "xbot",
      taskName: "tell",
      taskValue: "",
    })
    .then((res) => {
      isgt.value = "1";
    });
};
let followyh = () => {
  window.open("https://twitter.com/intent/user?screen_name=Memeland");

  api
    .submit({
      userId: userlog.value.userId,
      token: userlog.value.token,
      appId: "xbot",
      taskName: "follow",
      taskValue: "",
    })
    .then((res) => {
      isgthr.value = "1";
    });
};
let tcbgshow = (str, success) => {
  yaritcbg.value = str;
  if (str == "1") {
    // api
    //   .createinvitation({
    //     userId: userlog.value.userId,
    //     token: userlog.value.token,
    //     appId: "xbot",
    //   })
    //   .then((res) => {
    //     console.log("createinvitation", res.data.data.invitationCode);
    //     invitationcode.value = res.data.data.invitationCode;
    //   });
    invitationcode.value = [
      "ASDG13",
      "ASDG14",
      "ASDG15",
      "ASDG16",
      "ASDG17",
      "ASDG18",
      "ASDG19",
      "AWDG1A",
      "AWERXZ",
      "ALDEAV",
    ];
  }
  // if (invitationcode.value.length != 0 && str == "0" && success == "1") {
  //zhu api
  //   .submit({
  //     userId: userlog.value.userId,
  //     token: userlog.value.token,
  //     appId: "xbot",
  //     taskName: "swap",
  //     taskValue: "",
  //   })
  //   .then((res) => {
  //     isgw.value = "1";
  //   });
  //   isgw.value = "1";
  // }
};

let logtcbgshow = (str) => {
  yarilog.value = str;
  if (Twname.value != "") {
    api
      .submit({
        userId: userlog.value.userId,
        token: userlog.value.token,
        appId: "xbot",
        taskName: "register",
        taskValue: "",
      })
      .then((res) => {
        isgy.value = "1";
      });
  }
};
let jydaib = (str) => {
  // if (isgy.value == '1' && str == '1') {
  //   yarijyb.value = '1'
  // } else {
  //   yarijyb.value = '0'
  // }

  yarijyb.value = str;
};
let jhbjz = () => {
  console.log();
};
let wtccon = () => {
  console.log();
};
let qriscopy = (str, item, index) => {
  if (item != "" && str == "1") {
    navigator.clipboard.writeText(item).then(() => {
      alert("Text successfully copied to clipboard");
    });
    iscopy.value = index;
  } else if (item == "") {
    alert("Failed to copy text");
  }
};
let dblistbox = (str) => {
  if (dblistshow.value == str) {
    dblistshow.value = "0";
  } else {
    dblistshow.value = "1";
  }
};
let choosedb = (item) => {
  showb.value = item.daibname;
  showbimg.value = item.img;
  dblistshow.value = "0";
};
let maxdbye = () => {
  if (dqyue.value == 0) {
    inpval.value = "0.0";
  } else {
    inpval.value = parseFloat(dqyue.value).toFixed(5);
  }
};
let isnum = () => {
  inpval.value = inpval.value.replace(/[^\d.]/g, "");
};
let fwc = () => {
  api
    .submit({
      userId: userlog.value.userId,
      token: userlog.value.token,
      appId: "xbot",
      taskName: "swap",
      taskValue: "",
    })
    .then((res) => {
      console.log(res);
      isgf.value = "1";
    });
  yarijyb.value = "0";
};
</script>

<style scoped>
.yairlsytysvgnone {
  display: none;
}

.yaritcbgnone {
  display: none;
}

.yairbox {
  width: 68.5%;
  margin: 0 auto;
  padding: 1rem 6rem;
  border: 1px solid rgb(56 59 64);
  border-radius: 0.375rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
    0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  box-sizing: border-box;
}

.yaributsjnone {
  display: none;
}

.ymainhy .yairbox {
  background: rgb(247 247 247);
  border-color: rgb(179 187 202);
}

.yairbcon {
  width: 100%;
  padding: 4rem 0;
}

.yairbcon h2 {
  font-family: "Vectrex";
  font-size: 2.5rem;
  line-height: 1.15;
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
}

.ymainhy .yairbcon h2 {
  color: #110b0b;
}

.yairlsy {
  width: 20%;
  font-family: "Vectrex";
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
}

.ymainhy .yairlsy {
  color: #110b0b;
}

.yairrjt {
  position: absolute;
  width: 1.25rem;
  top: 50%;
  right: -0.75rem;
  transform: translate(-50%, -50%);
}

.yairlsyty {
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;
}

.yairlsyty .yairsyle {
  width: 30%;
  height: 1px;
  background: none;
}

.yairlsytt .yairsyle {
  width: 30%;
  height: 1px;
  background: #fff;
}

.ymainhy .yairlsytt .yairsyle {
  background: #110b0b;
}

.yairsyri {
  width: 30%;
  height: 1px;
  background: #fff;
}

.ymainhy .yairsyri {
  background: #110b0b;
}

.yairlsyts .yairsyri {
  width: 30%;
  height: 1px;
  background: none;
}

.yairlsytysvg {
  position: relative;
  width: 40%;
  cursor: pointer;
}

.yairlsytysvg > svg {
  color: #fff;
  transition: all 0.3s;
}

.yairlsytysvg:hover > svg {
  color: rgba(255, 255, 255, 0.4);
}

.yairlsy .yairlsytysvghover > svg {
  color: rgba(255, 255, 255, 0.4);
}

.yairlsytysvg:hover > span {
  color: rgba(255, 255, 255, 0.4);
}

.yairlsy .yairlsytysvghover > span {
  color: rgba(255, 255, 255, 0.4);
}

.ymainhy .yairlsytysvg > svg {
  color: rgb(17, 11, 11);
}

.ymainhy .yairlsytysvg:hover > svg {
  color: rgba(17, 11, 11, 0.4);
}

.ymainhy .yairlsytysvg:hover > span {
  color: rgba(17, 11, 11, 0.4);
}

.ymainhy .yairlsy .yairlsytysvghover > svg {
  color: rgba(17, 11, 11, 0.4);
}

.ymainhy .yairlsy .yairlsytysvghover > span {
  color: rgba(17, 11, 11, 0.4);
}

.yairlsytysvg span {
  position: absolute;
  font-size: 1.875rem;
  line-height: 1;
  font-weight: 400;
  color: #fff;
  left: 50%;
  top: 50%;
  font-family: "Vectrex";
  transform: translate(-50%, -50%);
  transition: all 0.3s;
}

.ymainhy .yairlsytysvg span {
  color: #110b0b;
}

.aroro {
  width: 80%;
  margin: 0 auto;
}

.aroro > h1 {
  font-size: 66px;
  font-family: "Vectrex";
  text-align: center;
  color: white;
}

.ymainhy .aroro > h1 {
  color: black;
}

.ymainhy .aroro > p {
  color: black;
}

.aroro > p {
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin: 1rem 0 5rem 0;
  font-family: "GT Pressura Mono";
}

.yairtcbox p {
  border: 1px solid rgb(179, 187, 202);
  padding: 0.75rem 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-sizing: border-box;
}

.chakra-text {
  letter-spacing: -0.02em;
  font-weight: 400;
  transform: translateY(2%);
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  font-family: "Vectrex";
}

.chakra-text > span {
  font-family: "Vectrex";
  letter-spacing: -0.02em;
  font-weight: 400;
  transform: translateY(2%);
  cursor: pointer;
  color: rgb(73, 207, 219);
}

.yair {
  width: 100%;
  padding: 10rem 0 5rem;
  background: url("../assets/homebg.png");
}

.ymainhy .yair {
  background: url("../assets/homebgw.png");
}

.yairtc {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.86);
  justify-content: center;
  align-items: center;
}

.yairtcbg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.86);
  justify-content: center;
  align-items: center;
}

.yairtcbglog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

.yaritclogbox {
  width: 25.75rem;
  padding: 2rem;
  box-sizing: border-box;
  background: rgb(36 35 37);
  position: relative;
  border-radius: 1.25rem;
}
.yaritclogbox > img {
  width: 1.5rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
}
.yaritctjmbox {
  width: 42.75rem;
  padding: 2rem;
  border-radius: 1.25rem;
  box-sizing: border-box;
  background: rgb(36 35 37);
  position: relative;
}

.yarijhbtt {
  width: 33.3333%;
  padding: 0.75rem 0 0.5rem;
  align-items: center;
  font-family: "Vectrex";
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 1.6px;
  color: rgb(169, 169, 169);
  column-gap: 0.5rem;
  justify-content: flex-end;
}

.yarijhbtt > div {
  width: 1.5rem;
  height: 1.5rem;
  background: rgb(169, 169, 169);
  border-radius: 50%;
}

.yarijhbtt > div img {
  width: 100%;
  height: 100%;
}

.yarijhbty {
  align-items: center;
}

.yaritctjmbox > img {
  width: 1.5rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
}

.yarijhboxttwo {
  width: 100%;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  border: 2px solid rgb(169, 169, 169);
  border-radius: 0.5rem;
}

.yaritctjmbcon {
  width: 100%;
}
.yaritctjmbcon > p {
  font-family: "GT Pressura Mono";
  color: #b3bbca;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
}
.yaritctjmbcon > p > span {
  font-family: "GT Pressura Mono";
  font-size: 1.25rem;
  line-height: 1.5;
}
.yarijhbtty {
  width: 100%;
  align-items: center;
}

.yarijhbttthr {
  width: 100%;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border: 1px solid rgb(169, 169, 169);
  border-radius: 0.375rem;
  box-sizing: border-box;
  column-gap: 1rem;
  align-items: center;
}

.yarijhbttyy {
  width: 40%;
  height: 1px;
  background: rgb(169, 169, 169);
}

.yarijhbttthrimg {
  width: 1.5rem;
  height: 1.5rem;
  background: rgb(235, 235, 235);
  border-radius: 50%;
}

.yarijhbttf {
  margin-top: 1rem;
  border: 1px solid rgb(169, 169, 169);
  border-radius: 0.375rem;
}
.yarijhbttw {
  margin-top: 0.5rem;
  width: 100%;
  column-gap: 0.5rem;
  align-items: center;
}
.yarijhbttwy {
  font-family: "Vectrex";
  column-gap: 0.5rem;
  align-items: center;
  font-size: 0.75rem;
  line-height: 160%;
  letter-spacing: 0;
}
.yarijhbtts {
  align-items: center;
  padding-top: 0.5rem;
}
.yarijhbttwt {
  font-size: 0.75rem;
  line-height: 160%;
  letter-spacing: 0;
  font-family: "GT Pressura Bold";
  color: rgb(252, 252, 3);
  cursor: pointer;
}
.yarijhbttwt:hover {
  color: white;
}
.yarijhbttf > input {
  font-family: "Vectrex";
  width: 60%;
  padding: 0 1rem;
  height: 5rem;
  font-size: 2.615rem;
  line-height: 130%;
  letter-spacing: 0;
  color: white;
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
}
.yarjhbttq {
  font-size: 0.75rem;
  width: 100%;
  padding: 0.5rem 0;
  font-family: "Vectrex";
  color: rgb(235, 235, 235);
}
.yarijhbttft {
  width: 40%;
  border-left: 1px solid rgb(169, 169, 169);
  box-sizing: border-box;
  position: relative;
}
.yarijhbttflist {
  display: block;
  position: absolute;
  top: 5.5rem;
  left: 0rem;
  width: 100%;
  height: 10.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgb(169, 169, 169);
  padding: 0.5rem;
  box-sizing: border-box;
  background: rgb(36 35 37);
}
.yarijhbttflistnone {
  display: none;
}
.yarijhbttflist > div:nth-child(4) {
  border: none;
}
.yarijhbttfliy {
  padding: 0.375rem 0;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgb(235, 235, 235);
  cursor: pointer;
}
.yarijhbttfliy > span {
  font-size: 0.875rem;
  font-family: "Vectrex";
  color: rgb(235, 235, 235);
}
.yarijhbttfliyleft {
  column-gap: 0.25rem;
  align-items: center;
}
.yarijhbttfliyleft > span {
  font-size: 1.25rem;
  font-family: "Vectrex";
  color: rgb(235, 235, 235);
}
.yarijhbttfliylefty {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: rgb(235, 235, 235);
}
.yarijhbttfliylefty > img {
  width: 100%;
  height: 100%;
}
.yarijhbttftbox {
  width: 100%;
  align-items: center;
  column-gap: 0.5rem;
  justify-content: center;
  cursor: pointer;
}
.yarijhbttftbox:hover > div {
  background: white;
}

.yarijhbttftbox > div {
  width: 1.5rem;
  height: 1.5rem;
  background: rgb(252, 252, 3);
  border-radius: 50%;
}

.yarijhbttftbox > div > img {
  width: 100%;
  height: 100%;
}

.yarijhbttftbox > span {
  color: rgb(252, 252, 3);
  font-family: "Vectrex";
  font-size: 1.25rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
}

.yarijhbttftbox:hover > span {
  color: white;
}

.yarijhbttf > input::placeholder {
  color: rgb(0 0 0 / 0.3);
}

.yarijhbttftbox:hover > svg path {
  fill: white;
}

.yarijhbttthrimg > img {
  width: 100%;
  height: 100%;
}

.yarijhbttthr > span {
  font-family: "Vectrex";
  font-size: 0.75rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  color: rgb(235, 235, 235);
}

.yarijhbttyt {
  font-family: "GT Pressura Bold";
  padding: 0 0.5rem;
  font-size: 0.75rem;
  line-height: 160%;
  letter-spacing: 0;
  color: white;
}

.yarijhbttythr {
  width: 40%;
  height: 1px;
  background: rgb(169, 169, 169);
}

.yaritctjmbcon h1 {
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.25;
  color: #fff;
  text-align: left;
  margin: 0.5rem 0;
}
.yariinvs {
  align-items: center;
  margin: 0.5rem 0;
  cursor: pointer;
}
.yariinvs:hover {
  background: rgb(25, 25, 25);
}
.yariinvl {
  align-items: center;
  column-gap: 0.5rem;
}
.yariinvl > img {
  width: 2rem;
  height: 2rem;
}
.yariinvl > span {
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.25;
  color: #fff;
}
.yaritctinpb {
  align-items: center;
}

.yaritctinpb > h2 {
  font-size: 1.5rem;
  line-height: 160%;
  margin-right: 0.5rem;
  letter-spacing: 1.2px;
  font-family: "Vectrex";
  color: white;
  box-sizing: border-box;
  background: transparent;
}

.yaritctinpb > input:focus {
  border-color: white;
}

.yaritctbcopy {
  justify-content: center;
  align-items: center;
}

.yaritctbcopy > .yaricopy {
  width: 4.949375rem;
  height: 2.5rem;
  padding: 0.5rem;
  font-family: "GT Pressura Mono";
  text-align: center;
  background: transparent;
  border: 2px solid rgb(179 187 202);
  color: white;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
}

.yaritctbcopy > .yaricopy:hover {
  border-color: rgb(255 255 255);
}

.yaritctbcopy > .yaricopyed {
  width: 4.949375rem;
  height: 2.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "GT Pressura Mono";
  text-align: center;
  background: transparent;
  border: 2px solid rgb(179 187 202);
  color: white;
  border-radius: 0.375rem;
  cursor: not-allowed;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.yaritctbcopy > .yaricopynone {
  display: none;
}

.yariclty {
  width: 100%;
  align-items: center;
}

.yaritclogbox > p {
  width: 100%;
  font-family: "GT Pressura Mono";
  color: #b3bbca;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.25rem;
}

.yarierlby {
  width: 100%;
}

.yarierlogbox {
  width: 100%;
  align-items: center;
  row-gap: 1rem;
  margin-top: 2rem;
}

.yarierbyxhll {
  column-gap: 0.25rem;
  align-items: center;
}

.yarierbyxhll > svg {
  margin-right: 0.5rem;
}

.yariclty > span {
  width: 75%;
  text-align: left;
  font-family: "Vectrex";
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: white;
}

.yarierbyxhtxt {
  font-family: "Vectrex";
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
}

.yarierbyxhlr {
  align-items: center;
  justify-content: center;
}

.yarierbyxhlr > .yarierbut {
  width: 6.3625rem;
  padding: 0.5rem 1rem;
  font-family: "GT Pressura Mono";
  text-align: center;
  background: transparent;
  border: 2px solid rgb(179 187 202);
  color: white;
  border-radius: 0.375rem;
  cursor: pointer;
}

.yarierbyxhlr > .yarierbut:hover {
  border-color: rgb(255 255 255);
}

.yarierbyxhlr .yarijzcl {
  width: 6.3625rem;
  padding: 0.5rem 1rem;
  font-family: "GT Pressura Mono";
  text-align: center;
  background: transparent;
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  color: hsla(0, 0%, 100%, 0.6);
  border-radius: 0.375rem;
  cursor: not-allowed;
}

.yarienda > .yarierbut {
  width: 6.3625rem;
  padding: 0.5rem 1rem;
  font-family: "GT Pressura Mono";
  text-align: center;
  background: transparent;
  border: 2px solid rgb(179 187 202);
  border-radius: 0.735rem;
  color: white;
  cursor: pointer;
}

.yarienda > .yarierbut:hover {
  border-color: rgb(255 255 255);
}

.yaridbut {
  width: 100%;
  justify-content: center;
  align-items: center;
}

.yaridbut > span {
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
}

.h-8 {
  height: 2rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.yarienda .yariendbut {
  padding: 0.5rem 2rem;
  font-family: "GT Pressura Mono";
  text-align: center;
  background: transparent;
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  color: hsla(0, 0%, 100%, 0.6);
  border-radius: 0.375rem;
  cursor: not-allowed;
}

.yarienda {
  width: 100%;
  justify-content: center;
  align-items: center;
}

.yairtcbgnone {
  display: none;
}

.yaritcbglognone {
  display: none;
}

.yairtcbox {
  width: 30rem;
  padding: 3.5rem 2rem 2rem;
  box-sizing: border-box;
  border: 1px solid rgb(179, 187, 202);
  border-radius: 1rem;
  background: rgb(18, 30, 43);
  position: relative;
}

.ymainhy .yairtcbox {
  background-color: black;
}

.yairtcbox .yairlt {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.yairlt svg path {
  fill: #fff;
}

.ymainhy .yairyright svg path {
  fill: rgb(17, 11, 11) !important;
}

/* .yairtcbox > button {
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: "Vectrex";
  font-weight: 700;
  letter-spacing: -0.02em;
  transform: translateY(2%);
  line-height: 1.625rem;
  border: 1px solid rgb(179, 187, 202);
  color: #fff;
  background: transparent;
  border-radius: 1rem;
  column-gap: 1rem;
  cursor: pointer;
} */
/* .yairtcnone {
  display: none;
} */

.yaribot {
  width: 57.5%;
  margin: 7.5rem auto 0;
  text-align: center;
}

.yaribot > h4 {
  font-size: 3.5rem;
  line-height: 3rem;
  font-family: "Vectrex";
  font-weight: 600;
  color: white;
}

.ymainhy .yaribot > h4 {
  color: black;
}

.yariboter {
  justify-content: center;
  column-gap: 1rem;
  margin-top: 4.5rem;
}

.yariboter button {
  font-size: 1.125rem;
  font-family: "Vectrex";
  height: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 1.625rem;
  box-sizing: border-box;
  background: transparent;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
}

.ymainhy .yariboter button {
  color: rgb(17, 11, 11);
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.ymainhy .yariboter .yaritabactive {
  border-color: rgb(17, 11, 11);
}

.yariboter .yaritabactive {
  border-color: white;
}

.yaritabconnone {
  display: none;
}

.yaritabcon {
  display: flex;
  margin-top: 3rem;
}

.yaritableft {
  width: 45.7%;
}

.yaritableft > h3 {
  font-family: "Vectrex";
  text-align: left;
  line-height: 2.5rem;
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
}

.ymainhy .yaritableft > h3 {
  color: #000;
}

.yaritableft > p {
  font-family: "GT Pressura Mono";
  opacity: 0.4;
  text-align: left;
  line-height: 1.5rem;
  font-size: 1.125rem;
  margin-top: 2rem;
  color: #b3bbca;
}

.ymainhy .yaritableft > p {
  color: #000;
  opacity: 1;
}

.yaritabright {
  width: 49.825%;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 1px 2px 0px inset,
    rgba(0, 0, 0, 0.72) 0px 8px 12px 0px;
  background-image: url("https://www.ethratio.io/static/media/dotted-calculator.3fbea5e1d69fd5b29618514bd7802a19.svg");
  background-repeat: no-repeat;
  padding: 1.5rem;
  background-color: rgb(36 35 37);
  border-radius: 1rem;
  font-family: "GT Pressura Mono";
  box-sizing: border-box;
}

.yaritabright h3 {
  font-family: "Vectrex";
  font-weight: 600;
  font-size: 1.375rem;
  margin-bottom: 1.75rem;
  text-align: left;
  color: white;
}

.yarirany {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: white;
  text-align: left;
}

.yarirant {
  text-align: left;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(169, 169, 169);
}

.yarigund {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background: rgb(47 46 50);
  border-radius: 0.375rem;
  width: 21rem;
  box-sizing: border-box;
}

.yarigund > p {
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.25rem;
  color: white;
  text-align: left;
}

.yarigundcon {
  align-items: center;
}

.yarigundcon > p {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: white;
}

.yarijdt {
  width: 12.5rem;
  height: 0.625rem;

  cursor: pointer;
}

.yarijdtbox {
  height: 100%;
  width: 100%;
  background: white;
  border-radius: 0.5rem;
  position: relative;
}

.progress {
  height: 100%;
  width: 0%;
  background: #1dc47d;
  border-radius: 0.5rem;
}

.handle {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: white;
  border: 0.25rem solid #1dc47d;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.yaritabry {
  margin-top: 1rem;
}

.yarixian {
  width: 100%;
  height: 1px;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
}

.yaritabendleft {
  align-items: center;
  column-gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: white;
}

.yaritabrend > h4 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: rgb(29 196 125);
}

/* .ymainhy .yaritabright h3 {
  color: rgb(17, 11, 11);
} */
@media screen and (max-width: 1250px) {
  .yaritclogbox {
    width: 92.5%;
    margin: 0 auto;
    padding: 1rem;
  }
  .yarijhboxtop {
    margin: 0.5rem 0 0.25rem;
  }
  .yaritcbgtb {
    display: block;
  }
  .yarijhbbox {
    width: 95%;
    padding: 1rem;
    margin: 0 auto;
  }
  .yarijhbms > h1 {
    font-size: 1.25rem;
    text-align: center;
  }
  .yarijhbms > p {
    font-size: 1rem;
    text-align: center;
    margin: 0.5rem 0 0;
  }
  .yarijhbms > span {
    font-size: 0.75rem;
    text-align: center;
    margin: 0.5rem 0 0;
  }
  .yarijhbtt {
    padding: 0 0 0.25rem;
  }
  .yarijhbms {
    width: 100%;
    padding-top: 1rem;
  }
  .yarijhbttftbox {
    column-gap: 0.25rem;
  }
  .yarijhboxy {
    width: 30%;
  }
  .yarijhboxthr {
    width: 30%;
  }
  .yarijhbttf > input {
    height: 3rem;
    font-size: 2rem;
  }
  .yarijhboxttwo {
    padding: 0.5rem 1rem;
  }
  .yaritctjmbox > img {
    top: 1rem;
    right: 1rem;
  }
  .yarjhbttq {
    padding: 0.5rem 0 0;
  }

  .yaritctjmbox {
    width: 92.5%;
    margin: 0 auto;
    padding: 1rem;
  }
  .yaritctjmbcon h1 {
    font-size: 0.75rem;
  }
  .yaritclogbox > p {
    font-size: 0.9rem;
  }

  .yarierlogbox {
    flex-wrap: wrap !important;
  }

  .yaribot > h4 {
    font-size: 2.5rem;
  }

  .yaritabry > div:nth-child(1) {
    margin-bottom: 1rem;
  }

  .yaritabrend > h4 {
    font-size: 1.25rem;
  }

  .yaribot {
    width: 100%;
  }

  .yariboter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .yariboter button {
    width: 15rem;
    margin-bottom: 1rem;
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .yaritableft {
    width: 100%;
  }

  .yarigund {
    width: 100%;
  }

  .yaritableft > h3 {
    text-align: center;
  }

  .yaritableft > p {
    text-align: center;
  }

  .yaritabright h3 {
    text-align: center;
  }

  .yaritabcon {
    flex-direction: column;
    align-items: center;
  }

  .yaritabright {
    width: 95%;
    margin: 3rem auto 0;
    padding: 0.75rem;
  }

  .yaritabry {
    display: flex;
    flex-direction: column;
  }

  .yair {
    padding: 10rem 0 2rem;
  }

  .yairbox {
    width: 95%;
    padding: 1rem 0.5rem;
  }

  /* .yairtcbox {
    width: 95%;
    padding: 2.5rem 1rem 1rem;
  } */
  .aroro > h1 {
    font-size: 2.75rem;
  }

  .aroro > p {
    font-size: 1.125rem;
    margin: 1rem 0 2rem;
  }

  .aroro {
    width: 95%;
  }

  .yairbcon {
    padding: 1.5rem 0;
  }

  .yairbcon h2 {
    font-size: 2rem;
    margin: 1rem 0 2rem;
  }

  .yairlsy {
    font-size: 1.25rem;
  }

  .yairlsytysvg span {
    font-size: 1.5rem;
  }

  .yairlsyty {
    justify-content: center;
    margin-bottom: 1rem;
  }

  .yairsyle {
    display: none;
  }

  .yairsyri {
    display: none;
  }

  .yairls {
    display: block;
  }

  .yairls > div {
    width: 90%;
    margin: 1rem auto;
  }

  .yairlsytysvg {
    width: 100%;
  }

  .yairlsytysvg > svg {
    transform: rotate(90deg);
    width: 5.5rem;
  }

  .yairrjt {
    width: 0.75rem !important;
    left: 48%;
    bottom: -0.5rem;
    top: 70%;
    right: -0.75rem;
  }
  .yarijhbttflist {
    top: 3.5rem;
    width: 150%;
    left: -2rem;
  }
  .yariinvl > span {
    font-size: 0.6rem;
    line-height: 1;
  }
  .yaritctinpb > h2 {
    font-size: 1.15rem;
    margin-right: 0.25rem;
  }
  .yaritctbcopy > button {
    font-size: 0.75rem !important;
    width: 3.949375rem !important;
    height: 2rem !important;
  }
  .yaritctjmbcon > p {
    font-size: 0.5rem;
    line-height: 1.25;
  }
  .yaritctjmbcon > p > span {
    font-size: 1.25rem;
    line-height: 1;
  }
  .yariinvl {
    column-gap: 0.25rem;
  }
}
.ynewstake {
  padding: 10rem 0 4rem;
  width: 100%;
  background: rgb(17, 11, 11);
}
.ymainhy > .ynewstake {
  background: rgb(235, 235, 235);
}
.ynewstabox {
  max-width: 82rem;
  /* padding: 0 1rem; */
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 1.5rem;
  overflow: hidden;
  align-items: center;
  background: #242325;
}
.ynewstableft {
  width: 53.75%;
  padding: 2.5rem 2rem 0;
  box-sizing: border-box;
}
.ynewstableft > h2 {
  font-size: 60px;
  font-family: "Vectrex";
  color: white;
}
.ynewstableft > p {
  font-family: "GT Pressura Mono";
  font-size: 1.375rem;
  margin: 1rem auto;
  color: #b3bbca;
}
.ynewstaketxtb {
  margin-top: 2rem;
  gap: 2rem;
}
.ynewstakex {
  width: 100%;
  border: 1px solid white;
  margin-bottom: 1rem;
}
.ynewstaket {
  font-family: "Vectrex";
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.25rem;
  color: white;
}
.ymainhy .ynewstableft > h2 {
  color: black;
}
.ymainhy .ynewstableft > p {
  color: black;
}
.ymainhy .ynewstakex {
  border-color: black;
}
.ymainhy .ynewstaket {
  color: black;
}
.ynewstakethr {
  font-family: "GT Pressura Mono";
  font-size: 1rem;
  color: #b3bbca;
}
.ymainhy .ynewstakethr {
  color: black;
}
.ynewstakebut {
  margin-top: 0.5rem;
}
.ynewstakebutnone {
  display: none;
}
.ynewstakebut button {
  font-family: "Vectrex";
  width: 11.5rem;
  border: 2px solid rgb(179 187 202);
  border-radius: 0.375rem;
  height: 3rem;
  font-weight: 400;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
}
.ynewstakebutshow {
  color: rgb(255 255 255);
}
.ynewstakebutshow:hover {
  border-color: rgb(255 255 255);
}
.ymainhy .ynewstakebutshow {
  border-color: rgb(105 111 122);
  color: black;
}
.ymainhy .ynewstakebutshow:hover {
  border-color: rgb(17 11 11);
}
.ynewstabright {
  width: 41.40625%;
  padding: 1.75rem;
  background: #242325;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 1px 2px 0px inset,
    rgba(0, 0, 0, 0.72) 0px 8px 12px 0px;
  box-sizing: border-box;
  color: white;
  position: relative;
}
.ynewstabright > img {
  width: 1.5rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
}
.ynewstabrbox {
  gap: 1rem;
}
.ynewstabrbox > h1 {
  font-family: "Vectrex";
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
}
.ynewstabrbox > p {
  width: 100%;
  font-family: "GT Pressura Mono";
  padding: 0 3.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  box-sizing: border-box;
  color: #b3bbca;
  text-align: center;
}
.ynewstabtabflex {
  width: 80%;
  margin: 0 auto;
  background: rgb(48, 48, 48);
  border-radius: 999px;
}
.ynewstabtabflex > button {
  width: 45.5%;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: rgb(153 153 153);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.25rem;
  background: transparent;
  margin: 0.5rem;
  border-radius: 9999px;
  box-sizing: border-box;
}
.ynewstabtabflex > .ynewstabtabfshow {
  color: white;
  background: rgb(17 11 11);
}
.ynewstathry {
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.ynewstayr {
  font-family: "GT Pressura Mono";
  font-size: 0.75rem;
  line-height: 1rem;
  color: white;
  padding: 0.25rem 0.625rem;
  background: rgb(108 179 83);
  border-radius: 999px;
}
.ynewstabtabflex > button:hover {
  background: rgb(30, 30, 30);
}
.ynewstaybox {
  margin-top: 3rem;
  display: block;
}
.ynewstayboxnone {
  display: none;
}
.ynewstayboxc {
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
.ynewstayboxcyl {
  font-family: "GT Pressura Mono";
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 2px;
  color: #b3bbca;
}
.ynewstayboxcyr {
  font-family: "GT Pressura Mono";
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  column-gap: 0.25rem;
  padding-right: 0.5rem;
  align-items: center;
  margin-bottom: 2px;
  color: #b3bbca;
  text-align: end;
}
.ynewstayboxcyr > svg {
  width: 0.75rem;
  height: 0.75rem;
}
.ynewstayboxct {
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid rgb(161 161 170);
  border-radius: 0.75rem;
  align-items: center;
  column-gap: 0.5rem;
}
.ynewstayboxctl {
  width: 7.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  border: 1px solid rgb(212 212 216);
  border-radius: 0.375rem;
  box-sizing: border-box;
  position: relative;
}
.ynewstayboxctlbox {
  font-family: "Vectrex";
  width: 100%;
  padding: 0.75rem 0 0.75rem 0.75rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background: transparent;
  color: white;
}
.ynewstayboxctlbox > img {
  width: 1.3125rem;
  height: 1.3125rem;
  border-radius: 50%;
}
.ynewstayboxctlbox > svg {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}
.ynewstayboxctr {
  width: 66.228%;
}
.ynewstayboxctr > input {
  width: 100%;
  text-align: right;
  font-size: 1.875rem;
  line-height: 2.25rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-family: "Vectrex";
  background: transparent;
  border: none;
  color: white;
}
.ynewstayboxctr > div {
  width: 100%;
  text-align: right;
  font-size: 1.875rem;
  line-height: 2.25rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-family: "Vectrex";
  background: transparent;
  border: none;
  color: white;
}
.ynewstayboxctr > span {
  display: block;
  font-size: 11px;
  text-align: right;
  margin-top: -4px;
  color: #b3bbca;
}
.ynewstayboxcthr {
  width: 100%;
  margin-top: 2rem;
}
.ynewstayboxcthr > button {
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
  color: white !important;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  background: transparent;
  border: 2px solid rgb(179 187 202);
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.ynewstayboxfoury > span:nth-child(1) {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #999999;
  font-family: "GT Pressura Mono";
}
.ynewstayboxfoury > span:nth-child(2) {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  font-family: "GT Pressura Mono";
}
.ynewstayboxctl:hover .ynewstayboxctlshow {
  display: block;
}
.ynewstayboxctlshow {
  display: none;
  position: absolute;
  width: 27.125rem;
  background: rgb(25, 25, 25);
  border: 1px solid rgb(161, 161, 170);
  padding: 0.75rem;
  z-index: 10;
  left: 0;
  border-radius: 0.375rem;
  top: 0;
  box-sizing: border-box;
}
.ynewstayboxctlshowy {
  padding: 0.25rem;
  background: rgb(48, 48, 48);
  border: 1px solid rgb(161, 161, 170);
  border-radius: 0.5rem;
}
.ynewstayboxctlshowy button {
  width: 48%;
  font-family: "Vectrex";
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  color: rgb(153 153 153);
  background: transparent;
  font-size: 0.875rem;
  padding: 0.375rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
}
.ynewstayboxctlshowy button:hover {
  background: rgb(30, 30, 30);
}
.ynewstayboxctlshowy > .ynewstayboxctlshowactive {
  color: white;
  background: rgb(17 11 11);
}
.ynewstayboxctlshowt {
  width: 100%;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  background: rgb(17 11 11);
  align-items: center;
  column-gap: 0.625rem;
}
.ynewstayboxctlshowt > img {
  width: 1.3125rem;
  border-radius: 50%;
}
.ynewstayboxctlshowtbox {
  width: 90%;
}
.ynewstayboxctlshowty {
  align-items: center;
}
.ynewstayboxctlshowty > p {
  font-family: "Vectrex";
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.ynewstayboxctlshowty > span {
  font-family: "GT Pressura Mono";
  font-size: 0.75rem;
  line-height: 1rem;
  color: #a1a1aa;
}
.ynewstayboxctlshowtt {
  font-family: "GT Pressura Mono";
  font-size: 0.75rem;
  line-height: 1rem;
  color: #a1a1aa;
}
.ynewstayboxctlshowcont {
  padding: 2.5rem 0 0;
  display: block;
  text-align: center;
  font-family: "GT Pressura Mono";
  font-size: 0.75rem;
  line-height: 1rem;
  color: #a1a1aa;
}
.ynewstayboxctlshowtnone {
  display: none;
}
.ynewstayboxt {
  margin-top: 2rem;
  width: 100%;
}
.ynewstayboxty {
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
}
.ynewstayboxty > img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.ynewstayboxty > div {
  font-family: "Vectrex";
  font-size: 1.5rem;
  line-height: 2rem;
  color: white;
}
.ynewstayboxtt {
  width: 100%;
  margin-top: 1rem;
}
.ynewstayboxtt > input {
  font-family: "Vectrex";
  display: block;
  width: 75%;
  border-radius: 9999px;
  margin: 0 auto;
  font-size: 3rem;
  line-height: 1;
  color: white;
  text-align: center;
  background: transparent;
  border: 1px solid transparent;
}
.ynewstayboxtt > input:focus {
  border: 1px solid white;
}
.ynewstayboxtthr {
  justify-content: center;
  margin: 1rem 0;
}
.ynewstayboxtthr > span {
  display: block;
  border-radius: 999px;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgb(161 161 170);
}
.ynewstayboxtfour {
  margin: 2rem 0 1.25rem;
  column-gap: 0.5rem;
}
.ynewstayboxtfoury {
  width: 100%;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #b3bbca;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.ynewstayboxtfourytop > span {
  font-family: "Vectrex";
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.ynewstayboxtfourytop > div {
  font-family: "Vectrex";
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(161 161 170);
}
.ynewstayboxtfourybot {
  font-family: "Vectrex";
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(200 200 200);
}
.ynewstayboxtfourshow {
  background: rgb(48, 48, 48);
}
.ynewstayboxtfive {
  width: 100%;
  margin: 1rem 0;
}
.ynewstayboxtfive > button {
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
  color: white;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  background: transparent;
  border: 2px solid rgb(179 187 202);
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
@media (max-width: 1250px) {
  .yairtcbglog {
    display: flex;
    justify-content: center;
  }
  .ynewstabox {
    width: 95%;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
  .ynewstableft {
    width: 100%;
    padding: 1rem;
    display: none;
  }
  .ynewstaketxtb {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .ynewstabright {
    width: 100%;
    padding: 0.5rem 0.75rem;
  }
  .ynewstayboxtfive > button {
    padding: 0.5em 0.625rem;
  }
  .ynewstabrbox {
    gap: 0.25rem;
  }
  .ynewstabrbox > p {
    display: none;
  }
  .ynewstabtabflex {
    width: 100%;
    justify-content: center;
  }
  .ynewstayr {
    padding: 0.25rem;
    font-size: 0.65rem;
  }
  .ynewstayboxtfour {
    margin: 0 0 0.75rem;
  }
  .ynewstayboxfoury {
    margin: 0.25rem 0 !important;
  }
  .ynewstayboxtfive {
    margin: 0.25rem 0;
  }
  .ynewstaybox {
    margin-top: 1rem;
  }
  .ynewstayboxt {
    margin-top: 0rem;
  }
  .ynewstayboxtt {
    margin-top: 0.5rem;
  }
  .ynewstayboxtthr {
    margin: 0.25rem 0;
  }
  .ynewstabrbox > h1 {
    font-size: 1.75rem;
  }
  .ynewstayboxtfourytop > span {
    font-size: 0.65rem;
  }
  .ynewstayboxtt > input {
    font-size: 2.5rem;
  }
  .ynewstayboxtfourytop > div {
    font-size: 0.7rem;
  }
  .ynewstayboxtfoury {
    padding: 0.5rem;
    margin-top: 0.25rem;
  }
  .ynewstake {
    padding: 8rem 0 2rem;
  }
  .ynewstableft > h2 {
    font-size: 2.75rem;
  }
  .ynewstableft > p {
    font-size: 1.125rem;
    margin: 0.5rem 0;
  }
  .ynewstaket {
    font-size: 1.75rem;
  }
  .ynewstayboxctlshow {
    width: 19.125rem;
  }
  .ynewstayboxctlbox {
    padding: 0.5rem !important;
  }
}
</style>
