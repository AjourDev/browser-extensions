const colours = [
{
    name: "Darkmode",
    bgColour: '#332D2D',
    fgColour: '#FBFBFB'
    },{
    name: "Lightmode",
    bgColour: '#FBFBFB',
    fgColour: '#332D2D'
}]

const sendColour = async (bgColour, fgColour) => {
    const [tab] = await browser.tabs.query({currentWindow: true, active: true})
    chrome.tabs.sendMessage(tab.id, { bgColour, fgColour })
}

colours.forEach(colour => {
    const button = document.createElement('button')
    button.style.background = colour.bgColour
    button.style.color = colour.fgColour
    button.innerText = colour.name
    document.querySelector('#colour-container').appendChild(button)
    button.addEventListener('click', e => {
        sendColour(colour.bgColour, colour.fgColour)
    })
})
