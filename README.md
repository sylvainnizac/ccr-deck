# ccr-deck

This app is created to hepl players of Shadowrun 5.

It contains many usefull informations for riggers and deckers.

## Overview

the app is divided in three parts, character selection, deck device and CCR device.

## Interfaces

the CCR and Deck tabs are very similar and build on the same template.

- right column top, informations concerning the selected device, it's attributes, noise reduction capabilities and condition monitors.
the condition monitor can be updated to reflect in game matrix damages. The monitors are updated if the corresponding programs are activated.
- right column bottom, list off actions that can be performed through this equipement. They are grouped by theme and then alphabetically.

- left column, list off all programs that can run on the device. a program needs to be installed before being activated. the number of activated programs at the sametime depends on the device. the checkboxes became disabled when the maximum number of program is reached.

## Deck interface

the 4 main attributes (attaque, corruption, firewall, TdD) can be swaped.

## CCR interface

nothing special for now

## How to create the apk

- in visual studio code, go to the ionic panel (left column) and select option "open in android studio"
- in andoid studio, go to the top bar and select the "build" menu and click to option "Build Bundle(s)/APK" than "Build APK(s)"
- after generation of the apl it's in folder <project>\android\app\build\outputs\apk\debug
