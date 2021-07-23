<template>
  <div>
    <NavAdmin/>
    <div class="container">
      <Tab title="Home"/>
      <PubInput/>
      <div class="columns mt-2 is-desktop">
        <div class="column is-3">
          <CommunitiesNav class="is-hidden-touch"/>
          <TopLeader class="mt-2"/>
        </div>
        <div class="column is-9">
          <div class="mb-2">
            <Headboard icono="face-recognition" community="Comunidad"/>
          </div>
          <Board/>
          <Board/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavAdmin from '@/components/NavAdmin.vue'
import Tab from '@/components/Tab.vue'
import PubInput from '@/components/PubInput.vue'
import Headboard from '@/components/Headboard.vue'
import CommunitiesNav from '@/components/CommunitiesNav.vue'
import TopLeader from '@/components/TopLeader.vue'
import Board from '@/components/Board.vue'

export default {
  name: 'communities',
  components: {
    NavAdmin,
    Tab,
    PubInput,
    Headboard,
    CommunitiesNav,
    TopLeader,
    Board
  }
}
</script>