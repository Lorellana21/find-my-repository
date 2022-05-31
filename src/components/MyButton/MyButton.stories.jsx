//componente sobre el que vamos a escribir la historia:
import MyButton from "./MyButton";

//exportamos objeto con información del componente
export default {
    title: "MyButton",
    component: MyButton,
}

//una historia es una función que devuelve el componente que queremos renderizar en un determinado estado:
//export const MyFirstStory = () => <Button>Click me</Button>

//ahora creo una historia dinámica, le pasamos args(lo mismo que props)
//export const MyFirstStory = (args) => <Button {...args} />

/*usamos el template para no ir repitiendo la función creada anteriormente, ya que vamos a crear 3 historias*/
const Template = (args) => <MyButton {...args} />

//creo la primera historia
export const Primary = Template.bind({})//copiamos la función template
Primary.args = {
    children: "Edit profile",
    size: "large"
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: "Edit profile",
    secondary: true,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    children: "Button tertiary",
    tertiary: true,
}