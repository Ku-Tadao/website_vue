<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Contact">Contact</router-link>
    <router-link to="/Afbeeldingen">Afbeeldingen</router-link>
    <router-link to="/Nieuws">Nieuws</router-link>
    <router-link to="/Overons">Over Ons</router-link>
    <router-link to="/Medewerkers">Medewerkers</router-link>
    <a href="#">Help</a>
    <a href="#">onder</a>
    <a href="#">aan</a>
</div>
</template>

<script>
export default {
    name:'Footer'
}
</script>
<style>
.nav a{
        margin: 10px;
}
</style>