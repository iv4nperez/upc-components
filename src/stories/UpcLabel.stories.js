import UpcLabel from '../components/upc-label.vue'


export default {
    title: 'UI/UpcLabel',
    component: UpcLabel,

    argTypes:{
        text: { control: 'text', description: 'Esta Prop recibe el texto' },
    }
}

const Template = (args) => ({
    components: { UpcLabel },
    setup() {
        return { args };
    },
    template: '<upc-label v-bind="args" />',
})

export const Default = Template.bind({});

Default.args = {
    text: 'example',
};


