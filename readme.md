## Working Functionalities
- Sending and receiving messages rendered with avatar, username, timestamp
- Messages sent by same user are grouped together
- GIF:
  - Make calls to GIPHY API to obtain top 50 trending GIF URL
  - GIF window displays and hides when clicked
- 

## If I had more time:
- Could use the useMemo hook to memoize the top 50 gifs of the day
- Can perhaps save gifs as temporary files for the day and load locally to reduce
  loading time. However, this would take extra memory
- Write tests
- Currently gifs are denoted by having 'gif' at the start of message strings, but
this is an issue since an actual message starting with gif will not be sent as 
a regular message
- Currently, the timestamp for all messages get reset to current time when it is rerendered,
need to store the value in messageBlock state objects and display accordingly
- Reorganize views in App so that components are not wrapped in View & ScrollViews. Styles will be
modified accordingly

## Todos:
- Mock the api call
- Figure out out to load .env params
- Get KeyboardAvoidView working properly