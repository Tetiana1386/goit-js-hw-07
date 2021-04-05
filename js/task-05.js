const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChanges);

function onInputChanges(event) {
  refs.span.textContent = event.currentTarget.value ? event.currentTarget.value :'незнакомец';
};