<template>
  <nav>
    <ul>
      <li><router-link to="/">HOME</router-link></li>
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
  background-color: #003049;
}
ul {
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
  color: aliceblue;
  margin: 2em;
  letter-spacing: 1px;
  text-transform: uppercase;
}
a {
  text-decoration: none;
  color: aliceblue;
}
</style>
