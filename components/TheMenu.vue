<template>
  <header>
    <div class="brand-name">
      <nuxt-link to="/">
        Techblog369
      </nuxt-link>
    </div>

    <div
      class="drawer-toggle"
      role="button"
      @click="$store.dispatch('nav/toggleSidebar')"
    >
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
    </div>

    <div class="app-links">
      <app-links />
    </div>
  </header>
</template>

<script>
/*eslint-disable*/
import AppLinks from "~/components/AppLinks";

export default {
  components: { AppLinks }
};
</script>

<style scoped>
header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  border-radius: 2px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(227,201,91,1) 39%, rgba(0,212,255,1) 100%);

}

.app-links {
  justify-self: end;
}

.brand-name {
  margin: 0 10px;
  font-size: 1.3rem;
}

.brand-name a {
  text-decoration: none;
  color: white;
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
}

.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  padding-right: 16px;
  cursor: pointer;
}

@media (max-width: 767px) {
  header {
    padding: 0 16px;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
}

@media (min-width: 768px) {
  header {
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
</style>
