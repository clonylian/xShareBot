<template>
  <div class="yleader flex jus">
    <div class="yleaderleft">
      <div class="yleaderltop flex jus">
        <h1>Leaderboard</h1>
        <span>Bridge & Invite friends to rank up</span>
      </div>
      <div class="yleaderlcon">
        <div class="yleaderlctxt">
          <div class="yleaderlcb flex">
            <div style="width: 13.71%">RANK</div>
            <div style="width: 44.231%">NAME</div>
            <div style="width: 25.2747%">INVITED BY</div>
            <div style="width: 16.7842%; text-align: right">POINTS</div>
          </div>
          <div class="yleaderlct">
            <div
              v-for="(item, i) in leadlist"
              :key="i"
              class="yleaderlcttiao flex"
            >
              <div style="width: 13.71%" class="yleaderlctty">
                <span>{{ item.rank }}</span>
              </div>
              <div style="width: 44.231%" class="yleaderlcttt flex">
                <div>
                  <img
                    :class="
                      item.twitter.profileImageUrl == null
                        ? 'yleaderjolnone'
                        : ''
                    "
                    :src="item.twitter.profileImageUrl"
                    alt=""
                  />
                </div>
                <div>{{ item.displayName }}</div>
              </div>
              <div style="width: 25.2747%" class="yleaderlcttthr">
                {{
                  item.referrerDisplayName == null
                    ? "-"
                    : item.referrerDisplayName
                }}
              </div>
              <div
                style="width: 16.7842%; text-align: right"
                class="yleaderlcttf"
              >
                {{ item.points.toFixed(0) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="yleadercenterg"></div>
    <div class="yleaderright">
      <h2>Recent Joins</h2>
      <div class="yleaderrcon">
        <div
          class="yleaderjoins flex jus"
          v-for="(item, i) in joinlist"
          :key="i"
        >
          <div class="yleaderjoleft">
            <img
              :class="
                item.twitter.profileImageUrl == null ? 'yleaderjolnone' : ''
              "
              :src="item.twitter.profileImageUrl"
              alt=""
            />
          </div>
          <div class="yleaderjoright">
            <div class="yleaderjrt flex jus">
              <div>{{ item.displayName }}</div>
              <span>5 minutes age</span>
            </div>
            <div class="yleaderjtb">
              Invited by {{ item.referrerDisplayName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let leadlist = ref([
  {
    rank: 1,
    displayName: "SQUAD-5QM96",
    points: 61708.81488753732,
    referrerDisplayName: "USE_CODE-8M2N5",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 2,
    displayName: "CODE-HLCDF",
    points: 23738.328184466598,
    referrerDisplayName: null,
    twitter: { profileImageUrl: null },
  },
  {
    rank: 3,
    displayName: "inqy-FFJAV",
    points: 19233.53955274682,
    referrerDisplayName: "@hamzah_eth",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 4,
    displayName: "USE_CODE-8M2N5",
    points: 14720.652135509947,
    referrerDisplayName: "SQUAD-5QM96",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 5,
    displayName: "SQUAD-5QM96",
    points: 61708.81488753732,
    referrerDisplayName: "USE_CODE-8M2N5",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 6,
    displayName: "CODE-HLCDF",
    points: 23738.328184466598,
    referrerDisplayName: null,
    twitter: { profileImageUrl: null },
  },
  {
    rank: 7,
    displayName: "inqy-FFJAV",
    points: 19233.53955274682,
    referrerDisplayName: "@hamzah_eth",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 8,
    displayName: "USE_CODE-8M2N5",
    points: 14720.652135509947,
    referrerDisplayName: "SQUAD-5QM96",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 9,
    displayName: "SQUAD-5QM96",
    points: 61708.81488753732,
    referrerDisplayName: "USE_CODE-8M2N5",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 10,
    displayName: "CODE-HLCDF",
    points: 23738.328184466598,
    referrerDisplayName: null,
    twitter: { profileImageUrl: null },
  },
  {
    rank: 11,
    displayName: "inqy-FFJAV",
    points: 19233.53955274682,
    referrerDisplayName: "@hamzah_eth",
    twitter: { profileImageUrl: null },
  },
  {
    rank: 12,
    displayName: "USE_CODE-8M2N5",
    points: 14720.652135509947,
    referrerDisplayName: "SQUAD-5QM96",
    twitter: {
      profileImageUrl: null,
    },
  },
  {
    displayName: "@sgsand1",
    points: 7637.817621408086,
    rank: 13,
    referrerDisplayName: "@GrantlandOG",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1605732108235849728/2PQG7Lea_normal.jpg",
    },
  },
]);
let joinlist = ref([
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl: null,
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
]);
let huanlist = ref([
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
  {
    displayName: "@Baby_Flattershy",
    referrerDisplayName: "@lil_guziii",
    registeredOn: "2023-11-21T08:26:47.859Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1540780534741159936/23IMrf6G_normal.jpg",
    },
  },
]);
let joinlistt = ref([
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl: null,
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
  {
    displayName: "@KangjunLin",
    referrerDisplayName: "@tanwanyouxi",
    registeredOn: "2023-11-21T08:26:49.077Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1693235790837682176/kJJRDVlm_normal.jpg",
    },
  },
]);
let thrlist = ref([
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
  {
    displayName: "@Allen71328859",
    referrerDisplayName: "NINO",
    registeredOn: "2023-11-22T01:41:44.792Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1722889433970802688/UGLo9ext_normal.jpg",
    },
  },
]);
let fourlist = ref([
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
  {
    displayName: "@ilmeaalim",
    referrerDisplayName: "@mooncat2878",
    registeredOn: "2023-11-22T01:41:37.079Z",
    twitter: {
      profileImageUrl:
        "https://pbs.twimg.com/profile_images/1589495465808199683/HI99uMpx_normal.jpg",
    },
  },
]);
let valqh = ref(0);
onMounted(() => {
  let i = 0;
  setInterval(() => {
    if (i > 3) {
      i = 0;
    }
    i++;
    if (i == 1) {
      joinlist.value = huanlist.value;
    } else if (i == 2) {
      joinlist.value = joinlistt.value;
    } else if (i == 3) {
      joinlist.value = thrlist.value;
    } else if (i == 4) {
      joinlist.value = fourlist.value;
    }
  }, 3000);
});
</script>

