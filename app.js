let a = 5;

// Q1 
// let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
// console.log(exp1);
// Output = NaN

// Q2 
// let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
// console.log(exp2);
// Output = falsetest 

// Q3 
// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// console.log(exp3);
// Output = NaNresult 

// Q4
// let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// console.log(exp4);
// Output = 0

// Q5 
// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// console.log(exp5);
// Output = true

// Q6 
// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// console.log(exp6);
// Output = 11

// Q7 
// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// console.log(exp7);
// Output = 9 

// Q8
// let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
// console.log(exp8);
// Output = 1

// Q9 
// let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// console.log(exp9);
// Output = 3result

// Q10
// let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// console.log(exp10);
// Output = start 

// Q11
// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// console.log(exp11);
// Output = 20

// Q12 
// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// console.log(exp12);
// Output = result

// Q13 
// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// console.log(exp13);
// Output = falsetest

// Q14
// let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// console.log(exp14);
// Output = end 

// Q15 
// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// console.log(exp15);
// Output = NaNresult

// Q16
// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// console.log(exp16);
// Output = null

// Q17
// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// console.log(exp17);
// Output = 4

// Q18 
// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// console.log(exp18);
// Output = 0

// Q19 
// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// console.log(exp19);
// Output = foo

// Q20
// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end"+ 5 || 0;
// console.log(exp20);
// Output = end5 

// Q21 
// let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// console.log(exp21);
// Output = testfalse

// Q22 
// let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// console.log(exp22);
// Output = test

// Q23 
// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// console.log(exp23);
// Output = result

// Q24 
// let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// console.log(exp24);
// Output = 2

// Q25 
// let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// console.log(exp25);
// Output = 5

// Q26 
// let exp26 ="hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// console.log(exp26);
// Output = 12

// Q27 
// let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// console.log(exp27);
// Output = start5

// Q28 
// let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// console.log(exp28);
// Output = world

// Q29 
// let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// console.log(exp29);
// Output = NaNresult

// Q30 
// let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// console.log(exp30);
// Output = falsevalueend

// Q31 
// let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start"+ 1;
// console.log(exp31);
// Output = 3end

// Q32 
// let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// console.log(exp32);
// Output = 3

// Q33 
// let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// console.log(exp33);
// Output = end5

// Q34 
// let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// console.log(exp34);
// Output = hello20

// Q35 
// let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// console.log(exp35);
// Output = falseend

// Q36 
// let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// console.log(exp36);
// Output = 8

// Q37 
// let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// console.log(exp37);
// Output = 2test

// Q38 
// let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// console.log(exp38);
// Output = 2end

// Q39 
// let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// console.log(exp39);
// Output = 2

// Q40 
// let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// console.log(exp40);
// Output = NaN

// Q41 
// let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// console.log(exp41);
// Output = hello

// Q42 
// let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// console.log(exp42);
// Output = NaN

// Q43 
// let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// console.log(exp43);
// Output = start5

// Q44 
// let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// console.log(exp44);
// Output = value1

// Q45 
// let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// console.log(exp45);
// Output = 20

// Q46 
// let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// console.log(exp46);
// Output = test

// Q47 
// let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// console.log(exp47);
// Output = 8

// Q48 
// let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// console.log(exp48);
// Output = NaN

// Q49 
// let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// console.log(exp49);
// Output = 24

// Q50 
// let exp50 = 32 && true - ++a && "" || "true"; // for a = 5
// console.log(exp50);
// Output =  true

// Q51 
// let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// console.log(exp51);
// Output = 42

// Q52 
// let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// console.log(exp52);
// Output = NaN

// Q53 
// let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// console.log(exp53);
// Output = startend

// Q54 
// let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// console.log(exp54);
// Output = NaN

// Q55 
// let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// console.log(exp55);
// Output = startNaN 

// Q56 
// let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// console.log(exp56);
// Output = 24test

// Q57 
// let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// console.log(exp57);
// Output = value

// Q58 
// let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// console.log(exp58);
// Output = 2end3

// Q59 
// let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// console.log(exp59);
// Output = 2

// Q60 
// let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// console.log(exp60);
// Output = NaN

// Q61 
// let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// console.log(exp61);
// Output = 36result

// Q62 
// let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// console.log(exp62);
// Output = StartNaN 

// Q63 
// let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// console.log(exp63);
// Output = ValueNaN

// Q64 
// let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// console.log(exp64);
// Output = startfalse

// Q65 
// let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// console.log(exp65);
// Output = valueNaN

// Q66 
// let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// console.log(exp66);
// Output = NaNresult

// Q67 
// let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// console.log(exp67);
// Output = startNaN

// Q68 
// let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// console.log(exp68);
// Output = 12result

// Q69 
// let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// console.log(exp69);
// Output = NaN

// Q70 
// let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// console.log(exp70);
// Output = 3

// Q71 
// let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// console.log(exp71);
// Output = test16

// Q72 
// let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// console.log(exp72);
// Output = NaN

// Q73 
// let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// console.log(exp73);
// Output = NaNstart

// Q74 
// let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// console.log(exp74);
// Output = NaNstart

// Q75 
// let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// console.log(exp75);
// Output = NaN5start
