<template>
  <div id="mylist" class="flex flex-row pl-12 pt-5 pr-12 pb-10">
    <div class="flex-none  flex-col pt-14 pl-12 pr-12">
      <div class="flex flex-col">
        <div class="flex justify-center">
          <img src="../../assets/circularprogressbar.png" alt="" width="160" />
        </div>
        <h1 class="font-light text-2xl pt-5 pb-16">Current Progress</h1>
      </div>
      <div class="text-xl space-y-4">
        <p class="bg-gray-600 p-2 rounded-xl">Watching</p> 
        <!--<p class="hover:bg-gray-600 p-2 rounded-xl">Plan To Watch</p> -->
        <!--<p class="hover:bg-gray-600 p-2 rounded-xl">On Hold</p> -->
        <p class="hover:bg-gray-600 p-2 rounded-xl">Completed</p>
        <!--<p class="hover:bg-gray-600 p-2 rounded-xl">Dropped</p> -->
        <!--<p class="hover:bg-gray-600 p-2 rounded-xl">All</p> -->
      </div>
    </div>
    <div class="flex flex-grow flex-wrap flex-col pt-10  w-full">
      <div class="flex flex-row">
        <div class="flex flex-row p-4">
          <div class="flex-initial">
            <img
              class="rounded-full"
              src="../../assets/default_profile_pic.png"
              alt=""
              width="150"
            />
          </div>
          <div class="flex flex-col justify-center px-10">
            <h1 class="text-4xl font-bold text-left">{{ username }}</h1>
            <h1 class="text-md ">Member Since: {{ joined }}</h1>
          </div>
          <div class="flex-grow justify-end">
            <button
              @click="logout"
              class="h-1/4 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-row pl-2 py-5">
        <h1 class="font-thin text-xl">Anime Titles</h1>
      </div>
      <div class="flex flex-wrap px-1 justify-start rounded-2xl">
        <Watching />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Watching from "../../components/Watching.vue";
import Swal from 'sweetalert2'

export default {
  name: "MyList",
  components: {
    Watching,
  },
  data() {
    return {
      username: "",
      joined: "",
      updatedUsername: '',
      joi: ''
    };
  },
  //when the page is load it makes sure to check of the user has a token and if not it will push them back to login vue
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    /*const response = await axios.get('http://localhost:5000/api/users', {
        headers: {
          Authorization: 'Bearer' + localStorage.getItem('token')
        }
    });*/
    //console.log(response)
  },
  async mounted() {
    await axios
      .get(`${process.env.VUE_APP_BACKEND_URL}/api/user/userinfo`, {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        (this.username = res.data.user.username),
          (this.joined = res.data.user.joined);
      });
  },
  methods: {
    logout() {
      localStorage.clear();
        Swal.fire({
          title: 'Success!',
          text: 'Good bye you are now logged out!',
          icon: 'success',
          confirmButtonText: 'Continue'
        })
      this.$router.push("/login");
      location.reload();
    },
    increaseCounter(){

    },
    decreaseCounter(){

    },
    updateNav: function(){
      
      this.$emit('updateusername', this.username)
    }

  },
  
};
</script>

<style>
#mylist {
  background-color: #222222;
}
</style>
