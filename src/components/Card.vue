<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }">
        <v-card>
          <v-img class="white--text" height="200px" :src="card.src">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{card.title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">{{card.lastTime}}</span>
              <br />
              <span>{{card.job}}</span>
              <!-- <br /> -->
              <!-- <span>{{card.}}</span> -->
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleFavorite(card)">
              <v-icon :color="id.indexOf(card.id) === -1 ? 'black' : 'red'">favorite</v-icon>
            </v-btn>
            <v-btn icon @click="sharedCard(card)">
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    id: [],
    cards: [
      {
        id: 1,
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        id: 2,
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        id: 3,
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ]
  }),
  mounted() {
    this.id = this._.cloneDeep(this.$store.state.favorite);
  },
  methods: {
    sharedCard(card) {
      console.log(card);
    },
    toggleFavorite(card) {
      if (this._.includes(this.id, card.id)) {
        this.id = this._.without(this.id, card.id);
      } else {
        this.id.push(card.id);
      }
      this.$store.dispatch({
        type: "toggleFavorite",
        id: card.id
      });
    }
  }
};
</script>

<style>
</style>
