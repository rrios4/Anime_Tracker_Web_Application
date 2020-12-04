<template>
  <div id="home_container" class="">
    <div
      id="welcome_section"
      class="flex flex-col justify-center py-64 shadow-lg"
    >
      <div class="">
        <h1 class="pb-4 font-extrabold text-4xl">Welcome!</h1>
        <h4 class=" pb-6 text-xl font-light">
          Tracking your anime has not been as intuitive as this! Dive into the
          world of anime while keeping track where you left off.
        </h4>
        <div class="w-full text-center mx-auto py-0" v-if="token === null">
          <router-link to="/login">
            <button
              class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Begin
            </button></router-link
          >
        </div>
        <div v-if="token">
          <router-link to="/mylist">
            <button
              class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              My List
            </button></router-link
          >
        </div>
      </div>
    </div>
    <div id="feature_section" class="flex justify-center p-12 space-x-16">
      <div
        id="card_1"
        class="flex flex-col justify-center bg-gray-700 p-12 rounded-3xl shadow-md w-1/4"
      >
        <div class="flex pb-10 justify-center">
          <img src="../assets/reminders.png" alt="" width="120" />
        </div>
        <div>
          <h1 class="font-extrabold text-2xl pb-2">Tracking</h1>
          <h2>
            You will be able to keep track of you anime in a intuitive way
          </h2>
        </div>
      </div>
      <div
        id="card_2"
        class="flex flex-col justify-center bg-gray-700 p-12 rounded-3xl shadow-md w-1/4"
      >
        <div class="flex pb-10 justify-center">
          <img src="../assets/account.png" alt="" width="150" />
        </div>
        <div>
          <h1 class="font-extrabold text-2xl pb-2">Authentication</h1>
          <h2>
            Using JWT, HAPI JOI and Bcrypt dependecies a user can create an
            account to use my service securely
          </h2>
        </div>
      </div>
      <div
        id="card_3"
        class="flex flex-col justify-center bg-gray-700 p-12 rounded-3xl shadow-md w-1/4"
      >
        <div class="flex pb-10 justify-center">
          <img src="../assets/github.png" alt="" width="120" />
        </div>
        <div>
          <h1 class="font-extrabold text-2xl pb-2">Github</h1>
          <h2 class="">
            This Vue project has been uploaded to my Github account to view the
            code behind the web application
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a44d0206-0e67-40ce-9420-e9b21ed021fa/dazp6if-ecbbf55a-59c4-46e0-8a3f-703205a78aec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hNDRkMDIwNi0wZTY3LTQwY2UtOTQyMC1lOWIyMWVkMDIxZmEvZGF6cDZpZi1lY2JiZjU1YS01OWM0LTQ2ZTAtOGEzZi03MDMyMDVhNzhhZWMucG5nIn1dXX0.qiNGn5a7GzozF3ZJvtThsrq8IrMOLc2aNQKiTVabeq4",
      token: "",
      error: "",
    };
  },
  methods: {},
  async created() {
    try {
      this.token = localStorage.getItem("token");
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>
<style>
#card_1 {
  background-color: #424242;
}
#card_2 {
  background-color: #424242;
}
#card_3 {
  background-color: #424242;
}
#home_container {
  background-color: #222222;
}
#welcome_section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url("https://wallpapercave.com/wp/wp5104277.jpg");
}
/*
.welcome_section{
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a44d0206-0e67-40ce-9420-e9b21ed021fa/dazp6if-ecbbf55a-59c4-46e0-8a3f-703205a78aec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hNDRkMDIwNi0wZTY3LTQwY2UtOTQyMC1lOWIyMWVkMDIxZmEvZGF6cDZpZi1lY2JiZjU1YS01OWM0LTQ2ZTAtOGEzZi03MDMyMDVhNzhhZWMucG5nIn1dXX0.qiNGn5a7GzozF3ZJvtThsrq8IrMOLc2aNQKiTVabeq4');
  background-size: cover;
  padding-top: 15rem;
  padding-bottom: 15rem;
  
}
#welcome-text{
  background-color: none;
}
#welcome-text h1{
  padding-bottom: 1rem;
}
#welcome-text h4{
  padding-bottom: 1rem;
}
#welcome-text button{
  border: none;
  border-radius: 10px;
  color: white;
  background: rgb(31, 28, 28);
  padding: 9px 24px;
}
*/
</style>
