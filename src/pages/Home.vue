<template>
  <div class="content">
    <div class="banner">
      <div class="banner-text">
        <div class="text-wrapper">
          <h2>SHARE YOUR EVENT</h2>
          <div class="box b1"><img src="@/assets/photo-one.jpg" alt="" /></div>
          <div class="box b2"><img src="@/assets/photo-two.jpg" alt="" /></div>
          <div class="box b3">
            <img src="@/assets/photo-foure.jpg" alt="" />
          </div>
          <div class="box b4">
            <img src="@/assets/photo-three.jpg" alt="" />
          </div>
          <div class="box b5">
            <img src="@/assets/photo-people.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="login">
      <li><router-link to="/wel">LOG IN</router-link></li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  width: 100%;

  height: 90vh;
}

.banner-text {
  transform: translate(-30%, -20%);
  position: absolute;
  top: 30%;

  color: white;
}
img {
  width: 30rem;
  border-radius: 50%;
  height: 40vh;
  object-fit: cover;
  margin: auto;
  border: 4px solid #f4a896;
}

.banner-text h2 {
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-family: "Koh Santepheap", cursive;
  letter-spacing: 1.9px;
  margin-bottom: 0.4em;
  width: 40rem;
  padding: 0.4em;
  border: 4px solid #f4a896;
}

.banner {
  position: absolute;
  top: 30%;
  left: 40%;
}
.container {
  width: 100%;
  gap: 2em;
  display: flex;
  justify-content: space-around;
  height: 10vh;
}
.row {
  background-color: aqua;
  height: 10vh;
  width: 20rem;
}
.banner .box {
  font-size: 35px;
  font-weight: bold;
  opacity: 0;
  position: absolute;
  width: 100%;
  text-align: center;
}
.fas {
  color: rgb(173, 18, 18);
}
.box {
}
.b1 {
  animation: ani1 14s infinite;
}
.b2 {
  animation: ani2 14s infinite;
}
.b3 {
  animation: ani3 14s infinite;
}
.b4 {
  animation: ani4 14s infinite;
}
.b5 {
  animation: ani5 14s infinite;
}
.js--wp-1,
.js--wp-2,
.js--wp-3 {
  opacity: 0;
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.3s;
}

.js--wp-4 {
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}

.js--wp-1.animated,
.js--wp-2.animated,
.js--wp-3.animated {
  opacity: 1;
}

@keyframes ani1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
}
@keyframes ani2 {
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
}
@keyframes ani3 {
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
}
@keyframes ani4 {
  60% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}
@keyframes ani5 {
  80% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.login {
  width: 20rem;
  height: 10vh;

  margin: auto;
  display: flex;
  text-align: center;
  align-items: center;
}
a {
  color: #f4a896;
  font-weight: bold;
  font-size: 2.4em;
  padding: 0.3em;
  letter-spacing: 3px;
}
</style>
