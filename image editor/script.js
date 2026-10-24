let filters ={

brightness:{

value:100,
min:0,
max:200,
unit:"%"

},
contrast:{

value:100,
min:0,
max:200,
unit:"%"

},

saturation:{

value:100,
min:0,
max:200,
unit:"%"

},
hueRotation:{

value:0,
min:0,
max:360,
unit:"deg"
},
blur:{

value:0,
min:0,
max:20,
unit:"px"

},
grayscale:{

value:0,
min:0,
max:100,
unit:"%"


},
sepia:{

value:0,
min:0,
max:100,
unit:"%"



},
opacity:{

value:100,
min:0,
max:100,
unit:"%"



},
invert:{

value:0,
min:0,
max:100,
unit:"%"


},

 }

const imageCanvas = document.querySelector("#image-canvas")
const imageinput = document.querySelector("#image-input")
const canvasCtx = imageCanvas.getContext("2d")
const resetbutton = document.querySelector("#reset-btn")
const dowanloadbutton = document.querySelector("#dowanload-btn")
const presetsContainer = document.querySelector(".presets")
let file = null
let image = null

const filtercontainer = document.querySelector(".filters")

function createFilterElement(name, unit="%", value, min, max){

const div= document.createElement("div")
div.classList.add("filter")

const input = document.createElement("input")
input.type = "range"
input.min = min
input.max = max
input.value = value
input.id = name 

const p = document.createElement("p")
p.innerText = name


div.appendChild(p)
div.appendChild(input)

input.addEventListener("input",(e)=>{

   filters[name].value = input.value
    
   applyfilters()  

})

return div

}

function createfilters(){

Object.keys(filters).forEach(key => {

const filterelment = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max,  )

filtercontainer.appendChild(filterelment)

})

}

createfilters()

imageinput.addEventListener("change",(e)=>{

const file = e.target.files[0]
const imageplaceholder = document.querySelector(".placeholder")
imageCanvas.style.display = "block"
imageplaceholder.style.display ="none"

const img = new Image()
img.src = URL.createObjectURL(file)

img.onload = () => {

image = img
imageCanvas.width = img.width
imageCanvas.height = img.height

canvasCtx.drawImage(img, 0, 0)

}

})


function applyfilters(){
canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
canvasCtx.filter = `
brightness(${filters.brightness.value}${filters.brightness.unit})
contrast(${filters.contrast.value}${filters.contrast.unit})
saturate(${filters.saturation.value}${filters.saturation.unit})
hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
blur(${filters.blur.value}${filters.blur.unit})
grayscale(${filters.grayscale.value}${filters.grayscale.unit})
sepia(${filters.sepia.value}${filters.sepia.unit})
opacity(${filters.opacity.value}${filters.opacity.unit})
invert(${filters.invert.value}${filters.invert.unit})
`
canvasCtx.drawImage(image, 0, 0)

}


resetbutton.addEventListener("click",(e)=>{

filters ={

brightness:{

value:100,
min:0,
max:200,
unit:"%"

},
contrast:{

value:100,
min:0,
max:200,
unit:"%"

},

saturation:{

value:100,
min:0,
max:200,
unit:"%"

},
hueRotation:{

value:0,
min:0,
max:360,
unit:"deg"
},
blur:{

value:0,
min:0,
max:20,
unit:"px"

},
grayscale:{

value:0,
min:0,
max:100,
unit:"%"


},
sepia:{

value:0,
min:0,
max:100,
unit:"%"



},
opacity:{

value:100,
min:0,
max:100,
unit:"%"



},
invert:{

value:0,
min:0,
max:100,
unit:"%"


},

 }
applyfilters()
filtercontainer.innerHTML = ""
createfilters()

})

dowanloadbutton.addEventListener("click",()=>{

const link = document.createElement("a")
link.download = "edited-image.png"
link.href = imageCanvas.toDataURL()
link.click()

})


const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  drama: {
    brightness: 95,
    contrast: 170,
    saturation: 120,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 110,
    contrast: 90,
    saturation: 80,
    hueRotation: 350,
    blur: 0,
    grayscale: 10,
    sepia: 45,
    opacity: 100,
    invert: 0
  },

  oldSchool: {
    brightness: 105,
    contrast: 85,
    saturation: 60,
    hueRotation: 10,
    blur: 0,
    grayscale: 30,
    sepia: 70,
    opacity: 100,
    invert: 0
  },

  noir: {
    brightness: 100,
    contrast: 180,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  cinematic: {
    brightness: 95,
    contrast: 130,
    saturation: 85,
    hueRotation: 190,
    blur: 0,
    grayscale: 0,
    sepia: 15,
    opacity: 100,
    invert: 0
  },

  warm: {
    brightness: 105,
    contrast: 110,
    saturation: 130,
    hueRotation: 15,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0
  },

  cool: {
    brightness: 100,
    contrast: 115,
    saturation: 105,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  faded: {
    brightness: 115,
    contrast: 75,
    saturation: 80,
    hueRotation: 0,
    blur: 0,
    grayscale: 15,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  dreamy: {
    brightness: 120,
    contrast: 85,
    saturation: 120,
    hueRotation: 0,
    blur: 2,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  retro: {
    brightness: 108,
    contrast: 92,
    saturation: 75,
    hueRotation: 20,
    blur: 0,
    grayscale: 15,
    sepia: 55,
    opacity: 100,
    invert: 0
  },

  polaroid: {
    brightness: 110,
    contrast: 95,
    saturation: 85,
    hueRotation: 5,
    blur: 0,
    grayscale: 5,
    sepia: 35,
    opacity: 100,
    invert: 0
  },

  moody: {
    brightness: 85,
    contrast: 145,
    saturation: 70,
    hueRotation: 210,
    blur: 0,
    grayscale: 10,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  sunset: {
    brightness: 110,
    contrast: 115,
    saturation: 140,
    hueRotation: 25,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0
  },

  cyberpunk: {
    brightness: 105,
    contrast: 160,
    saturation: 180,
    hueRotation: 270,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  highKey: {
    brightness: 135,
    contrast: 80,
    saturation: 110,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  lowKey: {
    brightness: 75,
    contrast: 170,
    saturation: 80,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  }
};


Object.keys(presets).forEach(presetName =>{

const presetButton = document.createElement("button")
presetButton.classList.add("btn")
presetButton.innerText = presetName
presetsContainer.appendChild(presetButton)


presetButton.addEventListener("click",()=>{

const preset =  presets[presetName]

Object.keys(preset).forEach(filterName =>{

filters[filterName].value = preset[filterName]


})

applyfilters()
filtercontainer.innerHTML = ""
createfilters()

})

})