<style scoped>
.yleader {
  width: 100%;
  padding: 8.5rem 7.5rem 3.5rem 7.5rem;
  box-sizing: border-box;
  background: rgb(17, 11, 11);
  align-items: center;
}
.yleaderlcttiao {
  align-items: center;
}
.yleaderlctty {
  padding: 0.5rem 1rem 0.5rem 0;
  box-sizing: border-box;
}
.yleaderlctty > span {
  font-family: "GT Pressura Bold";
  background: rgb(17 20 12);
  text-align: center;
  font-size: 1.5rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  padding: 0.5rem 1rem;
  display: block;
  color: rgb(179 187 202);
}
.yleaderlcttt {
  font-family: "GT Pressura Bold";
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  color: rgb(179 187 202);
}
.yleaderlcttt > div:nth-child(1) {
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 50%;
  background: rgb(179 187 202);
}
.yleaderlcttt > div:nth-child(1) > img {
  width: 100%;
  height: 100%;
}
.yleaderlcttthr {
  font-family: "GT Pressura Bold";
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  color: rgb(179 187 202);
}
.yleaderlcttf {
  font-family: "GT Pressura Bold";
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  color: rgb(179 187 202);
}
.ymainhy .yleader {
  background: rgb(235, 235, 235);
}
.yleaderleft {
  width: 78.4047%;
  padding-left: 2rem;
  box-sizing: border-box;
}
.yleaderltop {
  width: 100%;
  align-items: center;
  color: #fff;
}
.ymainhy .yleaderltop {
  color: rgb(56 59 64) !important;
}
.yleaderltop > h1 {
  font-family: "Vectrex";
  font-size: 2.5rem;
  line-height: 130%;
  letter-spacing: 0;
  font-weight: 600;
}
.yleaderltop > span {
  font-family: "GT Pressura Mono";
  font-size: 1rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
}
.yleaderlcon {
  width: 100%;
  max-height: 70vh;
  margin-top: 2rem;
}
.yleaderlctxt {
  width: 100%;
  height: auto;
}
.yleaderlct {
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.yleaderlcb {
  width: 100%;
  border-top: 1px solid rgb(117 131 93);
  border-bottom: 1px solid rgb(117 131 93);
}
.ymainhy .yleaderlcb > div {
  color: rgb(105 111 122);
}
.ymainhy .yleaderlcttiao > div {
  color: rgb(105 111 122);
}
.ymainhy .yleaderlctty > span {
  color: rgb(105 111 122);
  background: #fff;
}
.yleaderlcb > div {
  font-family: "GT Pressura Bold";
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 1.6px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: rgb(179 187 202);
  box-sizing: border-box;
}
.yleadercenterg {
  height: 70vh;
  width: 1px;
  border-left: 1px solid rgb(179 187 202);
}
.yleaderright {
  width: 15.59454%;
}
.yleaderright > h2 {
  font-family: "Vectrex";
  height: 3.375rem;
  margin: 0.5rem 0 1.375rem;
  font-size: 1.5rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  color: rgb(179 187 202);
}
.ymainhy .yleaderright > h2 {
  color: rgb(105 111 122);
}
.ymainhy .yleaderjrt > div {
  color: rgb(17, 11, 11);
}
.ymainhy .yleaderjrt > span {
  color: rgb(105 111 122);
}
.ymainhy .yleaderjtb {
  color: rgb(105 111 122);
}
.ymainhy .yleaderlcttt > div:nth-child(1) {
  background: rgb(105 111 122);
}
.ymainhy .yleaderjoleft {
  background: rgb(105 111 122);
}
.yleaderrcon {
  width: 100%;
  max-height: 60vh;
  border-top: 1px solid rgb(179 187 202);
  padding-top: 1.5rem;
  box-sizing: border-box;
  overflow-y: scroll;
}
.yleaderjoins {
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  animation-duration: 3s;
  animation-name: enter-fade;
  animation-iteration-count: infinite;
  opacity: 1;
}
@keyframes enter-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.yleaderjoright {
  width: 70%;
}
.yleaderjrt {
  width: 100%;
  align-items: center;
}
.yleaderjrt > div {
  font-family: "GT Pressura Bold";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
  font-size: 1rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 600;
  color: white;
}
.yleaderjrt > span {
  font-family: "GT Pressura Mono";
  font-size: 0.8125rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  color: rgb(179 187 202);
}
.yleaderjtb {
  font-family: "GT Pressura Mono";
  font-size: 0.8125rem;
  line-height: 160%;
  letter-spacing: 0;
  font-weight: 400;
  color: rgb(179 187 202);
}
.yleaderjoleft {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  background: rgb(179 187 202);
}
.yleaderjolnone {
  display: none;
}
@media (max-width: 1250px) {
  .yleaderlcon {
    margin-top: 1rem;
  }
  .yleader {
    padding: 8.5rem 1rem 3.5rem;
    display: block;
  }
  .yleaderltop {
    display: block;
    text-align: center;
  }
  .yleaderleft {
    padding: 0;
    width: 100%;
  }
  .yleaderlctxt {
    width: 100%;
  }
  .yleaderlct {
    width: 100%;
  }
  .yleadercenterg {
    display: none;
  }
  .yleaderlcttt {
    font-size: 0.75rem;
  }
  .yleaderlcttthr {
    width: 27.2747% !important;
    font-size: 0.75rem;
    padding: 0.5rem 0;
  }
  .yleaderlcb div {
    font-size: 0.85rem;
    padding: 0.5rem 0;
  }
  .yleaderlcb div:nth-child(3) {
    width: 27.2747% !important;
  }
  .yleaderlctty > span {
    padding: 0.25rem 0;
  }
  .yleaderlctty {
    padding: 0.5rem 0;
  }
  .yleaderlcttt {
    width: 40% !important;
    padding: 0.25rem;
    gap: 0.5rem;
  }
  .yleaderlcttt > div:nth-child(1) {
    width: 1rem;
    height: 1rem;
  }
  .yleaderlcttf {
    font-size: 0.75rem;
    padding: 0.5rem 0;
  }
  .yleaderlcb > div:nth-child(2) {
    width: 40% !important;
  }
  .yleaderright {
    width: 100%;
  }
  .yleaderright > h2 {
    height: 2rem;
  }
  .yleaderjoins {
    width: 80%;
    margin: 0 auto 1rem;
  }
}
</style>
