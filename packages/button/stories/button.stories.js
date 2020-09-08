import LgButton from '../src/button.vue'
import
LgSteps
from 'lg-steps'
export default {
    title: 'LgButton',
    component: LgButton
}

export const Login = () => ({
    components: {
        LgSteps,
        LgButton
    },
    template: `  
    <div>
        <lg-button type="primary" @click="handle" >登 录</lg-button>   
         
        <lg-steps ></lg-steps></div>
  `,
    methods: {
        handle(msg) {
            alert(msg)
        }

    }
})