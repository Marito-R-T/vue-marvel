import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils';
import LoadingSpin from '../LoadingSpin.vue'; // Make sure the component path is correct

describe('LoadingSpin.vue', () => {
  it('renders the loading spinner', () => {
    const wrapper = mount(LoadingSpin);

    // Check if the component has been rendered successfully
    expect(wrapper.exists()).toBe(true);

    // Check if the component contains the "loading-container" class
    expect(wrapper.find('.loading-container').exists()).toBe(true);

    // Check if the component contains the "loading-spinner" class
    expect(wrapper.find('.loading-spinner').exists()).toBe(true);
  });

  it('matches snapshot', () => {
    const wrapper = mount(LoadingSpin);

    // Compare the component's snapshot to a previously saved version
    expect(wrapper.html()).toMatchSnapshot();
  });
});
