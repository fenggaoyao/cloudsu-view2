import LgLink from '../src/link.vue'

export default {
    title: 'LgLink',
    component: LgLink
}

export const Link = _ => ({
    components: {
        LgLink
    },
    template: `
<div>
    <lg-link :underline="true" href="http://www.baidu.com" target="_Blank" >Baidu</lg-link>
</div>
`
})