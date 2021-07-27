import {mount, shallowMount} from '@vue/test-utils';
import Home2 from '@/views/Home2'; // It wont be Home it will be whatever component you are testing


describe('Buttons: Past Meeting, Start, Stop, Clear', () => {
    it('Past Meeting is created by DOM', () => {
        // Arrange - Mounts components
        const wrapper = shallowMount(Home2)
        // Asserts - Makes sure the past meeting button is created by DOM
        expect(wrapper.find('#pastMeeting').exists()).toBe(true)
    })
    it('Start Button is not created by DOM on startup', () => {
        // Arrange - Mounts components 
        const wrapper = shallowMount(Home2)
        // Asserts - Makes sure the start button is not created by DOM
        expect(wrapper.find('#startButton').exists()).toBe(false)
    })
    
    it('Start Button created by DOM if EmployeeNumber > 0', async () => {
        // Arrange - Mounts components and finds EmployeeNumber input field
        const wrapper = shallowMount(Home2)
        const input =wrapper.find('#employeeNumber')

        // Act - Sets the value of EmployeeNumber > 0
        await input.setValue(2)
        // Assert - The start button should exist in the Dom
        expect(wrapper.find('#startButton').exists()).toBe(true)
    })

    it('Stop Button is not created by DOM on startup', () => {
        // Arrange - Mounts components and finds stop button
        const wrapper = shallowMount(Home2)
        // Asserts - Mkes sure the stop button is not created by DOM
        expect(wrapper.find('#stopButton').exists()).toBe(false)
    })
    
    it('Stop Button created by DOM if EmployeeNumber > 0', async () => {
        // Arrange - Mounts components and finds EmployeeNumber input field
        const wrapper = shallowMount(Home2)
        const input =wrapper.find('#employeeNumber')
        // Act - Sets the value of EmployeeNumber > 0
        await input.setValue(2)

        // Assert - The start button should exist in the Dom
        // expect(input.element.value).toBe("2")
        expect(wrapper.find('#stopButton').exists()).toBe(true)
    })

    it('Clear Button is created by DOM on startup', () => {
        // Arrange - Mounts components and finds clear button
        const wrapper = shallowMount(Home2)
        // Asserts - Makes sure the clear button is created by DOM
        expect(wrapper.find('#clearButton').exists()).toBe(true)
    })
    // if stop clicked value is fails
    // value by default should be false for timer
    // past meetingModal should be false
})
