//. BEM

//: Block - Independent page component
//: Element - Composite part of the block
//: Modifier - An entity that defines the appearance of the block & elements accroding to the conditions


//> Page has a Header component & Body component
//> So we apply our styles according to the element
///| bolck__element_modifier
//@ .header__menu
//@ .header__menu_title

/// BEM is an important border between development and styles

//> In Angular, component styles have priority over global

//> Global styles should be used for things such as:
//@ Fonts & typography
//@ Base colors of interfaces
//@ Base elements - body, button, ul, a etc etc
//@ Base Layout Styles - Padding, Margin, Spacing, Flex recipes

//% By adding a reset file, we can be sure to reset styles in order to adopr styles specfic for different browsers

//. Colors
//> Primary - Elements the user can interact with
//> Secondary - Highllights the elements we want to draw attention to but cannot interact with (info elements)
//> Error - Colors for issues
//> Success - Conveys success of items
//: Better to use prmary and secondary as apposed to colors like blue yellow as they don't impose restrictions only purpose


//. Folders
//> Base - basic html elements, Files will match the elements name: a, button etc
