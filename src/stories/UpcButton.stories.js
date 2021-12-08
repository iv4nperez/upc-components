import UpcButton from '../components/upc-button.vue'

export default {
    title: 'UI/UpcButton',
    component: UpcButton,

    argTypes:{
        background: { control: 'color', description: 'Esta Prop recibe colores rgb y hex' },
        title: { control: 'text', description: 'Esta Prop recibe colores rgb y hex' },
        colorText: { control: 'color', description: 'Esta Prop recibe colores rgb y hex' }
    }
}

const Template = (args) => ({
    components: { UpcButton },
    setup() {
        return { args };
    },
    template: '<upc-button v-bind="args" />',
})

export const Default = Template.bind({});

Default.args = {
    background: '#fafafa',
    title: 'example',
    colorText: '#000'
};


export const Primary = Template.bind({});

Primary.args = {
    background: '#003445',
    title: 'primary',
    colorText: '#000',
    upperCase: true
};