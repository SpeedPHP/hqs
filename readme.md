# Http Query Service

It is a service of http query for some server that can not wait for return.

For example the php can not wait for http return, so the best solution is throw the http address to a Http Service returns immediately, and the Http Service can send a asynchronous request to the purpose url to complete the job.

### How to run

```
$npm install hqs -g

$hqs

```

then the service will run on fastcgi mode at localhost:3000