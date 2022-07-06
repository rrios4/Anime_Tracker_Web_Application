<template>
  <div
    id="register"
    class=" flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-5"
  >
    <div class="max-w-md w-screen space-y-8">
      <div>
        <img
          class="mx-auto h-20 w-auto py-5"
          src="../../assets/logo2.png"
          alt="Workflow"
        />
        <img
          class="mx-auto h-12 w-auto"
          src="../../assets/animebinx2.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold ">
          Create your account
        </h2>
      </div>
      <form @submit.prevent="register" class="mt-8 space-y-6" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="firstname" class="sr-only">First Name</label>
            <input
              v-model="firstName"
              id="firstName"
              name="firstname"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div>
            <label for="lastname" class="sr-only">Last Name</label>
            <input
              v-model="lastName"
              id="lastName"
              name="lastname"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              v-model="username"
              id="username"
              name="username"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="dob" class="sr-only">dob</label>
            <input
              v-model="dob"
              id="dob"
              name="dob"
              type="date"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Date of Birth"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="email"
              id="email-address"
              name="email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  name: "Register",
  components:{
    
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      dob: "",
    };
  },
  props: {},
  methods: {
    async register() {
      const userReg = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          username: this.username,
          password: this.password,
          dob: this.dob,
      }
     await axios.post(`${process.env.VUE_APP_BACKEND_URL}/api/user/register`, userReg)
      .then((res) => {
        if(res.status === 200){
            Swal.fire({
              title: 'Success!',
              text: 'Congratulations your account is created...',
              icon: 'success',
              confirmButtonText: 'Continue'
            })
        }
        else if(res.status === 400){
            Swal.fire({
              title: 'Error!',
              text: 'Email Already Exist!',
              icon: 'error',
              confirmButtonText: 'Continue'
            })
        }
      },(err) => {
          console.log(err.response);
          Swal.fire({
              title: 'Error!',
              text: `${err.response}`,
              icon: 'error',
              confirmButtonText: 'Continue'
            })
      })


      Swal.fire({
        title: 'Success!',
        text: 'Account has been created!',
        icon: 'success',
        confirmButtonText: 'Continue'
        })

      this.$router.push("/login");
    },
  },
};
</script>

<style>
#register {
  background-color: #222222;
}
</style>
