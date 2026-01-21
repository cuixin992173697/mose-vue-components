import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import XButton from '../src/index.vue';
import { ElButton } from 'element-plus';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

describe('XButton.vue', () => {
  it('renders the el-button component', () => {
    const wrapper = mount(XButton, {
      global: {
        plugins: [ElementPlus], // 手动注册 Element Plus
      },
      slots: {
        default: 'Click Me',
      },
    });

    // 检查是否渲染了 el-button
    const elButton = wrapper.findComponent(ElButton);
    expect(elButton.exists()).toBe(true);

    // 检查插槽内容是否正确渲染
    expect(elButton.text()).toBe('Click Me');
  });

  it('passes attributes to el-button', () => {
    const wrapper = mount(XButton, {
      global: {
        plugins: [ElementPlus], // 手动注册 Element Plus
      },
      attrs: {
        type: 'primary',
        disabled: true,
      },
    });

    const elButton = wrapper.findComponent(ElButton);

    // 检查属性是否正确传递
    expect(elButton.props('type')).toBe('primary');
    expect(elButton.attributes('disabled')).toBe('');
  });

  it('emits click event when el-button is clicked', async () => {
    const wrapper = mount(XButton, {
      global: {
        plugins: [ElementPlus], // 手动注册 Element Plus
      },
    });

    // 模拟点击事件
    await wrapper.findComponent(ElButton).trigger('click');

    // 检查是否触发了 click 事件
    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });
});
