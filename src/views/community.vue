<template>
  <div>
    <NavAdmin/>
    <div class="container">
      <div class="mb-2"><Tab/></div>
      <PubInput class="mb-2"/>
      <div class="columns is-desktop">
        <div class="column is-12-touch is-3-desktop">
          <CommunitiesNav class="is-hidden-touch"/>
          <TopLeader class="mt-2"/>
        </div>
        <div class="column is-12-touch is-9-desktop">
          <div class="mb-2">
            <Headboard/>
          </div>
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
import Home from '@/views/home.vue'

export default {
  name: 'communities',
  components: {
    NavAdmin,
    Tab,
    PubInput,
    Headboard,
    CommunitiesNav,
    TopLeader,
    Board,
    Home
  },
  props: {
    id: {
      default: null
    }
  },
  methods: {
    changeCommunity(id) {
      const community = this.$store.state.communities.filter(el => el.id == id)[0]
      const compare = this.$store.state.communities.filter(el => el.id == id).length
      if(compare != 0){
        this.$store.commit('setCommunity', community)
        this.$router.push('/community/'+community.id).catch(()=>{});
      }
      else{
        this.$router.push('/')
      }
    }
  },
  created() {
    // console.log(this.id);
    // console.log(this.$store.state.currentCommunity);
    this.changeCommunity(this.id)    
  },
  watch: {
    id(value){
      this.changeCommunity(value)    
    }
  }
}
</script>