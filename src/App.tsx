import { Options, Vue } from 'vue-class-component';
import {provide, defineComponent} from 'vue'
import {RouterLink, RouterView} from 'vue-router';
// import router from '@/router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        {/* <RouterView>
          <keep-alive exclude="Model">
            <component />
          </keep-alive>
        </RouterView> */}
        <RouterView />
      </>
    )
  }
})
