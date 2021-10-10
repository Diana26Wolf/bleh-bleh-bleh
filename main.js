function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}

function setup() {
    canvas = createCanvas(350, 350)
    canvas.center()
    background("black")
    canvas.mouseReleased(classifyCanvas)
}

function draw() {
    //stroke weight = pen width
    strokeWeight(8)
    stroke("white")
    //mouseIsPressed a is boolean(binary) function and returns only 2 function aka 0 and 1
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult)
}

function cc() {
    background("black")
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }
    console.log(results)
    da = results[0].label
    accuracy = results[0].confidence
    document.getElementById("object").innerHTML = "The sketch is: " + da
    document.getElementById("acc").innerHTML = "Accuracy is: " + Math.floor(accuracy * 100) + "%"
}
quick_draw_data_set = ["aircraft carrier", "airplane", "alarm clock", "ambulance", "angel",
    "animal migration", "ant", "anvil", "apple", "arm", "asparagus", "axe", "backpack", "banana",
    "bandage", "barn", "baseball", "baseball bat", "basket", "basketball", "bat", "bathtub",
    "beach", "bear", "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird",
    "birthday cake", "blackberry", "blueberry", "book", "boomerang", "bottlecap", "bowtie",
    "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus",
    "bush", "butterfly", "cactus", "cake", "calculator", "calendar", "camel", "camera",
    "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot", "castle", "cat",
    "ceiling fan", "cello", "cell phone", "chair", "chandelier", "church", "circle",
    "clarinet", "clock", "cloud", "coffee cup", "compass", "computer", "cookie", "cooler",
    "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise ship", "cup", "diamond",
    "dishwasher", "diving board", "dog", "dolphin", "donut", "door", "dragon", "dresser",
    "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant", "envelope", "eraser",
    "eye", "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire hydrant",
    "fireplace", "firetruck", "fish", "flamingo", "flashlight", "flip flops", "floor lamp",
    "flower", "flying saucer", "foot", "fork", "frog", "frying pan", "garden", "garden hose",
    "giraffe", "goatee", "golf club", "grapes", "grass", "guitar", "hamburger", "hammer",
    "hand", "harp", "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon",
    "hockey puck", "hockey stick", "horse", "hospital", "hot air balloon", "hot dog",
    "hot tub", "hourglass", "house", "house plant", "hurricane", "ice cream", "jacket",
    "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop",
    "leaf", "leg", "light bulb", "lighter", "lighthouse", "lightning", "line", "lion",
    "lipstick", "lobster", "lollipop", "mailbox", "map", "marker", "matches",
    "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito",
    "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom", "nail",
    "necklace", "nose", "ocean", "octagon", "octopus"
]