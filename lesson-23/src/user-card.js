// Self-contained user card web component with Shadow DOM
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      --card-bg: var(--global-card-bg, #ffffff);
      --card-color: var(--global-card-color, #222222);
      --card-accent: var(--global-card-accent, #0077ff);
      display: block;
    }
    .card {
      background: var(--card-bg);
      color: var(--card-color);
      border: 1px solid #e6e6e6;
      padding: 12px;
      border-radius: 8px;
      display: flex;
      gap: 12px;
      align-items: center;
      width: 320px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .name {
      color: var(--card-accent);
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
    }
    .description {
      font-size: 0.9rem;
      color: #666;
      display: block;
      margin-top: 4px;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      flex: 0 0 80px;
    }
  </style>
  
  <div class="card">
    <img src="" width="80" height="80" alt="avatar">
    <div class="info">
      <slot name="name" class="name"></slot>
      <slot name="description" class="description"></slot>
      <button>Follow</button>
    </div>
  </div>
`;
document.body.appendChild(template);

class UserCard extends HTMLElement {
  #followed = false;
  #user = null;
  constructor() {
    super();

    // please tell the class to remember the owner who triggers the click event by using bind() method.
    this._onButtonClick = this._onButtonClick.bind(this); // belongs to the component itself.
    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    this._img = content.querySelector('img');
    this._img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80/0077ff/ffffff';
    this._btn = content.querySelector('button');
    // this._btn.addEventListener('click', () => this._onFollow());
    shadow.appendChild(content);
  }

  follow() {
    this._setFollow(true);
  }

  unfollow() {
    this._setFollow(false);
  }

  _renderFromUser() {
    console.log('Rendering the user now');
    if (this.#user) {
      // update image and fallback atrributes.
      if (this.#user.avatar) {
        this._img.src = this.#user.avatar;
      } else {
        this._img.src = 'https://placehold.co/80x80/0077ff/ffffff';
      }
      // set the attribute
      this.setAttribute('user-id', this.#user.id || '');
      // set the name and description on the card as well.
      const nameSlot = this.shadowRoot.querySelector('[name="name"]');
      if (nameSlot) {
        nameSlot.textContent = this.#user.name || '';
      }
      const descSlot = this.shadowRoot.querySelector('[name="description"]');
      if (descSlot) {
        descSlot.textContent = this.#user.description || '';
      }
    }
  }

  // Property to read followed state
  get followed() {
    return this.#followed;
  }

  // set the information using setter property.
  set user(obj) {
    console.log('Setter function is executed');
    this.#user = obj;
    // render the UI, whatever change has been made, either it is the first time, or , its user name is changing etc.
    this._renderFromUser();
  }

  get user() {
    return this.#user;
  }

  _setFollow(value) { // JS passed function here, when JS pases that function to another object, the orginal owner is forgotten.
    this.#followed = value;
    this._btn.textContent = this.#followed ? 'Following' : 'Follow';
    this.dispatchEvent(new CustomEvent('follow-change', {
      detail: { id: this.getAttribute('user-id') || null, followed: this.#followed },
      bubbles: true,
      composed: true,
    }));
  }

  // Follow button handler
  _onButtonClick() { // JS passes that function _onButtonClick to another object.
    this._setFollow(!this.#followed);
  }

  // Lifecycle number-1: This is called when element is added to the DOM
  connectedCallback() {
    console.log('Connected call back is called.');
    this._btn.addEventListener('click', this._onButtonClick);
    if (this.#user) {
      this._renderFromUser();
    } else {
      // Fallback to the attributes if user property does not contain information.
      const avatar = this.getAttribute('avatar');
      if (avatar) {
        this._img.src = avatar;
      } else {
        this._img.src = 'https://placehold.co/80x80/0077ff/ffffff';
      }
    }
  }

  // Respond to attribute changes if needed in the future
  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar' && this.shadowRoot) {
      const img = this.shadowRoot.querySelector('img');
      if (img) {
        img.src = newValue;
      }
    }
  }
}

customElements.define('user-card', UserCard);

export default UserCard;
