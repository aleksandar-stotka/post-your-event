<template>
  <div class="content">
    <section class="welcome container">
      <div>
        <div v-if="showLogin">
          <LoginForm @login="enterChat" />
          <p>
            no account yet?
            <span @click="showLogin = false">Sing up</span> instead
          </p>
          <h2>Login</h2>
        </div>
        <div v-else>
          <h2>Sing up</h2>
          <SingupForm @signup="enterChat" />
          <p>
            Already registered?
            <span @click="showLogin = true">Login</span> instead
          </p>
        </div>
      </div>
    </section>
  </div>

  <!--<!-->
</template>

<script>
import SingupForm from "@/components/SingupForm";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    SingupForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return {
      showLogin,
      enterChat,
    };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
  width: 30rem;
  margin: auto;
  box-shadow: 1px 0.5px 0 var(--clr-primary);
}
.content {
  background-color: #358597;
  height: 88vh;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 0.3px solid #eee;
  outline: none;
  color: rgb(15, 9, 1);
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  letter-spacing: 1px;
}
.welcome button {
  margin: 20px auto;
}
h2,
span {
  color: #f4a896;
  font-size: 1.4em;
}
p {
  font-size: 2em;
}
</style>
