//
const toggleMenuIcon = el => {
  el.classList.toggle('change-icon')
  document.getElementById('nav-bar').classList.toggle('hide')
}

//
const openTab = (event, tabName) => {
  let tabcontent, tablinks

  tabcontent = document.getElementsByClassName('tabcontent')
  for (tab of tabcontent) tab.style.display = 'none'

  tablinks = document.getElementsByClassName('tablinks')
  for (link of tablinks) link.classList.remove('active')

  document.getElementById(tabName).style.display = 'block'
  event.currentTarget.classList.add('active')
}

//
const displayCurrentTime = () => {
  const newDate = new Date()
  const currentTime = newDate.toLocaleTimeString()
  const currentDate = newDate.toDateString()

  document.getElementById('date').innerHTML = currentDate
  document.getElementById('time').innerHTML = currentTime

  setTimeout(displayCurrentTime, 1000)
}

//
const main = () => {
  displayCurrentTime()
  document.getElementById('default-tab').click()
}

main()
