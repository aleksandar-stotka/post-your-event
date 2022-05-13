<template>
  <nav>
    <ul>
      <li><router-link to="/eventList">HOME</router-link></li>
      <li>about page</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  width: 100%;
}
ul {
  display: flex;
  justify-content: center;
}
li {
  list-style: none;

  margin: 2em;
  letter-spacing: 1px;
  text-transform: uppercase;
}
a {
}
</style>
