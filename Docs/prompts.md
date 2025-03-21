## App kickoff
I'm a product manager with no coding experience. Act as a senior tech lead that will engineer and code the project we are working on

in this project, I want to built a todo app, attached is document includes the product scope and the tech stack suggested. @Project Scope 

As I have no coding experience, it is required that you will do the tech planning, coding, write, run and automate tests, and review your own code. also it is required that you produce the least amount of bugs possile. that is why I suggest this stack after research, e.g. I picked Tamagui as it is a very solid, unified ui library that works for app and web out of the box, also it has its own animation library,


Review the project scope and suggest any changes in the tech stack to maximize the needs above.  DONT implement any code till I approve the final tech stack


## review suggested tech stack
for all the suggested added systems to the tech stack, please review again and give me a structured assessment how each will complicate your work by making the code base more complex, thus more potential mistakes by you

## assess tamagui
what about tamagui for ui and animation, shall we keep it or replace it with a simpler framework? which decision will result in less bugs and debugging? note that other frameworks like react-native-paper doesn't have animation built in

## assess zustand
review the projeect scope document @Project Scope again and assess again the following

shall we keep (Zustand and react queary) or remove it all together for simplicity? which decision will result in less bugs and debugging? 

## Last review for tech stack
then based on ourr discussion below is the tech stack we agreed on, please review one last time, remember our main objective is I have no coding experience, it is required that you will do the tech planning, coding, write, run and automate tests, and review your own code. also it is required that you produce the least amount of bugs possible

is this the perfect stack for such scope @Project Scope 

* Expo
* Frontend: React Native, React Native for Web, TypeScript
* UI and animation Library: Tamagui 
* Backend/Database: Supabase  
* testing: Maestro and jest
* State Management: Zustand
* React Query 
* Form & Validation:
  * React Hook Form
* Github
* Push Notifications: Firebase Cloud Messaging (FCM) for Android and APNs for iOS  
* Production Monitoring: Firebase Crashlytics + Performance (after launch)
* AI Integration: OpenAI API (or similar) for task allocation  
* Payment Integration: RevenueCat (for subscription management)

## I approve, set techstack rules
ok, I approve
I updated the @Project Scope with the agreed on stack above 

As I have no coding experience, it is required that you will do the tech planning, coding, write, run and automate tests, and review your own code.

now based on this tech stack we agreed on, search the internet for each and every of the technologies in the tech stack for official documentations, and best practices,

Then in the @TechStack rules , add rules for your self that makes you produce the absolutly least amount of bugs, write high quality code, create, run your own maestro tests, with the simplest possible code base. 

- keep the rules you add perfectly inline with the @Implementation rules 
- be as restricted and simple in the practices as possible, so that we don't growing complexities in the code base
- these rules must be followed strictly by you.

# phases||||||||||||||||||||

- don't provide edit requests till I approve 
- remember the rules @Docs/project rules.md@Docs/TechStack rules.md

## phase plan
now lets proceed with @Docs/setup plan.md . for phase 2.1 (Zustand Implementation ) give me a detailed step by step plan

- define the steps in the light of @Docs/project rules.md
- for each step explain in easy english as I have limited coding experience
- before providing a plan, be extremely thorough in understanding the documents mentioned here and the codebase
- make sure you don't prematurely add changes that will be covered in the future in @Docs/setup plan.md
- follow the rules in @Docs/TechStack rules.md
- no edit requests now till I approve your plan

## phase plan review 
ok i prepared this document for the  plan provided by you @Docs/setup plans/error handling.md

Review, are these changes inline with @Docs/project rules.md  @Docs/TechStack rules.md? analysis in the light of the balance between simplicity, bugs prevention, and scalability. note that this is the potential project scale scope @Docs/project scope.md 
- can there be a chance that any of these steps, or their details to be prematurely developed and we should postpone them for later?
- no edit requests now till I approve your plan.
- give me complexity assessment for each step

## phase implementation 
I approve, i added your plan in a doc @Docs/setup plans/typescript-config.md 
let's implement this plan 

- this implementation is to serve the project @Docs/project scope.md and tech stack setup plan @Docs/setup plan.md
- follow the rules in @Docs/TechStack rules.md
- stricktly follow the @Docs/project rules.md
- before implementing, be extremely thorough in understanding the documents mentioned here and the codebase to prevent bugs
- {provide edit requests}
- add comment above each edit explaining what this change it about
  
## Code review
I want you to review your own code you implemented for this plan @Docs/setup plans/error handling.md, following the @Docs/Code Review rules.md and @Docs/project rules.md

review against our @Docs/TechStack rules.md
analysis in the light of the balance between simplicity, bugs prevention, and scalability. note that this is the potential project scale scope @Docs/project scope.md
dont mention issues that will be covered in future phases in the setup plan @Docs/setup plan.md unless its required to be done in this phase
Don't provide edit requests for any changes now till I approve


## feature planning
we will build the task card, specs in @Docs/Specs/Taskcard.md and design attached

Analyze this document in the light of @Docs/project rules.md and @Docs/TechStack rules.md

- ask all the questions you have, be critical.
- highlight if the specs contradict with our rules
- mention potential optimization to maximize the balance between simplicity, bugs prevention, and scalability.
- for each step explain in easy english as I have limited coding experience
- before providing a plan, be extremely thorough in understanding the documents mentioned here and the codebase
- no edit requests now till I approve your plan.
- give me complexity assessment for each step

## feature implementation
- lets implement the task card component, following the specs doc @Docs/Specs/Taskcard.md

- for maximum accuracy, in the specs document @Docs/Specs/Taskcard.md, under the title "# initial code" i added a react native code for you as a starting point. you must use this code and adopt it to our code base, and apply our rules on, specially tamagui rules. DONT start from scratch

- follow the rules in @Docs/TechStack rules.md, @Docs/project rules.md
- before I approve and give you the greenlight to implement, confirm that you understand the task and that you can see the "initial code" section
- ask if you have any questions
- don't provide edit requests till I approve your work
- manual testing
  - in the today and tomorrow tab, add the dummy tasks list we currently have under the test cards tab

## bugs plan
lets plan for fixing this bug following @Docs/bugs resolution rules.md , @Docs/project rules.md, and @Docs/TechStack rules.md
- before providing a plan, be extremely thorough in understanding the documents mentioned here and the codebase
- give me in details the plan for how you will solve this bug.
- include code snippets
- don't provide edit requests till I approve your work

## bug fixing
I approve, let's implement this bug fix plan

- this implementation is to serve the project @Docs/project scope.md and tech stack setup plan @Docs/setup plan.md
- follow the rules in @Docs/TechStack rules.md
- stricktly follow the @Docs/project rules.md and @Docs/bugs resolution rules.md
- before implementing, be extremely thorough in understanding the documents mentioned here and the codebase
- {provide edit requests}
- add comment above each edit explaining what this change it about