import LgSteps from '../src/steps.vue'

export default {
    title: 'LgSteps',
    component: LgSteps
}

export const Steps = _ => ({
    components: {
        LgSteps
    },
    data() {
        return {
            active: 2,
            num: 1
        }
    },
    methods: {
        handle() {
            this.active = (this.num += 1) % 4
        }

    },

    template: `
<div>
    <lg-steps :active="active" @activeClick="handle"></lg-steps>
</div>
`
})