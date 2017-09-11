# GarageRemote
Simple remote controlled garage opener

### Instructions
To use enter the following into the raspberry pi:
- sudo forever start -l forever.log -o out.log --minUptime=3000 --spinSleepTime=10000 garageRemote.js
To stop:
- sudo forever stop 0
If restarting again:
- clean logs with: sudo forever cleanlogs
- remove out.log from project directory: rm out.log
To restart (very useful)
- sudo forever restart 0