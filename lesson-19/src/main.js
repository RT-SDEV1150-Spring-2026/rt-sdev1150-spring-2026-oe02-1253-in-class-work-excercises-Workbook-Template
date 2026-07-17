// Import the user-card component to register the custom element
import './user-card';

// Create an additional user card using HTML and append it to the main element
const dynamicUserCard = `
<user-card avatar="assets/link-avatar.png">
      <span slot="name">Mipha</span>
      <span slot="description">The Champion</span>
</user-card>
`;
document.querySelector('main').insertAdjacentHTML('beforeend', dynamicUserCard);
;
// Create another user card using JavaScript DOM API only and append it to the main element
const anotherUserCard = document.createElement('user-card');
anotherUserCard.setAttribute('avatar', 'https://placehold.co/80x80');
const nameSpan = document.createElement('span');
nameSpan.setAttribute('slot', 'name');
nameSpan.textContent = 'Yunobo';
const descSpan = document.createElement('span');
descSpan.setAttribute('slot', 'description');
descSpan.textContent = 'President of Yunobo';
anotherUserCard.appendChild(nameSpan);
anotherUserCard.appendChild(descSpan);

document.querySelector('main').appendChild(anotherUserCard);
