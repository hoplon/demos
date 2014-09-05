# async-webinar

A Hoplon demo that performs the examples from Cognitect's webinar on using core.async
for client UI.

Examples 4 & 5 were not reproduced as they seemed explicitly core.async-centric. Also, I believe
that example 6 exposes a bug in the original, wherein if you click the B button before the A button,
the click is queued and immediately triggers the next message. It seems that the proper behavior should
be to discard clicks to B until the A button has been clicked and then wait for a click to B. 



