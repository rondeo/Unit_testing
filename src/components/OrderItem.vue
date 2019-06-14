<template>
  <div>
    <b-col sm="12">
        <b-list-group class="mt-2">
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ currentItem.title }}
            <img
              :src="currentItem.img"
              style="max-height: 40px"
              :alt="currentItem.description"
              :title="currentItem.shortDescription"
            />
            <b-btn
              variant="info"
              size="small"
              @click="$emit('remove-spice', currentItem)"
              >remove
            </b-btn>
          </b-list-group-item>

        </b-list-group>
      </b-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OrderItem',
  props: ['id'],
  computed: {
    ...mapGetters({
      getItem: 'getItemById'
    }),
    currentItem () {
      return this.getItem(+this.id)
    }
  }
}
</script>
