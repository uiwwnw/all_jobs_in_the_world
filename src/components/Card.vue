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
import * as _ from "lodash";

export default {
  data: () => ({
    id: [],
    cards: [
      {
        id: 1,
        title: "네이버",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        id: 2,
        title: "카카오톡",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        id: 3,
        title: "넥슨",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ]// TODO DB
  }),
  mounted() {
    this.id = _.cloneDeep(this.$store.state.favorite);
  },
  methods: {
    sharedCard(card) {
      console.log(card);
    },
    toggleFavorite(card) {
      if (_.includes(this.id, card.id)) {
        this.id = _.without(this.id, card.id);
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
