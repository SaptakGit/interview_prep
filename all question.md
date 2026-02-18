1. Detail Architecture of Node.Js, how it behaves----how the request goes in and how the response comes out. So what happens in between?

2. Okay, So, in the root of the node folder,you have this package .json file is there. And package .lock file is there, right?  So how the log file is different from the json file

3.Have you looked into the lock file ever?

4.what are the various types of middle words available? So type of middle words.-Explain-Detailed

5.So, how do you chain the middle words? Like output of one middleware goes as an input of another middleware. How do you chain it? 

6.Have you used streams?

7. So, what are the various types of a type of streams available and Like real-life example where you would like to use a stream?

8.Concept of Zilip?

9.So have you used tracing?(Basically, stress tracing is used to profile the performance of your app.)

10. Profiling Concept----- So any tool you have used for profiling?

11.so any idea on any of the cloud platforms? Cloud platforms?

12.- Any idea on how do we scale the node application?

13.so tell me one thing like applications like node, do they need horizontal scaling or do they need vertical scaling?

14.And so what kind of applications you have made with the node?

15.So how many types of APIs are there type of APIs?(REST API, SOAP API....)

16.so what are the Authentication methods used in the APIs?(Types of Authentication Methods)

17.In MongoDb I mean, standalone server you have used or Atlas you have used?

18.So, any idea on how those servers are set up currently?

19.So are you aware of sharding? 

20. So how many types of sharding? have you  implemented any sharding currently?

21.so can you can you give me some idea where we can shard?

22.have you faced any kind of limitations In MongoDb?

23.what is journaling in MongoDB?

24.Okay, so are you aware of GridFS In MongoDb?

25.so suppose if we break down the object id, So what components will be getting?

26.Okay, and have you worked on any query optimization thing in MongoDB?

27.- Have you used data profiling or explain in MySQL? or MongoDb?

28. so what does Git cherry pick do?

29.What is the purpose of Using Tuple in Typescript?

30.In Typescript, where  the as keyword is used?

31.Difference between Null and Undefined?

32.So have you used the template literal in Typescript for What purpose?

33.What about the concept of Decorators?




How many types of APIS are there?

What is the speciality of REST API? (Full form Of Rest API)

How many types of Authentication possible in Rest API?

    Node.Js is single threaded. There are method called fork() & spawn() -these kind of methods are used in multithreaded environment. So if node is single threaded, how these methods exist? What would be the output of fork() & spawn()?Why these methods exist?



Architecture of Node.Js ( How the request goes & before the response come - What happens?)


Have you Used Express?

How do you chain the middlewares in Express?

What kind of packages you haves used in Node.Js?


In Express - How many types of Middleware are there ? ( Application Middleware , other types of Middleware)


Mongo DB:

-----------------------------------------------------------------------------------------------------------


Are you using Atlas or installs in other servers?


MongoDb- by default has 3 database - So why admin is in a different database?

For what purpose set modifier is used?

Are you aware of sharding in MongoDb?


In MongoDb If you break the object ID, what components will be getting?


Do you have experience in working RDBMS?


What is the utility of having Clause?


Can you explain this aggregation pipeline?


React:

What is prop drilling?

How can get rid off prop drilling?(Like- how do you avoid prop drilling)


What redux gives in addition to what you have in the context apis?

When to use redux? When to use context API?

Have you done unit testing?

What is higher order component?

What is useMemo?

What are the various components in Kubernetes?



-------------------------------------------------------------------------------------------------------------------------------------

(Foreign Key)




What version of MongoDb you are using?

What is the limitation of Mongo Db?

What kind of environment?

When you create instance in Mongo Db, 3 types of database?


Purpose of using having clause?

Counter part of having clause in Mongo Db?


What kind of datatypes are available in Mongodb, that are not available in MySQL?

Are you aware of the database engine that are available in Mongo Db?


If you want to run in live environment as a background process- is it possible?


How do you chain the middlewares in node?


How many types of Middleware available in Node.Js?



Streams in Node.Js ( How many types of Streams are there in Node.js - what are the utility of those streams?)


(Readable,Writable,Duplex, Transform- utility of these streams)


 -------------------------------------------------------------------------------------------


Typescript:

What is the utility of Tuple?(Tuple as a datatype in Typescript)

GIT: GIT Stash, Git Rebase, Git Cherry Peak



What kind of services, you have worked in AWS?





MongoDB:
Which function is used to update a document in MongoDB?
→  updateOne() / updateMany()


The MongoDB shell is based on which language?
→ JavaScript


What is the default port for MongoDB?
→ 27017


How does MongoDB ensure high availability?
→ Replica Sets


Which command creates a new collection?
→ db.createCollection()


Which operator is used to match documents with fields that contain array values with all specified elements?
→ $all


NodeJS:
Node.js is built on which JavaScript engine?
→ V8 JavaScript engine


Default package manager for Node.js?
→ NPM


Which keyword is used to import CommonJS modules?
→ require


What is the modern alternative to callbacks for async operations?
→ Promises


What Node.js-specific data type is used to handle binary data?
→ Buffer


What abstract interface in Node.js is used for handling streaming data?
→ Streams


How do you access environment variables in Node.js?
→ by using process.env object


What class is the foundation for emitting and handling custom events?
→ EventEmitter


What method is used to pipe data from a readable to a writable stream?
→ pipe()


Common function to delay execution of code?
→ setTimeout


What error occurs if a Promise is rejected without a .catch() handler?
→ Unhandled rejection

React:
Which method is used to render a React component?
→ ReactDOM.render()


Which hook is used to manage state in a functional component?
→ useState


Which lifecycle method is invoked once after the component is mounted?
→ componentDidMount


How do you pass data to a child component in React?
→ Using props


