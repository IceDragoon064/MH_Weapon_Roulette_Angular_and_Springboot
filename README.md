**MONSTER HUNTER WEAPON ROULETTE**
___

**DISCLAIMER**

This is a personal project made by one person with the sole intent of educational learning on various aspects of frontend and backend development. This project is not affliated with Capcom.
___
**Level 1** - Basic random roulette

Create a standard UI with a roulette wheel with weapon name and/or icons.

The user can press a button to spin the wheel. When the wheel stops spinning, the arrow should land on a spot.

After spinning and the UI knows the spot, send the weapon info to the backend.

The backend will send a reply to the front end to display the weapon name and icon

Frontend: Angular

TDD: Jasmine, Karma

Backend: Springboot
_____
Level 2 - No same weapon

The backend should save the previously chosen weapon and check for duplicate.

If there is a duplicate, backend will call the roulette to roll again.

This process will repeat until a new weapon has been chosen.
_____
Level 3 - Local cache

For every roll, the frontend will update the information and save/update to a local cache. 

The user should be able to refresh the window and have their roll count the same before refreshing.
_____
Level 4 - User authentication

At this level, basic user login, logout, and registration on the frontend will be implemented.
