import request from "@/utils/request";
import { defineComponent, onMounted } from "@vue/runtime-core";

export default defineComponent({
  name: 'Infinite',
  setup() {
    onMounted(async () => {
      const res = await request('/hive/hivetable/getHivePartitionInfo');
      console.log(res);
    })
    return <>
    </>
  }
})