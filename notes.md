if we have a lot of props, instead of writing separate props, stored it in an object, and call that object as a prop. if you want to access it in the component, use with object.property name.

--->how to manipulate a css in react .
to manipulate it first we need to open a window{} with backticks, and write the condition with ${}. <span className={`stat__number ${number < 0?'stat__number--limit':''}`}>{number}</span>
