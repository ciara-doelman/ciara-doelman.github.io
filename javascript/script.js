// READ MORE BUTTONS

const parentContainer = document.querySelector('.read-more-container')

parentContainer.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})

const parentContainer2 = document.querySelector('.read-more-container2')

parentContainer2.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})

const parentContainer3 = document.querySelector('.read-more-container3')

parentContainer3.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})

const parentContainer4 = document.querySelector('.read-more-container4')

parentContainer4.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})

const parentContainer5 = document.querySelector('.read-more-container5')

parentContainer5.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})

const parentContainer6 = document.querySelector('.read-more-container6')

parentContainer6.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})

const parentContainer7 = document.querySelector('.read-more-container7')

parentContainer7.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})

const parentContainer8 = document.querySelector('.read-more-container8')

parentContainer8.addEventListener('click', (event) => {
  const current = event.target

  const isButton = current.className.includes('button')

  console.log('read more button pressed')
  if (!isButton) return
  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Read More')
    ? 'Read Less...'
    : 'Read More...'
})
