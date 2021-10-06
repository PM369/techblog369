<template>
  <div class="sidenav-container">
    <div v-if="isSidebar" class="backdrop" @click="hideSidebar" />

    <transition name="slide-side">
      <div v-if="isSidebar" class="sidenav">
        <span @click="hideSidebar" style="font-size: 300%;">&times;</span>
        <app-links />
      </div>
    </transition>
  </div>
</template>

<script>
import AppLinks from '~/components/AppLinks'

export default {
  components: { AppLinks },

  computed: {
    isSidebar () {
      return this.$store.getters['nav/toggleSidebar']
    }
  },

  methods: {
    hideSidebar () {
      this.$store.dispatch('nav/toggleSidebar')
    }
  }
}
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav {
  height: 100%;
  width: 300px;
  background: rgb(156,155,162);
  background: linear-gradient(90deg, rgba(156,155,162,1) 0%, rgba(240,240,129,1) 66%, rgba(188,200,203,1) 100%);
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.sidenav span {
  position: absolute;
  right: 20px;
  top: 20px;
}

.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
