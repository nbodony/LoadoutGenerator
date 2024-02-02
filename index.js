var selectedClass = 0
function displayImage(input) {
    if (input == 0) {
        console.log("displayScout")
        removeFrom()
        displayThree()
        document.getElementById('scout').style.display='inline-block';
        selectedClass = 0
        console.log(selectedClass)
    }
    if (input == 1) {
        console.log("displaySoldier")
        removeFrom()
        displayThree()
        document.getElementById('soldier').style.display='inline-block';
        selectedClass = 1
        console.log(selectedClass)
    }
    if (input == 2) {
        console.log("displayPyro")
        removeFrom()
        displayThree()
        document.getElementById('pyro').style.display='inline-block';
        selectedClass = 2
        console.log(selectedClass)
    }
    if (input == 3) {
        console.log("displayDemoman")
        removeFrom()
        displayThree()
        document.getElementById('demoman').style.display='inline-block';
        selectedClass = 3
        console.log(selectedClass)
    }
    if (input == 4) {
        console.log("displayHeavy")
        removeFrom()
        displayThree()
        document.getElementById('heavy').style.display='inline-block';
        selectedClass = 4
        console.log(selectedClass)
    }
    if (input == 5) {
        console.log("displayEngineer")
        removeFrom()
        displayAll()
        document.getElementById('engineer').style.display='inline-block';
        selectedClass = 5
        console.log(selectedClass)
    }
    if (input == 6) {
        console.log("displayMedic")
        removeFrom()
        displayThree()
        document.getElementById('medic').style.display='inline-block';
        selectedClass = 6
        console.log(selectedClass)
    }
    if (input == 7) {
        console.log("displaySniper")
        removeFrom()
        displayThree()
        document.getElementById('sniper').style.display='inline-block';
        selectedClass = 7
        console.log(selectedClass)
    }
    if (input == 8) {
        console.log("displaySpy")
        removeFrom()
        displayAll()
        document.getElementById('spy').style.display='inline-block';
        selectedClass = 8
        console.log(selectedClass)
    }

    
}
function displayAll() {
    console.log("4 slots displayed")
    document.getElementById('slot1').style.display='block';
    document.getElementById('slot2').style.display='block';
    document.getElementById('slot3').style.display='block';
    document.getElementById('slot4').style.display='block';
    document.getElementById('model').style.display='inline-block';
    document.getElementById('generateButton').style.display="inline-block";
}

function displayThree() {
    console.log("3 slots displayed")
    document.getElementById('slot1').style.display='block';
    document.getElementById('slot2').style.display='block';
    document.getElementById('slot3').style.display='block';
    document.getElementById('slot4').style.display='none';
    document.getElementById('model').style.display='inline-block';
    document.getElementById('generateButton').style.display="inline-block";
}

function removeFrom() {
    console.log("class image & slot text removed")
    document.getElementById('slot1').innerText = "";
    document.getElementById('slot2').innerText = "";
    document.getElementById('slot3').innerText = "";
    document.getElementById('slot4').innerText = "";
    document.getElementById('scout').style.display='none';
    document.getElementById('soldier').style.display='none';
    document.getElementById('pyro').style.display='none';
    document.getElementById('demoman').style.display='none';
    document.getElementById('heavy').style.display='none';
    document.getElementById('engineer').style.display='none';
    document.getElementById('medic').style.display='none';
    document.getElementById('sniper').style.display='none';
    document.getElementById('spy').style.display='none';
    document.getElementById('slot1Image').src = "";
    document.getElementById('slot2Image').src = "";
    document.getElementById('slot3Image').src = "";
    document.getElementById('slot4Image').src = "";
}
