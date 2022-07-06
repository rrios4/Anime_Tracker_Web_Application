<template>
  <div
    id="anime_container"
    class="flex flex-grow flex-wrap flex-col p-10  w-full"
  >
    <div class="flex flex-col ">
      <h1 class="text-3xl font-extrabold">Search For Anime</h1>
      <form
        @submit.prevent="queryAnime"
        class="mt-8 space-y-6"
        action="#"
        method="GET"
      >
        <div class="flex flex-col rounded-xl shadow-sm">
          <input
            v-model="query"
            id="search"
            name="search"
            type="search"
            required
            class="text-center appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder=""
          />
          <div class="pt-3">
            <h1>Suggested Anime:</h1>
            <h1>Naruto, Demon Slayer, Bleach, and Attack on Titan</h1>
          </div>
        </div>
        <div class="flex flex-col">
          <button
            type="submit"
            class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
    <div
      class="flex flex-grow flex-wrap px-2 justify-evenly rounded-2xl pt-8 space-y-1"
    >
      <div
        class="flex pb-20 h-80 "
        v-for="(anime, index) in results"
        v-bind:item="anime"
        v-bind:key="'ani' + index"
      >
        <div class="bg-gray-700 flex flex-row rounded-xl p-4 h-80">
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
              <h1 class=" bg-indigo-600 p-1 rounded-xl shadow-md w-32">
                Episodes: {{ anime.episodes }}
              </h1>
            </div>
            <div class="">
              <form @submit.prevent="addToWatching(anime.mal_id)" action="#" method="POST">
                <button
                  v-if="token"
                  class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-600 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline w-44"
                >
                  Add to Watching
                </button>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import JinkaAPI from "../services/JinkaAPI";
import Swal from 'sweetalert2'

export default {
  name: "Anime",
  components: {},
  data() {
    return {
      results: [],
      query: "",
      error: "",
      token: "",
      capData: [],
      position: "",
      mal_id: "",
      resultById: '',
    };
  },
  props: {

  },
  methods: {
    async queryAnime() {
      const input = this.query;
      this.token = localStorage.getItem("token");
      this.results = await JinkaAPI.getAnime(input);
      console.log(this.results);
    },
    async addToWatching(id) {
      console.log(id);
      this.token = localStorage.getItem("token");
      const resultById = await JinkaAPI.getAnimeById(id);
      console.log(resultById);
      await Axios.post(`${process.env.VUE_APP_BACKEND_URL}/api/user/addtowatching`, resultById, {headers: { token : localStorage.getItem("token")}})
        .then((res) => {
          if(res.status === 200 ){
            Swal.fire({
              title: 'Success!',
              text: 'Anime has been added to your watching list',
              icon: 'success',
              confirmButtonText: 'Continue'
            })
          }
        }, 
        (err) =>{
          console.log(err.response);
        }
        )
    },
  },
};
</script>

<style>
#anime_container {
  background-color: #222222;
}
</style>
