<template>
  <div class="card card-w70">
    <component
      v-for="item in content"
      :key="item.value"
      :is="item.type"
      :value="item.value"
    ></component>
  </div>
</template>

<script>
import Title from './Title'
import Avatar from './Avatar'
import Subtitle from './Subtitle'
import Text from './Text'

export default {
  components: {
    Title,
    Avatar,
    Subtitle,
    Text
  },
  props: {
    content: Array
  }

  // emits: ['update:blockValue'],

  // data () {
  //   return {
  //     content: [
  //       {
  //         component: 'Title',
  //         value: 'hello'
  //       },
  //       {
  //         component: 'Avatar',
  //         value:
  //           'https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style></style>
