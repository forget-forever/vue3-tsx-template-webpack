import request from "@/utils/request";
import { defineComponent, onMounted, ref } from "@vue/runtime-core";


type IData = {
errmsg?: string
errno: number
data?: {
total: number
pageSize: number
current: number
totalPage: number
list?: {
columnName: string
tableName: number
dbName: string
columnComment: string
}[]
}
}

export default defineComponent({
  name: 'Infinite',
  setup() {
    onMounted(async () => {
      // const res = await request('/hive/hivetable/getHivePartitionInfo');
      const res = await request.get<IData>('/hive/hivetable/searchHiveCloumnsInfo')
      console.log(res);
    })
    const str = ref('aaaa')
    return <>
      <div>{str}</div>
    </>
  }
})