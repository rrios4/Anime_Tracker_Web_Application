<template>
  <header class="sticky max-h-screen w-full shadow-2xl mt-0 z-10 top-0">
    <nav
      id="nav"
      class="flex flex-row space-x-4 items-center justify-center py-0"
    >
      <div id="logo" class="flex p-0 h-0 items-center">
        <img src="../assets/logo2.png" width="40" height="38" />
      </div>
      <div id="nav_list" class="flex-1 py-0">
        <ul class="flex flex-row space-x-2">
          <li
            class="px-2 py-1 rounded-md text-md font-medium text-white hover:bg-gray-700"
          >
            <router-link to="/">Home</router-link>
          </li>
          <li
            class="px-2 py-1 rounded-md text-md font-medium text-white hover:bg-gray-700"
          >
            <router-link to="/anime">Anime</router-link>
          </li>
          <li
            class="px-2 py-1 rounded-md text-md font-medium text-white hover:bg-gray-700"
          >
            <router-link to="/help">Help</router-link>
          </li>
        </ul>
      </div>

      <div
        id="profile_section"
        class="h-0 flex flex-row items-center space-x-4 py-0"
      >
        <div>
          <p @click="alreadyloggedin">
            <router-link
              to="/login"
              class="px-2 py-1 rounded-md text-md font-medium text-white hover:bg-gray-700"
              >Login</router-link
            >
          </p>
        </div>
        <div >
          <p id="username" @click="myprofileError">
            <router-link to="/mylist">My Profile</router-link>
          </p>
        </div>
        <img
          src="../assets/default_profile_pic.png"
          id="profile_icon"
          width="42"
          height="44"
          style="border-radius: 50%;"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  name: "Navbar",
  data() {
    return {
      username: "",
      token: ''
    };
  },
  async mounted() {
    //On load it gets the users info by sending a request to my API
    await axios
      .get(`${process.env.VUE_APP_BACKEND_URL}/api/user/userinfo`, {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.username = res.data.user.username;
      });
    this.init() 
    this.token = localStorage.getItem("token"); 
  },
  props: {},
  methods: {
    myprofileError(){
      try{
        if(localStorage.getItem('token') === null) {
           Swal.fire({
              title: 'Login!',
              text: 'You need to login ',
              icon: 'error',
              confirmButtonText: 'Continue'
            })
        }
      }catch(err){
        console.log(err)
      }
    },
    alreadyloggedin(){
      try{
        if(localStorage.getItem('token')) {
           Swal.fire({
              title: 'Already Logged In!',
              text: 'No need to go to that page you are already logged in ',
              icon: 'error',
              confirmButtonText: 'Continue'
            })
            this.$router.push('/mylist')
        }
      }catch(err){
        console.log(err)
      }      
    }
  },
};
</script>

<style scoped>
@import "../css/tailwind.css";
nav {
  background-color: #3f3c3c;
}
/*
#navbar{
  color: white;
  background: #6729da;
  font-family: Arial, Helvetica, sans-serif;
}
#nav{
  display: flex;
  padding: 10px;
  align-items: center;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;

}
li {
  display: inline-block;
  margin: 0 10px;
  
}
a {
  text-decoration: none;
  letter-spacing: 1px;

}
#logo{
  display:flex;
  flex: 0 1 0;
  padding-right: 1rem;
  padding-left: 12px;
}
#nav_list{
  display: flex;
  flex: 2 1 0;
  font-size: 14px;
  
}
#search_section{
  display: flex;
  flex: 4 1 0;
  text-align: center;
}
#profile_section{
  display: flex;
  align-items: center;
  flex: 0 1 0;

}
#profile_section p{
  padding-right: 1rem;
  padding-left: 1rem;
}
#navSearchButton{
  border: none;
  border-radius: 14px;
  color: white;
  background-color: black; 
  padding: 9px 24px;
  
}
#navSearch{
  border: none;
  border-radius: 14px;
  text-align: left;
	margin: 0;
  padding: 10px;
  width: 400px;
  height: 28px;
}*/
</style>
