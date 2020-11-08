# Petful Server

==== https://sliger-petful-frontend.vercel.app/ ====

This is the backend of the Petful app,
created in Node.js and utilizing the 
Express libray

The frontend is utilizing React.js

As a user you can:
Add your name to the waitlist in the 
center, and click adopt
below the pet you'd like to adopt.
        
The pets are displayed in a FIFO Queue 
data structure, and clicking adopt 
will cycle to the next pet available

Once the queue is empty, the server 
automatically refills the dummy data 
back into the queue, so there are no 
gaps.

There are two endpoints:
(/api/pets)
(/api/people)

Both have GET functionality, while pets
has DELETE functionality with the type
'cats' and type 'dogs'.
People has POST functionality to add more 
users to the queue.


GitHub
==== Back-End ====
https://github.com/michaeljsliger/sliger-petful



==== Front End ====
https://github.com/michaeljsliger/sliger-petful-frontend


