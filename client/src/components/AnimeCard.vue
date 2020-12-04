<template>
  <div
    v-for="(anime, index) in results"
    v-bind:item="anime"
    v-bind:key="index"
    class="flex flex-row w-96 bg-white"
  >
    <div class="bg-gray-700 flex flex-row rounded-xl p-4 ">
      <div class="flex flex-col justify-center rounded-xl overflow-auto">
        <img
          class="shadow rounded-xl"
          v-bind:src="anime.image_url"
          alt=""
          width="170"
        />
      </div>
      <div class="flex flex-col justify-center w-72">
        <h1 class="pt-4 font-bold text-lg px-3">{{ anime.title }}</h1>
        <div class="pb-3">
          <h1>{{ anime.type }}</h1>
        </div>
        <div class="flex justify-center pb-1">
          <h1 class=" p-1 rounded-xl  w-32">Episodes: {{ anime.episodes }}</h1>
        </div>
        <div>
          <button
            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-600 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline w-44"
          >
            Add to Watching
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JinkaAPI from "../services/JinkaAPI";

export default {
  name: "AnimeCard",
  data() {
    return {
      results: [],
      query: "",
      error: "",
    };
  },
  methods: {
    async queryAnime() {
      const input = this.query;
      this.results = await JinkaAPI.getAnime(input);
    },
  },
};
</script>

<style></style>
