import {mount, shallowMount} from '@vue/test-utils';
import Statistics from '@/components/Statistics'; // It wont be Home it will be whatever component you are testing


describe('Meeting Statistics', () => {
    it('Total Button Exists', async () => {
        // Arrange - Mounts components and mounts button
        const wrapper = shallowMount(Statistics)
       
        // Asserts - Total Button Exists
        expect(wrapper.find('#totalButton').exists()).toBe(true)
    })
    it('Total Data Shows by default', async () => {
        // Arrange - Mounts components and mounts button
        const wrapper = shallowMount(Statistics)
        const button = wrapper.find('#totalButton')

        // Asserts - Total Data shown by default
        expect(wrapper.find('#totalClicked').exists()).toBe(true)
    })
    it('Total Data Shows when clicked', async () => {
        // Arrange - Mounts components and mounts button
        const wrapper = shallowMount(Statistics)
        const button = wrapper.find('#totalButton')
        const button1 = wrapper.find('#daysButton')

        // Act - Click the button 30 days button then the total button
        await button1.trigger('click')
        await button.trigger('click')

        // Asserts - Total Data is displayed
        expect(wrapper.find('#totalClicked').exists()).toBe(true)
    })
    it('30 Day Button Exists', async () => {
        // Arrange - Mounts components and mounts button
        const wrapper = shallowMount(Statistics)
       
        // Asserts - Makes sure the past meeting button is created by DOM
        expect(wrapper.find('#daysButton').exists()).toBe(true)
    })
    it('30 Days Data Shows on button click', async () => {
        // Arrange - Mounts components and mounts button
        const wrapper = shallowMount(Statistics)
        const button = wrapper.find('#daysButton')

        // Act - Click the 30 days button
        await button.trigger('click')
       
        // Asserts - Monthly data is visible
        expect(wrapper.find('#monthlyClicked').exists()).toBe(true)
    })
    
})