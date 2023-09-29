//. Angular

//> Angular basic elements
//@ Component - Bind logic to a template
//@ Service - Connects application parts & allows them to work with a single data source
//@ Directive - Allows us to extend the components functionality without usage of its own template
//@ Pipe - Transforms data into a suitable reading type for the user
//@ Module - Connects all elements into the whole
//@ HttpClient Module - Requests
//@ ReactiveForms/DynamicForms Module - Forms
//@ RouterModule - URL navigation


//: Component is NOT the main application elements!
//@ Componentrs define a visual part and are technically able to make a whole application using just root module
//@ BUT This obscures the frameworks potential, along with badly maintained and complicated code
//% The main application element is - A Module
// Module usage allows the division of the application into isolated logical blocks
// A module can include one or more components or simple a service module
// Can contain all other elements and 3rd party dependencies
// --- Modules give opportunities to divide an app into blocks correlated with business-logic and applcation architechture


//| Example: Ikea Table
/// Table Parts = Component - Visible and functional parts
/// Instructions = Typescript - Interfaces that describe the connectivity
/// Tools and screws = Services - Connect elements and work as a whole
/// Box = Module - Ships everything as one

//> Each module is to contain just the elemets which are used in it
//> In our root, keep it as cleamn as possible
//> If a component/service has unique dependencies, this is a sign to remove this component/service into it's own module and import all dependencies into it

//. Dividing an App into Modules & Components
//: Can have their own modules
//  > Module
//:   > components
//:   > services
//:   > directives
//>   > pipes
//>   > guards
//>   > resolvers
//>   > models
//>   > store
//:   > pages
//:   > shared

/// The above will give an application greater capability for extension

//. When is it time to add seperate components
//> At the first opportunity to split the logic of the parent component
//. Make a seperate component if an elements has:
//> Its own logic of interaction with the user
//> A complicated layout / animation
//> Any methods which can distract from understanding the logic of the parent component
//. Method
//> Take a look at the layout
//@   Visually separate elements can be converted into separate components
//> Do separate components have their own dependencies
//@   If unique set of additional modules is needed which are not used by parent or neighbor components
//@   eg: if one of the areas is a form that requires ReactiveFormsModule
//> Is it possible to divide components into sub-components
//@   If a component can be divided into sub-components, you need to add a module to it
//- EG: Header component which has:
//-   - Sign up/Log in
//-   - Menu items
/// Can be transformed to the following structure
//- Header.component.ts
//-   [] components
//-     -> [] Menu Component
//-     -> [] Links Component
//-     -> index.ts

//: In a module of a parent component, you should declare those components which are DIRECTLY USED by this module
//: Ref ID001.png

//. Shared
//> Shared = Fully re-usable components of the application
//> Must NOT be an all in one module - Smae approach for others should be taken
//: Even if a module has 1000 components, if we specify ONE it will only load in one.
//: It's best practice for EACH component in shared module to have it's OWN module
//> This way, they can be a part of the Shared Module and at the same time may be seperately imported into the PageModule


//. Advantages of Single Responsibility Components
//: Eg: Button Component - Seems redundant, But..
//> As the applicatoin grows and get's more complicated, these small components become reusable without affecting the focus of the main components
//: let's say we have 4 pages, each with a button.
//: Each button has it's own string and event
//> So we just made a library out of a component and ultimately a module delivers & unpacks it
//- Button.component.ts
//-   @Input label: string;
//-   @Output() click: EventEmitter;
//-   @Output() mouseOver: EventEmitter;
//-   @Output() mouseOut: EventEmitter;
//> The more distant the component is from the endpoint of use, the more abstract it should be
//> This is why libraries use tons of callbacks and custom parameters
//> They don't have a clue ablut the final implementation!
//: It's always easier to start with feature components, If you aren't sure a new component will be re-used - Don't Drag It Into Shared

//$ Avoid creating business logic components in global shared!
//> If a page 1, 2, & 3 use the same component --> ID002.png
//> We Don't need it in our global shared module even if several use it within the same module
//> We simply make a shared section within this component --> ID003.png

