    var selectedClass = 0
function classSelect(inputVar) {
    selectedClass = inputVar
    console.log(selectedClass)
    console.log("classSelect called")
}

function randomScout1() {
    return Math.floor(Math.random() * 6);
}
function randomScout2() {
    return Math.floor(Math.random() * 7);
}
function randomScout3() {
    return Math.floor(Math.random() * 8);
}

function randomSoldier1() {
    return Math.floor(Math.random() * 8);
}
function randomSoldier2() {
    return Math.floor(Math.random() * 10);
}
function randomSoldier3() {
    return Math.floor(Math.random() * 7);
}

function randomPyro1() {
    return Math.floor(Math.random() * 5);
}
function randomPyro2() {
    return Math.floor(Math.random() * 9);
}
function randomPyro3() {
    return Math.floor(Math.random() * 10);
}

function randomDemoman1() {
    return Math.floor(Math.random() * 6);
}
function randomDemoman2() {
    return Math.floor(Math.random() * 7);
}
function randomDemoman3() {
    return Math.floor(Math.random() * 8);
}

function randomHeavy1() {
    return Math.floor(Math.random() * 5);
}
function randomHeavy2() {
    return Math.floor(Math.random() * 7);
}
function randomHeavy3() {
    return Math.floor(Math.random() * 7);
}

function randomEngineer1() {
    return Math.floor(Math.random() * 6);
}
function randomEngineer2() {
    return Math.floor(Math.random() * 3);
}
function randomEngineer3() {
    return Math.floor(Math.random() * 5);
}
function randomEngineer4() {
    return Math.floor(Math.random() * 1);
}

function randomMedic1() {
    return Math.floor(Math.random() * 4);
}
function randomMedic2() {
    return Math.floor(Math.random() * 4);
}
function randomMedic3() {
    return Math.floor(Math.random() * 5);
}

function randomSniper1() {
    return Math.floor(Math.random() * 7);
}
function randomSniper2() {
    return Math.floor(Math.random() * 6);
}
function randomSniper3() {
    return Math.floor(Math.random() * 4);
}

function randomSpy1() {
    return Math.floor(Math.random() * 5);
}
function randomSpy2() {
    return Math.floor(Math.random() * 5);
}
function randomSpy3() {
    return Math.floor(Math.random() * 3);
}
function randomSpy4() {
    return Math.floor(Math.random() * 2);
}

