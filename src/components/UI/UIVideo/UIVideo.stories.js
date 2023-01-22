import UIVideo from './UIVideo';
import myVideo from './video/video.mp4'

export default {
    title: 'Ui-Kit/UIVideo',
    component: UIVideo
}

const Template = (args) => <UIVideo {...args} />;

const props = {
   src: myVideo,
   playbackRate: 1.0,
   classes: '',
}

export const Default = Template.bind({}) ;

Default.args = {
    ...props,
};
