// User-define module
// type:- 
//    1. common js :-   for export:- module export ,  for import:- require("")
//    2. es module :-   for export:- export ,    for import:- import

//  use script tag with attribute type to enable es module 

// types of import and export are default and named({}) 

// while importing function we can change the name of function which we importing from default
// while importing function we can change the name of function by "fun_name as sum"  which we importing from {} or name exporting/importing

import sum from "./module1.js"
import fun from "./module2.js"
import {que as sub,que1 as sub1} from "./module3.js"

sum()
fun()
sub()
sub1()