function createLoadout(input) {
    if (input >= 0 && input <=8) {
        if (input == 0) {
            document.getElementById('slot1Image').src = (assignScoutImage1(randomScout1(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            document.getElementById('slot2Image').src = (assignScoutImage2(randomScout2(input)));
            console.log(assignScoutImage1(randomScout2(input)));
            document.getElementById('slot3Image').src = (assignScoutImage3(randomScout3(input)));
            console.log(assignScoutImage1(randomScout3(input)));
            document.getElementById('slot4').innerText = ""
            console.log("scout - 6 primaries, 7 secondaries, 8 melee")
        }
        if (input == 1) {
            document.getElementById('slot1Image').src = (assignSoldierImage1(randomSoldier1(input)));
            console.log(assignSoldierImage1(randomSoldier1(input)));
            document.getElementById('slot2Image').src = (assignSoldierImage2(randomSoldier2(input)));
            console.log(assignSoldierImage2(randomSoldier2(input)));
            document.getElementById('slot3Image').src = (assignSoldierImage3(randomSoldier3(input)));
            console.log(assignSoldierImage3(randomSoldier3(input)));
            document.getElementById('slot4').innerText = ""
            console.log("soldier - 8 primaries, 10 secondaries, 7 melee")
        }
        if (input == 2) {
            document.getElementById('slot1Image').src = (assignPyroImage1(randomPyro1(input)));
            console.log(assignPyroImage1(randomPyro1(input)));
            document.getElementById('slot2Image').src = (assignPyroImage2(randomPyro2(input)));
            console.log(assignPyroImage2(randomPyro2(input)));
            document.getElementById('slot3Image').src = (assignPyroImage3(randomPyro3(input)));
            console.log(assignPyroImage3(randomPyro3(input)));
            document.getElementById('slot4').innerText = ""
            console.log("pyro - 5 primaries, 9 secondaries, 10 melee")
        }
        if (input == 3) {
            document.getElementById('slot1Image').src = (assignDemomanImage1(randomDemoman1(input)));
            console.log(assignDemomanImage1(randomDemoman1(input)));
            document.getElementById('slot2Image').src = (assignDemomanImage2(randomDemoman2(input)));
            console.log(assignDemomanImage2(randomDemoman2(input)));
            document.getElementById('slot3Image').src = (assignDemomanImage3(randomDemoman3(input)));
            console.log(assignDemomanImage1(randomDemoman1(input)));
            document.getElementById('slot4').innerText = ""
            console.log("demoman - 6 primaries, 7 secondaries, 8 melee")
        }
        if (input == 4) {
            document.getElementById('slot1Image').src = (assignHeavyImage1(randomHeavy1(input)));
            console.log(assignHeavyImage1(randomHeavy1(input)));
            document.getElementById('slot2Image').src = (assignHeavyImage2(randomHeavy2(input)));
            console.log(assignHeavyImage2(randomDemoman2(input)));
            document.getElementById('slot3Image').src = (assignHeavyImage3(randomHeavy3(input)));
            console.log(assignHeavyImage3(randomDemoman1(input)));
            document.getElementById('slot4').innerText = ""
            console.log("heavy - 5 primaries, 7 secondaries, 7 melee")
        }
        if (input == 5) {
            document.getElementById('slot1Image').src = (assignEngineerImage1(randomEngineer1(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            document.getElementById('slot2Image').src = (assignEngineerImage2(randomEngineer2(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            document.getElementById('slot3Image').src = (assignEngineerImage3(randomEngineer3(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            document.getElementById('slot4Image').src = (assignEngineerImage4(randomEngineer4(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            console.log("engineer - 6 primaries, 3 secondaries, 5 melee, 1 special")
        }
        if (input == 6) {
            document.getElementById('slot1Image').src = (assignMedicImage1(randomMedic1(input)));
            console.log(assignMedicImage1(randomMedic1(input)));
            document.getElementById('slot2Image').src = (assignMedicImage2(randomMedic2(input)));
            console.log(assignMedicImage2(randomMedic2(input)));
            document.getElementById('slot3Image').src = (assignMedicImage3(randomMedic3(input)));
            console.log(assignMedicImage3(randomMedic3(input)));
            document.getElementById('slot4').innerText = ""
            console.log("medic - 4 primaries, 4 secondaries, 5 melee")
        }
        if (input == 7) {
            document.getElementById('slot1Image').src = (assignSniperImage1(randomSniper1(input)));
            console.log(assignSniperImage1(randomSniper1(input)));
            document.getElementById('slot2Image').src = (assignSniperImage2(randomSniper2(input)));
            console.log(assignSniperImage2(randomSniper2(input)));
            document.getElementById('slot3Image').src = (assignSniperImage3(randomSniper3(input)));
            console.log(assignSniperImage3(randomSniper3(input)));
            document.getElementById('slot4').innerText = ""
            console.log("sniper - 7 primaries, 6 secondaries, 4 melee")
        }
        if (input == 8) {
            document.getElementById('slot1Image').src = (assignSpyImage1(randomSpy1(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            document.getElementById('slot2Image').src = (assignSpyImage2(randomSpy2(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            document.getElementById('slot3Image').src = (assignSpyImage3(randomSpy3(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            document.getElementById('slot4Image').src = (assignSpyImage4(randomSpy4(input)));
            console.log(assignScoutImage1(randomScout1(input)));
            console.log("spy - 5 primaries, 3 secondaries, 5 melee, 2 special")
        }
    }
 }

function assignScoutImage1(input) {
    if (input == 0) {
        return "./images/defaultScattergun.png";
    }
    if (input == 1) {
        return "./images/ForceANature.png"
    }
    if (input == 2) {
        return "./images/Shortstop.png"
    }
    if (input == 3) {
        return "./images/SodaPopper.png"
    }
    if (input == 4) {
        return "./images/BabyFacesBlaster.png"
    }
    if (input == 5 ) {
        return "./images/BackScatter.png"
    }
 }
function assignScoutImage2(input) {
    if (input == 0) {
        return "./images/defaultPistol.png";
    }
    if (input == 1) {
        return "./images/Bonk!AtomicPunch.png"
    }
    if (input == 2) {
        return "./images/CritACola.png"
    }
    if (input == 3) {
        return "./images/MadMilk.png"
    }
    if (input == 4) {
        return "./images/Winger.png"
    }
    if (input == 5 ) {
        return "./images/PrettyBoysPocketPistol.png"
    }
    if (input == 6 ) {
        return "./images/FlyingGuillotine.png"
    }
    
 }

 function assignScoutImage3(input) {
    if (input == 0) {
        return "./images/defaultBat.png";
    }
    if (input == 1) {
        return "./images/Sandman.png"
    }
    if (input == 2) {
        return "./images/CandyCane.png"
    }
    if (input == 3) {
        return "./images/BostonBasher.png"
    }
    if (input == 4) {
        return "./images/SunOnAStick.png"
    }
    if (input == 5 ) {
        return "./images/FanOWar.png"
    }
    if (input == 6 ) {
        return "./images/Atomizer.png"
    }
    if (input == 7) {
        return "./images/WrapAssassin.png"
    }
    
 }

function assignSoldierImage1(input) {
    if (input == 0) {
        return "./images/defaultRocketLauncher.png";
    }
    if (input == 1) {
        return "./images/DirectHit.png"
    }
    if (input == 2) {
        return "./images/BlackBox.png"
    }
    if (input == 3) {
        return "./images/RocketJumper.png"
    }
    if (input == 4) {
        return "./images/LibertyLauncher.png"
    }
    if (input == 5 ) {
        return "./images/CowMangler5000.png"
    }
    if (input == 6 ) {
        return "./images/BeggarsBazooka.png"
    }
    if (input == 7 ) {
        return "./images/AirStrike.png"
    }
 }
function assignSoldierImage2(input) {
    if (input == 0) {
        return "./images/defaultShotgun.png";
    }
    if (input == 1) {
        return "./images/BuffBanner.png"
    }
    if (input == 2) {
        return "./images/Gunboats.png"
    }
    if (input == 3) {
        return "./images/BattalionsBackup.png"
    }
    if (input == 4) {
        return "./images/Concheror.png"
    }
    if (input == 5 ) {
        return "./images/Mantreads.png"
    }
    if (input == 6 ) {
        return "./images/ReserveShooter.png"
    }
    if (input == 7 ) {
        return "./images/RighteousBison.png"
    }
    if (input == 8 ) {
        return "./images/BASEJumper.png"
    }
    if (input == 9 ) {
        return "./images/PanicAttack.png"
    }  
 }

 function assignSoldierImage3(input) {
    if (input == 0) {
        return "./images/defaultShovel.png";
    }
    if (input == 1) {
        return "./images/Equalizer.png"
    }
    if (input == 2) {
        return "./images/PainTrain.png"
    }
    if (input == 3) {
        return "./images/HalfZatoichi.png"
    }
    if (input == 4) {
        return "./images/DisciplinaryAction.png"
    }
    if (input == 5 ) {
        return "./images/MarketGardener.png"
    }
    if (input == 6 ) {
        return "./images/EscapePlan.png"
    }   
 }

function assignPyroImage1(input) {
    if (input == 0) {
        return "./images/defaultFlamethrower.png";
    }
    if (input == 1) {
        return "./images/Backburner.png"
    }
    if (input == 2) {
        return "./images/Degreaser.png"
    }
    if (input == 3) {
        return "./images/Phlogistinator.png"
    }
    if (input == 4) {
        return "./images/DragonsFury.png"
    }
 }
function assignPyroImage2(input) {
    if (input == 0) {
        return "./images/defaultShotgun.png";
    }
    if (input == 1) {
        return "./images/FlareGun.png"
    }
    if (input == 2) {
        return "./images/Detonator.png"
    }
    if (input == 3) {
        return "./images/ReserveShooter.png"
    }
    if (input == 4) {
        return "./images/Manmelter.png"
    }
    if (input == 5 ) {
        return "./images/ScorchShot.png"
    }
    if (input == 6 ) {
        return "./images/PanicAttack.png"
    }
    if (input == 7 ) {
        return "./images/ThermalThruster.png"
    }
    if (input == 8 ) {
        return "./images/GasPasser.png"
    }
 }


function assignPyroImage3(input) {
    if (input == 0) {
        return "./images/defaultAxe.png";
    }
    if (input == 1) {
        return "./images/Axtinguisher.png"
    }
    if (input == 2) {
        return "./images/Homewrecker.png"
    }
    if (input == 3) {
        return "./images/Powerjack.png"
    }
    if (input == 4) {
        return "./images/BackScratcher.png"
    }
    if (input == 5 ) {
        return "./images/SharpenedVolcanoFragment.png"
    }
    if (input == 6 ) {
        return "./images/ThirdDegree.png"
    }
    if (input == 7 ) {
        return "./images/NeonAnnihilator.png"
    }    
    if (input == 8 ) {
        return "./images/HotHand.png"
    }    
 }

function assignDemomanImage1(input) {
    if (input == 0) {
        return "./images/defaultGrenadeLauncher.png";
    }
    if (input == 1) {
        return "./images/LochNLoad.png"
    }
    if (input == 2) {
        return "./images/AliBabasWeeBooties.png"
    }
    if (input == 3) {
        return "./images/LooseCannon.png"
    }
    if (input == 4) {
        return "./images/BASEJumper.png"
    }
    if (input == 5 ) {
        return "./images/IronBomber.png"
    }   
 }

function assignDemomanImage2(input) {
    if (input == 0) {
        return "./images/defaultStickybombLauncher.png";
    }
    if (input == 1) {
        return "./images/CharginTarge.png"
    }
    if (input == 2) {
        return "./images/ScottishResistance.png"
    }
    if (input == 3) {
        return "./images/StickyJumper.png"
    }
    if (input == 4) {
        return "./images/SplendidScreen.png"
    }
    if (input == 5) {
        return "./images/TideTurner.png"
    }
    if (input == 6) {
        return "./images/QuickiebombLauncher.png"
    }
 }
function assignDemomanImage3(input) {
    if (input == 0) {
        return "./images/defaultBottle.png";
    }
    if (input == 1) {
        return "./images/Eyelander.png"
    }
    if (input == 2) {
        return "./images/PainTrain.png"
    }
    if (input == 3) {
        return "./images/ScotsmansSkullcutter.png"
    }
    if (input == 4) {
        return "./images/ClaidheamhMor.png"
    }
    if (input == 5) {
        return "./images/UllapoolCaber.png"
    }
    if (input == 6 ) {
        return "./images/HalfZatoichi.png"
    }
    if (input == 7 ) {
        return "./images/PersianPersuader.png"
    }
 }

function assignHeavyImage1(input) {
    if (input == 0) {
        return "./images/defaultMinigun.png";
    }
    if (input == 1) {
        return "./images/Natascha.png"
    }
    if (input == 2) {
        return "./images/BrassBeast.png"
    }
    if (input == 3) {
        return "./images/Tomislav.png"
    }
    if (input == 4) {
        return "./images/HuoLongHeater.png"
    }
 }

function assignHeavyImage2(input) {
    if (input == 0) {
        return "./images/defaultShotgun.png";
    }
    if (input == 1) {
        return "./images/Sandvich.png"
    }
    if (input == 2) {
        return "./images/DalokohsBar.png"
    }
    if (input == 3) {
        return "./images/BuffaloSteakSandvich.png"
    }
    if (input == 4) {
        return "./images/FamilyBusiness.png"
    }
    if (input == 5) {
        return "./images/PanicAttack.png"
    }
    if (input == 6) {
        return "./images/SecondBanana.png"
    }
 }
function assignHeavyImage3(input) {
    if (input == 0) {
        return "./images/defaultFists.png";
    }
    if (input == 1) {
        return "./images/KillingGlovesOfBoxing.png"
    }
    if (input == 2) {
        return "./images/GlovesOfRunningUrgently.png"
    }
    if (input == 3) {
        return "./images/WarriorsSpirit.png"
    }
    if (input == 4) {
        return "./images/FistsOfSteel.png"
    }
    if (input == 5) {
        return "./images/EvictionNotice.png"
    }
    if (input == 6 ) {
        return "./images/HolidayPunch.png"
    }
 }

function assignEngineerImage1(input) {
    if (input == 0) {
        return "./images/defaultShotgun.png";
    }
    if (input == 1) {
        return "./images/FrontierJustice.png"
    }
    if (input == 2) {
        return "./images/Widowmaker.png"
    }
    if (input == 3) {
        return "./images/Pomson6000.png"
    }
    if (input == 4) {
        return "./images/RescueRanger.png"
    }
    if (input == 5 ) {
        return "./images/PanicAttack.png"
    }
}
function assignEngineerImage2(input) {
    if (input == 0) {
        return "./images/defaultPistol.png";
    }
    if (input == 1) {
        return "./images/Wrangler.png"
    }
    if (input == 2) {
        return "./images/ShortCircuit.png"
    }
 }

function assignEngineerImage3(input) {
    if (input == 0) {
        return "./images/defaultWrench.png";
    }
    if (input == 1) {
        return "./images/Gunslinger.png"
    }
    if (input == 2) {
        return "./images/SouthernHospitality.png"
    }
    if (input == 3) {
        return "./images/Jag.png"
    }
    if (input == 4) {
        return "./images/EurekaEffect.png"
    }
}
function assignEngineerImage4(input) {
    if (input == 0) {
        return "./images/PDA.png";
    } 
}

function assignMedicImage1(input) {
    if (input == 0) {
        return "./images/defaultSyringeGun.png";
    }
    if (input == 1) {
        return "./images/Blutsauger.png"
    }
    if (input == 2) {
        return "./images/CrusadersCrossbow.png"
    }
    if (input == 3) {
        return "./images/Overdose.png"
    }
 }

function assignMedicImage2(input) {
    if (input == 0) {
        return "./images/defaultMediGun.png";
    }
    if (input == 1) {
        return "./images/Kritzkrieg.png"
    }
    if (input == 2) {
        return "./images/QuickFix.png"
    }
    if (input == 3) {
        return "./images/Vaccinator.png"
    }
 }
function assignMedicImage3(input) {
    if (input == 0) {
        return "./images/defaultBonesaw.png";
    }
    if (input == 1) {
        return "./images/Ubersaw.png"
    }
    if (input == 2) {
        return "./images/VitaSaw.png"
    }
    if (input == 3) {
        return "./images/Amputator.png"
    }
    if (input == 4) {
        return "./images/SolemnVow.png"
    }
 }

function assignSniperImage1(input) {
    if (input == 0) {
        return "./images/defaultSniperRifle.png";
    }
    if (input == 1) {
        return "./images/Huntsman.png"
    }
    if (input == 2) {
        return "./images/SydneySleeper.png"
    }
    if (input == 3) {
        return "./images/BazaarBargain.png"
    }
    if (input == 4) {
        return "./images/Machina.png"
    }
    if (input == 5) {
        return "./images/HitmansHeatmaker.png"
    }
    if (input == 6) {
        return "./images/Classic.png"
    }
 }

function assignSniperImage2(input) {
    if (input == 0) {
        return "./images/defaultSMG.png";
    }
    if (input == 1) {
        return "./images/Jarate.png"
    }
    if (input == 2) {
        return "./images/Razorback.png"
    }
    if (input == 3) {
        return "./images/DarwinsDangerShield.png"
    }
    if (input == 4) {
        return "./images/CozyCamper.png"
    }
    if (input == 5) {
        return "./images/CleanersCombine.png"
    }
 }
function assignSniperImage3(input) {
    if (input == 0) {
        return "./images/defaultKukri.png";
    }
    if (input == 1) {
        return "./images/TribalmansShiv.png"
    }
    if (input == 2) {
        return "./images/Bushwacka.png"
    }
    if (input == 3) {
        return "./images/Shahanshah.png"
    }
 }

function assignSpyImage1(input) {
    if (input == 0) {
        return "./images/defaultRevolver.png";
    }
    if (input == 1) {
        return "./images/Ambassador.png"
    }
    if (input == 2) {
        return "./images/LEtranger.png"
    }
    if (input == 3) {
        return "./images/Enforcer.png"
    }
    if (input == 4) {
        return "./images/Diamondback.png"
    }
}
function assignSpyImage2(input) {
    if (input == 0) {
        return "./images/defaultKnife.png";
    }
    if (input == 1) {
        return "./images/YourEternalReward.png"
    }
    if (input == 2) {
        return "./images/ConniversKunai.png"
    }
    if (input == 3) {
        return "./images/BigEarner.png"
    }
    if (input == 4) {
        return "./images/Spycicle.png"
    }
 }

function assignSpyImage3(input) {
    if (input == 0) {
        return "./images/InvisWatch.png";
    }
    if (input == 1) {
        return "./images/CloakAndDagger.png"
    }
    if (input == 2) {
        return "./images/DeadRinger.png"
    }
}
function assignSpyImage4(input) {
    if (input == 0) {
        return "./images/defaultSapper.png";
    }
    if (input == 1) {
        return "./images/RedTapeRecorder.png";
    } 
}

function combinationsCount(input) {
    if (input == 0) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 336';
    }
    if (input == 1) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 560';
    }
    if (input == 2) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 450';
    }
    if (input == 3) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 336';
    }
    if (input == 4) {
        document.getElementById('combinations').style="display:block;"   
        document.getElementById('combinations').innerText = 'Unique Combinations: 245';
    }
    if (input == 5) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 90';
    }
    if (input == 6) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 80';
    }
    if (input == 7) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 168';
    }
    if (input == 8) {
        document.getElementById('combinations').style="display:block;"
        document.getElementById('combinations').innerText = 'Unique Combinations: 150';
    }
}