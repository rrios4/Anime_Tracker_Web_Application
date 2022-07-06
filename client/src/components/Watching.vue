<template>
  <div
    class="flex flex-row p-2 "
    v-for="watching in watchingList"
    v-bind:item="watching"
    v-bind:key="watching._id"
  >
    <div class="bg-gray-700 flex flex-row shadow-xl rounded-xl p-4">
      <div class="flex flex-col justify-center rounded-xl overflow-auto">
        <img
          class="shadow rounded-xl"
          v-bind:src="watching.image_url"
          alt=""
          width="170"
        />
      </div>
      <div class="flex flex-col justify-center w-72">
        <div class="flex justify-end pr-4">
          <form @submit.prevent="deleteAnime(watching._id)" action="" method="delete">
            <button @click="reRender" class="border border-red-400 bg-red-400 text-white rounded-md m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline h-8 w-8">x</button>            
          </form>
        </div>
        <h1 class="pt-4 font-bold text-lg px-2">{{ watching.title }}</h1>
        <div class="pb-3">
          <h1>{{ watching.type }}</h1>
        </div>
        <div class="flex justify-center pb-1">
          <h1 class="bg-indigo-600 p-1 rounded-xl shadow-md w-32">
            {{ watching.epcounter }}/{{ watching.episodes }}
          </h1>
        </div>
        <div class="flex flex-row justify-center">
          <form @submit.prevent="decreaseCounter(watching._id, watching.epcounter)" action="">
            
          <button @click="reRender"
            v-if="!watching.epcounter <= watching.episodes"
            class="border border-red-400 bg-red-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-500 focus:outline-none focus:shadow-outline w-10">
            -</button>
          </form>
          <form @submit.prevent="increaseCounter(watching._id, watching.epcounter, watching.episodes)" action="">
          <button @click="reRender"
            v-if="!watching.epcounter <= watching.episodes"
            class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline w-10"
          >
            +
          </button>
          </form>
        </div>
        <div
          v-if="watching.epcounter === watching.episodes"
          class="flex justify-center"
        >
          <button
            class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline h-10 w-44"
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import WatchingService from "../services/WatchingService";
import Swal from 'sweetalert2'

export default {
  name: "Watching",
  data() {
    return {
      watchingList: [],
      error: "",
      mongoId: '',
      selected: '',
      
    };
  },
  // It gets the list of anime the user has saved as watching in my mongodb database
  async created() {
    try {
      this.watchingList = await WatchingService.getWatching();
      console.log(this.watchingList);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    //Method is used to reload page when user updates something in the backend to reflect chnages in the font end
  async reRender(){
      //location.reload()
      this.$forceUpdate();
      console.log(this.watchingList)
      
    },
    //Method that deletes a anime from the watching list by passing the id to the url and using axios to make a delete request
    async deleteAnime(id){
      const url = `${process.env.VUE_APP_BACKEND_URL}/api/user/${id}`;
      await Axios.delete(url, {headers: {token: localStorage.getItem("token")}})
        .then((res) => {
          if(res.status === 200){
            Swal.fire({
              title: 'Success!',
              text: 'Anime has been deleted from your list',
              icon: 'success',
              confirmButtonText: 'Continue'
            })
            
          }
        },
        (err) => {
          console.log(err.response);
        }
        )
      this.watchingList = await  WatchingService.getWatching();
    },
    // Method used to lower the episode counter that the person is in and it passes id to identify which object to update
    async decreaseCounter(id, epcounter){
      if(epcounter === '0') return console.log('Cannot go negative!')
      let subtraction = parseInt(epcounter) - 1;
      const json = {
        epcounter: `${subtraction}`
      }
      const patch_url = `${process.env.VUE_APP_BACKEND_URL}/api/user/${id}`
      await Axios.put(patch_url, json);
      this.watchingList = await WatchingService.getWatching();

    },
    // Method used to higher the episode counter that the person is in and it passes id to identify which object to update
    async increaseCounter(id, epcounter, episodes){
      if(epcounter === episodes) return console.log('Cannot go higher you have completed the show!')
      //I parseInt the epcounter because it kept adding 1 to the end of what ever was the number and once I changed it to an int it worked as intedted.
      let sum = parseInt(epcounter) + 1;
      const json = {
        epcounter: `${sum}`
      }
      const url = `${process.env.VUE_APP_BACKEND_URL}/api/user/increase/${id}`;
      await Axios.put(url,json);
      this.watchingList = await WatchingService.getWatching();

    }
  },
};
</script>

<style></style>
