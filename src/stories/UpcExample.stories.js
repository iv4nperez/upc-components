import UpcExample from '../components/upc-example.vue'


export default {
    title: 'UI/UpcExample',
    component: UpcExample,

    argTypes:{
        text: { control: 'text', description: 'Esta Prop recibe el texto' },
    }
}

const Template = (args) => ({
    components: { UpcLabel },
    setup() {
        return { args };
    },
    template: '<upc-example v-bind="args" />',
})

export const Default = Template.bind({});

Default.args = {
    text: 'example',
};


