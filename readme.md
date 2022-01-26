#If I had more time:
- Could use the useMemo hook to memoize the top 50 gifs of the day
- Can perhaps save gifs as temporary files for the day and load locally to reduce
  loading time. However, this would take extra memory
- Write tests
- Currently gifs are denoted by having 'gif' at the start of message strings, but
this is an issue since an actual message starting with gif will not be sent as 
a regular message
- Currently, the timestamp for all messages get reset to current time when it is rerendered,
need to store the value in messageBlock state objects and display accordingly

#Todos:
- Move the axios call and parsing out of the useEffect into an API file
- Mock the api call
- Figure out out to load .env params
- Make limit an editable variable

- Write clean docstrings for all functions
- Get KeyboardAvoidView working properly

- Make scrollview default to bottom