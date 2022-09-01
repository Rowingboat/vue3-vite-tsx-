import { defineComponent, ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import Child from '@/components/Child'

export default defineComponent({
    setup(props, ctx) {
        
        return()=><>
            <h1>1</h1>

            <Child/>
        </>
    },
})