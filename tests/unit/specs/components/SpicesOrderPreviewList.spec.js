import { shallowMount, createLocalVue } from '@vue/test-utils'
import SpicesOrderPreviewList from '@/components/SpicesOrderPreviewList'
import OrderItem from '@/components/OrderItem'
import Vuex from 'vuex'
describe('todo 2', () => {
  test('sanity 2', () => {
    expect(true).toBe(true)
  })
})
// TODO homework
// describe.skip('SpicesOrderPreviewList', () => {
//   let localVue = createLocalVue()
//   localVue.use(Vuex)

//   let store
//   let getters

//   beforeEach(() => {
//     getters = {
//       getPreOrderList: () => []
//     }

//     store = new Vuex.Store({
//       state: {
//         inPreOrder: [
//           {
//             title: 'Garlic Powder',
//             isAvailable: true,
//             orderId: 5,
//             img: 'https://radiancewholefoods.com/image/cache/catalog/Garlic%20powder-500x500.png'
//           },
//           {
//             title: 'Mahlab',
//             isAvailable: true,
//             orderId: 7,
//             img: 'https://cdn.shopify.com/s/files/1/0522/6301/products/9KJToHOOjQ7fEpmQgmJUjYj9ZGsjFrA7POH6NcrYjcw_w518-h392-p-no_large.png?v=1438667921'
//           }
//         ]
//       },
//       getters
//     })
//   })

//   test('check if it renders correct amount of list items', () => {
//     const inPreOrder = [{}, {}, {}]
//     const wrapper = shallowMount(SpicesOrderPreviewList, {
//       propsData: {
//         inPreOrder
//       }
//     })
//     expect(wrapper.findAll(OrderItem)).toHaveLength(inPreOrder.length)
//   })

//   // test.todo('move data fetching from store, using getters')

//   test('getter getPreOrderList returns correct number of items from PreOrder', () => {

//     const wrapper = shallowMount(SpicesOrderPreviewList, {
//       store,
//       localVue
//     })
//     // expect(getters.getPreOrderList()).toHaveLength(2)
//     expect(wrapper.findAll(OrderItem)).toHaveLength(2)
//   })
//   // test.todo('create test and functionality for remove spice from list of preordered spices')

//   // test.todo('check click `Add to Order` is triggered')
//   // test.todo('check store for items in order')
// })
