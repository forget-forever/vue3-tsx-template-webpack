import request from "@/utils/request";
import { defineComponent, onMounted, PropType, ref } from "@vue/runtime-core";
import { initData } from "./data";


export default <P extends Record<string, string>, R>() => (
  defineComponent({
    name: 'Infinite',
    props: {
      mapping: {type: Function as PropType<(item: R) => typeof initData>, required: true}
    },
    setup(props) {
      const showData = ref([{...initData}])
      onMounted(async () => {
        const res = await request.get<R[]>('/api/v1/selectMoment', {
          params: {
            studentID: '',
            page: 1,
            type: '',
            text: 'zml123a'
          }
        })
        showData.value = res.map(props.mapping)
      })

      return () => (<>
        {showData.value.map(item => <div key={item.name} style={{border: '1px solid #aaa', marginTop: '2px'}}>
            <div>{item.title}</div>
            <div>{item.name}</div>
            <div>{item.time}</div>
          </div>
        )}
      </>)
    }
  }))