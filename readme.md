# Sleeper Front-end Assignment
Front-end chat UI for Sleeper assignment built in React Native. 

Please note, app was built using Expo and developed using iOS simulator only.

## Working Functionalities
- Sending and receiving messages rendered with avatar, username, timestamp
- Messages sent by same user are grouped together
- GIF:
  - Make calls to GIPHY API to obtain top 50 trending GIF URL
  - GIF window displays and hides when clicked

## Getting Up & Running
1. Environment Setup
    ```console
    $ npm install
    ``` 
2. Run the Server
    ```console
    $ expo start
    ```
3. Emulator

Once the server has started, press i for iOS simulator using XCode or scan QR code with Expo Go app
on your phone to run on the phone.

## If I had more time:
- WRITE TESTS!!!
- Figure out how to load .env variables on React Native to save GIPHY API Key
- Could use the useMemo hook to memoize the gif urls (need to determine how often to refresh)
- Can perhaps save gifs as temporary files for the day and load locally to reduce
  loading time. However, this would take extra memory
- Figure out a better way to mock messages from other users
- Currently gifs are denoted by having 'gif' at the start of message strings, but
this is an issue since an actual message starting with gif will not be sent as 
a regular message
- Currently, the timestamp for all messages get reset to current time when it is rerendered,
need to store the value in messageBlock state objects and display accordingly
- Reorganize views in App so that components are not wrapped in View & ScrollViews. Styles will be
modified accordingly.
- KeyboardAvoidView does not work properly right now. Application does not resize when keyboard is 
open
- Ensure application works on Android