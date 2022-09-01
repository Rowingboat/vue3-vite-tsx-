import { defineComponent, PropType, ref } from 'vue'
import { RenderComponent } from './renderComponent'

export default defineComponent({
    props: {
      type: {
        type: String as PropType<
          'primary' | 'text' | 'success' | 'warning' | 'danger' | 'info' | 'default'
        >,
        default: 'default'
      },
      size: {
        type: String as PropType<'large' | 'medium' | 'small' | 'mini'>,
        default: 'medium'
      },
      onChangePswVisible: Function as PropType<(flag: boolean) => void>
    },
    emits: ['changePswVisible'],
    setup(props, { emit, slots }) {
      const flag = ref<boolean>(false)

      const title = ref<string>('xixi')

      return()=><>
      <RenderComponent
          title={title.value}
          v-slots={()=> { return {prefix: <i class="el-icon-medal-1"></i>}}}
        >
          这是render形式的组件示例
        </RenderComponent>
      </>

    }
});