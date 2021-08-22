import request from "@/utils/request";
import { defineComponent, onMounted, PropType, ref } from "@vue/runtime-core";


type IData = {
  id: number;
  studentID: string;
  avatar: string;
  text: string;
  name: string;
  userName: string;
  good: string[];
  talk: number;
  type: string;
  imgUrl: string;
  time: string;
  view: number;
}

export default <P extends Record<string, string>, R>() => (
  defineComponent({
    name: 'Infinite',
    props: {
      mapping: {type: Object as PropType<(item: R) => P>, required: true}
    },
    setup(props) {

      onMounted(async () => {
        const res = await request.get<IData>('/api/v1/selectMoment', {
          params: {
            studentID: '',
            page: 2,
            type: '',
            text: 'zml123a'
          }
        })
      })

      return () => (<>
        <div>aaaa</div>
      </>)
    }
  }))