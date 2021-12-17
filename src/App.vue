<template>
  <div>
    <b-navbar class="header" type="dark" variant="secondary" fixed="top">
      <router-link style="text-decoration: none; color: #42b983; padding: 10px;" to="/">
        <img src="./assets/BLogo.png" height="30" width="30" alt="Kitten">
      </router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/news">Nieuws</router-link>
      <router-link to="/images">Afbeeldingen</router-link>
      <router-link to="/about">Overs ons</router-link>
      <router-link to="/contact">Contact</router-link>
    </b-navbar>

    <div class="mt-5">
      <router-view></router-view>
    </div>
  </div>

</template>