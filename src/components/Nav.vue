<template>
  <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" fixed dark shift>
    <v-btn dark>
      <span>세모채</span>
      <v-icon>receipt</v-icon>
    </v-btn>

    <v-btn dark>
      <span>이력서</span>
      <v-icon>person</v-icon>
    </v-btn>

    <v-btn dark>
      <span>지원현황</span>
      <v-icon>history</v-icon>
    </v-btn>

    <v-btn dark>
      <span>설정</span>
      <v-icon>settings</v-icon>
    </v-btn>

    
  </v-bottom-nav>
</template>

<script lang="ts">
export default {
  data: () => ({
    bottomNav: 0
  }),
  created() {
    const page = this.$route.path.replace('/', '');
    const number = this.$store.state.pages.indexOf(this.$store.state.pageName);
    this.bottomNav = number;
  },
  watch: {
    bottomNav(n: number): any {
      this.$store.dispatch({
        type: "paging",
        number: n
      });
    }
  },
  computed: {
    color(): [string, undefined] {
      switch (this.bottomNav) {
        default:
          return undefined;
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
      }
    }
  }
};
</script>

