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