What is the default port number for React development server?
→ 3000


Which hook is used to perform side effects in React?
→ useEffect


Can React render elements without a DOM node?
→ Yes, using Fragments


Which hook is used for accessing context in a functional component?
→ useContext


Which tag is used to catch lazy-loaded fallback content?
→ <Suspense>


Which hook avoids unnecessary re-renders of a function?
→ useCallback



Express.js:
Which command is used to install Express.js?
→ npm install express


What is the default HTTP method used in an Express route if not specified?
→ GET method



Which middleware is commonly used to parse incoming request bodies in Express?
→ body-parser 


What method is used to listen on a specific port in Express?
→ app.listen(port)


How do you create a router instance in Express?
→ express.Router()


Which function sends a file to the client in Express?
→ res.sendFile()


Which middleware allows Express apps to support cookies?
→ cookie-parser




1. Give Detailed description of the architecture of node how it behaves Like-how the request goes in and how the response comes out. So what happens in between?/what are the other components in the engine?

2.What is s3? Yes. Okay so How do you create a CDN?it. So what's the full form of CDN? (CDN CDN is content delivery network.)

3.How to Create a CDN using S3?

4.so node is having this package .json, right?So there is another is like package lock. So, what is the difference between Lock file and Json File?

5.in node what kind of packages you have used?

6.So in Node .js have you made the APIs with Node .js? 

7.So how many type of APIs you are aware of? Type of APIs?(Like-REST API, SOAP API....)

8.So, what is the full form of REST?What it means? I mean, how REST APIs work? Basically,

9.Node .js has another method called options.-So what options does?

10.in node js, so how many type of middlewares are there?(Error handling, Third Party, Authentication Middele ware, Appliciation Middleware......)

11.What is the difference between an Applicationn Middleware and Error Middleware?

12.how do you chain the middleware so that output of one middleware goes as an input of the another middleware?(Answer could be-Next)

13.In Node  have you used the URL module?

14.Have you used Streams?

15.Under what circumstances, you have used streams?

16.what other type of streams are there apart from readble and wrireable?

17.What is the difference between Fork and Spwan in Node.Js?

18.what is piping in Node .js?

19.are you aware of this reactor pattern?

20.Design patterns are you aware about?

21.in MongoDB what is journaling?

22.Are you aware like how the data can be imported or exported, imported in and exported from MongoDB?

23.What is the purpose of having clause in Mysql? And what is having clause counter part in MongoDb?

24.What is aggregation pipeline?

25.what are TTL indexes? (Time to Leave)

26.Have you used Indexes in MongoDb?

27.let's say So the indexes that you are creating how do you make sure that the query processor is Utilizing your indexing?

28.can we store image in MySQL?

29. And what is GridFS used for in MongoDb?

30.what is cardinality?

31.In MySQL, what is collation?

32.so give me one example where you'd like to use a tuple? (Question From Typescript)

33.what is type inference type inference?

34.let's say you have an object, okay, and now you want to add optional properties to that object. Is it possible using a type script?

35.what are union types?

36.And what is the difference between late and var?

37.have you used this singleton classes?

38.what is this partial utility type?

39.In MySQL you have used union?

40. What is the difference between Union and Union All?

41.So, what is the specialty of react? 

42.so what is the difference between props and state?

43.so, what is prop drilling?

44.how can we overcome this problem of Prop Drilling?

45. When to Use Context API and When to use redux?

46.what are the error boundaries?

47. so what are the areas in which the error boundaries work actually ?

48.so have you used the next js?

49.And have you used any unit testing libraries?

50.So how to write unit test cases and how to run them?

51.In Next JS what is the difference between SSR and SSG?(Server side rendering vs server side generation)

52.What do you mean by Automatic Code Splitting?

53. What are the commonn comnads you have used with GIT?

54. What is the difference between GIT Fetch and GIT Pull?

55. What is GIT Stash?

56.What is Git cherry Peak?

57. What is Squash?

58. In docker what you did?

59. What is the difference between Docker file nad Compose file?

60.Now you need to run a container with a specific amount of RAM and a specific amount of CPU- Is it possible?





1. What kind of bottlenecks have you seen in Mern Stack Applications?

2.Have you faced any issues with Network?/Let's say Network Clock issues in Node.Js

3.How SSR is different fromm CSR?

4.How do you make a Entire MERN Stack application Secure?

5.What are the things you can do to optimize MongoDb Performance?

6.What is the output of Explain Function?

7.Let's say are handling file uploads in Nodes, let's say you are uploading 10 GB or 5 GB file in node, so in that case how do you accomodate large file upload in Node?

8. So what are the various kinds of streams are available in Node?

9.How do you handle API Versioning in Express?

10.Have you used React Fibre?

11. How can you handle the component performance in React?

12. What is the difference between Use Effect and Use Lay Effect?

13.How do you differentiate between Cluster and Worker threads in Node.Js?

14.Have you used mongoose populate method? - Explain concept

15. What is the difference between Populate and MongoDb Look Up?

16.Have you used redux?

17. So what are the different components are available in Redux?

18. What is the functionalities of Action and reducers?

19.Are you aware about the Design Patterns?(Core Architecture)

20. What kind of Design Patterns have you used?

21.So, What  is the advantage of Using Typescript?

22.What is the difference between Interface and Type?

23.What are utility types in Typescript?

24.Have you worked with any Real Time Applications?

25.Have you used reverse proxy in Production Environment For Mern Stack Application? (Like Ngnx)

26.Like what kind of Environment you have used in any cloud platform have you used for hosting environment?

27.How do you make sure that the Node is executed in the background as a background process in the Production Environment?

28.What are the different stages of CICD Pipeline?

29.What is the utility of GIT Cherry peak command?

30.Architectural Part/ Like how to design database?