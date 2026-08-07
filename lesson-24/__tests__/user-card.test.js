import { expect, test, describe, beforeEach, afterEach} from 'vitest';
import '../src/user-card.js'; // Import the web component definition

let element;

beforeEach(() => {
  // Set up a new instance of the component before each test
  element = document.createElement('user-card');
});

afterEach(() => {
  // Clean up after each test
  element.remove();
  element = null;
});

describe('This is group for testing web component i.e. user-card', () => {
  test('First Test case to validate basic image presence', () => {
    // Create an instance of the component
    // const element = document.createElement('user-card');
    document.body.appendChild(element);

    // Make assertions using standard DOM APIs or Testing Library utilities
    expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
    expect(element.followed).toBe(false);

    // Clean up
    // document.body.removeChild(element);
  });

  test('Second test case is to validate the presence of Name and Description slots', () => {
    // const element = document.createElement('user-card');
    const nameSpan = document.createElement('span');
    nameSpan.setAttribute('slot', 'name');
    nameSpan.textContent = 'Vitest User';

    const descSpan = document.createElement('span');
    descSpan.setAttribute('slot', 'description');
    descSpan.textContent = 'A user for testing with Vitest';

    element.appendChild(nameSpan);
    element.appendChild(descSpan);

    document.body.appendChild(element);

    // Assert the result
    const nameSlot = element.shadowRoot.querySelector('slot[name="name"]');
    const descSlot = element.shadowRoot.querySelector('slot[name="description"]');
    expect(nameSlot.assignedNodes()[0].textContent).toBe('Vitest User');
    expect(descSlot.assignedNodes()[0].textContent).toBe('A user for testing with Vitest');
});
});
