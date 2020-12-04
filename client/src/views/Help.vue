<template>
  <div id="help" class="flex flex-col p-10 justify-center ">
    <div class="flex justify-evenly bg-gray-700 rounded-xl rounded-b-none">
      <div class="flex flex-grow-0 flex-col justify-center max-w-screen-xl">
        <h1 class="text-3xl font-extrabold pb-5">How do I begin too use the service?</h1>
        <h1 class="flex font-extralight text-lg items-center max-w-screen-md">In order to begin to use the service you must be in the home page as shown in the image and click the purple button labeled "Begin". It will redirect you to the login in screen to insert you credentials for your account. </h1>
      </div>
      <div class="flex flex-initial p-10 max-w-screen-xl">
        <img class="rounded-xl shadow-md" src="../assets/help/home.jpg" alt="" width="900">
      </div> 
    </div>

    <div class="flex justify-evenly bg-gray-700 ">
      <div class="flex flex-initial p-8 max-w-screen-xl" >
        <img class="rounded-xl shadow-md" src="../assets/help/login.jpg" alt="" width="900">
      </div>
      <div class="flex flex-grow-0 flex-col justify-center max-w-screen-xl pr-12">
          <h1 class="text-3xl font-extrabold pb-5 max-w-screen-md">How do I create and account?</h1>
          <h1 class="flex font-extralight text-lg items-center max-w-screen-md">Once you are in the login page right under the password field there is green text that says, "Register Account". Once you click on it it will take you to the registration page where you can create you account.</h1>
      </div>
      
    </div>

    <div class="flex justify-evenly bg-gray-700 ">
      <div class="flex flex-grow-0 flex-col justify-center max-w-screen-xl" >
        <h1 class="text-3xl font-extrabold pb-5 max-w-screen-md">What is the date field in Registration?</h1>
        <h1 class="flex font-extralight text-lg max-w-screen-md">The date input field is supposed to be the date of birth of the user creating the account and they can click the calender icon on the right of the field to select a date. </h1>
      </div>
      <div class="flex flex-initial p-10 max-w-screen-xl">
        <img class="rounded-xl shadow-md" src="../assets/help/register.jpg" alt="" width="900">
      </div>
    </div>

    <div class="flex justify-evenly bg-gray-700">
      <div class="flex flex-initial p-10 max-w-screen-xl">
        <img class="rounded-xl shadow-md" src="../assets/help/anime1.jpg" alt="" width="900">
      </div>
      <div class="flex flex-grow-0 flex-col justify-center pl-12 pr-12 max-w-screen-xl">
        <h1 class="text-3xl font-extrabold pb-5">How do I add anime to my watchlist?</h1>
        <h1 class="flex font-extralight text-lg max-w-screen-xl">On the navigation bar at the top of the web site click "Anime" and it will redirect you to the page showed in the image. Once you are in the anime page in the text field that is pointed with the red arrow type the anime you want to look for. When you click search it will bring up a search result of the related titles and once you find it click "Add To Watching. Congratulations the anime is now on your watching list."</h1>
      </div>
    </div>

    <div class="flex justify-evenly bg-gray-700 pb-10 rounded-xl rounded-t-none">
      <div class="flex flex-grow-0 flex-col justify-center max-w-screen-xl">
        <h1 class="text-3xl font-extrabold max-w-screen-md pb-5">How do I delete an anime from my list of watching anime?</h1>
        <h1 class="flex font-extralight text-lg max-w-screen-md">Once the anime is in your list you might want to delete it. That can be easily done by clicking the X icon at the right side of each anime card to delete them.</h1>
      </div>
      <div class="max-w-screen-xl">
        <img class="rounded-xl shadow-xl" src="../assets/help/delete.jpg" alt="" width="900">
      </div>
    </div>


  </div>
</template>

<script>
export default {};
</script>

<style>
#help {
  background-color: #222222;
}
</style>
